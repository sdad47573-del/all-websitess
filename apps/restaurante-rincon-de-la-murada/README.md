# Restaurante Rincón De La Murada

Landing page estática en Astro para Restaurante Rincón De La Murada, bar restaurante en La Murada
(avenida San José Vte, 15 · 03318 La Murada, Alicante).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-rincon-de-la-murada
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, valoración) y `FAQPage`.
- Datos de la ficha de Google Maps: Av. San José Vte 15, 03318 La Murada (Alicante),
  38.1749583,-0.9640668, teléfono 671 08 27 76, valoración 4,4 (381 reseñas).
- Horario: lunes y de miércoles a sábado 7:00-23:00; domingo 7:00-18:00; martes cerrado. Plato del día y paellas los domingos.
- Pie con el crédito «Web creada por Sur Digital» enlazado a sur-digital.vercel.app.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-rincon-de-la-murada-*.jpg` + `.maps-manifest.json`), atribuidas en la
propia web. La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde
la portada.
