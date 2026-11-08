# Café Restaurante Andalucía

Landing page estática en Astro para Café Restaurante Andalucía,
café bar restaurante en Av. Andalucía, 21 · 11150 Vejer de la
Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/cafe-restaurante-andalucia
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios lun–sáb 8:00–17:00)
  y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2522787, -5.9688732) y Cylex (Av. Andalucía 21, 11150 Vejer, tel. 956 450 190,
  lun–sáb 8:00–17:00 y dom cerrado, 4,4 con 440 opiniones vía Yably).
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del café (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, barra, desayunos, almuerzos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 956 450 190.
