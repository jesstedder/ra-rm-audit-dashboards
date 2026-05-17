# Rolling Acres — UI Style Guide

**Theme: Verdant Estate**

The feeling of early morning on a horse property: a deep hedgerow treeline for the sidebar, warm limestone-and-hay light across the main content, amber morning light catching the top rail of a fence as the active accent. Refined and grounded — not corporate.

---

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Page headings | Cormorant Garamond | 600 | Estate-sign character. `font-family: var(--font-display)` |
| Display italic | Cormorant Garamond | 400 italic | Subheadings, pull quotes |
| UI / Nav / Labels / Table | Jost | 300–500 | Clean, open, legible at small sizes. `font-family: var(--font-ui)` |

Loaded via `<link>` in `src/web/index.html`. Never use Inter, Roboto, or system-ui as the primary font.

```css
--font-display: "Cormorant Garamond", Georgia, serif;
--font-ui:      "Jost", system-ui, sans-serif;
```

**Scale conventions:**
- Page title: `2rem`, Cormorant, weight 600, `letter-spacing: 0.01em`
- Section labels / table headers: `0.75rem`, Jost, weight 500, `letter-spacing: 0.06em`, uppercase
- Nav section labels: `letter-spacing: 0.16em`, uppercase, sidebar-muted color
- Body / table cells: `0.875rem`, Jost, weight 400
- Metadata / helper text: Jost weight 300

---

## Color Palette

Defined as CSS custom properties in `src/web/src/index.css` under `@theme`.

### Sidebar — Deep Hedgerow

| Variable | Hex | Use |
|---|---|---|
| `--color-sidebar-bg` | `#1b2b1d` | Sidebar background — deep forest green |
| `--color-sidebar-hover` | `#263c29` | Nav item hover state |
| `--color-sidebar-active` | `#2f4e35` | Active nav item background |
| `--color-sidebar-border` | `#243228` | Sidebar internal dividers |
| `--color-sidebar-brand` | `#e6f0e2` | "Rolling Acres" brand name, active nav text |
| `--color-sidebar-text` | `#c4d8bc` | Inactive nav item text |
| `--color-sidebar-muted` | `#6d9173` | Section labels, user footer, secondary sidebar text |
| `--color-amber` | `#c8943f` | Active nav left-border accent — morning light on a fence rail |

### Main Content — Warm Field Light

| Variable | Hex | Use |
|---|---|---|
| `--color-field` | `#f1ece2` | Page background — limestone/hay in sun |
| `--color-ivory` | `#fdfaf4` | Card/table backgrounds |
| `--color-straw` | `#dfd5c1` | Borders, dividers, table header background tint |
| `--color-bark` | `#2c2118` | Primary text — dark chestnut |
| `--color-earth` | `#6b5c4a` | Secondary text, table header labels |
| `--color-dust` | `#9b8874` | Placeholder / muted / empty-state text |

### Status & Accent

| Variable | Hex (bg / text) | Use |
|---|---|---|
| `--color-pasture-bg/text` | `#d5edda` / `#1b4f30` | "Current" badge — fresh grass green |
| `--color-harvest-bg/text` | `#ecddd0` / `#6b3a1e` | "Past" badge — dried leaves, autumn field |
| `--color-pond-bg/text` | `#d2dfe9` / `#1e3d52` | Charge type badge — stock-tank blue |

---

## Badge Variants

Defined in `src/web/src/components/ui/badge.tsx`.

| Variant | Use |
|---|---|
| `pasture` | Current tenant status |
| `harvest` | Past tenant status |
| `pond` | Charge type labels (PF, etc.) |
| `secondary` | Generic secondary label |
| `default` | Dark/inverted label |

---

## Component Conventions

### Sidebar
- Width: `w-60` (240px)
- Active nav item: amber left border (`2px solid var(--color-amber)`), `--color-sidebar-active` bg, brand-color text
- Hover: JS-driven style mutation (Tailwind can't target `:hover` with CSS vars cleanly)
- User footer: pinned bottom, `border-top`, muted text

### Cards / Table Containers
```
background: var(--color-ivory)
border: 1px solid var(--color-straw)
border-radius: 0.75rem (rounded-xl)
box-shadow: 0 1px 4px rgba(44,33,24,0.06), 0 4px 16px rgba(44,33,24,0.04)
```

### Table Header Row
- Background: `#f7f2e8` (slightly warmer than ivory — like the lightest dry grass)
- Column labels: uppercase, `0.75rem`, `letter-spacing: 0.06em`, `--color-earth`

### Table Row Hover
- `#f5eedf` — warm afternoon light on dusty ground, not clinical gray

### Filter Input
- Border: `--color-straw` at rest
- Border on focus: `--color-amber` (amber fence post glow)
- Background: `--color-ivory`

### Sort Indicators
- Color: `--color-amber` (↑ ↓)

---

## Page Background Texture

A very subtle fractal noise overlay (opacity 0.025) applied via `body::before` gives the cream background a slight earthen texture — the grain of old limestone or dried grass. Implemented in `index.css`.

---

## What to Avoid

- Generic grays (`gray-*` Tailwind classes) — replace with warm equivalents from this palette
- Blue-tinted neutrals — everything leans warm/green
- Inter, Roboto, system-ui as primary display fonts
- White (`#ffffff`) backgrounds — use `--color-ivory` or `--color-field`
- Purple or teal accents — the only accent color is amber
