# Restaurante Peña de Cazadores

Landing page estática en Astro para Restaurante Peña de Cazadores
(Café Bar Peña de Cazadores), mesón de cocina española en
Av. de Buenavista, 30 · 11150 Vejer de la Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-pena-de-cazadores
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del local y Cylex:
  Av. de Buenavista 30, 11150 Vejer, teléfono 956 44 73 18,
  horario lun y mié–dom 8:00–24:00, martes cerrado (actualizado 19/6/2026).
  Se describen familias genéricas de mesón español; no se publica carta ni precios
  por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del mesón (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (barra, comedor, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 956 44 73 18.
