# Restaurante El Badulake

Landing page estática en Astro para Restaurante El Badulake, Sanlúcar de Barrameda
(av. Cabo Noval, 30 · 11540 Sanlúcar de Barrameda, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-el-badulake
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: Av. Cabo Noval 30, 11540 Sanlúcar, 36.7842063,-6.3519468,
  teléfono 661 05 34 68, valoración 4,5 (529 reseñas), martes cerrado, resto 7:30-17:00 y 20:00-24:00.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-el-badulake-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
