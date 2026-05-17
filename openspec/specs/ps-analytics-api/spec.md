# Capability: PS Analytics API

Requirements for the analytics API endpoints that expose aggregated PetScreening and RentManager data from D1.

---

## Requirement: GET /api/analytics/dimensions endpoint

The worker SHALL expose `GET /api/analytics/dimensions` (behind auth middleware) that queries the latest snapshot in D1 and returns:
- Available dimension names and their display labels
- The list of distinct highlight labels found in `ps_highlight_snapshots` for the latest snapshot date
- The latest `snapshot_date` and `synced_at` from `sync_log`

Response shape:
```
{
  latestSnapshot: string | null,   // 'YYYY-MM-DD'
  syncedAt: string | null,         // ISO timestamp
  dimensions: Array<{
    id: string,                    // e.g. 'species', 'highlight:Breed'
    label: string,                 // e.g. 'Species', 'Flag: Breed'
    type: 'categorical' | 'temporal' | 'boolean'
  }>,
  measures: Array<{
    id: string,                    // e.g. 'count_profiles', 'avg_paw_score'
    label: string
  }>
}
```

Highlight dimensions are returned as `{ id: 'highlight:Breed', label: 'Flag: Breed', type: 'boolean' }` — one entry per distinct label in the DB.

#### Scenario: Dimensions returned
- **WHEN** `GET /api/analytics/dimensions` is called after at least one successful cron run
- **THEN** the response includes all standard dimensions plus one entry per distinct highlight label in the DB

#### Scenario: No data yet
- **WHEN** `GET /api/analytics/dimensions` is called before the first cron run
- **THEN** the response returns `latestSnapshot: null` and a standard dimensions list (no highlight entries)

---

## Requirement: POST /api/analytics/query endpoint

The worker SHALL expose `POST /api/analytics/query` (behind auth middleware) that accepts a structured query spec and returns aggregated rows from D1.

Request body:
```
{
  snapshotDate?: string,          // defaults to latest; or 'trend' for date-range mode
  groupBy: string[],              // dimension IDs from the allowlist
  measures: string[],             // measure IDs from the allowlist
  filters?: {
    species?: string,
    status?: string,
    unit_number?: string,
    tenant_status?: string,
    archived?: boolean
  },
  dateRange?: {                   // only when snapshotDate = 'trend'
    from: string,                 // 'YYYY-MM-DD'
    to: string,
    bucket: 'month' | 'day'
  }
}
```

The worker SHALL validate that all `groupBy` and `measures` values are in the server-side allowlist before constructing SQL. The SQL SHALL use only parameterized values — no user-supplied string is interpolated into the query.

Valid dimensions: `unit_name`, `tenant_status`, `species`, `kind`, `status`, `paw_score`, `paw_score_bucket`, `assistance_type`, `archived`, `shared_at_month`, `snapshot_date_month`, `has_rm_pet`, `has_gap`, and any `highlight:{label}` where label exists in the DB.

Valid measures: `count_profiles`, `count_distinct_units`, `count_distinct_tenants`, `avg_paw_score`, `avg_score`.

#### Scenario: Valid query returns rows
- **WHEN** a valid spec with `groupBy: ["species", "status"]` and `measures: ["count_profiles"]` is posted
- **THEN** the response is HTTP 200 with `{ rows: [...], snapshotDate: '...', executionMs: number }`

#### Scenario: Invalid dimension rejected
- **WHEN** `groupBy` contains a value not in the allowlist (e.g., `"owner_name"`)
- **THEN** the response is HTTP 400 with `{ error: "Unknown dimension: owner_name" }`

#### Scenario: Highlight dimension query
- **WHEN** `groupBy: ["highlight:Breed"]` is in the spec
- **THEN** the SQL joins `ps_highlight_snapshots` on the label "Breed" and groups by flagged/not-flagged; rows include a `highlight_Breed` column with values "flagged" or "not flagged"

#### Scenario: Trend query
- **WHEN** `snapshotDate: "trend"` with a `dateRange` is provided and `measures: ["count_profiles"]`
- **THEN** results are grouped by the specified `bucket` (month or day) across the date range, returning one row per time bucket per groupBy combination

#### Scenario: No data for date
- **WHEN** `snapshotDate` refers to a date with no snapshot data
- **THEN** the response is HTTP 200 with `{ rows: [], snapshotDate: '...', executionMs: number }`
