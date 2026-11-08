# Asador Valle de Ricote

Landing page estática en Astro para Asador Valle de Ricote, asador y barbacoa en Calle de Gran Vía, 46D ·
30540 Blanca, Murcia.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/asador-valle-de-ricote
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, accesibilidad, valoración) y `FAQPage`.
- Datos de la ficha de Google Maps: Calle de Gran Vía, 46D, 30540 Blanca (Murcia),
  38.1793861,-1.3714672, teléfono 608 65 30 50, valoración 4,3 (290 reseñas).
- Horario: todos los días de 5:00 a 17:00, y viernes y sábado con segundo turno de 20:00 a 24:00.
- Especialidad declarada por el local: asados, carnes a la brasa, paellas de pulpo, gazpacho manchego y
  gran variedad de postres caseros.
- Las tres reseñas destacadas de la ficha se citan de forma literal en la sección «Reseñas destacadas».

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/asador-valle-de-ricote-*.jpg` + `.maps-manifest.json`), atribuidas en la web. La portada y
6 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.

## Pie

El pie de la web incluye el crédito «Web creada por Sur Digital · sur-digital.vercel.app», enlazado a
https://sur-digital.vercel.app/, tanto en la portada como en el aviso legal.

## Pendiente

El aviso legal deja marcados el NIF/CIF, la razón social, el domicilio fiscal y el correo del titular.
