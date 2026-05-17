## MODIFIED Requirements

### Requirement: GET /api/pets/registration-check endpoint

The worker SHALL expose `GET /api/pets/registration-check` (behind auth middleware) that fetches (or returns cached) PS profiles and RM data, joins them by unit number, and returns an array of `RegistrationCheckRow` objects — one per RM unit that has either an active tenant or a PS profile.

`RegistrationCheckRow`:
```
{
  unitId: number
  unitName: string
  rmUnitLink: string
  tenantId: number | null
  tenantName: string | null
  rmTenantLink: string | null
  rmPets: Array<{ petId: number; name: string; breed?: string }>
  psPets: Array<{ id: number; name: string; species: string; pawScore: number; publicToken: string; psLink: string }>
  status: 'no_record' | 'rm_only' | 'gap' | 'mismatched' | 'matched'
}
```

The `status` field SHALL be computed server-side according to the following rules (evaluated in order):
1. `gap` — `psPets.length > 0` AND `rmPets.length === 0`
2. `rm_only` — `psPets.length === 0` AND `rmPets.length > 0`
3. `no_record` — `psPets.length === 0` AND `rmPets.length === 0`
4. `mismatched` — both arrays non-empty AND fuzzy name match fails for at least one PS pet against all RM pets
5. `matched` — both arrays non-empty AND all PS pets fuzzy-match at least one RM pet

Fuzzy name match: normalize both names to lowercase alphanumeric; match succeeds if normalized strings are equal, or one contains the other.

The `hasGap` field SHALL be removed from the response shape.

#### Scenario: Gap detected
- **WHEN** a unit has PS pet profiles but no RM pet record
- **THEN** `status` is `'gap'`

#### Scenario: RM only
- **WHEN** a unit has RM pets but no PS profiles
- **THEN** `status` is `'rm_only'`

#### Scenario: No record
- **WHEN** an active tenant has neither PS pets nor RM pets
- **THEN** `status` is `'no_record'`

#### Scenario: Fuzzy name match succeeds
- **WHEN** a unit has both PS and RM pets and all PS pet names normalize-match at least one RM pet name
- **THEN** `status` is `'matched'`

#### Scenario: Fuzzy name match fails
- **WHEN** a unit has both PS and RM pets and at least one PS pet name does not normalize-match any RM pet name
- **THEN** `status` is `'mismatched'`

#### Scenario: RM or PS fetch error
- **WHEN** either RM or PS API fails
- **THEN** the endpoint returns HTTP 502 with a JSON error body

---

### Requirement: Pet Registration Check UI page

The dashboard SHALL include a "Pet Registration Check" page accessible from the sidebar under Audits. It SHALL display a filterable table of `RegistrationCheckRow` data.

Columns:
- **Unit** — unit name, linked to RM unit URL
- **Tenant** — tenant name, linked to RM tenant URL (or "—" if none)
- **PS Pets** — for each PS pet: name, species, paw score badge (1–5), link icon to PS profile; when `status` is `mismatched`, each PS pet name that has no fuzzy match in RM is visually highlighted (e.g. amber text or warning icon)
- **RM Pets** — comma-separated pet names from RM (or "—" if none); when `status` is `mismatched`, unmatched RM pet names are highlighted
- **Status** — chip with one of five states:
  - `no_record` — muted chip: "No Record"
  - `rm_only` — harvest chip: "RM Only"
  - `gap` — harvest chip: "⚠ Gap"
  - `mismatched` — amber chip: "⚠ Mismatch"
  - `matched` — pasture chip: "✓ Matched"

The filter panel SHALL include:
- A **Status** multi-select control (checkboxes or chip toggles) for each of the five status values; defaults to all selected; selecting a subset shows only rows with that status
- A **unit number** text input
- A **tenant / pet name** text search input

A **status legend** SHALL be displayed on the page (inline above the filter panel or as a collapsible section) explaining each status and its implied action:

| Status | Meaning | Action |
|--------|---------|--------|
| No Record | Active tenant with no PetScreening profile or RM pets found | Ask tenant to submit PetScreening questionnaire |
| RM Only | Pets registered in RentManager but no PetScreening profile | Ask tenant to complete PetScreening for their pet(s) |
| Gap | Pets registered in PetScreening but not in RentManager | Add pet(s) to RentManager |
| Mismatch | Both systems have pets but names don't match — may be different animals | Verify with tenant |
| Matched | Pet records agree in both systems | No action needed |

#### Scenario: Page loads with data
- **WHEN** the API returns rows
- **THEN** the table renders with one row per unit, with correct status chips and links

#### Scenario: Status filter — single status
- **WHEN** the user selects only "Gap" in the status filter
- **THEN** only rows with `status === 'gap'` are shown

#### Scenario: Status filter — multiple statuses
- **WHEN** the user selects "Gap" and "Mismatch"
- **THEN** rows with `status === 'gap'` or `status === 'mismatched'` are shown

#### Scenario: Status filter — all selected (default)
- **WHEN** all status options are selected (default state)
- **THEN** all rows are shown regardless of status

#### Scenario: Mismatch highlighted in row
- **WHEN** a row has `status === 'mismatched'` and the PS pet "Buddy" does not fuzzy-match any RM pet name
- **THEN** "Buddy" appears highlighted (amber or warning styling) in the PS Pets column

#### Scenario: Unit number filter
- **WHEN** the user types in the unit number field
- **THEN** only rows whose unit name contains the typed string are shown

#### Scenario: Tenant/pet name search
- **WHEN** the user types in the search field
- **THEN** only rows matching tenant name, RM pet names, or PS pet names are shown

#### Scenario: Loading state
- **WHEN** the fetch is in-flight
- **THEN** a skeleton loader is shown

#### Scenario: Empty state after filter
- **WHEN** the active filters produce no matching rows
- **THEN** a message is shown: "No units match the selected filters"
