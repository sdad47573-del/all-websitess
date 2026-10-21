# Restaurante El Huerto del Badén

Landing page estática en Astro para Restaurante El Huerto del Badén, en Murcia
(camino del Badén, 78 · 30010 Murcia).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-el-huerto-del-baden
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, valoración) y `FAQPage`.
- Datos de la ficha de Google Maps: Cam. del Badén 78, 30010 Murcia, 37.9715358,-1.1487009,
  teléfono 968 26 12 33, valoración 4,3 (1.606 reseñas).
- Horario: L cerrado; M-J 13:30-16:00; V 13:30-16:00 y 19:30-23:30; S 13:30-17:00 y 19:00-23:30;
  D 13:30-19:00.
- Pie con el crédito «Web creada por Sur Digital» enlazado a sur-digital.vercel.app.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-el-huerto-del-baden-*.jpg` + `.maps-manifest.json`), atribuidas en la
propia web. La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde
la portada.
