# La Tasquita Tapas

Landing page estática en Astro para La Tasquita Tapas restaurante, Sanlúcar de Barrameda
(calle Trascuesta, 9 · 11540 Sanlúcar de Barrameda, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-tasquita-tapas-sanlucar
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Trascuesta 9, 11540 Sanlúcar, 36.7776339,-6.3536048,
  teléfono 633 58 35 49, valoración 4,7 (866 reseñas), lunes cerrado.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/la-tasquita-tapas-sanlucar-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
