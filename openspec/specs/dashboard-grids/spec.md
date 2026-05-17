# Capability: Dashboard Grids

Requirements that apply to every data grid in the Rolling Acres dashboard. Any future audit page or data view must satisfy these requirements. Individual grids may extend them with additional behavior but may not remove or contradict them.

---

## Requirement: Column sorting

Every grid column that contains sortable data SHALL support click-to-sort on its header. Columns that are inherently non-sortable (e.g. enum badges, action buttons) MAY opt out, but the default expectation is sortable.

Sorting behavior:
- First click: sort ascending
- Second click: sort descending
- Third click: clear sort (return to default order)
- Only one column may be sorted at a time

Visual treatment (per Verdant Estate style guide):
- Sortable headers have `cursor-pointer` and `user-select: none`
- Active sort direction is indicated by an amber `↑` or `↓` adjacent to the header label
- Inactive sortable headers show no indicator (not a grayed-out icon — absence is the signal)

#### Scenario: Clicking a sortable column header
- **WHEN** the user clicks a column header that has sorting enabled
- **THEN** the grid rows reorder according to that column's values, ascending first

#### Scenario: Clicking a sorted column header again
- **WHEN** the user clicks the currently sorted column header
- **THEN** the sort direction toggles (ascending → descending → cleared)

#### Scenario: Sort indicator visibility
- **WHEN** a column is actively sorted
- **THEN** an amber directional arrow (`↑` ascending, `↓` descending) appears next to the column label

---

## Requirement: Collapsible filter panel

Every grid SHALL provide a collapsible filter panel. The panel is **collapsed by default** and toggled by a "Filters" button in the grid control bar above the table.

### Control bar layout

The control bar appears between the page header and the table. It contains:
- Left: "Filters" toggle button + active filter chips (when any filters are set)
- Right: filtered row count in the form `N of M items` (using the grid's entity noun)

The "Filters" button:
- Neutral/outline style at rest (no active filters)
- Amber accent treatment when one or more filters are active — border, text, and optional count badge all use `--color-amber`
- Includes a chevron (`▾` collapsed, `▴` expanded) to signal toggle state

### Active filter chips

When the panel is collapsed and filters are active, each active filter SHALL render as a small dismissible chip in the control bar, immediately to the right of the "Filters" button. Chips use the same badge color system as the rest of the app (pasture/harvest/pond as semantically appropriate; secondary as fallback). Clicking `×` on a chip clears that individual filter without reopening the panel.

This means filter state is always visible even when the panel is hidden — the panel is an editor, not the source of truth for what's active.

### Filter panel (expanded)

The expanded panel renders directly below the control bar, above the table, as a full-width warm-toned area (background `--color-field`, separated from the table card by a subtle border). It slides open with a smooth CSS height/opacity transition.

Contents are grid-specific, but every grid's filter panel SHALL include at minimum a text search field that filters by the grid's primary identifier (e.g. tenant name, property address). Additional filters (status dropdowns, date pickers, range inputs) are defined per-grid.

Filter controls use the same input styling as the rest of the app:
- Background `--color-ivory`, border `--color-straw` at rest
- Border `--color-amber` on focus
- Font `--font-ui`

### Clearing filters

A "Clear all" action SHALL be available when any filter is active. It may appear:
- As a text link inside the expanded filter panel
- As an `×` on the "Filters" button itself when the panel is collapsed and filters are set (in addition to individual chip dismissal)

#### Scenario: Opening the filter panel
- **WHEN** the user clicks the "Filters" button while the panel is collapsed
- **THEN** the filter panel expands below the control bar with a smooth transition

#### Scenario: Closing the filter panel
- **WHEN** the user clicks the "Filters" button while the panel is expanded
- **THEN** the filter panel collapses; any active filters remain in effect and appear as chips

#### Scenario: Active filters when panel is collapsed
- **WHEN** one or more filters are active and the panel is collapsed
- **THEN** each active filter is shown as a dismissible chip in the control bar AND the "Filters" button uses amber styling

#### Scenario: Dismissing a single filter chip
- **WHEN** the user clicks `×` on an active filter chip
- **THEN** that filter is cleared immediately and the grid re-filters without reopening the panel

#### Scenario: Row count reflects active filters
- **WHEN** any filter is active
- **THEN** the control bar displays `N of M items` where N is the filtered count and M is the total unfiltered count

#### Scenario: No filters active
- **WHEN** no filters are active
- **THEN** the "Filters" button uses neutral styling, no chips appear, and the count shows total row count only

---

## Requirement: FilterPanel reusable component

A `FilterPanel` component SHALL exist at `src/web/src/components/FilterPanel.tsx`. It SHALL accept filter state and callbacks as props and render: the Filters toggle button (with chevron and amber active styling), the active chip bar, the sliding panel container, and a "Clear all" link when filters are active. Individual grid pages own their filter state and pass it in as props.

#### Scenario: FilterPanel renders with no active filters
- **WHEN** `FilterPanel` is rendered with no active filter values
- **THEN** the toggle button shows neutral outline styling and no chips are rendered

#### Scenario: FilterPanel renders with active filters
- **WHEN** `FilterPanel` is rendered with one or more active filter values
- **THEN** the toggle button shows amber styling and the active chips are rendered in the control bar

---

## Requirement: Pet fee audit status filter

The pet fee audit grid filter panel SHALL include a status filter in addition to the tenant name text search. The status filter is a three-state segmented control: All (default), Current, Past. Selecting Current or Past narrows the grid to rows matching that status value and produces a dismissible chip in the control bar. Selecting All clears the status filter.

#### Scenario: Filtering by Current status
- **WHEN** the user selects "Current" in the status filter control
- **THEN** only rows with `status === "Current"` are shown and a "Current" chip appears in the control bar

#### Scenario: Filtering by Past status
- **WHEN** the user selects "Past" in the status filter control
- **THEN** only rows with `status === "Past"` are shown and a "Past" chip appears in the control bar

#### Scenario: Clearing status filter via chip
- **WHEN** the user clicks `×` on the status chip in the control bar
- **THEN** the status filter resets to All and the grid shows all status values

#### Scenario: Combining name and status filters
- **WHEN** both a tenant name search and a status filter are active simultaneously
- **THEN** the grid shows only rows that match both conditions (AND logic)

---

## Implementation Notes

These requirements are implemented using Tanstack Table (`@tanstack/react-table`) with `getSortedRowModel()` and `getFilteredRowModel()`. Filter state lives in component state (`useState`). The filter panel open/closed state is local UI state — it is not preserved across page navigation or refresh.
