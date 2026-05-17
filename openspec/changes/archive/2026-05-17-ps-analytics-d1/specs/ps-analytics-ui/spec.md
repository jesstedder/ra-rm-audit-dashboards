## ADDED Requirements

### Requirement: Analytics page in sidebar navigation

The dashboard SHALL include an "Analytics" page accessible from the sidebar navigation, listed under the Pets section (or as a top-level entry if no Pets section exists). The page SHALL be implemented as `src/web/src/features/analytics/AnalyticsPage.tsx` with a corresponding route in the router.

#### Scenario: Navigation item present
- **WHEN** the user loads the dashboard
- **THEN** "Analytics" appears in the sidebar navigation and clicking it renders the Analytics page

---

### Requirement: View builder layout

The Analytics page SHALL render a view builder with four panels: Dimensions, Measures, Filters, and Results. The page SHALL fetch available dimensions from `GET /api/analytics/dimensions` on mount and use those to populate the picker controls.

Layout (desktop):
```
[ Dimensions panel ]  [ Measures panel ]
[ Filters bar (full width)             ]
[ Result table + optional chart        ]
```

The Dimensions panel SHALL show checkboxes grouped by category:
- **Pet Profile**: species, kind, status, paw_score, paw_score_bucket, assistance_type, archived
- **Time**: shared_at_month, snapshot_date_month
- **RentManager**: unit_name, tenant_status, has_rm_pet, has_gap
- **Screening Flags**: one checkbox per highlight label returned by the dimensions endpoint (e.g., "Flag: Breed", "Flag: Weight")

The Measures panel SHALL show checkboxes for: count_profiles, count_distinct_units, count_distinct_tenants, avg_paw_score, avg_score.

#### Scenario: Dimensions loaded from API
- **WHEN** the page mounts and the dimensions endpoint returns highlight labels
- **THEN** the Screening Flags section shows one checkbox per label; new labels added via future cron runs appear without code changes

#### Scenario: No dimensions selected
- **WHEN** no groupBy dimension is checked
- **THEN** the query runs with no GROUP BY and returns a single summary row of totals

---

### Requirement: Filters bar

The filters bar SHALL include:
- **Snapshot date**: a dropdown defaulting to "Latest" that lists available snapshot dates from `sync_log`; selecting a date runs the query against that day's data
- **Species**: dropdown (All / Dog / Cat / other values from data)
- **Status**: dropdown (All / active / expired / recommended / non_responsive)
- **Unit**: text input (partial match on unit_number)

Changing any filter SHALL re-execute the query automatically (debounced 300ms).

#### Scenario: Latest snapshot selected (default)
- **WHEN** the page first loads
- **THEN** the query runs against the most recent snapshot date in sync_log

#### Scenario: Historical date selected
- **WHEN** the user selects a past snapshot date from the dropdown
- **THEN** the result table shows data from that date

---

### Requirement: Result table

The query result SHALL be displayed as a TanStack Table with Verdant Estate styling. Column headers SHALL match the selected dimension/measure labels. All columns SHALL be sortable. A row count and the queried snapshot date SHALL be shown above the table.

#### Scenario: Results rendered
- **WHEN** the query returns rows
- **THEN** the table renders with one column per selected groupBy dimension plus one column per selected measure; rows are sortable by clicking headers

#### Scenario: Empty result
- **WHEN** the query returns no rows
- **THEN** a message is shown: "No data found for the selected filters"

#### Scenario: Loading state
- **WHEN** the query is in-flight
- **THEN** a skeleton loader is shown in the table area

---

### Requirement: Trend mode

The view builder SHALL include a mode toggle: "Point in time" (default) vs "Trend over time". In trend mode, the snapshot date picker is replaced by a date range (from/to) and a bucket selector (Month / Day). The query uses `snapshotDate: "trend"` with the dateRange spec. The result SHALL display both a result table and a bar chart above it.

The bar chart SHALL be implemented as a React SVG component (no external chart library). It SHALL render one bar group per time bucket, with one bar per unique combination of the non-time groupBy dimensions (up to 6 series before collapsing to "Other"). The chart SHALL use the Verdant Estate color palette.

#### Scenario: Trend mode activated
- **WHEN** the user toggles to "Trend over time"
- **THEN** the snapshot date picker is replaced by a date range and bucket selector; the query is re-executed; a bar chart appears above the result table

#### Scenario: No trend data yet
- **WHEN** trend mode is enabled but only one snapshot date exists in the DB
- **THEN** the chart renders a single bar group and a note: "Only one snapshot available — run the cron daily to build trend history"

#### Scenario: Many series collapsed
- **WHEN** the groupBy produces more than 6 distinct series for the chart
- **THEN** the top 5 series are shown individually and remaining series are grouped as "Other"
