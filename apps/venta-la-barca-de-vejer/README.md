# Venta La Barca de Vejer

Landing page estática en Astro para Venta La Barca de Vejer,
venta restaurante en N-340 km 36,6 · La Barca de Vejer (Vejer de la Frontera, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/venta-la-barca-de-vejer
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2594799, -5.9614425), andalucia.org (N-340 km 36,6, 11158 La Barca de Vejer)
  y gotoeat (N-340 km 36,600, tel. 856 38 97 28).
- No se publican carta, precios cerrados ni horario por falta de fuente sólida:
  se remite a confirmar en el 856 38 97 28.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (venta, salón, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma horario y carta
   en el 856 38 97 28.
