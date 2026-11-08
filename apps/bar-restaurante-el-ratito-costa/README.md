# Bar Restaurante El Ratito Costa

Landing page estática en Astro para Bar Restaurante El Ratito Costa,
bar restaurante familiar en Pago Zahora s/n · 11159 Barbate (Cádiz),
entre Zahora y Los Caños de Meca.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/bar-restaurante-el-ratito-costa
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2059611, -6.0357796) y directorio local (Pago Zahora s/n, tel. 856 36 85 48,
  mar–dom 11:30–24:00, lun cerrado; atún de almadraba, retinto, jardín familiar).
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (jardín, salón, atún, retinto).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 856 36 85 48.
