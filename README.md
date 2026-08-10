# Portfolio — Luis

Portfolio personal desarrollado con React 19 + TypeScript + Vite. Modo claro/oscuro con MUI v7, animaciones con Framer Motion, routing con React Router e i18n ES/EN.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite 7**
- **MUI v7** (`@mui/material`, `@mui/icons-material`, `@emotion/react`)
- **React Router** (`react-router-dom`)
- **Framer Motion**
- **ESLint** + **Prettier**

## Scripts

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo                |
| `npm run build`   | Build producción en `dist/`                  |
| `npm run preview` | Previsualiza el build local                  |
| `npm run lint`    | Ejecuta ESLint                               |
| `npm run format`  | Formatea con Prettier                        |
| `npm run deploy`  | Publica en GitHub Pages (`gh-pages -d dist`) |

## Deploy

El proyecto se despliega automáticamente a **GitHub Pages** mediante **GitHub Actions** al hacer push a la rama `dev`.

También se puede publicar manualmente:

```sh
npm run deploy
```

## Secciones

- **AboutMe** — Nombre + rol, descripción bilingüe con años de experiencia dinámicos, avatar circular y CTAs (proyectos / contacto / CV).
- **Skills** — Habilidades técnicas agrupadas por categoría (chips).
- **Jobs** — Experiencia laboral (una tarjeta por empleo).
- **Services** — Servicios freelance + SaaS destacado (gestión de talleres multitenant) con CTA de demo y WhatsApp.
- **Projects** — Proyectos destacados con capturas, enlazados a páginas de detalle (`/proyecto/:slug`).
- **Education** — Educación y certificaciones.
- **Blog** — Artículos con diálogo de lectura (contenido de ejemplo).
- **Contact** — Formulario (mailto) + WhatsApp (`wa.me/50360653681`) + redes.
- **Footer** — Enlaces rápidos, redes y copyright.

## Funcionalidades

- **Modo claro/oscuro** persistido en `localStorage`.
- **Idioma ES/EN** con contenido bilingüe (toggle en la navbar).
- **Navegación** con scrollspy, scroll suave y menú móvil (drawer).
- **Detalle de proyectos** con galería (Lightbox), stack tecnológico y proyectos relacionados.
- **SEO**: meta tags, `robots.txt` y `sitemap.xml`.
- **SPA deep links**: `public/404.html` redirige rutas profundas en GitHub Pages.

## Estructura

```
src/
├── main.tsx             Entry point (providers: Language → ThemeMode → BrowserRouter)
├── App.tsx              Layout + rutas (`/`, `/proyecto/:slug`); ProjectDetail lazy
├── theme.ts             Paletas claro/oscuro (`getTheme(mode)`)
├── i18n.ts              Mensajes bilingües + helpers `pick()` / `t()`
├── context/             LanguageContext, ThemeModeContext
├── hooks/               useScrollSpy, useSeo
├── lib/                 scroll.ts
├── pages/
│   ├── Home.tsx             Todas las secciones con reveal animado
│   └── ProjectDetail.tsx    Detalle de proyecto (galería, tech, relacionados)
├── components/          Componentes de UI (Navbar, AboutMe, Skills, Jobs, Services,
│                        Projects, Education, Blog, Contact, Lightbox, ...)
├── data/                Datos y contenido bilingüe (portfolio.ts)
└── assets/              Imágenes, logo y capturas de proyectos
```

`public/` contiene `cv.pdf`, `robots.txt`, `sitemap.xml` y `404.html`.
