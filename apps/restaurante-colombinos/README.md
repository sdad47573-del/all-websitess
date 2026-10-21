# Restaurante Colombino's

Landing page estática en Astro para Restaurante Colombino's, cocina española y carne a la brasa en
C. Escuelas-Cn, 21 · 30177 Casas Nuevas, Murcia.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-colombinos
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, accesibilidad) y `FAQPage`.
- Datos de la ficha de Google Maps: C. Escuelas-Cn 21, 30177 Casas Nuevas (Murcia),
  37.9227304,-1.5982308, teléfono 636 60 96 96, valoración 4,4 (214 reseñas),
  martes y miércoles 7:30-17:00, jueves 7:30-24:00, viernes a domingo 7:30-0:30, lunes cerrado.
- Cocina española con carne a la brasa, aperitivos, postres caseros y buen trato según las reseñas.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-colombinos-*.jpg` + `.maps-manifest.json`), atribuidas en la web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la
portada.

## Pendiente

El aviso legal deja marcados el NIF/CIF, la razón social, el domicilio fiscal y el correo del titular.
