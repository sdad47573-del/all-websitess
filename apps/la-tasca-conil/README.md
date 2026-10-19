# La Tasca — Conil (La Tasca de Juan)

Landing page estática en Astro para La Tasca (La Tasca de Juan),
taberna de tapas en C/ Padre Caro 10 · 11140 Conil de la Frontera (Cádiz).

> No confundir con `apps/la-tasca-barbate/` (tapería de atún de Barbate) ni con
> la antigua Tasca de Zahara (cerrada): esta app es la tasca conileña del enlace
> del cliente (coords 36.2745229, -6.0886329, casco histórico de Conil).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-tasca-conil
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, coordenadas, mapa) y `FAQPage`. El schema omite
  `telephone` y horarios: el teléfono (697 94 21 63) aparece en una sola guía y la
  dirección se publica por coincidir en varias fuentes; el teléfono se muestra en la
  página como dato a confirmar.
- Datos contrastados con la ficha de Google Maps (coords del enlace), guías de Conil
  (C/ Padre Caro 10, casco histórico junto a Santa Catalina y Torre de Guzmán, buenas
  tapas con encanto) y censo minorista de la Junta (La Tasca de Juan Bar, Padre Caro 10).
- No se publican horario, carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos de la taberna (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, barra, tapas).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa teléfono, horario, NIF/CIF, razón social y correo del titular.
