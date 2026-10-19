# Restaurante Camping La Rosaleda

Landing page estática en Astro para Restaurante Camping La Rosaleda,
restaurante del Camping La Rosaleda en Ctra. del Pradillo km 1,3 ·
11140 Conil de la Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-camping-la-rosaleda
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, email, coordenadas) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2947791, -6.0915935) y la web oficial campinglarosaleda.com
  (Ctra. del Pradillo km 1,3, tel. 956 44 33 27, info@campinglarosaleda.com,
  recepción 8:00–21:00, abierto todo el año).
- No se publican carta, precios ni horario propio del restaurante por falta de
  fuente verificable: se remite a confirmar en el 956 44 33 27.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del restaurante (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (camping, restaurante, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF y razón social del titular y confirma el horario del restaurante.
