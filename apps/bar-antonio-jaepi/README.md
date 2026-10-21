# Bar Antonio JAEPI

Landing page estática en Astro para Bar Antonio JAEPI, bar de tapas y restaurante en Cabezabellosa
(calle Fuente, 82 · 10729 Cabezabellosa, Cáceres).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/bar-antonio-jaepi
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, valoración) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Fuente 82, 10729 Cabezabellosa (Cáceres),
  40.1393194,-6.0006073, teléfono 659 63 95 00, valoración 4,6 (120 reseñas).
- Horario: L-J 10:00-22:00, V-S 11:00-23:30, D 10:00-23:00.
- Pie con el crédito «Web creada por Sur Digital» enlazado a sur-digital.vercel.app.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/bar-antonio-jaepi-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
