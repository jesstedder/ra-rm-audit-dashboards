## 1. PetScreening Client Library

- [x] 1.1 Create `src/lib/petscreening/client.ts` — `PsClient` class with session auth: GET landing page, parse `<meta name="csrf-token">`, POST `/api/core/v1/session` with credentials + CSRF header, carry `_ps_session` cookie; User-Agent `Mozilla/5.0 (compatible; RollingAcresBot/1.0)`
- [x] 1.2 Create `src/lib/petscreening/pets.ts` — `getAllPsProfiles(env)` function: paginate `GET /web_api/v1/property_managers/{PMID}/pet_profiles?q[with_status_for_manager]=all&q[sorted_by]=shared_at&page={n}` until page is partial; return `PsProfile[]`
- [x] 1.3 Define `PsProfile` type: `{ id, name, species, kind, status, pawScore, publicToken, ownerName, unitAddress, unitNumber: string | null }` where `unitNumber` is the leading integer extracted from `address_1`

## 2. Cache Layer

- [x] 2.1 Create `src/lib/cache.ts` — `getCached<T>(key)`, `setCached<T>(key, data, ttlSeconds)`, `bustCache(...keys)` using `caches.default` with synthetic URLs `https://cache.internal/{key}` and `Cache-Control: max-age={ttl}`

## 3. Worker — Shared Data Fetch + New Routes

- [x] 3.1 Add `PETSCREENING_USERNAME`, `PETSCREENING_PASSWORD`, `PETSCREENING_PMID` to the `Env` interface in `src/worker/index.ts`
- [x] 3.2 Create `src/lib/fetchAllData.ts` — `fetchAllData(env)` that returns `{ psProfiles, rmPets, rmUnits, rmTenants }` using cache (5-min TTL); fetches PS profiles and RM data in parallel on cache miss; add `UnitID` to `Tenant` interface if RM exposes it (check live response), otherwise use lease data
- [x] 3.3 Add `GET /api/pets/registration-check` route — call `fetchAllData`, join by unit number, return `RegistrationCheckRow[]` per spec
- [x] 3.4 Add `POST /api/cache/refresh` route — call `bustCache("rm-data", "ps-profiles")`, return `{ ok: true }`
- [x] 3.5 Update `GET /api/audits/pet-fees` — use `fetchAllData` (cached RM data) and join PS profiles onto results by `unitName` match; add `psProfile` field to matching rows

## 4. Pet Registration Check Page

- [x] 4.1 Create `src/web/src/features/petscreening/usePetRegistration.ts` — fetch hook for `/api/pets/registration-check` with `data / loading / error` state and a `reload` callback
- [x] 4.2 Create `src/web/src/features/petscreening/PetRegistrationPage.tsx` — table with columns: Unit (RM link), Tenant (RM link), PS Pets (name + paw score badge + PS link), RM Pets, Status chip (Gap/Matched/No PS); filter panel with "Gaps only" toggle
- [x] 4.3 Add paw score badge component/helper — harvest variant for score 1–2, pasture for 3–5

## 5. Pet Fee Audit — PS Column Enhancement

- [x] 5.1 Update `PetFeeAuditResult` type in `src/web/src/features/audits/usePetFeeAudit.ts` to include optional `psProfile?: { publicToken: string; pawScore: number; petName: string; psLink: string }`
- [x] 5.2 Add "PetScreening" column to `PetFeeAuditPage.tsx` table — shows PS chip (pet name + paw score badge + external link icon) when `psProfile` present, "—" otherwise; link opens PS profile in new tab

## 6. Sidebar — Refresh Button + New Nav Item

- [x] 6.1 Create `src/web/src/components/RefreshButton.tsx` — button that POSTs `/api/cache/refresh`, triggers reload callback, shows last-refreshed timestamp; displays loading state during refresh; shows inline error on failure
- [x] 6.2 Add `RefreshButton` to the sidebar footer in `App.tsx`; wire reload callbacks from active page hooks
- [x] 6.3 Add "Pet Registration Check" to `navItems` in `App.tsx` under Audits; add `page === 'pet-registration-check'` branch to render `PetRegistrationPage`

## 7. Config + Environment

- [x] 7.1 Add `PETSCREENING_USERNAME` and `PETSCREENING_PASSWORD` comments to `wrangler.toml` (alongside existing RM credential comments)
- [x] 7.2 Verify `.dev.vars` / `.env` has both vars set; confirm they are gitignored
