## Why

Managing violations at Rolling Acres requires three separate manual workflows today: entering new violations one-at-a-time in RM, manually tracking which tenants have open violations across stages, and marking each violation's stage as "communicated" individually even when one letter covers multiple violations for the same tenant. This change introduces a violations surface in the dashboard that handles all three workflows — entry, visibility, and notification — in a way that matches how Jess actually works.

## What Changes

- **New**: Quick violation entry form — select a tenant, add multiple violations in one session with a shared default date, search/select from 50+ violation codes (which auto-fill the resolve action), upload one photo per violation
- **New**: Violations dashboard — tenant-rollup view showing count of open violations grouped by stage, flagging tenants with violations at multiple stages simultaneously for manual review, with direct links into RM tenant records
- **New**: Bulk notify workflow — select a group of violations for a tenant (defaulting to all, with per-violation deselect), mark all their current stages as `IsCommunicationSent = true` in a single confirmed action; supports back-filling violations already mailed but not yet marked in RM

## Capabilities

### New Capabilities

- `violation-entry`: Form for creating multiple violations for one tenant in a single submission. Shared violation date, per-violation code selection (searchable, 50+ codes) with auto-populated resolve action from the code's default, overridable per violation, single image upload per violation. Submits all violations as one batch to RM.
- `violation-dashboard`: Read-only rollup view of all open violations at Rolling Acres. Violations grouped by tenant and current stage. Summary counts (needs notice, noticed/pending, escalated). Flag tenants with violations in more than one stage simultaneously. Links through to RM tenant records.
- `violation-notify`: Workflow to mark a group of violations as communicated (letter sent). Tenant-scoped selection defaulting to all open violations, with ability to deselect individual violations before confirming. Confirms before writing. Updates `IsCommunicationSent = true` on each violation's current stage via RM API.

### Modified Capabilities

_(none)_

## Impact

- **New worker routes**: `GET /api/violations`, `GET /api/violation-codes`, `POST /api/violations`, `POST /api/violations/notify`
- **New lib module**: `src/lib/rm/violations.ts` — fetch violations (with embedded current stage), fetch violation codes, create violations, batch-update stage communication status
- **New frontend feature**: `src/web/src/features/violations/` — entry form, dashboard page, notify workflow
- **Cache**: violations and violation-codes responses should be short-lived cached; `bustCache` must be extended to include the new violation cache keys
- **No D1 changes** — violations data lives in RM; no local storage needed
- **Image upload**: single image per violation via RM's `POST Images` → `ImageID` field on `ViolationModel`
- **No PropertyID selection** — Rolling Acres is a single-property deployment; PropertyID is a fixed config value
