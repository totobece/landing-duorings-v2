# Duo Rings — Landing Page v2

Landing page oficial de **Duo Rings™**, el dúo de anillas aéreas formado por Flora Aracama y Nico Busso.

Construida con **Next.js 16**, **Tailwind CSS v4** y **shadcn/ui**.

## Estructura de idiomas

- `/` redirige a `/es`
- `/es` — versión en español
- `/en` — versión en inglés

Los idiomas se manejan con páginas HTML estáticas independientes, sin librerías de i18n.

## Páginas independientes

- `/masterclass/` y `/en/masterclass/` — landing de la Masterclass presencial.
- `/speakers/` y `/en/speakers/` — página de speakers para contratación.

Son rutas de Next que reutilizan el mismo `Navbar` y `Footer` del home. El
selector EN/ES cambia de idioma manteniendo la página (`/masterclass/` ↔
`/en/masterclass/`, `/speakers/` ↔ `/en/speakers/`). El contenido editorial vive
en `app/masterclass/content*.html` y `app/speakers/content*.html`;
`npm run pages:content` lo convierte en módulos (`components/pages/*-html.ts`) y
corre automáticamente antes de `dev` y `build`.

## Scripts

```bash
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # build de producción estático (output en /dist)
npm run start    # servidor de producción (requiere build previo)
```

## Build estático

El proyecto está configurado para exportación estática:

```ts
// next.config.ts
output: "export"
distDir: "dist"
```

## Secciones

- **Hero** con video de fondo y marquee de partners
- **Bio** con imagen animada y texto expandible
- **Shows** con timeline interactivo, carruseles de imágenes y links a videos
- **Contacto** con mailto
- **Footer** con redes sociales y link a The Rings Method

## Tecnologías

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- shadcn/ui
- Framer Motion
- TypeScript
