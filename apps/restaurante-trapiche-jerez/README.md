# Restaurante TRAPICHE

Landing page estática en Astro para Restaurante TRAPICHE, Jerez de la Frontera
(plaza Rafael Rivero, 3 · 11403 Jerez de la Frontera, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-trapiche-jerez
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: Pl. Rafael Rivero 3, 11403 Jerez, 36.6859281,-6.1378635,
  teléfono 646 50 66 87, valoración 4,4 (211 reseñas), L-S 12:00-16:30 y 20:00-23:30, D 12:00-17:00.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-trapiche-jerez-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
