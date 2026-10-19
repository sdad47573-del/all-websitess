# Roneo bar y restaurante

Landing page estática en Astro para Roneo bar y restaurante, Jerez de la Frontera
(calle Porvera, 9 · 11403 Jerez de la Frontera, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/roneo-bar-restaurante-jerez
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Porvera 9, 11403 Jerez, 36.6862279,-6.1381395,
  teléfono 856 66 77 57, valoración 4,6 (619 reseñas), lunes cerrado, domingo solo mediodía.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/roneo-bar-restaurante-jerez-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
