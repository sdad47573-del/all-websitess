# La Tapería de Lula / La Cocina de Lula

Landing page estática en Astro para La Tapería de Lula,
puesto nº 3 de la zona gastronómica del Mercado Central de Abastos,
Pl. Libertad, 1 · 11005 Cádiz.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-taperia-de-lula
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del local y directorios que la replican
  (PideMesa 4,5/5): Mercado Central puesto nº 3, Pl. Libertad 1, 11005 Cádiz,
  teléfono 607 57 94 34. Cocina cordobesa (salmorejo, flamenquines), arroces y
  opciones sin gluten. Precios orientativos 2,50–5 €/ración según reseñas.

## Fotografías

No se han descargado ni publicado fotos de Google Maps por derechos de autor.
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.

Antes de publicar:

1. Sustituye los SVG de `public/fotos/` por fotos propias del puesto (mostrador, arroces, salmorejo).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
