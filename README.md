# ORBITAL — Beyond the Familiar

An immersive, responsive space-exploration concept built with React 19, Vite and React Router. The project explores four destinations, introduces real-world spaceflight profiles, and explains three foundational mission systems through an editorial, cinematic interface.

> **Scope note:** ORBITAL is a front-end concept experience. It does not sell tickets, accept reservations, or represent a real spaceflight operator. Travel durations are illustrative content inherited from the concept and are not live mission estimates.

## Highlights

- Four route-based sections: Home, Destination, Crew and Technology.
- Responsive navigation with active-route states, Escape-to-close behavior and accessible labels.
- Interactive destination, crew and technology selectors.
- Data-driven content separated from presentation components.
- Purposeful motion: page entrances, selector transitions, orbital details and hover feedback.
- Reduced-motion support via `prefers-reduced-motion`.
- Optimized WebP image assets to reduce transfer size.
- A custom 404 route, page-specific document titles and Open Graph metadata.
- GitHub Pages support through Vite's `/Space/` base path and `HashRouter`.
- Node's built-in test runner for content integrity and asset checks.

## Tech stack

- React 19
- Vite 7
- React Router 7
- Modern CSS (no utility CSS framework or component library)
- Node.js built-in test runner

## Getting started

Use Node.js 20.19+ or 22.12+ (required by Vite 7), then:

```bash
npm ci
npm run dev
```

Vite prints the local address. With the configured GitHub Pages base path, the development app is typically available at `http://localhost:5173/Space/`.

## Quality checks

```bash
npm run lint
npm test
npm run build
npm run preview
```

## Project structure

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── features/
│   └── space/
│       ├── components/   # Shared shell, navigation and page primitives
│       ├── data/         # Destination, crew and technology content
│       └── pages/        # Route-level page composition
└── lib/                  # Asset and navigation helpers

public/
├── images/               # Optimized WebP assets
└── favicon.svg

tests/                    # Content, route and asset integrity tests
docs/                     # Architecture and maintenance notes
```

## Architecture decisions

### Feature-first organization

The route-level pages live under `features/space/pages`; shared feature components live under `features/space/components`; the content source of truth is in `features/space/data`. This keeps UI composition, content and route behavior separate without adding abstraction for its own sake.

### Data-driven selectors

Destinations, crew profiles and technology records are data collections. Their selector components derive the active record from a stable ID instead of storing duplicate objects in state. Adding a record therefore requires a data change rather than another hard-coded page branch.

### Asset paths and deployment

All image paths are resolved through `src/lib/assets.js`, which uses Vite's `import.meta.env.BASE_URL`. This keeps assets working at the root during development and under `/Space/` on GitHub Pages.

### Navigation

The app uses `HashRouter` because GitHub Pages does not provide SPA route rewrites by default. Existing capitalized routes (`/Destination`, `/Crew`, `/Technology`) remain supported alongside lowercase paths.

## Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

The repository must have GitHub Pages configured to publish from the `gh-pages` branch. The Vite base path in `vite.config.js` and the repository name must stay aligned (`/Space/`).

## Accessibility and motion

- Semantic landmarks and descriptive image alternatives.
- Active navigation is exposed through React Router's active link behavior.
- Selector buttons expose `aria-selected` or `aria-pressed` states.
- Mobile navigation supports Escape and reports its expanded state.
- Focus-visible outlines remain visible for keyboard users.
- Motion is reduced when the operating system requests reduced motion.

## Content notes

Crew descriptions summarize public spaceflight roles and missions. Destination distances and travel durations are presented as concept content and should be reviewed before use in any factual or commercial product.
