# Las Perdices Restaurante Mesón

Landing page estática en Astro para Las Perdices Restaurante Mesón,
mesón de cocina española en Avda. Buenavista, 12 · 11150 Vejer de la
Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/las-perdices-meson
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas) y `FAQPage`. Sin horarios
  en el schema: no hay fuente verificable y no se inventan.
- Datos contrastados con la ficha de Google Maps del local (coords del enlace del
  cliente), su página de Facebook (Avda. Buenavista 12, 11150 Vejer) y guías
  gastronómicas de Cádiz (tel. 956 450 361): cocina española/mediterránea, perdiz
  con arroz, atún a la parrilla, tortillitas de camarones, presa ibérica.
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del mesón (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, comedor, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 956 450 361.
