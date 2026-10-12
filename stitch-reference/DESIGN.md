---
name: Obsidian & Chalk Editorial
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1d'
  surface-container: '#1f2021'
  surface-container-high: '#292a2b'
  surface-container-highest: '#343536'
  on-surface: '#e3e2e3'
  on-surface-variant: '#e6beb2'
  inverse-surface: '#e3e2e3'
  inverse-on-surface: '#303032'
  outline: '#ad897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59e'
  primary: '#ffb59e'
  on-primary: '#5e1700'
  primary-container: '#ff571a'
  on-primary-container: '#521300'
  inverse-primary: '#ae3200'
  secondary: '#c8c6c0'
  on-secondary: '#30312c'
  secondary-container: '#494944'
  on-secondary-container: '#bab8b2'
  tertiary: '#c6c6cb'
  on-tertiary: '#2e3035'
  tertiary-container: '#8f9095'
  on-tertiary-container: '#282a2e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#852400'
  secondary-fixed: '#e4e2db'
  secondary-fixed-dim: '#c8c6c0'
  on-secondary-fixed: '#1b1c18'
  on-secondary-fixed-variant: '#474742'
  tertiary-fixed: '#e2e2e7'
  tertiary-fixed-dim: '#c6c6cb'
  on-tertiary-fixed: '#1a1c20'
  on-tertiary-fixed-variant: '#45474b'
  background: '#121315'
  on-background: '#e3e2e3'
  surface-variant: '#343536'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 96px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md-mobile:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lead:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-default:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  mono-index:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  mono-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
spacing:
  gutter: 1.5rem
  gutter-desktop: 3rem
  margin: 1.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
  space-2xl: 8rem
---

## Brand & Style

This design system exists at the intersection of haute-couture Swiss typography, bespoke European architectural engineering, and unapologetic editorial brutalist-minimalism. Designed specifically for Marwan Ibrahim, it rejects every pervasive Silicon Valley trope: rounded neon pills, gratuitous violet gradients, muddy glassmorphism, and sterilized software interfaces are strictly forbidden.

The identity embodies unyielding precision, architectural weight, and tactile authority:
- **Atmosphere:** Severe, quiet luxury. It feels like an archival monograph printed on heavy uncoated stock, bound with cold-rolled titanium fixtures.
- **Rhythm & Tension:** Massive, uncompromising headline scales set against whisper-quiet, laser-calibrated monospaced data tags. Asymmetry replaces formulaic card grids; generous vacuum-like negative space creates an atmosphere of deliberateness and permanence.
- **Materiality:** Matte obsidian grounds the canvas, paired with warm architectural stone and raw structural titanium, punctuated only by a searing, laser-guided vermilion signal accent.

## Colors

The palette is engineered with stark tonal restraint and tectonic contrast:

- **Matte Obsidian Black (`#08090a`):** The primary void. An ultra-deep, matte black canvas with zero saturation that absorbs visual noise and grounds typography.
- **Titanium Raw Gray (`#1c1e22`):** Structural planes, hair-thin architectural borders, viewport frames, and surface containers.
- **Warm Stone / Muted Chalk (`#e8e6df`):** The primary textual ink and light-fill surface. Warm, tactile, and natural—diverging sharply from sterile default greys.
- **Electric Vermilion (`#ff4d00`):** An industrial-grade safety signal. Used sparingly and surgically for live status telemetries, hover states, index markers, and micro-accents. Never applied as ambient background wash or blur.
- **Stark Cold White (`#ffffff`):** Reserved exclusively for active cursor readouts, high-priority typographic emphasis, and monumental titles.

Secondary support swatches include `Titanium Muted (#2a2d34)` for active division boundaries and `Chalk Subdued (#8d8a83)` for secondary metadata and technical indexing.

## Typography

The typographic hierarchy establishes dynamic tension between architectural weight and micro-precision:

- **Display & Headlines (`Syne`):** Unconventional, monumental, and structural. Letters possess sculptural presence with compressed tight tracking. Headlines command immediate spatial authority.
- **Body & Editorial Narratives (`Manrope`):** Clean, neutral European modernist grotesque that delivers fatigue-free reading across project case studies, philosophy essays, and client dossiers.
- **Metadata, Indices & Telemetry (`JetBrains Mono`):** Exacting, functional notation. All dates, coordinates, project statuses, client taxonomies, and technical indices are formatted strictly in uppercase JetBrains Mono with widened letter spacing (`0.06em` to `0.1em`).

## Layout & Spacing

The layout is grounded in a Swiss editorial grid paired with asymmetrical editorial cadence:

- **Desktop (12 Columns):** 12 structural columns bounded by `margin-desktop: 4rem` and `gutter-desktop: 3rem`. Content intentionally eschews centered symmetry; key headlines may span 7 columns, offset by an empty 2-column spatial vacuum, followed by a 3-column micro-data rail.
- **Tablet (8 Columns):** Standardized 8-column layout with 2rem margins and gutters.
- **Mobile (4 Columns):** Unified 4-column column layout with razor-thin 1px horizontal coordinate dividers separating narrative sections.
- **Architectural Rhythm:** Spacing is structural rather than arbitrary. Massive top padding (`space-2xl: 8rem`) introduces editorial projects, balanced by micro-paddings (`space-xs` and `space-sm`) around technical label brackets. Elements align to crisp, visible grid lines.

## Elevation & Depth

This system outright forbids drop shadows, ambient blur halos, and elevation tiers that mimic floating layers. Depth is constructed strictly through tectonic planar stratification and hairline physical division:

- **Zero Diffusion:** No `box-shadow` or Gaussian blurs exist anywhere in the interface.
- **Bespoke Framing Lines:** Boundaries are established with crisp 1px borders in `Titanium Raw Gray (#1c1e22)` or `Titanium Muted (#2a2d34)`. Panels intersect as interlocking architectural planes rather than layered cards.
- **Surface Inversion:** Visual prominence is achieved via contrast swaps. A focused element does not elevate into z-space; it inverts its surface from matte black to chalk white or flashes an electric vermilion status edge.
- **Perimeter Viewports:** Media assets and framed project viewports sit recessed behind razor-sharp 1px bounding boxes, labeled with perimeter coordinates and index markers at the intersection corners.

## Shapes

The geometric vocabulary is strictly 90-degree orthogonal brutalism (`roundedness: 0`):

- **Absolute Sharp Corners:** Every button, container, input field, and viewport is cut with `0px` border-radius. Curves are completely omitted to maintain engineering rigor.
- **Chiseled Accents:** Interactive indicators, caret markers, and architectural tags employ strict geometric glyphs: solid squares (`■`), diagonal slashes (`/`), and monospaced crosshairs (`+`).
- **Framed Apertures:** Image and video viewports function as mechanical apertures, bounded by monolithic rectilinear borders without corner rounding.

## Components

### Action Triggers (Buttons)
- **Primary:** Stark Rectilinear Chalk surface (`#e8e6df`), text set in black uppercase `JetBrains Mono`, zero border radius. On hover, the surface inverts immediately to Electric Vermilion (`#ff4d00`) with Stark Cold White typography without transitional easing lag.
- **Secondary / Ghost:** Matte Obsidian Black background, 1px perimeter border in `#1c1e22`, Warm Stone typography. On hover, border switches to Vermilion, accompanied by a prefixed coordinate indicator: `[ + ]`.

### Project Viewports & Dossier Cards
- Replaces standard dashboard cards. A 1px Titanium-bordered rectangular chassis featuring a top technical bar containing the client code, year, and category index in `mono-telemetry`. Media sits in native aspect ratio without rounded masks. Hovering over a viewport triggers a 1px Vermilion bracket highlight around the card perimeter.

### Chips & Index Tags
- Enclosed strictly within monospaced brackets: `[ 01 // ARCHITECTURE ]` or `[ STATUS : PRODUCTION ]`.
- No pill backgrounds. Background remains transparent; text is rendered in `JetBrains Mono` at 11px uppercase in Warm Stone, with optional Vermilion telemetry dot indicators (`●`).

### Form Elements & Text Inputs
- Single bottom rule or 1px perimeter frame in `#1c1e22`. Transparent interior. Text typed in `#ffffff`.
- Active focus state immediately converts the border to 1px Electric Vermilion (`#ff4d00`) with no surrounding glow or ring blur. Placeholder text rendered in muted stone chalk (`#8d8a83`) with monospace styling.

### Status Indicators & Toggles
- Custom mechanical switches: Rectangular binary slides with razor 1px borders. Active state represented by a solid vermilion square block (`■ ACTIVE`).
- Live system telemetries display a pulsating 4px sharp square blinker in Electric Vermilion.

### Lists & Case Study Tables
- Monolithic horizontal dividers with full canvas stretch. Columns partitioned by index number, project monograph title, client discipline, and production year. On row hover, the entire strip undergoes a subtle background tint shift to `#121316`, shifting the trailing arrow icon (`→`) by 4px.