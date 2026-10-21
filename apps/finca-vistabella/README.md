# Finca Vistabella

Landing page estática en Astro para Finca Vistabella, restaurante de cocina española en el
Paraje Vistabella, 30892 Librilla (Murcia).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/finca-vistabella
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, coordenadas, horario, accesibilidad) y `FAQPage`.
- Datos de la ficha de Google Maps: Paraje Vistabella, 30892 Librilla (Murcia),
  37.8837089,-1.363764, valoración 4,5 (524 reseñas), todos los días 9:00-17:00.
  La ficha no publica teléfono ni web, así que la web remite a Google Maps para ruta y datos.
- Cocina española de restaurante y bar restaurante; reseñas sobre tapeo, cerveza fresca,
  raciones grandes y servicio atento.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/finca-vistabella-*.jpg` + `.maps-manifest.json`), atribuidas en la web.
La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la
portada.

## Pendiente

El aviso legal deja marcados el NIF/CIF, la razón social, el domicilio fiscal, el teléfono y el
correo del titular.
