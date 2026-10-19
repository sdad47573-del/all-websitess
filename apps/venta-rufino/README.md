# Venta Rufino — Restaurante Cafetería

Landing page estática en Astro para Restaurante - Cafetería Venta Rufino,
típica venta de carretera en Ctra. de La Muela km 3,5 · 11150 Vejer de la
Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/venta-rufino
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, mapa) y `FAQPage`. El schema
  omite horarios: el horario verificado es matizado (cierra miércoles y martes tras el
  almuerzo; apertura 6:00, 7:00 sáb/dom; cierre «después de las cenas» sin hora exacta)
  y no se inventa una hora de cierre.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.268085, -5.988507) y Cosasdecome Cádiz (Ctra. de La Muela km 3,5, tel. 956 44 84 81,
  precio 10–20 €): venta con dos terrazas y salón comedor con barra, tapas o platos de
  comida tradicional, desayunos con rebanás de pan cateto y mantecas, venta de pan,
  aceite y aceitunas.
- No se publican carta ni precios detallados por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos de la venta (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, terrazas, salón, desayunos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 956 44 84 81.
