# Venta el Quinto (el Teniente)

Landing page estática en Astro para Venta el Quinto (el Teniente), Sanlúcar de Barrameda
(camino Colorado, 45 · 11540 Sanlúcar de Barrameda, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/venta-el-quinto-el-teniente
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: Cam. Colorado 45, 11540 Sanlúcar, 36.813455,-6.3215429,
  teléfono 697 34 10 84, valoración 4,5 (755 reseñas), L-J 9:00-17:30, V-S 9:00-24:00, D 9:00-18:00.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/venta-el-quinto-el-teniente-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
