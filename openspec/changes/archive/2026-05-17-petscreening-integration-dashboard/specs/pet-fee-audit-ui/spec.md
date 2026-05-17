## MODIFIED Requirements

### Requirement: Pet fee audit page fetches and displays results

The `PetFeeAuditPage` component SHALL fetch from `/api/audits/pet-fees` on mount and render the results in a data table. The table SHALL include a "PetScreening" column that shows a PS chip when the result row has a `psProfile` field.

#### Scenario: Data loads successfully
- **WHEN** the page mounts and the API returns results
- **THEN** a table renders with one row per result, showing Tenant, Unit, Status, Move-Out Date, Charge Type, Amount, and PetScreening columns

#### Scenario: PS chip shown
- **WHEN** a result row has a `psProfile` field
- **THEN** the PetScreening column shows a chip with the pet name, a paw score badge, and a link icon that opens the PS profile URL in a new tab

#### Scenario: No PS record
- **WHEN** a result row has no `psProfile`
- **THEN** the PetScreening column shows "—"

#### Scenario: Loading state shown
- **WHEN** the fetch is in-flight
- **THEN** a loading skeleton is displayed in place of the table

#### Scenario: Empty state shown
- **WHEN** the API returns an empty array
- **THEN** a message is displayed: "No issues found — all pet fees have a corresponding pet on file"

#### Scenario: Error state shown
- **WHEN** the fetch fails or returns a non-200 status
- **THEN** an error message is displayed with the failure reason

---

## ADDED Requirements

### Requirement: PetScreening chip in pet fee audit table

The PetScreening column SHALL render a compact chip using the existing `Badge` component (pond variant) containing: the PS pet name, a paw score badge (harvest variant for 1–2, pasture for 3–5), and an external link icon. Clicking the chip or link icon SHALL open the PS profile URL (`https://rolling-acres.petscreening.com/p/{publicToken}`) in a new tab.

#### Scenario: Chip renders correctly
- **WHEN** `psProfile` is present with `petName: "Tader"`, `pawScore: 1`, and a valid `psLink`
- **THEN** the chip shows "Tader", a harvest badge "1", and an external link icon

#### Scenario: Link opens in new tab
- **WHEN** the user clicks the link icon in the PS chip
- **THEN** the PS profile URL opens in a new browser tab
