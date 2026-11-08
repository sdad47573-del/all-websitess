# La Tasca Tapería — Barbate

Landing page estática en Astro para Restaurante La Tasca (La Tasca Tapería),
tapería de atún en C/ Baessipo 7 · 11160 Barbate (Cádiz).

> No confundir con `apps/restaurante-la-tasca-de-alonso/` ni con la antigua
> La Tasca de Zahara (cerrada): esta app es la tapería barbateña del enlace
> del cliente (coords 36.1899126, -5.9230111).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-tasca-barbate
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, mapa, redes) y `FAQPage`.
  El schema omite horarios: no hay fuente verificable.
- Datos contrastados con la ficha de Google Maps (coords del enlace), publicaciones
  locales (C/ Baessipo 7, tel. 856 94 09 09), Instagram @la_tasca_taperia (atún en
  adobo, ronqueo de atún) y Tripadvisor (4,1 con 43 reseñas, mediterránea/española).
- No se publican horario, carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos de la tapería (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, barra, atún).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa horario, NIF/CIF, razón social y correo del titular.
