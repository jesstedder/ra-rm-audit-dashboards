## Why

PetScreening's built-in reporting is too limited to answer the aggregate questions Rolling Acres needs — how many pets are flagged for breed issues, which units still have incomplete screenings, how the population has shifted over time. We want to own the data and build purpose-built analytics on top of it.

## What Changes

- Add a Cloudflare D1 database (`ps-analytics`) that stores daily snapshots of all PS pet profiles and RM tenant/pet/unit data
- Add a scheduled Cron Worker that runs daily at 8am UTC, fetches full data from both APIs, and upserts into D1
- Expand the PS profile ETL to capture all available fields: `score`, `shared_at`, `created_at`, `assistance_type`, `archived`, `archive_reason`, and all `screening_info` subfields
- Normalize `screening_info.highlights` into a separate table so each flag label is a queryable dimension
- Add `GET /api/analytics/dimensions` and `POST /api/analytics/query` endpoints — the query endpoint accepts a structured spec (dimensions, measures, filters, date range) and translates it to safe parameterized SQL; no raw SQL ever reaches D1 from user input
- Add an "Analytics" page to the dashboard with a view builder UI: choose groupBy dimensions (including per-highlight flag toggles), choose measures (counts, averages), apply filters, and toggle between point-in-time and trend-over-time modes
- Trend mode adds a time axis (snapshot month or submission month), renders a chart above the result table

## Capabilities

### New Capabilities
- `ps-analytics-etl`: Daily cron ETL pipeline — fetches PS + RM data, upserts into D1 snapshot tables, writes sync_log
- `ps-analytics-api`: Analytics query API — dimensions endpoint and structured query endpoint with safe SQL generation
- `ps-analytics-ui`: View builder dashboard page — dimension/measure picker, filters, result table, trend chart

### Modified Capabilities
- `petscreening-client`: ETL requires additional fields from the PS API beyond what the current `getAllPsProfiles` returns (score, shared_at, created_at, assistance_type, archived, archive_reason, missing_required_fields, full screening_info)

## Impact

- **New infrastructure**: Cloudflare D1 database (requires `wrangler d1 create ps-analytics` + adding binding to `wrangler.toml`)
- **New Worker binding**: `PS_ANALYTICS_DB` (D1) added to `Env` interface
- **wrangler.toml**: New `[[d1_databases]]` binding and `[triggers] crons` entry
- **src/lib/petscreening/pets.ts**: Extend `PsProfile` type and `getAllPsProfiles` return value
- **src/worker/index.ts**: New analytics route handlers, scheduled event handler
- **src/web/**: New Analytics page, hook, and route in sidebar nav
- **Dependencies**: Possibly a lightweight chart library for trend view (prefer SVG-based with no heavy deps)
