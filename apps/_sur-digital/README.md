# Sur Digital

Sitio de Sur Digital, agencia de diseño web en Málaga. Landing pages, webs
corporativas, tiendas online y SEO local. Generado con
[Astro](https://astro.build) + Tailwind 4 + daisyUI, desplegado en Vercel.

## Comandos

| Comando             | Acción                                          |
| :------------------ | :---------------------------------------------- |
| `bun install`       | Instala dependencias                             |
| `bun dev`           | Servidor de desarrollo en `localhost:4321`       |
| `bun build`         | Build de producción a `./dist/`                 |
| `bun preview`       | Sirve el build localmente                        |
| `bun astro check`   | Diagnóstico de tipos y plantillas                |

## Estructura

```text
src/
├── components/   Secciones de la home y componentes reutilizables
├── content/blog/ Artículos en Markdown (colección "blog")
├── data/         Datos de contenido (data.astro, sectors.ts, contact.ts)
├── icons/        Iconos SVG reutilizables
├── layouts/      Layout base con metadatos, OG y JSON-LD
├── pages/        Rutas: home, precios, servicios, blog, landings por sector
└── styles/       CSS global, animaciones de entrada y efectos de texto
integrations/     Integración propia que genera tarjetas 1080×1080
```

## Contacto

El sitio tiene **un único canal de contacto**: la página de LinkedIn de Sur
Digital (`linkedin.com/company/sur-digital-malaga`). Vive en `src/data/contact.ts`
y se importa desde los componentes, de modo que cambiar de canal es editar una
sola constante.

## Contenido

- **Home** (`src/pages/index.astro`): sección a sección con componentes.
- **Landings por sector** (`src/pages/web-para-[sector].astro`): una página por
  sector definida en `src/data/sectors.ts`.
- **Blog** (`src/content/blog/`): artículos Markdown. Para publicar uno nuevo,
  añade el `.md` con `title`, `description`, `pubDate` y `category` en el
  frontmatter. El buscador usa Pagefind y las tarjetas OG se generan solas.
- **Precios y extras**: `DATA.plans` y `DATA.extras` en `src/data/data.astro`.

## SEO

- `site` en `astro.config.mjs` es la fuente del dominio (canonical, OG, sitemap,
  RSS). Si cambias de dominio, actualiza también `public/robots.txt`.
- Imágenes OG generadas en `/og/<ruta>.png` por `src/pages/og/[...route].ts`;
  las variantes cuadradas las crea la integración `social-cards` en build.
- `Layout.astro` centraliza canonical, Open Graph, Twitter Card y el slot
  `head` para inyectar JSON-LD.

## Despliegue

Proyecto estático en Vercel: basta con `bun run build`. La única variable de
entorno opcional es `PUBLIC_GOOGLE_SITE_VERIFICATION` (ver `.env.example`).
