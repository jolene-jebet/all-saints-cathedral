# All Saints Parish — Design System

Styling is done with inline JS style objects (no CSS framework/UI kit), backed by
a small set of CSS custom properties and shared components. This doc captures the
conventions so new pages/components stay visually consistent.

## Design Tokens

Defined in `src/styles/Globals.css` under `:root`. Always reference these via
`var(--token-name)` — never hardcode hex values in components.

| Token | Value | Use |
|---|---|---|
| `--olive` | `#5C6B3A` | Primary brand color — buttons, active nav, accents |
| `--olive-deep` | `#3D4A25` | Dark olive — hero/section backgrounds, hover states |
| `--olive-light` | `#7A8C4E` | Lighter olive — icon strokes, subtle accents |
| `--olive-pale` | `#EFF0E8` | Very pale olive — hover backgrounds, placeholder gradients |
| `--cream` | `#FAF8F2` | Primary background / light text-on-dark |
| `--warm` | `#F3EFE4` | Secondary section background (alternates with cream) |
| `--gold` | `#A8893A` | Section labels, dividers, links, small accents |
| `--gold-light` | `#C9A84C` | Gold accents on dark backgrounds |
| `--charcoal` | `#272720` | Primary text color, footer background |
| `--stone` | `#6B6B5A` | Secondary/muted text |
| `--divider` | `rgba(92,107,58,0.18)` | Borders, hairline separators |

Page background is generally `var(--cream)`, with sections alternating
`var(--cream)` / `var(--warm)` to create visual rhythm, and occasional
dark `var(--olive-deep)` or `var(--charcoal)` sections for contrast (footer,
history/CTA blocks).

## Typography

Two Google Fonts, loaded via `@import` in `src/styles/Globals.css`:

- **`'Cormorant Garamond', serif`** — display font. Used for all headings
  (`h1`/`h2`), large numerals, and emphasis (`<em>`). Typically `fontWeight: 300`
  or `400`, italic for accent words.
- **`'Jost', sans-serif`** — body/UI font. Used for paragraphs, nav, buttons,
  labels. Weights range `300` (body copy) to `500` (labels/buttons).

Common patterns:

```js
// Section title
const sectionTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 300,
  lineHeight: 1.1,
  color: 'var(--charcoal)',
  fontSize: 'clamp(38px, 5vw, 60px)',
};
// with an italic accent word in olive: <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>

// Hero title
fontSize: 'clamp(58px, 10vw, 120px)'

// Eyebrow / label text (see SectionLabel component)
fontFamily: "'Jost', sans-serif",
fontSize: 10,
letterSpacing: 5,
textTransform: 'uppercase',
color: 'var(--gold)',
fontWeight: 500,

// Body copy
fontFamily: "'Jost', sans-serif",
fontSize: 15,
fontWeight: 300,
lineHeight: 1.9,
color: 'var(--stone)', // or rgba(250,248,242,0.6) on dark backgrounds
```

Uppercase + wide letter-spacing (`letterSpacing: 2–5`) is used consistently for
nav links, buttons, labels, and table headers — never for body copy or headings.

## Layout & Spacing

- Content is wrapped in `<section>` blocks with generous vertical padding:
  `padding: '110px 60px'` is the standard section rhythm; hero sections use
  `140px 40px 100px` or similar.
- Inner content is centered and capped: `maxWidth: 1100, margin: '0 auto'`.
- Grids use `display: grid, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'`
  for card layouts (clergy, ministries, etc.), or fixed `1fr 1fr` for two-column
  text/image layouts.
- Section header block pattern (repeated on every page/section):
  ```jsx
  <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
    <SectionLabel text="..." />
    <h2 style={sectionTitle}>Title <em style={{ fontStyle: 'italic', color: 'var(--olive)' }}>Word</em></h2>
    <GoldRule centered />
  </div>
  ```

## Shared Components (`src/components/ui`)

- **`SectionLabel`** (`SectionLabel.jsx`) — small uppercase gold eyebrow text
  above a section title. Props: `text`, `light` (for dark backgrounds).
- **`GoldRule`** (`GoldRule.jsx`) — 50px thin divider line under headings.
  Props: `centered`, `light`, `style`.
- **`PlaceholderImg`** (`PlaceholderImg.jsx`) — renders a real `<img>` if `src`
  is provided, otherwise a styled placeholder (gradient + camera/cross icon) for
  photos not yet available. Props: `src`, `label`, `height`, `style`.

Layout components live in `src/components/layout`: `Navbar.jsx` (fixed, blurred
background, shrinks on scroll) and `Footer.jsx` (dark charcoal, 4-column grid).

## Buttons

Two variants, used consistently across hero/CTA sections:

```js
const btnPrimary = {
  padding: '14px 40px',
  background: 'var(--olive)',
  color: 'var(--cream)',
  border: 'none',
  cursor: 'pointer',
  fontSize: 10,
  letterSpacing: 3,
  textTransform: 'uppercase',
  fontFamily: "'Jost', sans-serif",
  fontWeight: 500,
  transition: 'all 0.3s',
};
// hover: background -> var(--olive-deep), transform: translateY(-2px)

const btnGhost = {
  padding: '14px 40px',
  background: 'transparent',
  color: 'var(--cream)', // or var(--charcoal) on light backgrounds
  border: '1px solid rgba(250,248,242,0.4)',
  cursor: 'pointer',
  fontSize: 10,
  letterSpacing: 3,
  textTransform: 'uppercase',
  fontFamily: "'Jost', sans-serif",
  fontWeight: 500,
  transition: 'all 0.3s',
};
// hover: borderColor/color -> var(--gold), transform: translateY(-2px)
```

Hover effects are handled via inline `onMouseOver`/`onMouseOut` handlers rather
than CSS `:hover` (since styles are inline objects).

## Animation

Keyframes defined globally in `src/styles/Globals.css`:

- `fadeUp` / `fadeDown` — entrance animation for hero/nav text, staggered with
  increasing `animation-delay` (e.g. `0.2s`, `0.4s`, `0.6s`...).
- `shimmer` — pulsing opacity, used on the hero scroll-hint line.
- `bob` — gentle vertical float, available for decorative elements.

**Scroll-reveal**: `.reveal`, `.reveal-left`, `.reveal-right` classes start
elements translated/transparent; a shared `useReveal()` hook (duplicated per
page as a local function) uses an `IntersectionObserver` to add `.visible` when
a `.reveal*` element enters the viewport, triggering the CSS transition.
Use `reveal` for fade-up-in-place, `reveal-left`/`reveal-right` for content
sliding in from the side (paired two-column layouts).

## Conventions

- All styling is inline `style={{ ... }}` objects — no CSS modules or
  styled-components for page content. Shared/static style objects (like
  `sectionTitle`, `btnPrimary`) are defined as consts at the bottom of the file.
  Global CSS is reserved for tokens, fonts, keyframes, and reveal classes.
  New components should follow the same pattern.
- Decorative background textures use a low-opacity (`0.04`–`0.05`) repeating
  gradient overlay on dark sections for subtle grid/diagonal texture.
- In-page anchor links (e.g. hero CTA buttons that jump to a section) use a
  DOM `id` on the target section and `element.scrollIntoView({ behavior: 'smooth' })`
  on click — see the "Mass Schedule" button on the Home page.
