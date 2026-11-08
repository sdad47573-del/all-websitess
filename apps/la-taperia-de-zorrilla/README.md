# La Tapería de Zorrilla

Landing page estática en Astro para La Tapería de Zorrilla,
bar de tapas en Calle Zorrilla, 1 · 11004 Cádiz (zona Plaza de Mina).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-taperia-de-zorrilla
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con Turismo del Ayuntamiento de Cádiz, OpenTable y TheFork:
  Calle Zorrilla 1, 11004 Cádiz, teléfono 856 53 03 36,
  horario lunes a domingo 13:00–16:30 y 20:00–00:00.

## Fotografías

No se han descargado ni publicado fotos de Google Maps por derechos de autor.
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.

Antes de publicar:

1. Sustituye los SVG de `public/fotos/` por fotos propias del local (terraza, tapas, interior).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
