# Restaurante Casa Carmelo y Paqui

Landing page estática en Astro para Restaurante Casa Carmelo y Paqui, Mesas de Asta
(calle Padre Fidel, 10 · 11590 Mesas de Asta, Jerez de la Frontera, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-casa-carmelo-paqui
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Padre Fidel 10, 11590 Mesas de Asta, 36.7893273,-6.1745532,
  teléfono 956 16 20 86, valoración 4,6 (509 reseñas), martes 7:00-12:00, resto 7:00-18:00.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-casa-carmelo-paqui-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
