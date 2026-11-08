# La Terraza de Juana — Casa de Comidas y Copas

Landing page estática en Astro para Restaurante La Terraza de Juana,
casa de comidas y copas en Pago Santa Lucía s/n · 11150 Vejer de la
Frontera (Cádiz), entorno declarado monumento natural.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-terraza-de-juana
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (nombre, dirección, coordenadas, mapa, redes) y `FAQPage`.
  El schema omite `telephone` y horarios a propósito: no hay fuente verificable.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.267295, -5.9734763), Facebook oficial (Santa Lucía, Vejer) e Instagram oficial
  @laterrazadejuanavejer (abren desde las 13:00; horario parcial mie–sáb según
  publicaciones; invierno con horario propio sin detalle verificado).
- No se publican teléfono, horario completo, carta ni precios: no inventar.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos de la terraza y la casa (o autoriza por escrito las de
su ficha), guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (terraza, Santa Lucía, platos, copas).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa teléfono, horario completo, NIF/CIF, razón social y correo del titular.
