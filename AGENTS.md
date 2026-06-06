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
- **UI**: MUI v7 (`@mui/material`, `@emotion/react`)
- **Animation**: `framer-motion`
- **Clean code / SOLID**: Single-responsibility components, small focused functions, composition over inheritance, dependency injection via props/hooks, clear separation of concerns.
- **Component size**: Prefer many small components over few large ones. Extract UI primitives, layout wrappers, and logic hooks.

## Architecture

```
src/
├── main.tsx          Entry point (ThemeProvider wrapper)
├── App.tsx           Root component (inline layout)
├── theme.ts          MUI dark theme config
├── components/       All UI components
│   ├── Navbar.tsx     Logo (logov1.png) as image, no text
│   └── AboutMe.tsx    Name + description (left) + circular avatar (right)
├── data/             Data / content (portfolio.ts)
└── assets/           Static assets
    ├── logov1.png     Navbar logo + AboutMe avatar + favicon
    └── logov2.png     Unused
```

## AboutMe

- **Layout**: Flex row — left column (name h3 + description body1), right column (Avatar 140x140 circular)
- **Description**: "Desarrollador Full-Stack con más de 3 años de experiencia creando soluciones tecnológicas para los sectores bancario y fintech. Especializado en React, TypeScript, Spring Boot y Python, con un enfoque en código limpio, arquitecturas mantenibles y resolución de problemas complejos."

## Deploy

- **CI**: GitHub Actions on push to `dev` branch → GitHub Pages. Node LTS, `npm ci`, `npm run build`.
- **Manual**: `npm run deploy` (gh-pages) or `./deploy.sh` (force-pushes `dist/` to `gh-pages` branch).
