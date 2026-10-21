# Fontana Restaurante

Landing page estática en Astro para Fontana Restaurante, cocina casera en el centro de Murcia
(calle Serrano Alcázar, 7 · 30001 Murcia).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/fontana-restaurante
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, valoración) y `FAQPage`.
- Datos de la ficha de Google Maps: Calle Serrano Alcázar 7, 30001 Murcia, 37.9865874,-1.130127,
  teléfono 968 21 86 22, valoración 4,4 (379 reseñas). Comida para llevar y a domicilio.
- Horario: L-V 8:30-17:00; S 10:00-17:00; D cerrado.
- Pie con el crédito «Web creada por Sur Digital» enlazado a sur-digital.vercel.app.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/fontana-restaurante-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
