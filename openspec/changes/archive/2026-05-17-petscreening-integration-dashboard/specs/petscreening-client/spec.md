## ADDED Requirements

### Requirement: PetScreening session authentication

The PetScreening client SHALL authenticate via a three-step session flow: (1) GET the landing page to obtain a CSRF token from the `<meta name="csrf-token">` tag and a session cookie, (2) POST `/api/core/v1/session` with the credentials JSON and `X-CSRF-Token` header, (3) carry the resulting `_ps_session` cookie on all subsequent requests. All requests SHALL use the User-Agent `Mozilla/5.0 (compatible; RollingAcresBot/1.0)`.

#### Scenario: Successful authentication
- **WHEN** valid `PETSCREENING_USERNAME` and `PETSCREENING_PASSWORD` are configured
- **THEN** the client performs the CSRF + session POST and returns an authenticated session (cookie jar) ready for API calls

#### Scenario: CSRF token not found
- **WHEN** the landing page HTML does not contain a `<meta name="csrf-token">` tag
- **THEN** the client throws a descriptive error: "Could not extract CSRF token from PetScreening landing page"

#### Scenario: Invalid credentials
- **WHEN** the session POST returns a non-201 status
- **THEN** the client throws a descriptive error including the HTTP status code

---

### Requirement: PetScreening pet profile fetch with pagination

`getAllPsProfiles(env)` SHALL fetch all pages of `/web_api/v1/property_managers/{PMID}/pet_profiles` with query params `q[with_status_for_manager]=all&q[sorted_by]=shared_at`, accumulating results until a page returns fewer items than the page size (indicating the last page). The function SHALL return an array of `PsProfile` objects.

#### Scenario: Single page of results
- **WHEN** the first page returns fewer than the page size
- **THEN** only one request is made and all profiles are returned

#### Scenario: Multiple pages
- **WHEN** the first page is full
- **THEN** subsequent pages are fetched in order until a partial page is received

#### Scenario: Empty result
- **WHEN** no pet profiles exist for the property manager
- **THEN** an empty array is returned

---

### Requirement: PsProfile unit number parsing

Each `PsProfile` SHALL include a `unitNumber` field derived by extracting the leading integer from the `property_manager.unit.address_1` field (e.g., `"12 Citation Cir"` → `"12"`). Profiles with no associated unit SHALL have `unitNumber: null`.

#### Scenario: Standard address
- **WHEN** `address_1` is `"12 Citation Cir"`
- **THEN** `unitNumber` is `"12"`

#### Scenario: No unit assigned
- **WHEN** the profile has no `property_manager.unit`
- **THEN** `unitNumber` is `null`
