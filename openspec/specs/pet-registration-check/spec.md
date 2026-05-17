# Capability: Pet Registration Check

Requirements for the pet registration cross-reference endpoint and dashboard page.

---

## Requirement: GET /api/pets/registration-check endpoint

The worker SHALL expose `GET /api/pets/registration-check` (behind auth middleware) that fetches (or returns cached) PS profiles and RM data, joins them by unit number, and returns an array of `RegistrationCheckRow` objects — one per RM unit that has either an active tenant or a PS profile.

`RegistrationCheckRow`:
```
{
  unitId: number
  unitName: string
  rmUnitLink: string          // https://rollinga.rmx.rentmanager.com/#/units/{unitId}/details
  tenantId: number | null
  tenantName: string | null
  rmTenantLink: string | null // https://rollinga.rmx.rentmanager.com/#/tenants/{tenantId}/details
  rmPets: Array<{ petId: number; name: string; breed?: string }>
  psPets: Array<{ id: number; name: string; species: string; pawScore: number; publicToken: string; psLink: string }>
  hasGap: boolean             // psPets.length > 0 && rmPets.length === 0
}
```

#### Scenario: Gap detected
- **WHEN** a unit has a PS profile but no RM pet record
- **THEN** the row has `hasGap: true`, `psPets` is non-empty, and `rmPets` is empty

#### Scenario: Matched
- **WHEN** a unit has both a PS profile and an RM pet record
- **THEN** `hasGap: false` and both `psPets` and `rmPets` are populated

#### Scenario: No PS record
- **WHEN** a unit has an RM pet but no PS profile
- **THEN** `psPets` is empty, `hasGap: false`

#### Scenario: RM or PS fetch error
- **WHEN** either RM or PS API fails
- **THEN** the endpoint returns HTTP 502 with a JSON error body

---

## Requirement: Pet Registration Check UI page

The dashboard SHALL include a "Pet Registration Check" page accessible from the sidebar under Audits. It SHALL display a filterable table of `RegistrationCheckRow` data.

Columns:
- **Unit** — unit name, linked to RM unit URL
- **Tenant** — tenant name, linked to RM tenant URL (or "—" if none)
- **PS Pets** — for each PS pet: name, species, paw score badge (1–5), link icon to PS profile
- **RM Pets** — comma-separated pet names from RM (or "—" if none)
- **Status** — chip: "Gap" (amber/harvest) when `hasGap`, "Matched" (green/pasture) otherwise, "No PS" (muted) when no PS pets

The filter panel SHALL include: All/Gaps segmented control, unit number text input, and tenant/pet name search text input.

#### Scenario: Page loads with data
- **WHEN** the API returns rows
- **THEN** the table renders with one row per unit, with correct status chips and links

#### Scenario: Gap filter
- **WHEN** the user selects "Gaps only" in the filter panel
- **THEN** only rows with `hasGap: true` are shown

#### Scenario: Unit number filter
- **WHEN** the user types in the unit number field
- **THEN** only rows whose unit name contains the typed string are shown

#### Scenario: Tenant/pet name search
- **WHEN** the user types in the search field
- **THEN** only rows matching tenant name, RM pet names, or PS pet names are shown

#### Scenario: Loading state
- **WHEN** the fetch is in-flight
- **THEN** a skeleton loader is shown

#### Scenario: Empty state
- **WHEN** no gaps exist
- **THEN** a success message: "All PetScreening registrations have matching RM records"

---

## Requirement: Paw score badge

The paw score SHALL be displayed as a numeric badge (1–5) styled using the Verdant Estate theme. Score 1–2 uses harvest (amber/orange) styling; score 3–5 uses pasture (green) styling.

#### Scenario: Low paw score
- **WHEN** `pawScore` is 1 or 2
- **THEN** a harvest-variant badge is shown with the numeric value

#### Scenario: High paw score
- **WHEN** `pawScore` is 3, 4, or 5
- **THEN** a pasture-variant badge is shown with the numeric value
