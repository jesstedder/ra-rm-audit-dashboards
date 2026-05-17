## Context

The pet fee audit page currently renders a single `<input>` text field above the table that filters by tenant name. There is no panel toggle, no active-state chips, no status filter, and no clear-all. The global `dashboard-grids` spec requires a collapsible filter panel with chip-based active state visibility. This design introduces a `FilterPanel` component that satisfies the spec and becomes the template for all subsequent grid pages.

Current state of `PetFeeAuditPage.tsx`:
- Bare `<input>` wired to `globalFilter` (Tanstack `getFilteredRowModel`)
- Row count displayed next to the input
- No status filter
- No panel open/close behavior

## Goals / Non-Goals

**Goals:**
- Implement the collapsible filter panel per the `dashboard-grids` spec
- Introduce a reusable `FilterPanel` component that wraps the toggle, chip bar, and sliding panel
- Add a status filter (Current / Past / All) to the pet fee audit grid
- Keep all filter state in page-level React state (no URL params, no global store)
- Smooth open/close transition — CSS only, no animation library

**Non-Goals:**
- URL-persisted filter state (not needed for a 3-user internal tool)
- A generic filter schema / DSL — the component accepts specific props per use-site, not an abstract config
- Any filter type beyond text and single-select for this iteration
- Date range or amount range filters (no current requirement)

## Decisions

### `FilterPanel` as a thin wrapper, not a headless controller

**Decision:** `FilterPanel` is a presentational component that accepts filter state and callbacks as props. It renders the toggle button, chip bar, and the sliding `<div>` container. Each grid page owns its own filter state (`useState`) and passes it in.

**Rationale:** Keeps the component simple and eliminates the need for React context or a shared filter store. Each grid has different filter fields; a generic headless controller would need to model them all. Passing state down is more readable and easier to extend.

**Alternative considered:** A `useFilterPanel` hook that manages open/close + filter values centrally — rejected because filter fields are heterogeneous (text vs. select vs. date) and each grid wires its own Tanstack column filters anyway.

### CSS `max-height` transition for open/close animation

**Decision:** The sliding panel uses `max-height: 0 → max-height: 200px` with `overflow: hidden` and a CSS transition. No JS-driven height measurement, no Framer Motion or similar.

**Rationale:** No new dependency, works with Tailwind's inline style approach, adequate for a panel of fixed approximate height. The slight visual over-shoot on `max-height` is imperceptible at normal content sizes.

**Alternative considered:** JS `getBoundingClientRect()` for exact height — unnecessary complexity for this use case.

### Status filter as a three-way toggle (All / Current / Past), not a multi-select

**Decision:** Status filter is a segmented control with three states: All (default), Current, Past. Selecting Current or Past produces a chip; selecting All clears the status chip.

**Rationale:** There are only two meaningful status values and "All" is the resting state. A dropdown or multi-select checkbox would be over-engineered. The segmented control is immediately scannable and matches the visual weight of the other filter controls.

### Tanstack column filter for status, global filter for name

**Decision:** Tenant name uses Tanstack's `globalFilter` (already in use). Status uses a column-level filter on the `status` column via `getFilteredRowModel` + a custom `filterFn`.

**Rationale:** The two filter mechanisms compose correctly in Tanstack — `getFilteredRowModel` applies both. Keeping name as `globalFilter` avoids refactoring existing working code.

### Chip label format

**Decision:** Name chip: `"Jess"` (the current search string, truncated at ~20 chars). Status chip: `"Current"` or `"Past"` (matches the badge label in the table for visual consistency).

## Risks / Trade-offs

**`max-height` animation is approximate** → If panel content grows taller than the `max-height` value, it clips. Mitigated by setting `max-height` to a comfortable ceiling (e.g. `300px`) well above any realistic panel height.

**Global filter string shows as a chip** → Short search terms like "a" produce a chip that says "a" — slightly odd. Acceptable for this use case; not worth the complexity of a minimum-length threshold.

**No filter persistence** → Refreshing the page resets all filters. Acceptable for this tool; noted here so it's a deliberate choice, not an oversight.
