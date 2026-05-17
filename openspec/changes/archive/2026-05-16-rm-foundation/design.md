## Context

No code exists yet. This change establishes the entire project from scratch. The RentManager WAPI12 is a REST API at `https://rollinga.api.rentmanager.com` authenticated via `X-RM12Api-ApiToken` header. Rate limit is 500 req/hour. The library will be consumed by local `tsx` scripts now and by a Hono/Cloudflare Workers API later — so it must never use Node.js-specific APIs.

## Goals / Non-Goals

**Goals:**
- Project scaffold that supports both local scripts (tsx) and future Workers deployment
- Thin, composable library modules — each covering one RM resource area
- Working pet-fee audit script with human-readable console output
- Pure `fetch()` throughout (no axios, node-fetch, or node: imports)

**Non-Goals:**
- Hono Worker or React frontend (next change)
- Write/mutation endpoints
- Caching or persistent storage
- Authentication flows (token is static, in `.env`)

## Decisions

### Decision: Module-per-resource-area, not a class-based SDK

Each resource area (`charges`, `pets`, `tenants`) is a module of plain async functions that accept a `RMClient` instance. No class hierarchy, no method chaining.

**Why:** Functions are easier to tree-shake, test, and compose. The audit scripts need to mix-and-match calls across resources. A class SDK would add ceremony without benefit for this use case.

**Alternative considered:** Single `RentManagerClient` class with methods grouped by resource. Rejected because it couples unrelated concerns and makes Workers bundling harder.

---

### Decision: `RMClient` is a thin fetch wrapper, not a full HTTP client library

`client.ts` exports a `createClient(token)` function that returns a typed wrapper around `fetch()`. It handles: auth header injection, base URL, pagination (auto-page via `pagesize`/`pagenumber`), and error normalization.

**Why:** Keeps the bundle small (Workers has size limits). No runtime dependency on axios or similar.

---

### Decision: Pagination handled inside library, not exposed to callers

Functions like `getAllPets()` internally loop pages until `X-Total-Results` is exhausted. Callers always get a complete array.

**Why:** All current audit queries need full dataset cross-referencing. Exposing pagination would leak implementation detail into every script. Can be revisited if large datasets require streaming.

**Risk:** A resource with tens of thousands of records could hit rate limits or be slow. Mitigation: add `pageSize: 1000` (max) and log progress for large fetches.

---

### Decision: ChargeType lookup by name match, not hardcoded ID

`getChargeTypes()` returns all charge types; `findPetFeeChargeTypes()` filters client-side for names matching "Pet Fee" or "PF" (case-insensitive).

**Why:** ChargeTypeIDs are environment-specific (they differ between RM instances). Name-matching is fragile but unavoidable without a config file. Logging the matched types on each run makes the match transparent.

**Alternative considered:** Config file with hardcoded IDs. Rejected for the initial script — adds setup friction. Can add later if name matching proves unreliable.

---

### Decision: Scripts run via `tsx` with `dotenv` for `.env` loading

`scripts/pet-fee-audit.ts` uses `import 'dotenv/config'` at the top and runs via `npx tsx scripts/pet-fee-audit.ts`.

**Why:** Zero build step for scripts. The Workers deployment will use Wrangler's `.dev.vars` for secrets — no conflict.

## Risks / Trade-offs

- **Name matching for "Pet Fee"** → may miss variations like "Pet Rent". Mitigation: script logs which charge types matched so it's easy to spot misses.
- **Rate limit on large datasets** → 500 req/hour with pagination. Mitigation: `pageSize=1000` keeps calls low; audit scripts run infrequently.
- **No types for RM API responses** → hand-rolling interfaces from docs. Mitigation: mark fields as optional where docs are ambiguous; validate with live data on first run.
