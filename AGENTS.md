# Portfolio — Luis

React 19 + TypeScript SPA (Vite). Single package, no tests, no monorepo.

## Commands

| Command           | What                        |
| ----------------- | --------------------------- |
| `npm run dev`     | Vite dev server             |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Preview production build    |
| `npm run lint`    | ESLint flat config          |
| `npm run format`  | Prettier (write)            |
| `npm run deploy`  | `gh-pages -d dist`          |

No typecheck script exists — run `npx tsc --noEmit` manually if needed.

## Code conventions

- **Path alias**: `@/` → `src/` (Vite + tsconfig `paths`)
- **Formatting**: Prettier — `semi`, `singleQuote`, `printWidth 100`, `tabWidth 2`, `trailingComma "es5"`, `arrowParens "avoid"`
- **Lint**: Flat `eslint.config.js`, TS parser + React + import ordering (`builtin > external > internal`)
- **UI**: MUI v7 (`@mui/material`, `@mui/icons-material`, `@emotion/react`)
- **Animation**: `framer-motion`
- **Routing**: `react-router-dom` (BrowserRouter, `basename="/portfolio"`; SPA fallback via `public/404.html`)
- **i18n**: Custom lightweight `LanguageContext` + `src/i18n.ts` (`t(key)` + `pick(Localized, lang)`). Content data in `src/data/portfolio.ts` is bilingual (`{ es, en }`).
- **Theme**: `ThemeModeContext` toggles light/dark, persisted in localStorage.
- **Clean code / SOLID**: Single-responsibility components, small focused functions, composition over inheritance, dependency injection via props/hooks, clear separation of concerns.
- **Component size**: Prefer many small components over few large ones. Extract UI primitives, layout wrappers, and logic hooks.

## Architecture

```
src/
├── main.tsx          Entry (providers: Language → ThemeMode → BrowserRouter)
├── App.tsx           Layout + routes (`/`, `/proyecto/:slug`); lazy ProjectDetail
├── theme.ts          `getTheme(mode)` light/dark palettes
├── i18n.ts           Bilingual messages + `pick()` / `t()` helpers
├── context/          LanguageContext, ThemeModeContext
├── hooks/            useScrollSpy, useSeo
├── lib/              scroll.ts (scrollToId)
├── pages/
│   ├── Home.tsx          All sections with framer-motion reveal
│   └── ProjectDetail.tsx Detail page (gallery Lightbox, tech chips, related projects)
├── components/       All UI components
│   ├── Navbar.tsx     Logo, section links (scrollspy), theme/lang toggles, socials, mobile drawer
│   ├── AboutMe.tsx    Name + role + description + CTAs (projects / contact / CV)
│   ├── Skills.tsx     Tech skills grouped by category as chips
│   ├── Jobs.tsx       Work experience (CardJob per entry)
│   ├── CardJob.tsx    Single experience card
│   ├── Services.tsx   Freelance offerings + featured SaaS card (demo + WhatsApp CTA)
│   ├── Projects.tsx   Projects grid (CardProject per entry)
│   ├── CardProject.tsx  Card with screenshot, highlights, detail/demo buttons
│   ├── Education.tsx  Degrees + certifications
│   ├── Blog.tsx       Post cards + reading Dialog (placeholder content)
│   ├── Contact.tsx    Mailto form + WhatsApp (wa.me/50360653681) + socials
│   ├── Lightbox.tsx   Gallery dialog for project screenshots
│   ├── ScrollToTopButton.tsx  Floating FAB
│   ├── SectionHeading.tsx  Reusable section title
│   ├── icons.tsx      Inline SVGs: GitHub, LinkedIn, WhatsApp
│   └── Footer.tsx     Quick links, socials, copyright
├── data/             Data / content (portfolio.ts, bilingual)
└── assets/
    ├── logov1.png     Navbar logo + AboutMe avatar + favicon
    ├── logov2.png     Unused
    └── screenshots/   Per-project placeholder SVGs (replace with real captures)
```

`public/` also holds `cv.pdf` (placeholder), `robots.txt`, `sitemap.xml`, and `404.html` (SPA deep-link redirect).

## AboutMe

- **Layout**: Flex row — left column (name h3 + role + description body1 + CTAs), right column (Avatar 140x140 circular)
- **Description**: Bilingual in `src/i18n.ts` (`about.description`) with `{years}` computed dynamically from July 2023.

## Projects

- **Content**: `data/portfolio.ts` — `projectsDescription`, one entry per role highlighting the biggest project without too much detail: Banco Agricola (ETLs multihilo + observability for cards/payments), Freelance (Taller SaaS multitenant), Serfinsa (payments SaaS with Visa Direct/Mastercard integrations + multitenant monitoring).
- **Layout**: `components/Projects.tsx` — section title + responsive 2-col grid of `CardProject` (title, context with role/company, bullet-point highlights).

## Services

- **Content**: `data/portfolio.ts` — `servicesDescription` (4 freelance offers) + `featuredSaas` (2 featured SaaS cards: a multitenant SaaS for auto workshops — built from the taller2 project: Spring Boot, JWT, plans/modules, per-tenant branding, WhatsApp, MinIO, PDF reports, demo at `https://taller-web-o9yv.onrender.com/` — and a payments SaaS integrating Visa Direct and Mastercard Send from the Serfinsa role).
- **Layout**: `components/Services.tsx` — section title, full-width highlighted SaaS cards (border `primary.main`, tech stack, feature list, demo link when available, WhatsApp CTA), then a responsive 2-col grid of service cards.

## Deploy

- **CI**: GitHub Actions on push to `dev` branch → GitHub Pages. Node LTS, `npm ci`, `npm run build`.
- **Manual**: `npm run deploy` (gh-pages) or `./deploy.sh` (force-pushes `dist/` to `gh-pages` branch).
