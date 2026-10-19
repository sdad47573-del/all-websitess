# Restaurante El Palenque

Landing page estática en Astro para Restaurante El Palenque,
restaurante en San Francisco 1 · 11160 Barbate (Cádiz),
junto al teatro y al Hotel Convento San Francisco.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-el-palenque
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.25414, -5.9659145) y resultados de Google Hoteles / guía local
  (San Francisco 1, tel. 956 45 17 04, rango €10–20).
- No se publican carta, precios cerrados ni horario por falta de fuente sólida
  y verificable: se remite a confirmar en el 956 45 17 04.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, salón, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma horario y carta
   en el 956 45 17 04.
