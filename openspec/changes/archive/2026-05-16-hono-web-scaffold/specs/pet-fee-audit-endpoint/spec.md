## ADDED Requirements

### Requirement: GET /api/audits/pet-fees returns audit results
The system SHALL provide a `GET /api/audits/pet-fees` endpoint that calls `findTenantsWithPetFeeButNoPet(client)` and returns the results as a JSON array.

#### Scenario: Results returned
- **WHEN** `GET /api/audits/pet-fees` is called
- **THEN** the response is HTTP 200 with `Content-Type: application/json` and a JSON array of `PetFeeAuditResult` objects

#### Scenario: Empty result
- **WHEN** no mismatches exist
- **THEN** the response is HTTP 200 with an empty JSON array `[]`

#### Scenario: RM API error
- **WHEN** the RentManager API returns an error during the audit
- **THEN** the endpoint returns HTTP 502 with a JSON error body containing the upstream status and message

---

### Requirement: Audit result JSON shape
Each item in the response array SHALL include `tenantId`, `tenantName`, `unitId`, `chargeTypeName`, and `amount` fields matching the `PetFeeAuditResult` interface from the library.

#### Scenario: Result shape validated
- **WHEN** the endpoint returns results
- **THEN** each object contains at minimum `tenantId` (number), `tenantName` (string), `chargeTypeName` (string), and `amount` (number); `unitId` may be null/undefined
