## Context

The SPA shell (`App.tsx`) currently tracks the active page with a `useState<Page>` hook. Page state is entirely in-memory — reloading the tab always returns to the default page, and there is no URL that can be bookmarked or shared for a specific dashboard. The violations dashboard summary cards display hint text via the native HTML `title` attribute, which renders as a grey OS-level tooltip with an activation delay, no styling control, and no support for click-to-open.

No routing library is installed. The app is a Cloudflare Worker SPA, so all requests return the same `index.html`; server-side route matching is irrelevant.

## Goals / Non-Goals

**Goals:**
- Each nav destination maps to a stable URL hash (e.g., `#/violations-dashboard`)
- Navigating via the sidebar updates the hash; clicking the browser back/forward buttons changes the active page
- Loading the app with a hash in the URL opens the correct page directly
- Hint text on `SummaryCard` renders as a styled popover that opens on hover and on click, and closes on click-outside or Escape

**Non-Goals:**
- No path-based routing (hash routing requires zero Worker or Vite config changes)
- No router library — the hash is trivial enough to manage with a custom hook
- No deep-linking into sub-views within a page (only top-level nav pages need stable URLs)
- No animation or transition system for the popover beyond basic CSS

## Decisions

### Decision: Hash routing over a router library

**Chosen**: Custom `useHashNav` hook using `window.location.hash` and `hashchange` event listener.

**Alternatives considered**:
- TanStack Router / React Router — overkill for 6 nav items; adds a dependency, requires config
- Path-based routing — requires the Worker to serve `index.html` for all paths, which would need changes to `src/worker/index.ts` and Vite config

**Rationale**: Hash routing works with the current static-asset setup without touching the Worker. A thin hook is ~20 lines and has no runtime overhead.

### Decision: Hash format `#/<page-id>`

**Chosen**: `#/violations-dashboard`, `#/pet-fee-audit`, etc. — kebab-case, matching the existing `Page` type values.

**Rationale**: Predictable, human-readable, trivial to parse (`window.location.hash.slice(2)`). Falls back to the existing default page when the hash is absent or unrecognised.

### Decision: Popover implemented as a self-contained React component, no library

**Chosen**: `HintPopover` component uses a `useState` open flag, positions the popover absolutely relative to the trigger icon, and registers a `mousedown` listener on `document` for click-outside dismissal.

**Alternatives considered**:
- Radix UI Popover — correct choice for a larger design system; not worth adding for a single use-case
- CSS-only `:hover` + `:focus-within` — cannot support click-to-latch without JS

**Rationale**: The component is small and self-contained. Keeping it in-repo avoids a new dependency and matches how other ad-hoc interactive UI has been built in this codebase (e.g., inline `onMouseEnter`/`onMouseLeave` handlers).

### Decision: Popover opens above the trigger, centered

Positioned with `bottom: 100% + gap` relative to the `?` icon container, `transform: translateX(-50%)` to center. A small arrow caret is rendered with a CSS border trick. Falls back gracefully if near the top edge (the summary cards sit in the middle of a wide content area so this is not a real concern).

## Risks / Trade-offs

- [Hash routing breaks browser history for in-page state] → The `violations-notify` pseudo-page is not a nav item, so it won't get a hash. If notify needs deep-linking later, hash params can be added. For now only sidebar nav items get hashes.
- [Click-outside listener added to document] → The listener is added on mount and removed on unmount; multiple popovers on the page are independently controlled, so only the one that's open will respond.
- [Popover z-index may conflict with future overlays] → Set to `z-index: 50` which is above all current content.

## Migration Plan

1. Add `useHashNav` hook — no changes to existing pages
2. Swap `useState<Page>` in `App.tsx` for `useHashNav` — sidebar click sets hash, active page reads from hash
3. Add `HintPopover` component
4. Update `SummaryCard` to use `HintPopover` instead of `title` attribute
5. No data migrations, no Worker changes, no config changes
6. Rollback: revert the two changed files; hash URLs will stop working but nothing else is affected
