# Capability: Web App Shell

Requirements for the React SPA shell, sidebar navigation, and local development setup.

---

## Requirement: React SPA renders at root

The system SHALL serve a React single-page application from `src/web/` that renders at `/`. Vite builds the app to `dist/` which the Worker serves as static assets.

#### Scenario: App loads in browser
- **WHEN** the user navigates to the root URL
- **THEN** the React app renders without errors

---

## Requirement: Sidebar navigation

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

---

## Requirement: Vite dev proxy

`vite.config.ts` SHALL proxy all `/api/*` requests to `http://localhost:8787` so the Vite dev server can communicate with the Wrangler dev server during local development.

#### Scenario: API call proxied in dev
- **WHEN** the React app calls `/api/audits/pet-fees` during `vite dev`
- **THEN** the request is forwarded to `http://localhost:8787/api/audits/pet-fees`
