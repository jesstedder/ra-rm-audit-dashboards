## Why

Navigation is currently stateless — the URL never changes when switching dashboards, so there's no way to share a direct link to a specific page (e.g., the violations dashboard). The help icons on the summary cards also use native browser `title` tooltips, which are visually inconsistent, don't work on mobile, and can't be triggered by click.

## What Changes

- All navigation moves from `useState` to URL hash routing (`#/violations-dashboard`, `#/pet-fee-audit`, etc.) so each page has a stable, shareable URL.
- The sidebar sets `window.location.hash` on click; the active page is derived from the hash on load and on hash-change events.
- The `SummaryCard` hint/help text is promoted from a native `title` attribute to a polished popover that appears on both hover and click, and dismisses on click-outside or Escape.

## Capabilities

### New Capabilities
- `url-routing`: Hash-based URL routing for the SPA shell — each nav destination maps to a URL hash fragment, with deep-link support on load.
- `hint-popover`: A reusable hint/popover UI component that shows explanatory text on hover and click, replacing native `title` tooltips in the violations dashboard summary cards.

### Modified Capabilities
- `web-app-shell`: Navigation now drives the URL (hash routing), changing the requirement that page state is managed internally via React state only.

## Impact

- `src/web/src/App.tsx` — replace `useState<Page>` with hash-based routing logic
- `src/web/src/features/violations/ViolationDashboardPage.tsx` — `SummaryCard` hint rendered via new popover component instead of `title` attribute
- `src/web/src/components/HintPopover.tsx` — new shared component
- No API, Worker, or config changes
