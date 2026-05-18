# Capability: URL Routing

Hash-based URL routing for the SPA shell. Each nav destination maps to a stable URL hash fragment, enabling deep links and browser history navigation.

---

## ADDED Requirements

### Requirement: Each nav page has a stable URL hash

The system SHALL map each navigable page to a unique URL hash of the form `#/<page-id>` (e.g., `#/violations-dashboard`, `#/pet-fee-audit`).

#### Scenario: Sidebar navigation updates the URL
- **WHEN** the user clicks a sidebar nav item
- **THEN** `window.location.hash` is set to `#/<page-id>` for that item

#### Scenario: Direct link loads correct page
- **WHEN** the app is loaded with a hash like `#/violations-dashboard` in the URL
- **THEN** the violations dashboard renders as the active page without requiring any click

#### Scenario: Unknown hash falls back to default
- **WHEN** the app is loaded with an unrecognised hash
- **THEN** the app renders the default page (pet-fee-audit)

### Requirement: Browser back and forward navigation changes the active page

The system SHALL update the active page when the browser's `hashchange` event fires.

#### Scenario: Back button returns to previous page
- **WHEN** the user navigates from page A to page B and then presses the browser back button
- **THEN** the active page changes back to page A and the hash updates accordingly

### Requirement: Active sidebar item reflects URL hash

The sidebar SHALL highlight the nav item whose hash matches the current `window.location.hash`.

#### Scenario: Hash and highlight are in sync
- **WHEN** the URL hash is `#/analytics`
- **THEN** the "Analytics" sidebar item is highlighted as active
