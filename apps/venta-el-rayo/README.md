# Venta El Rayo

Landing page estática en Astro para Venta El Rayo,
bar restaurante de carretera en Ctra. Vejer–Medina s/n ·
11150 Vejer de la Frontera (Cádiz): caza, alcachofas y menú casero.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/venta-el-rayo
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2660872, -5.9642464) y Wanderlog (Ctra. Vejer–Medina s/n, tel. 670 41 84 49,
  dom,lun,mar,jue,vie,sáb 6:00–20:00, mié cerrado; 4,1 con 776 opiniones):
  caza, alcachofas, terraza pequeña con parking.
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (venta, terraza, caza).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 670 41 84 49.
