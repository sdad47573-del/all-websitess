# Venta El Caldero

Landing page estática en Astro para Venta El Caldero, bar restaurante de carretera en la A-66
(km 495 · 10680 Malpartida de Plasencia, Cáceres).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/venta-el-caldero
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horario 24 h, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: A-66 km 495, 10680 Malpartida de Plasencia (Cáceres),
  39.8830958,-6.2760118, teléfono 927 45 33 98, valoración 4,0 (16.976 reseñas), abierto 24 horas.
- Pie con el crédito «Web creada por Sur Digital» enlazado a sur-digital.vercel.app.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/venta-el-caldero-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
