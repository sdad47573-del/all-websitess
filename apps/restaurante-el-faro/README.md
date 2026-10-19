# Restaurante El Faro (Barbate)

Landing page estática en Astro para Restaurante El Faro,
a pie de playa en Av. de la Mar 122 · 11160 Barbate (Cádiz):
atún de almadraba y vistas al mar.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-el-faro
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.1869952, -5.9238869) y directorio local (Av. de la Mar 122, tel. 956 43 09 48,
  todos los días 10:00–18:00; atún, arroces, terraza con vistas, mascotas, reservas).
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (terraza, atún, mar).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 956 43 09 48.
