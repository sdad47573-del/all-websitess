# Tapas de Pepe Julián

Landing page estática en Astro para Tapas de Pepe Julián (Mesón Pepe Julián),
clásico de tapas en C/ Juan Relinque 7 · 11160 Barbate (Cádiz):
atún mechado y ensaladilla.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/tapas-de-pepe-julian
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2539043, -5.966001) y la Guía Gastronómica de Cádiz (C/ Juan Relinque 7,
  tel. 956 451 098, cierra los miércoles; atún mechado, tapas clásicas, ensaladilla).
- No se publican carta, precios ni horario completo por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, barra, atún mechado).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 956 45 10 98.
