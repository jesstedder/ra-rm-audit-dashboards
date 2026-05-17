## ADDED Requirements

### Requirement: Identify tenants charged a pet fee without a pet
The system SHALL provide a `findTenantsWithPetFeeButNoPet(client)` function that returns an array of result records for tenants who have an active pet fee charge but zero pets on file.

#### Scenario: Mismatch detected
- **WHEN** a tenant has a RecurringCharge with a pet fee ChargeType and no Pet records
- **THEN** that tenant appears in the result with their name, unit, fee amount, and charge type name

#### Scenario: Clean tenant excluded
- **WHEN** a tenant has a pet fee charge AND at least one Pet record
- **THEN** that tenant does NOT appear in the result

#### Scenario: No pet fee charge types found
- **WHEN** no ChargeTypes match "Pet Fee" or "PF"
- **THEN** the function returns an empty array and logs a warning

---

### Requirement: Console audit script output
The `scripts/pet-fee-audit.ts` script SHALL print a human-readable table to stdout listing all tenants from `findTenantsWithPetFeeButNoPet`, including tenant name, unit, fee amount, and charge type name. It SHALL also print a summary line with the total count.

#### Scenario: Mismatches found
- **WHEN** the audit finds one or more mismatches
- **THEN** it prints a row per tenant and a summary: "X tenant(s) charged a pet fee with no pet on file"

#### Scenario: No mismatches found
- **WHEN** the audit finds no mismatches
- **THEN** it prints: "No issues found — all pet fees have a corresponding pet on file"

#### Scenario: Pet fee charge types logged
- **WHEN** the script runs
- **THEN** it logs which ChargeType names were matched (so the operator can confirm the match is correct)
