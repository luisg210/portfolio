# Portfolio — Luis

Portfolio personal desarrollado con React 19 + TypeScript + Vite. Diseño dark mode con MUI v7 y animaciones con Framer Motion.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite 7**
- **MUI v7** (`@mui/material`, `@emotion/react`)
- **Framer Motion**
- **ESLint** + **Prettier**

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Build producción en `dist/` |
| `npm run preview` | Previsualiza el build local |
| `npm run lint` | Ejecuta ESLint |
| `npm run format` | Formatea con Prettier |
| `npm run deploy` | Publica en GitHub Pages (`gh-pages -d dist`) |

## Deploy

El proyecto se despliega automáticamente a **GitHub Pages** mediante **GitHub Actions** al hacer push a la rama `dev`.

También se puede publicar manualmente:

```sh
npm run deploy
```

## Secciones

- **AboutMe** — Nombre + descripción y avatar circular.
- **Skills** — Habilidades técnicas agrupadas por categoría (chips).
- **Jobs** — Experiencia laboral (una tarjeta por empleo).
- **Projects** — El proyecto más grande de cada empleo, resumido sin entrar en detalle.
- **Services** — Servicios freelance + SaaS destacado (gestión de talleres multitenant).
- **Footer** — Pie de página con copyright.

## Estructura

```
src/
├── main.tsx             Entry point (ThemeProvider)
├── App.tsx              Componente raíz (layout inline + animaciones de sección)
├── theme.ts             Tema oscuro MUI
├── components/          Componentes de UI
│   ├── Navbar.tsx       Logo como imagen, sin texto
│   ├── AboutMe.tsx      Nombre + descripción + avatar circular
│   ├── Skills.tsx       Habilidades por categoría como chips
│   ├── Jobs.tsx         Experiencia laboral (CardJob por entrada)
│   ├── CardJob.tsx      Tarjeta individual de experiencia
│   ├── Services.tsx     Ofertas freelance + tarjeta SaaS destacada
│   ├── Projects.tsx     Sección de proyectos (CardProject por entrada)
│   ├── CardProject.tsx  Tarjeta individual de proyecto
│   └── Footer.tsx       Pie de página
├── data/                Datos y contenido (portfolio.ts)
└── assets/              Imágenes y recursos estáticos
```
