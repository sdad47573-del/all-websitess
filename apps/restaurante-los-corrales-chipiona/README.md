# Restaurante Los Corrales

Landing page estática en Astro para Restaurante Los Corrales, Chipiona
(paseo de las Canteras, s/n · 11550 Chipiona, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-los-corrales-chipiona
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: Paseo de las Canteras s/n, 11550 Chipiona, 36.7398127,-6.439965,
  teléfono 956 37 51 29, valoración 4,4 (1.716 reseñas), miércoles cerrado, resto 13:30-16:00 y 20:30-23:00.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-los-corrales-chipiona-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
