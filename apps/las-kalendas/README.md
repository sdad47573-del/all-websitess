# Las Kalendas

Landing page estática en Astro para Restaurantes en Fortuna / Las Kalendas, restaurante en Fortuna
(calle Camino de Cieza · 30620 Fortuna, Murcia).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/las-kalendas
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, coordenadas, horarios, accesibilidad, valoración) y `FAQPage`.
- Datos de la ficha de Google Maps: Calle Cam. de Cieza, 30620 Fortuna (Murcia),
  38.2054812,-1.1248907, valoración 4,7 (25 reseñas). La ficha no publica teléfono.
- Horario: de martes a sábado, 10:00-23:00; domingo y lunes cerrado.
- Pie con el crédito «Web creada por Sur Digital» enlazado a sur-digital.vercel.app.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/las-kalendas-*.jpg` + `.maps-manifest.json`), atribuidas en la propia web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.
