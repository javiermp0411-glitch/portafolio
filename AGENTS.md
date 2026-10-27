## Project-specific guidance

- This is a single Astro site (not a monorepo). Routes live in `src/pages/`; shared UI is in `src/components/`; project entries are Markdown files in `src/content/projects/`, validated by `src/content.config.ts`.
- Dynamic project detail pages use `src/pages/projects/[id].astro` and must export `getStaticPaths()` because the site builds statically.
- `DESIGN.md` is the repository's Google `@google/design.md` design-system specification. Preserve its YAML token front matter and use it when changing UI. Validate with `npx design.md lint DESIGN.md` (or `npx @google/design.md lint DESIGN.md`).

## Commands

- Start the development server in background mode: `astro dev --background`.
- Manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
- Production build: `npm run build` (also validates static routes and Astro compilation).
- Preview a production build: `npm run preview`.
- `package.json` currently defines no test, lint, or typecheck scripts; don't assume those commands exist.

Run commands from the repository root. The project requires Node `>=22.23.4`. Tailwind CSS 4 is integrated through `@tailwindcss/vite` in `astro.config.mjs`, with its import in `src/styles/global.css`.
