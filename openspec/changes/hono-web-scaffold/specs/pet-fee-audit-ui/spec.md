## ADDED Requirements

### Requirement: Pet fee audit page fetches and displays results
The `PetFeeAuditPage` component SHALL fetch from `/api/audits/pet-fees` on mount and render the results in a data table.

#### Scenario: Data loads successfully
- **WHEN** the page mounts and the API returns results
- **THEN** a table renders with one row per result, showing Tenant, Unit, Charge Type, and Amount columns

#### Scenario: Loading state shown
- **WHEN** the fetch is in-flight
- **THEN** a loading skeleton or spinner is displayed in place of the table

#### Scenario: Empty state shown
- **WHEN** the API returns an empty array
- **THEN** a message is displayed: "No issues found — all pet fees have a corresponding pet on file"

#### Scenario: Error state shown
- **WHEN** the fetch fails or returns a non-200 status
- **THEN** an error message is displayed with the failure reason

---

### Requirement: Table supports sorting
The results table SHALL support column sorting via Tanstack Table. Clicking a column header SHALL toggle sort direction.

#### Scenario: Sort by tenant name
- **WHEN** the user clicks the "Tenant" column header
- **THEN** rows are sorted alphabetically by tenant name; clicking again reverses order

---

### Requirement: Table supports text filtering
The results table SHALL include a text input that filters rows by tenant name.

#### Scenario: Filter by name
- **WHEN** the user types in the filter input
- **THEN** only rows whose tenant name contains the typed string (case-insensitive) are shown
