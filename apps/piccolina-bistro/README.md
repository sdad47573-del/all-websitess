# Piccolina Bistro

Landing page estática en Astro para Piccolina Bistro,
pequeño restaurante italiano junto a la Plaza de España,
casco histórico de Vejer de la Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/piccolina-bistro
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (teléfono, coordenadas, mapa, redes) y `FAQPage`. El schema
  omite dirección postal exacta y horarios: no hay fuente verificable.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2539232, -5.9622093), andalucia.com y gotocadiz (La Piccolina, +34 671 765 339,
  con terraza) y guías locales (junto a la Plaza de España, comida italiana).
  Instagram: @lapiccolinavejer.
- No se publican calle con número, horario, carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del bistró (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, terraza, pastas).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa calle y número, horario, NIF/CIF, razón social y correo del titular.
