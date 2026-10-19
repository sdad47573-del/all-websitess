# Restaurante Los Lunares

Landing page estática en Astro para Restaurante Los Lunares,
restaurante familiar de comida tradicional en C/ Cádiz 3 ·
11140 Conil de la Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-los-lunares
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, mapa, redes) y `FAQPage`.
  El schema omite horarios: no hay fuente verificable.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.275278, -6.0898687), su web oficial (Cádiz 3, 11140 Conil, tel. 692 20 61 57),
  Instagram @loslunaresconil, Tripadvisor (4,4 con 179 reseñas) y directorios
  (C/ Cádiz 3 / Bahía de Cádiz 3): comida casera tradicional, tartar de atún,
  tortilla, ensaladas, sangría casera; aceptan tarjeta; apto para niños.
- No se publican horario, carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del restaurante (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, comedor, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa horario, NIF/CIF, razón social y correo del titular.
