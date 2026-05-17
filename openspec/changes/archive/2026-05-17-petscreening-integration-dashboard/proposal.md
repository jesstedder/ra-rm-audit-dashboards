## Why

The native PetScreening ↔ RentManager integration has a known bug that silently drops pet records — pets registered in PetScreening don't appear in RentManager, causing missed pet fees and untracked animals. We need a cross-reference tool to surface these gaps without waiting on the vendor to fix the integration.

## What Changes

- Add PetScreening API client (session-based auth) to the worker backend
- Add a shared cache layer (Cloudflare Cache API, 5-minute TTL) for both PS and RM data fetches
- Add a shared refresh button that busts both caches and reloads data
- **New page**: Pet Registration Check — per-unit view comparing PS-registered pets to RM pet records, with deep links to both systems
- **Enhanced**: Pet Fee Audit page gains a PS chip column showing when a PS registration exists for the unit, with paw score and link to the PS profile

## Capabilities

### New Capabilities

- `petscreening-client`: PetScreening web API client — session auth (CSRF + cookie), paginated pet profile fetch, parsed unit number from address
- `data-cache`: Cloudflare Cache API wrapper with TTL, bust-on-demand, and a `POST /api/cache/refresh` endpoint + frontend refresh button
- `pet-registration-check`: New dashboard page cross-referencing PS profiles against RM pets per unit, with gap detection and deep links

### Modified Capabilities

- `pet-fee-audit-endpoint`: Endpoint now fetches PS profiles and joins them onto results; `PetFeeAuditResult` gains optional `psProfile` field
- `pet-fee-audit-ui`: Audit table gains a PS chip column showing pet name, paw score, and link to PS profile when a registration exists

## Impact

- **New files**: `src/lib/petscreening/client.ts`, `src/lib/petscreening/pets.ts`, `src/lib/cache.ts`, `src/web/src/features/petscreening/PetRegistrationPage.tsx`, `src/web/src/features/petscreening/usePetRegistration.ts`, `src/web/src/components/RefreshButton.tsx`
- **Modified files**: `src/worker/index.ts` (new routes, new Env vars), `src/lib/rm/audits/pet-fee.ts`, `src/web/src/features/audits/usePetFeeAudit.ts`, `src/web/src/features/audits/PetFeeAuditPage.tsx`, `src/web/src/App.tsx`
- **New env vars**: `PETSCREENING_USERNAME`, `PETSCREENING_PASSWORD` (existing `PETSCREENER_PMID` reused)
- **No new Cloudflare bindings** needed — uses `caches.default` (built-in)
- **No breaking changes** to existing API contracts
