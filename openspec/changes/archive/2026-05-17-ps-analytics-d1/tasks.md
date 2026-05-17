## 1. Infrastructure Prerequisites (manual steps)

- [x] 1.1 Run `wrangler d1 create ps-analytics` and copy the returned database ID
- [x] 1.2 Add `[[d1_databases]]` binding to `wrangler.toml` with name `PS_ANALYTICS_DB` and the database ID from step 1.1
- [x] 1.3 Add `[triggers] crons = ["0 8 * * *"]` to `wrangler.toml`

## 2. D1 Schema Migration

- [x] 2.1 Create `migrations/0001_analytics_schema.sql` with CREATE TABLE statements for `sync_log`, `ps_profile_snapshots`, `ps_highlight_snapshots`, `ps_missing_fields_snapshots`, and `rm_snapshots` (with PRIMARY KEY and indexes as specified in the ETL spec)
- [x] 2.2 Run `wrangler d1 execute ps-analytics --local --file=migrations/0001_analytics_schema.sql` to apply migration locally

## 3. PetScreening Client — Extended Profile Type

- [x] 3.1 Extend `PsProfile` interface in `src/lib/petscreening/pets.ts` with new fields: `score`, `sharedAt`, `createdAt`, `assistanceType`, `archived`, `archiveReason`, `highlights`, `missingRequiredFields`
- [x] 3.2 Update `getAllPsProfiles` to map all new fields from the raw API response (score from `screening_info.score`, sharedAt from `property_manager.shared_at`, highlights from `screening_info.highlights ?? []`, etc.)
- [x] 3.3 Verify existing usages of `PsProfile` in the worker and registration-check handler still type-check (new fields are additions, not changes)

## 4. ETL Core Logic

- [x] 4.1 Create `src/lib/analytics/etl.ts` — export `runAnalyticsEtl(env, db: D1Database): Promise<void>` that orchestrates the full sync
- [x] 4.2 In `runAnalyticsEtl`: compute `snapshot_date` as today's UTC date string, fetch all PS profiles via `getAllPsProfiles`, upsert into `ps_profile_snapshots` using `INSERT OR REPLACE`
- [x] 4.3 For each profile, upsert highlight rows into `ps_highlight_snapshots` and missing-field rows into `ps_missing_fields_snapshots`
- [x] 4.4 Fetch RM units, tenants, and pets; upsert into `rm_snapshots` (one row per unit-tenant-pet combination; use NULL for missing tenant_id or pet_id on units with no tenant/pet)
- [x] 4.5 Write `sync_log` row with counts and `status = 'ok'` on success, or `status = 'error'` with error message on failure (wrap entire ETL in try/catch)
- [x] 4.6 Call `bustCache('rm-data', 'ps-profiles', 'pet-fee-audit')` at end of successful ETL run

## 5. Worker — Scheduled Handler and D1 Binding

- [x] 5.1 Add `PS_ANALYTICS_DB: D1Database` to the `Env` interface in `src/worker/index.ts`
- [x] 5.2 Add a `scheduled` export handler to the worker that calls `runAnalyticsEtl(env, env.PS_ANALYTICS_DB)` (Cloudflare Workers scheduled event pattern)
- [x] 5.3 Add `PS_ANALYTICS_DB` to `.dev.vars` as a placeholder comment (D1 bindings in local dev require `wrangler d1 execute --local` to work; document this)

## 6. Analytics API — Dimensions Endpoint

- [x] 6.1 Create `src/lib/analytics/dimensions.ts` — define the static allowlist of dimension configs (id, label, type) and measure configs
- [x] 6.2 Add `GET /api/analytics/dimensions` route in `src/worker/index.ts` — queries D1 for distinct highlight labels from latest snapshot and merges with static allowlist; returns full dimensions + measures response shape
- [x] 6.3 Query `sync_log` for latest successful snapshot date and include `latestSnapshot` and `syncedAt` in the response

## 7. Analytics API — Query Endpoint

- [x] 7.1 Create `src/lib/analytics/query-builder.ts` — export `buildAnalyticsQuery(spec, highlightLabels: string[]): { sql: string; params: unknown[] }` that validates the spec against the allowlist and constructs a parameterized SQL query
- [x] 7.2 Handle the `highlight:{label}` dimension in the query builder: LEFT JOIN `ps_highlight_snapshots` on the specific label, GROUP BY a CASE expression (`'flagged'` / `'not flagged'`)
- [x] 7.3 Handle trend mode in the query builder: when `snapshotDate = 'trend'`, add `WHERE snapshot_date BETWEEN ? AND ?` and GROUP BY the date-truncated bucket (month: `strftime('%Y-%m', snapshot_date)`)
- [x] 7.4 Add `POST /api/analytics/query` route in `src/worker/index.ts` — parse body, call `buildAnalyticsQuery`, execute against D1, return `{ rows, snapshotDate, executionMs }`
- [x] 7.5 Return HTTP 400 with `{ error: "Unknown dimension: ..." }` for any groupBy or measure value not in the allowlist

## 8. Analytics UI — Hook and Page Scaffold

- [x] 8.1 Create `src/web/src/features/analytics/useAnalyticsDimensions.ts` — fetches `GET /api/analytics/dimensions` on mount, returns `{ dimensions, measures, latestSnapshot, syncedAt, loading, error }`
- [x] 8.2 Create `src/web/src/features/analytics/useAnalyticsQuery.ts` — accepts a query spec, fetches `POST /api/analytics/query` when spec changes (debounced 300ms), returns `{ rows, columns, snapshotDate, loading, error }`
- [x] 8.3 Create `src/web/src/features/analytics/AnalyticsPage.tsx` scaffold with the four-panel layout (Dimensions, Measures, Filters, Results) using Verdant Estate styling
- [x] 8.4 Add "Analytics" route and sidebar nav entry in the appropriate location

## 9. Analytics UI — Dimension and Measure Pickers

- [x] 9.1 Implement the Dimensions panel: grouped checkboxes (Pet Profile, Time, RentManager, Screening Flags sections), driven by the dimensions API response
- [x] 9.2 Implement the Measures panel: checkboxes for count_profiles, count_distinct_units, count_distinct_tenants, avg_paw_score, avg_score
- [x] 9.3 Wire dimension/measure checkbox state into the query spec passed to `useAnalyticsQuery`

## 10. Analytics UI — Filters Bar

- [x] 10.1 Implement snapshot date dropdown populated from `sync_log` dates (query via a new `GET /api/analytics/snapshots` endpoint or include dates in the dimensions response)
- [x] 10.2 Implement species, status dropdowns and unit text input
- [x] 10.3 Wire filter state into the query spec; auto-requery on filter change (debounced 300ms)

## 11. Analytics UI — Result Table

- [x] 11.1 Render query results in a TanStack Table; derive column definitions from the `columns` array in the query response
- [x] 11.2 Show row count and queried snapshot date above the table; show loading skeleton during in-flight queries
- [x] 11.3 Show "No data found for the selected filters" empty state

## 12. Analytics UI — Trend Mode

- [x] 12.1 Add mode toggle "Point in time" / "Trend over time" above the filters bar
- [x] 12.2 In trend mode: replace snapshot date picker with date-range inputs (from/to) and a bucket selector (Month / Day)
- [x] 12.3 Create `src/web/src/features/analytics/TrendChart.tsx` — SVG bar chart component accepting `{ rows, timeBucketKey, seriesKeys, valueKey }` props; renders one bar group per time bucket, up to 6 series (extras collapsed to "Other"); uses Verdant Estate palette
- [x] 12.4 Render `TrendChart` above the result table when trend mode is active and rows exist
- [x] 12.5 Show "Only one snapshot available — run the cron daily to build trend history" note when trend data spans only one date

## 13. Verification

- [x] 13.1 Run `wrangler d1 execute ps-analytics --local --command "SELECT COUNT(*) FROM ps_profile_snapshots"` after a manual ETL trigger to confirm rows are written
- [x] 13.2 Test `POST /api/analytics/query` with `groupBy: ["species"]` and `measures: ["count_profiles"]` — confirm correct counts matching the 215-profile total
- [x] 13.3 Test `groupBy: ["highlight:Breed"]` — confirm flagged/not-flagged counts match the spike results (55 profiles with Breed flag)
- [x] 13.4 Test invalid dimension rejection — confirm HTTP 400 response
- [ ] 13.5 Navigate to Analytics page in dev, select Species + Status dimensions, confirm result table renders correctly
- [ ] 13.6 Enable trend mode, confirm chart renders (may require two manual ETL runs or seeding two snapshot dates for testing)
