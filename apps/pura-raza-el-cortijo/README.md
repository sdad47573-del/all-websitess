# Pura Raza el Cortijo

Landing page estática en Astro para Pura Raza el Cortijo, restaurante-bar de Burgos
(plaza de Santiago, 1 · 09007 Burgos).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/pura-raza-el-cortijo
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: Pl. Santiago, 1, 09007 Burgos, 42.3500443,-3.6689609,
  teléfono 676 32 55 56, valoración 4,4 (1.138 reseñas), horario L 9-23, M cerrado, X-J 9-23, V 9-24, S 11-24, D 11-23.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/pura-raza-el-cortijo-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
