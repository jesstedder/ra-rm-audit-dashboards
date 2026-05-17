## Context

The Rolling Acres dashboard is a Cloudflare Worker (Hono) serving a React SPA. It already integrates with the RentManager REST API via a typed client. PetScreening exposes no public API — it uses a session-based internal web API (`rolling-acres.petscreening.com/web_api/v1/`) requiring CSRF-token + cookie auth. Both data sources are slow (full collection fetches), so caching is required. The worker is stateless across requests; in-memory caches don't survive between isolate invocations.

## Goals / Non-Goals

**Goals:**
- Surface PS ↔ RM pet record gaps on a new "Pet Registration Check" page
- Annotate the existing Pet Fee Audit table with PS registration status per row
- Cache PS and RM data for 5 minutes with a manual refresh option
- Keep PS credentials server-side only

**Non-Goals:**
- Writing data back to either system (future work)
- Real-time webhooks or push notifications
- Using PetScreening's partner API (`api.petscreening.com`) — it requires separate onboarding we don't have
- Syncing all RM + PS data (only the fields needed for gap detection)

## Decisions

### D1: Cloudflare Cache API over Workers KV

**Decision:** Use `caches.default` (Cloudflare Cache API) for the 5-minute data cache.

**Rationale:** No new bindings or Cloudflare dashboard config needed. Works with a synthetic URL scheme (`https://cache.internal/rm-data`, `https://cache.internal/ps-profiles`). `Cache-Control: max-age=300` handles TTL natively. Cache can be busted explicitly with `cache.delete(request)`.

**Alternative considered:** Workers KV — more reliable across all edge nodes globally but requires creating a namespace, adding a binding to `wrangler.toml`, and provisioning via Cloudflare dashboard. Overkill for an internal single-property tool.

**Tradeoff:** Cache API is per-datacenter — a request hitting a different PoP after refresh may see stale data briefly. Acceptable for a property management dashboard.

---

### D2: Session re-auth on each worker request (not cached session)

**Decision:** Perform the full PS session auth flow (GET page → parse CSRF → POST session) on each worker request that needs PS data, unless the data itself is cached.

**Rationale:** The PS session cookie is `httpOnly` and can't be stored in the Cache API (which stores HTTP Responses, not arbitrary cookies). Workers KV could store the cookie string, but adds a binding dependency. Since PS data is cached for 5 minutes, the auth flow only runs once per 5-minute window per datacenter.

**Alternative considered:** Store the `_ps_session` cookie in Workers KV — eliminates one auth round-trip per cache miss, but adds the KV binding requirement and cookie expiry management complexity.

---

### D3: Unit number matching via street address parse

**Decision:** Join PS profiles to RM units by extracting the leading integer from PS `address_1` (e.g., `"12 Citation Cir"` → `"12"`) and comparing to RM `Unit.Name`.

**Rationale:** Per Jess: "the street number matches the unit number." This is a stable, low-complexity match. No fuzzy matching needed.

**Edge case:** PS profiles with no associated unit (e.g., applicants not yet assigned) are included in PS-only output with no RM match attempted.

---

### D4: Shared data fetch function used by both endpoints

**Decision:** Extract a `fetchAllData(env)` function that fetches (or returns cached) PS profiles + RM pets + RM units + RM tenants as a single bundle. Both `/api/audits/pet-fees` and `/api/pets/registration-check` call this function.

**Rationale:** Avoids duplicate cache keys, duplicate auth flows, and inconsistent join logic. Both endpoints see the same snapshot.

---

### D5: Tenant → Unit mapping via RM Tenants embed

**Decision:** Fetch `/Tenants` with an embed or filter to include `UnitID`. If the RM API doesn't expose `UnitID` on the base Tenant entity, fetch `/Leases` or use the existing charge → UnitID path already used in the pet-fee audit.

**Rationale:** The pet-fee audit already fetches `UnitID` via `RecurringCharge.UnitID`. For the new registration check page, we need the same mapping but for all tenants (not just those with pet fee charges). We'll add `UnitID` to the `Tenant` interface and request it via RM's `fields` or `embeds` parameter.

## Risks / Trade-offs

- **PS API is internal/unofficial** → PetScreening could change their web API without notice. Mitigation: pin to the discovered endpoints; add clear error handling with descriptive messages if endpoints 404.
- **CSRF flow brittleness** → The CSRF token is parsed from HTML; a markup change could break it. Mitigation: fail loudly with a descriptive error ("Could not extract CSRF token") rather than silently.
- **Cache miss on first load** → First request after deploy or cache bust hits both RM and PS APIs synchronously, which may be slow (3–5s). Mitigation: frontend shows skeleton loaders; acceptable for internal tool.
- **Per-datacenter cache** → Cache bust via button may not propagate to all PoPs. Mitigation: 5-minute TTL ensures eventual consistency; internal tool, not a correctness concern.
- **PS credentials in env** → `PETSCREENING_USERNAME` / `PETSCREENING_PASSWORD` are in `.env` / `.dev.vars`. Mitigation: add to `.gitignore` check; document that prod secrets go via `wrangler secret put`.

## Migration Plan

1. Add new env vars to `.dev.vars` locally; add to Cloudflare Worker secrets via dashboard for prod
2. Deploy updated worker (additive — no existing routes changed until pet-fee endpoint is updated)
3. Test Pet Registration Check page in isolation first
4. Update pet-fee audit endpoint last (modifies existing contract by adding optional field)

## Open Questions

- Does RM's `/Tenants` endpoint expose `UnitID` directly, or do we need `/Leases`? → Resolve during implementation by inspecting a live response.
- Should the refresh button appear globally (sidebar footer) or per-page? → Start with sidebar footer; move to per-page if pages diverge in caching needs.
