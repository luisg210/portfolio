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

## Estructura

```
src/
├── main.tsx          Entry point (ThemeProvider)
├── App.tsx           Componente raíz
├── theme.ts          Tema oscuro MUI
├── components/       Componentes de UI
├── data/             Datos y contenido
└── assets/           Imágenes y recursos estáticos
```
