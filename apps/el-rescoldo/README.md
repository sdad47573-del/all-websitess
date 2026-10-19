# El Rescoldo

Landing page estática en Astro para El Rescoldo,
asador y restaurante de carne en Carretera Patria, s/n ·
11150 Vejer de la Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/el-rescoldo
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del local, Tripadvisor (4,2/5) y sus
  publicaciones: Ctra. Patria s/n, 11150 Vejer, reservas en el 634 19 88 15.
  Asador y barbacoa, cocina mediterránea y carne; jardín amplio con vistas.
  El horario es de temporada y cambia a lo largo del año: no se publican horas
  concretas, se remite al teléfono de reservas.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del asador y el jardín (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (brasas, carnes, jardín al atardecer).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular, y fija el horario de temporada
   vigente en el 634 19 88 15.
