## 1. Hash Routing Hook

- [x] 1.1 Create `src/web/src/hooks/useHashNav.ts` — a custom hook that reads `window.location.hash`, derives the active `Page` (defaulting to `'pet-fee-audit'` when hash is absent/unknown), and updates state on `hashchange` events
- [x] 1.2 Expose a `navigate(page: Page)` function from the hook that sets `window.location.hash`

## 2. Wire Up Hash Routing in App Shell

- [x] 2.1 Replace `useState<Page>` in `src/web/src/App.tsx` with `useHashNav`
- [x] 2.2 Update each sidebar nav `<button>` to call `navigate(item.id)` instead of `setPage(item.id)`
- [x] 2.3 Verify browser back/forward buttons change the active page and update the sidebar highlight

## 3. HintPopover Component

- [x] 3.1 Create `src/web/src/components/HintPopover.tsx` — accepts `hint: string` and renders a `?` trigger icon
- [x] 3.2 Implement hover-to-open: popover visible while pointer is over trigger (closes on `mouseleave` unless click-latched)
- [x] 3.3 Implement click-to-latch: clicking the trigger keeps the popover open; a second click or click-outside closes it
- [x] 3.4 Add `keydown` listener for `Escape` to dismiss a latched popover
- [x] 3.5 Style the popover with `--color-bark` background, `--color-ivory` text, `--font-ui`, `border-radius`, subtle `box-shadow`, and a downward CSS caret pointing at the trigger
- [x] 3.6 Position the popover above the trigger, centered, with `z-index: 50`

## 4. Integrate HintPopover into ViolationDashboardPage

- [x] 4.1 Replace the inline `title`-based hint `<span>` in `SummaryCard` with `<HintPopover hint={hint} />`
- [x] 4.2 Verify all five summary cards show the popover on hover and on click in the browser
