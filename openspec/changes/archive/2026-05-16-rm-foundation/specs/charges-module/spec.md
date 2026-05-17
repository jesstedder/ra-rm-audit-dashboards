## ADDED Requirements

### Requirement: Fetch all charge types
The system SHALL provide a `getChargeTypes(client)` function that returns all `ChargeType` records from `GET /ChargeTypes`.

#### Scenario: Charge types retrieved
- **WHEN** `getChargeTypes` is called
- **THEN** it returns an array of `ChargeType` objects with at minimum `ChargeTypeID` and `Name`

---

### Requirement: Find pet fee charge types
The system SHALL provide a `findPetFeeChargeTypes(chargeTypes)` function that filters a `ChargeType[]` to those whose `Name` matches "Pet Fee" or "PF" (case-insensitive).

#### Scenario: Match by full name
- **WHEN** a charge type named "Pet Fee" exists
- **THEN** it is included in the result

#### Scenario: Match by abbreviation
- **WHEN** a charge type named "PF" exists
- **THEN** it is included in the result

#### Scenario: Case-insensitive match
- **WHEN** a charge type named "pet fee" or "pf" exists
- **THEN** it is included in the result

#### Scenario: No match
- **WHEN** no charge types match
- **THEN** an empty array is returned

---

### Requirement: Fetch recurring charges by charge type
The system SHALL provide a `getRecurringChargesByTypeIds(client, chargeTypeIds)` function that returns all `RecurringCharge` records whose `ChargeTypeID` is in the provided ID set.

#### Scenario: Charges retrieved for known charge type IDs
- **WHEN** called with one or more valid charge type IDs
- **THEN** it returns all matching `RecurringCharge` records including `RecurringChargeID`, `TenantID`, `ChargeTypeID`, and `Amount`

#### Scenario: Empty ID list
- **WHEN** called with an empty array of IDs
- **THEN** it returns an empty array without making API calls
