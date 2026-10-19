# La Mona Grill & Show

Landing page estática en Astro para La Mona Grill & Show,
bar restaurante con shows en vivo en Urb. La Atalaya 36 ·
Conil de la Frontera (Cádiz): hamburguesas gourmet a la brasa.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-mona-grill-show
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2801549, -6.0927891) y directorios (Urb. La Atalaya 36, tel. 669 28 36 83;
  lun–jue 14:00–23:00, vie–sáb horario extendido a confirmar; grill + shows en vivo).
- No se publican carta ni precios por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (grill, burgers, show).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario de
   fin de semana en el 669 28 36 83.
