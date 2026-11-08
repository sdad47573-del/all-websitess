# Bar El Rincón de Adel

Landing page estática en Astro para Bar El Rincón de Adel,
bar de cocina tradicional en Barbate (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/bar-el-rincon-de-adel
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `BarOrPub` (coordenadas) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.25486, -5.9676175, Barbate) y RestaurantGuru (bar español, 4,5 con ~250 votos).
  Sin dirección exacta, teléfono ni horario publicados en fuente sólida: no se inventan.
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, barra, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa dirección exacta, teléfono, horario, NIF/CIF, razón social y correo
   del titular con datos del negocio.
