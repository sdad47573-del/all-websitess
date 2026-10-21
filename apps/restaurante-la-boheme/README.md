# Restaurante La Boheme

Landing page estática en Astro para Restaurante La Boheme, cocina italiana en Archena
(calle Alfonso X el Sabio, 36 · 30600 Archena, Murcia).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-la-boheme
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, valoración) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Alfonso X el Sabio 36, 30600 Archena (Murcia),
  38.1174983,-1.3077157, teléfono 692 24 70 53, valoración 4,6 (388 reseñas).
- Horario: L-J cerrado; V y S 12:00-24:00; D 12:15-16:00.
- Pie con el crédito «Web creada por Sur Digital» enlazado a sur-digital.vercel.app.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-la-boheme-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
