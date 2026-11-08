# dosbocados

Landing page estática en Astro para dosbocados,
rincón gastronómico del Mercado Central de Abastos, puesto nº 107 ·
11005 Cádiz.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/dosbocados
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con Turismo del Ayuntamiento de Cádiz, Tripadvisor (4,8/5) y la
  ficha de Google Maps del puesto: Mercado Central puesto 107, 11005 Cádiz,
  teléfono 670 75 08 37, horario de mercado 12:30–15:30. Especialidad: montaditos,
  sandwiches y hamburguesas (salmón con guacamole, tres quesos, carrillada,
  chicharrones con queso, tarantelo de atún). Sin valoración inventada en el JSON-LD:
  se publica la nota real de Tripadvisor con su fuente.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del puesto (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias del puesto (mostrador, montaditos, bandejas).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF y razón social del titular (el email público es alecanguas@yahoo.es
   según Turismo Cádiz) y confirma el horario vigente en el 670 75 08 37.
