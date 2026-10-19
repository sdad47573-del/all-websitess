# Restaurante Pinar San José

Landing page estática en Astro para Restaurante Pinar San José,
bar restaurante del Camping Pinar San José en Pago Zahora, 17 ·
11159 Barbate (Los Caños de Meca, Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-pinar-san-jose
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del local, Cylex (4,4/5 con 321
  opiniones) y la web del camping: Pago Zahora 17, 11159 Barbate, teléfono 609 44 68 27,
  horario vie–dom 9:00–24:00, lun–jue cerrado. Productos de la tierra con influencia
  del mar. Pagos con Visa, Mastercard y Amex.
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del restaurante y el pinar (o autoriza por escrito las de
su ficha), guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (terraza entre pinos, platos, mar).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario de temporada
   en el 609 44 68 27.
