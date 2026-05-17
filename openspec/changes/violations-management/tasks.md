## 1. Spikes & Configuration

- [x] 1.1 Add `rm.propertyId` as a numeric constant to `src/config.ts` (get the value from RM)
- [ ] 1.2 Spike: verify `POST /Violations` with a `ViolationCodeID` auto-creates Stage 1 — confirmed when using `embeds=ViolationStages` that stages must be explicit (and require ViolationStageAction which can't be embedded at Violations level). Approach: POST without any embeds/stages, matching RM docs sample; verify at first real form submission.
- [x] 1.3 Spike: find RM image upload endpoint path and request format — confirmed: `POST Violations/{id}/Image`, multipart/form-data, violation must exist first
- [x] 1.4 Spike: verify `ConcurrencyID` is required when updating a ViolationStage's IsCommunicationSent — DEFERRED: no REST API endpoint exists for updating IsCommunicationSent. `POST /Violations/{id}/ViolationStages` only allows DueDate and IsActionsComplete updates. `markStagesCommunicated` is non-functional; notify workflow deferred.

## 2. Shared Backend — violations lib & cache

- [x] 2.1 Create `src/lib/rm/violations.ts` with TypeScript interfaces: `Violation`, `ViolationStage`, `ViolationCode`
- [x] 2.2 Add `getViolations(client, propertyId)` — fetches open violations with embedded ViolationStages (fields: ViolationID, TenantID, UnitID, ViolationDate, ViolationCodeID, ResolveAction, Description, IsClosed, ViolationStages[StageNumber, IsCommunicationSent, DueDate, ConcurrencyID, IsCurrentStage])
- [x] 2.3 Add `getViolationCodes(client)` — fetches all ViolationCodes (ViolationCodeID, Code, Description, ResolveAction)
- [x] 2.4 Add `createViolations(client, items[])` — POSTs array of violations to RM
- [x] 2.5 Add `markStagesCommunicated(client, stages[{stageId, concurrencyId}])` — parallel Promise.all to set IsCommunicationSent=true on each stage; returns per-stage success/failure
- [x] 2.6 Add `rm-violations` and `rm-violation-codes` to the `bustCache` call in `POST /api/cache/refresh` in `src/worker/index.ts`

## 3. Worker Routes

- [x] 3.1 Add `GET /api/violation-codes` — returns cached ViolationCode list (1-hour TTL, key `rm-violation-codes`)
- [x] 3.2 Add `GET /api/violations` — returns cached open violations with stage data (300s TTL, key `rm-violations`)
- [x] 3.3 Add `POST /api/violations` — accepts `[{tenantId, violationCodeId, violationDate, resolveAction, description?, imageId?}]`; derives unitId via lease mapping and injects propertyId from config; POSTs to RM; busts `rm-violations` cache on success
- [x] 3.4 Add `POST /api/violations/notify` — accepts `[{violationId, stageId, concurrencyId}]`; calls `markStagesCommunicated`; returns per-violation results; busts `rm-violations` cache
- [x] 3.5 Add image upload proxy endpoint — `POST /api/violations/:id/image`, accepts multipart, proxies to `Violations/{id}/Image`, returns `{ imageId }`

## 4. Frontend — Violations Shell & Routing

- [x] 4.1 Create `src/web/src/features/violations/` directory with index files
- [x] 4.2 Add "Violations" nav entry in `App.tsx` routing to `/violations/dashboard` as default
- [x] 4.3 Add routes: `/violations/dashboard`, `/violations/new`, `/violations/notify`
- [x] 4.4 Create shared `useViolations` hook — fetches `GET /api/violations`, exposes violations grouped by tenant
- [x] 4.5 Create shared `useViolationCodes` hook — fetches `GET /api/violation-codes`, exposes searchable list

## 5. Violation Entry Form

- [x] 5.1 Create `ViolationEntryPage.tsx` with tenant searchable select (current tenants from existing rm-data cache)
- [x] 5.2 Add shared violation date field defaulting to today
- [x] 5.3 Build `ViolationRow` component: violation code combobox (searchable, filter-as-you-type from `useViolationCodes`), resolve action text input, image upload control
- [x] 5.4 Wire violation code selection to auto-fill resolve action from the selected code's `ResolveAction`
- [x] 5.5 Fetch past violations' resolve action strings and surface as datalist/autocomplete suggestions on the resolve action field
- [x] 5.6 Implement image upload: on file select, POST to image proxy endpoint; store returned `imageId` in row state
- [x] 5.7 Implement "Add Another Violation" / row remove controls; enforce minimum one row
- [x] 5.8 Implement Submit: validate all rows have a code selected; POST to `POST /api/violations`; show success (reset form) or error (preserve form state with error message)

## 6. Violations Dashboard

- [x] 6.1 Create `ViolationDashboardPage.tsx` — calls `useViolations`, groups by tenant
- [x] 6.2 Build summary header: counts for total-in-violation, needs-notice, noticed-pending, escalated, flagged-for-review
- [x] 6.3 Build tenant rows table: tenant name, lot, violation count, stage badge(s), earliest due date, RM link (new tab)
- [x] 6.4 Implement multi-stage flag: detect tenants with violations at more than one distinct StageNumber; show warning badge; include in flagged count
- [x] 6.5 Apply Verdant Estate badge variants: Stage 1 uncommunicated → `secondary`; Stage 1 communicated → `pasture`; Stage 2+ → `harvest`; multi-stage flag → distinct warning treatment
- [x] 6.6 Add "Mark as Notified" button per tenant row — navigates to `/violations/notify?tenantId=X`

## 7. Bulk Notify Workflow

- [x] 7.1 Create `ViolationNotifyPage.tsx` — reads optional `tenantId` query param; loads violations from `useViolations`
- [x] 7.2 Render tenant group with all uncommunicated violations pre-selected (checkboxes); show violation date, code name, stage number per row
- [x] 7.3 Add Select All / Deselect All toggle per tenant group
- [x] 7.4 Disable confirm button when no violations selected
- [x] 7.5 Implement confirmation step: show tenant name, count, and violation code list before submitting
- [x] 7.6 On confirm: POST to `POST /api/violations/notify` with `{violationId, stageId, concurrencyId}` for each selected violation; show per-violation success/failure in UI
- [x] 7.7 On partial failure: keep failed violations selected and actionable; mark succeeded ones as done visually
