# El Colorao

Landing page estática en Astro para El Colorao, restaurante-marisquería de Sanlúcar de Barrameda
(calle Sargenta, 39 · 11540 Sanlúcar de Barrameda, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/el-colorao-sanlucar
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Sargenta 39, 11540 Sanlúcar, 36.7836573,-6.347002,
  teléfono 956 36 42 98, valoración 4,4 (4.413 reseñas), L-J cerrado, V-D 12:30-16:00 y 20:00-23:00.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/el-colorao-sanlucar-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
