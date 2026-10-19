# Restaurante Mandíbula

Landing page estática en Astro para Restaurante Mandíbula, Jerez de la Frontera
(calle Madreselva, s/n · 11408 Jerez, dentro del zoo-botánico).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-mandibula-jerez
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Madreselva s/n, 11408 Jerez, 36.6906902,-6.1490191,
  teléfono 722 74 32 43, valoración 4,6 (80 reseñas), lunes cerrado, M-D 10:00-19:00.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-mandibula-jerez-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
