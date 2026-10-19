# Bistró El Encuentro — Vejer

Landing page estática en Astro para Bistró El Encuentro (Café Bar),
bar cafetería en C/ Conil 8 · 11150 Vejer de la Frontera (Cádiz).

> No confundir con `apps/encuentro-cafe-bar/` (otro negocio homónimo de Málaga,
> coords 36.72): esta app es el bistró vejeriego del enlace del cliente
> (coords 36.2504177, -5.9677411).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/bistro-el-encuentro
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `CafeOrCoffeeShop` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente) y
  Cylex (C/ Conil 8, tel. 678 67 44 66; lun cerrado, mar–vie 8:00–12:00,
  sáb–dom 9:00–12:00): café bar de mañana en Vejer.
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del bistró (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, barra, desayunos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 678 67 44 66.
