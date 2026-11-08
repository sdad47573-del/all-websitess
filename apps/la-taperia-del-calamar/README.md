# La Tapería del Calamar

Landing page estática en Astro para La Tapería del Calamar,
bar de tapas en el Paseo Marítimo, 4 · 11010 Cádiz.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-taperia-del-calamar
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del local, Apple Maps e Instagram:
  Paseo Marítimo 4, 11010 Cádiz, teléfono 656 88 76 19,
  horario todos los días 12:00–00:00, sin reservas (por orden de llegada).

## Fotografías

No se han descargado ni publicado fotos de Google Maps por derechos de autor.
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.

Antes de publicar:

1. Sustituye los SVG de `public/fotos/` por fotos propias del local (terraza, tapas, interior).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
