## ADDED Requirements

### Requirement: Fetch all pets
The system SHALL provide a `getAllPets(client)` function that returns all `Pet` records from `GET /Pets`.

#### Scenario: Pets retrieved
- **WHEN** `getAllPets` is called
- **THEN** it returns an array of `Pet` objects with at minimum `PetID` and `TenantID`

#### Scenario: No pets on file
- **WHEN** the account has no pets
- **THEN** an empty array is returned

---

### Requirement: Extract tenant IDs from pets
The system SHALL provide a `getTenantIdsWithPets(pets)` function that returns a `Set<number>` of unique TenantIDs from a `Pet[]`.

#### Scenario: Unique tenant IDs extracted
- **WHEN** called with a list of pets (including multiple pets per tenant)
- **THEN** each TenantID appears exactly once in the result set
