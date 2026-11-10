# Architecture Notes

## Runtime flow

`main.jsx` mounts the React tree under `HashRouter`. `App.jsx` owns the route map, page title updates and shared shell. `SiteHeader` owns mobile navigation state and derives the active item from the current route. `SiteFooter` is shared across routes.

## Feature boundaries

- `features/space/pages`: route-level composition and page-specific interaction state.
- `features/space/components`: shared site chrome and repeated page primitives.
- `features/space/data`: plain JavaScript content collections, intentionally free from React and DOM dependencies.
- `lib`: small cross-feature helpers for base-aware asset URLs and navigation labels.

## Interaction model

The destination, crew and technology pages each keep a stable selected ID in local component state. The active content is derived from the relevant collection, so UI state does not duplicate the selected record. Buttons expose selected state through ARIA attributes.

## Styling and motion

The design system is implemented in `index.css` and `App.css` with tokens for color, typography, borders and spacing. Page transitions and selector transitions are CSS-based to avoid shipping an animation dependency for a small number of transitions. `prefers-reduced-motion` disables non-essential motion.

## Deployment model

`HashRouter` avoids reliance on server-side SPA rewrites. Asset URLs are resolved relative to `import.meta.env.BASE_URL`, which is configured to `/Space/` for GitHub Pages.
