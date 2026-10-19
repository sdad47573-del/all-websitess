# Restaurante El Sopa

Landing page estática en Astro para Restaurante El Sopa,
tradicional en Calle Cádiz 32 · 11140 Conil de la Frontera (Cádiz):
arroces, parrilla y atún rojo de almadraba.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-el-sopa
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, email, web, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2761261, -6.0915548) y Cylex (Calle Cádiz 32, tel. 956 44 36 90,
  elsopaconil.com, [email protected]; lun,mar,mié,vie,sáb,dom 8:00–23:30,
  jue cerrado; arroces, parrilla, atún rojo).
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, salón, arroces, atún).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF y razón social del titular y confirma el horario vigente
   en el 956 44 36 90.
