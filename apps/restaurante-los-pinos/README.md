# Restaurante Los Pinos

Landing page estática en Astro para Restaurante Los Pinos,
restaurante en Ctra. Caños de Meca, km 9,5 (Zahora) · 11159
Barbate (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-los-pinos
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas) y `FAQPage`. Sin horarios
  en el schema: no hay fuente verificable y no se inventan.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente),
  Facebook oficial (Ctra. Caños de Meca km 9,5, Zahora) y Páginas Amarillas
  (Pago los Caños de Meca 1, Barbate, tel. 610 34 08 77): cocina española /
  mediterránea entre pinos, cerca de Zahora, Caños y Trafalgar.
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del restaurante y el pinar (o autoriza por escrito las de
su ficha), guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, pinar, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 610 34 08 77.
