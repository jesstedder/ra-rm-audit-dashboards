# Capability: Web App Shell (delta)

---

## MODIFIED Requirements

### Requirement: Sidebar navigation

The app SHALL render a persistent sidebar with navigation links for each page. The sidebar SHALL be present on all pages. Clicking a nav item SHALL update `window.location.hash` to the corresponding hash fragment for that page. The active page SHALL be derived from the URL hash, not from internal component state, so that the sidebar highlight and rendered page remain in sync with the browser URL bar.

#### Scenario: Pet fee audit nav link visible
- **WHEN** the app loads
- **THEN** a "Pet Fee Audit" link is visible in the sidebar

#### Scenario: Active link highlighted
- **WHEN** the URL hash is `#/pet-fee-audit`
- **THEN** the "Pet Fee Audit" nav link is visually highlighted as active

#### Scenario: Nav click updates URL
- **WHEN** the user clicks "Violations – Dashboard" in the sidebar
- **THEN** the URL hash becomes `#/violations-dashboard` and the violations dashboard renders
