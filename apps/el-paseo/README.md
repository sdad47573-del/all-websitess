# El Paseo

Landing page estática en Astro para El Paseo, bar restaurante y restaurante mediterráneo en
Av. Juan Carlos I, 21 · 30191 Campos del Río, Murcia.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/el-paseo
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horario, accesibilidad) y `FAQPage`.
- Datos de la ficha de Google Maps: Av. Juan Carlos I 21, 30191 Campos del Río (Murcia),
  38.0393011,-1.3542245, teléfono 653 89 67 37, valoración 4,5 (599 reseñas),
  todos los días 6:00-24:00.
- Cocina mediterránea de bar restaurante, con celebraciones, cerveza de grifo, buen trato y
  buenos precios según las reseñas.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/el-paseo-*.jpg` + `.maps-manifest.json`), atribuidas en la web. La portada y
5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la portada.

## Pendiente

El aviso legal deja marcados el NIF/CIF, la razón social, el domicilio fiscal y el correo del titular.
