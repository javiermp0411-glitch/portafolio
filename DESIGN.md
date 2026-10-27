---
version: alpha
name: Javier Montero Portfolio
description: Dark, minimal portfolio design system for the ddulce-landing Astro site.
colors:
  background: "#121212"
  foreground: "#f5f5f5"
  body-copy: "#d1d5db"
  muted: "#9ca3af"
  subtle: "#6b7280"
  border: "#1f2937"
  surface: "#1a1a1a"
  surface-hover: "#202020"
  action-primary-bg: "#f5f5f5"
  action-primary-fg: "#121212"
  action-secondary-bg: "#1a1a1a"
  action-secondary-fg: "#d1d5db"
typography:
  hero-title:
    fontFamily: Onest Variable
    fontSize: 2.25rem
    fontWeight: 700
  section-title:
    fontFamily: Onest Variable
    fontSize: 1.875rem
    fontWeight: 700
  card-title:
    fontFamily: Onest Variable
    fontSize: 1.25rem
    fontWeight: 700
  body:
    fontFamily: Onest Variable
    fontSize: 0.875rem
  metadata:
    fontFamily: Onest Variable
    fontSize: 0.75rem
  footer:
    fontFamily: monospace
    fontSize: 0.75rem
rounded:
  control: 9999px
  card: 1rem
  image: 0.75rem
  icon-tile: 0.75rem
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button:
    shape: rounded-full
    text: text-sm
    gap: 8px
    padding: 8px 14px
  tech-icon:
    size: 24px
    tile-size: 40px
    shape: rounded-xl
  card:
    background: transparent
    border: 1px solid #1f2937
    radius: rounded-2xl
    padding: 20px
---

## Overview

The interface is a restrained dark portfolio: quiet surfaces, crisp typography, generous spacing, and small interaction details. Keep visual hierarchy clear and avoid adding decorative UI that competes with the work.

## Color and surfaces

Use the near-black page background and soft off-white primary text. Gray tones distinguish body copy, metadata, and borders. Cards remain transparent or use a barely visible white tint; hover states may brighten the border and surface subtly. Primary actions use a white fill and dark text, while secondary actions use a dim surface and gray border. A muted gray gradient may accent the Hero and section headings, but should not dominate content.

## Typography and hierarchy

Onest Variable is the primary typeface. The Hero keeps its larger, expressive responsive heading as the page introduction. Section headings share a 2xl-to-3xl scale, and project or experience card headings use lg-to-xl. Descriptions remain compact at 14px with relaxed line-height; publication dates and other metadata use 12px muted text. Reserve monospace styling for the footer and small technical details.

## Layout and components

Center content in the existing approximately 800px-wide layout with responsive side padding. Use transparent cards with subtle gray borders, 16px corners, and around 20px padding. Separate dense content with a thin border and moderate spacing. Images are full-width, intrinsically sized, and clipped in rounded bordered frames. Tech-stack marks use 24px icons inside compact 40px rounded tiles. Company names are plain muted text preceded by the small At icon, not badges.

## Actions and motion

Buttons use 14px text, a 14px horizontal inset, an 8px vertical inset, and pill-shaped corners. Provide a subdued bordered secondary action and a white primary action. Hover feedback should be short and subtle: brighten the text or border and slightly lift the surface. Avoid distracting movement, and respect reduced-motion preferences.

## Responsive behavior and accessibility

Stack headers, content, and action groups on narrow screens; only use horizontal alignment when space permits. Allow titles and company names to wrap. Use semantic headings and landmarks, descriptive image alternative text, accessible link names, and safe `rel="noopener noreferrer"` attributes for external links. Keep text contrast clear against the dark background.
