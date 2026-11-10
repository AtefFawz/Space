# Orbital Design System

## Visual direction

Orbital uses an editorial aerospace aesthetic: deep ink surfaces, cool atmospheric highlights and a restrained warm accent. The goal is to feel cinematic without sacrificing reading comfort or interface clarity.

## Color tokens

| Token | Value | Role |
| --- | --- | --- |
| Ink | `#070b18` | Main background |
| Ink soft | `#0d1426` | Raised background |
| Ice | `#a9e8f4` | Primary accent and active states |
| Ice strong | `#73d5e9` | Strong accent variation |
| Coral | `#f0a17d` | Secondary accent and markers |
| Text | `#f3f5fa` | Primary text |
| Muted | `#a4b1c5` | Supporting text |

## Typography

- Manrope: UI, body copy and navigation.
- Playfair Display: large editorial titles and data highlights.
- DM Mono: metadata, labels, section numbers and technical annotations.

System fallbacks remain configured if Google Fonts are unavailable.

## Motion principles

- Page transitions use a short opacity and vertical-position entrance.
- Planet artwork drifts slowly to add depth without distracting from content.
- Orbit lines rotate slowly as ambient decoration.
- Selection changes use a short fade/translate transition.
- The `prefers-reduced-motion` media query disables non-essential animation.

## Responsive behavior

- Wide screens use a horizontal navigation rail and asymmetric content layouts.
- Tablet widths tighten navigation and reduce orbital decoration.
- Mobile uses a right-side navigation drawer, single-column content and compact selectors.
