## ADDED Requirements

### Requirement: Fetch tenants by ID set
The system SHALL provide a `getTenantsByIds(client, ids)` function that returns `Tenant` records for the given set of TenantIDs.

#### Scenario: Tenants retrieved
- **WHEN** called with a non-empty set of TenantIDs
- **THEN** it returns matching `Tenant` objects with at minimum `TenantID`, `FirstName`, `LastName`, and `UnitID`

#### Scenario: Empty ID set
- **WHEN** called with an empty set
- **THEN** it returns an empty array without making API calls

---

### Requirement: Tenant display name
The system SHALL provide a `tenantDisplayName(tenant)` helper that returns `"FirstName LastName"` as a single string.

#### Scenario: Full name formatted
- **WHEN** called with a tenant having both FirstName and LastName
- **THEN** it returns them joined with a space
