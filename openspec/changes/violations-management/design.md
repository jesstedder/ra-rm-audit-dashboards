## Context

The dashboard currently has no violations surface. Violations live entirely in RentManager; this change adds read, write, and status-update capabilities through three coordinated features: quick entry, dashboard rollup, and bulk notification marking.

RentManager's violations model: a `Violation` record belongs to a tenant/unit, has a `ViolationCodeID` (which carries a default `ResolveAction` and pre-configured stage workflow), one optional `ImageID`, and one or more `ViolationStage` records. The current stage's `IsCommunicationSent` flag is the notification status RM tracks. RM's UI enforces one letter per violation; our API calls can set that flag on multiple stages in sequence, which is how we implement the bulk-notify feature.

Key unknowns confirmed before implementation begins:
- Whether `POST /Violations` with a `ViolationCodeID` auto-creates Stage 1 from `ViolationCode.DefaultViolationStages` (likely yes — must verify against live API before the entry task is built)
- Required vs. optional fields on create (docs don't mark required fields; verify via live API errors)

## Goals / Non-Goals

**Goals:**
- Create violations for one tenant per session, multiple violations batched in one RM POST
- Search/select from 50+ violation codes with resolve action auto-fill
- Upload one image per violation at creation time
- Show a tenant-level rollup of all open violations with stage grouping and multi-stage flagging
- Mark a selected group of violations as communicated (IsCommunicationSent=true) in one confirmed action
- Support back-filling already-mailed violations that are unmarked in RM

**Non-Goals:**
- Multi-property support (single property, PropertyID is a fixed config constant)
- Generating or printing the actual violation letter (done in RM)
- Automatically triggering notification from RM's letter send event (future)
- Editing or closing/resolving violations
- Stage escalation management

## Decisions

### 1. PropertyID as config constant, not a runtime lookup

**Decision**: Add `rm.propertyId` to `src/config.ts` as a fixed numeric value.

**Rationale**: Rolling Acres is a single-property deployment. A runtime lookup adds an API call and complexity with no benefit. Worker env bindings are for secrets; a non-secret property ID belongs in config alongside `rm.webUrl`.

**Alternative considered**: Pass as a Worker env binding. Rejected — it's not a secret, it's static configuration.

---

### 2. Violation codes fetched and short-lived cached, not embedded in the form bundle

**Decision**: `GET /api/violation-codes` fetches from RM and caches for 1 hour. The entry form calls this endpoint on mount.

**Rationale**: 50+ codes don't change often but are too many to hardcode. Caching at the worker avoids repeated RM auth overhead on every form open. 1-hour TTL is long enough to avoid chatter; codes can be busted via the existing cache refresh button if needed.

**Alternative considered**: Cache codes in frontend state for the session. Acceptable but means the first user of a cold Worker still waits; worker-side cache is cheaper for all users.

**Cache key**: `rm-violation-codes` — added to `bustCache` list alongside existing keys.

---

### 3. ResolveAction autocomplete sourced from ViolationCode defaults + past violation history

**Decision**: When a code is selected, pre-fill `ResolveAction` from `ViolationCode.ResolveAction`. The frontend fetches past violations' resolve actions at page load (or lazily) and de-duplicates them as autocomplete suggestions. No separate storage.

**Rationale**: ViolationCode already carries the canonical default. Past violations in RM are the natural source for Jess's own customized phrasing. No D1 table needed.

---

### 4. Image upload: create violation first, then POST image to violation-specific endpoint

**Decision**: RM's image upload endpoint is `POST Violations/{id}/Image` — it requires the violation to exist first. On form submit: (1) create all violations as a batch → get ViolationIDs back; (2) in parallel, POST each image to `Violations/{ViolationID}/Image`. The image upload is a follow-up step, not a prerequisite.

**Rationale**: RM's API design ties the image to a specific violation ID. There is no pre-upload endpoint that returns a standalone ImageID to include in the violation create body.

**Risk**: If violation creation succeeds but image upload fails, the violation exists but has no photo. Mitigation: show the image upload failure per-violation in the UI, with a way to retry. The violation itself is not rolled back.

---

### 5. Violations data: no worker-level cache for mutations, short-lived cache for reads

**Decision**: `GET /api/violations` (dashboard data) is cached with a short TTL (same 300s as other data). POST and notify endpoints bypass cache and bust `rm-violations` key on success.

**Rationale**: Dashboard data is read-heavy and slow to fetch (needs embedded stages). Entry and notify are infrequent writes that need to be reflected immediately on next dashboard load.

---

### 6. Bulk notify: N sequential PATCH calls, not a single batch endpoint

**Decision**: For each selected violation's current stage, issue a `POST /ViolationStages` (save) call with `IsCommunicationSent: true`. These run in parallel (Promise.all), not sequentially.

**Rationale**: RM's API has no bulk-update-stages endpoint. Parallel calls minimize wall-clock time. If one fails, the worker returns a partial-success response so the user knows which violations were and weren't marked.

**Alternative considered**: Sequential with early abort on first error. Rejected — a network hiccup on one shouldn't block the others, and partial success with clear reporting is more useful than all-or-nothing.

---

### 7. Frontend routing: violations as a new top-level nav section with sub-pages

**Decision**: Add a "Violations" nav entry in `App.tsx` with three views: `/violations/dashboard`, `/violations/new`, `/violations/notify`. The notify view is reachable from the dashboard (select tenant → mark notified).

**Rationale**: The three surfaces share a nav context but have distinct enough UX that they warrant separate pages rather than tabs. Dashboard → notify is the natural flow so the dashboard should surface a "Mark as Notified" action per tenant row.

## Risks / Trade-offs

**Stage auto-creation not confirmed** → If RM does NOT auto-create Stage 1 on violation POST, the entry form will create violations with no stage, breaking the dashboard and notify features. Mitigation: verify this against the live API as the very first implementation task; if stages must be created explicitly, add a follow-up POST to `ViolationStages` per violation after the batch create.

**ConcurrencyID required for stage updates** → Updating a stage with `IsCommunicationSent: true` likely requires the current `ConcurrencyID` (it's the concurrency key). The dashboard fetch must include `ConcurrencyID` in the embedded stage fields, or the notify call will fail. Mitigation: always fetch stages with `ConcurrencyID` included in field list.

**50+ violation codes search UX** → A plain `<select>` is unusable at this count. A searchable combobox (filter-as-you-type) is required. Mitigation: implement as a controlled combobox using native `<input>` + filtered dropdown list; no new library needed.

**Image upload endpoint unknown** → The RM image upload endpoint path and request format (multipart? base64?) is not fully documented. Mitigation: spike this against the live API early, before the entry form task is built. If upload proves unreliable, the image field can be made optional and deferred to a follow-up.

## Open Questions

1. **PropertyID value** — What is the numeric `PropertyID` for Rolling Acres in RM? Needed in `src/config.ts` before violations can be created or filtered.
2. **Image upload endpoint** — What is the exact path and request format for `POST Images` in RM? Needs a spike.
3. **Stage auto-creation** — Does `POST /Violations` with a `ViolationCodeID` automatically create Stage 1? Needs verification against live API.
4. **UnitID on entry** — Tenant → Unit mapping exists via `buildTenantUnitMap` (leases). Is it safe to assume one active unit per current tenant for the purposes of the violation POST?
