# Bar Restaurante El Embarcadero — Barbate

Landing page estática en Astro para Bar Restaurante El Embarcadero,
bar restaurante de espetos junto al río en Av. Cabo Diego Pérez Rodríguez 37
(Paseo Fluvial del Río Barbate) · 11160 Barbate (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/bar-restaurante-el-embarcadero
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.1887359, -5.915811) y directorios (Av. Cabo Diego Pérez Rodríguez 37, Paseo
  Fluvial, tel. 628 26 58 48; abierto a diario del mediodía a las 3:00; RG 4/5 con
  671 reseñas): espetos en barco espetero (sardinas, dorada, lubina, calamar de
  potera, pulpo), carnes a la brasa, paellas bajo encargo y postres caseros.
- No se publican carta ni precios (parte según mercado) por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local y el río (o autoriza por escrito las de su
ficha), guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (río, espetero, terraza, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 628 26 58 48.
