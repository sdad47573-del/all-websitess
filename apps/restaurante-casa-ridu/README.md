# Restaurante Casa Ridu

Landing page estática en Astro para Restaurante Casa Ridu,
bar restaurante de atún rojo de almadraba en C/ Agustín Varo 26 ·
11160 Barbate (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-casa-ridu
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.1870223, -5.9209262) y Cylex (C/ Agustín Varo 26, tel. 634 72 39 75,
  web enbarbate.com/ridu; lun,mar,jue,dom 8:00–17:00, vie,sáb 8:00–17:00 y 20:00–24:00,
  mié cerrado; 4,4 con 509 opiniones): atún rojo de almadraba.
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del restaurante (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, barra, atún).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 634 72 39 75.
