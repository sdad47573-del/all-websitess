# Restaurante La Esquina de San Antón

Landing page estática en Astro para Restaurante La Esquina de San Antón, Fortuna (Murcia):
C. Camilo José Cela, 2 · 30620 Fortuna · 615 57 31 45.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-la-esquina-de-san-anton
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, accesibilidad) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Camilo José Cela 2, 30620 Fortuna (Murcia),
  38.1829019,-1.1268699, teléfono 615 57 31 45, valoración 4,5 (551 reseñas),
  L/X/J/D 7:30-17:00, V-S 7:30-23:00, martes cerrado.
- Cocina española: pescado y carnes frescas, aperitivos, tapas y postres caseros, según la
  descripción y las reseñas de la ficha.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-la-esquina-de-san-anton-*.jpg` + `.maps-manifest.json`), atribuidas en
la propia web. La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada
desde la portada.

## Pendiente

El aviso legal deja marcados el NIF/CIF, la razón social, el domicilio fiscal y el correo del titular.
