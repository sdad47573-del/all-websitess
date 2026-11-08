# Bar Restaurante Las Manuelas

Landing page estática en Astro para Bar Restaurante Las Manuelas,
bar restaurante de comida casera en Cam. de Piñero, 121 · 11159
El Palmar de Vejer (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/bar-restaurante-las-manuelas
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios mie–dom 12:00–24:00) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente),
  Instagram oficial @lasmanuelaselpalmar (horario 12:00–00:00, reservas 621 29 87 57,
  lun y mar cerrado) y directorios (Cam. de Piñero 121): comida casera, raciones
  generosas, carnes a la brasa y pescado fresco; croquetas, atún encebollado, cazón
  en adobo, chipirones, tortillitas.
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (terraza, salón, platos).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 621 29 87 57.
