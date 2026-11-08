# Bar La Tahona

Landing page estática en Astro para Bar La Tahona,
bar en la zona de El Palmar / Conil (coords 36.276458, -6.0880376).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/bar-la-tahona
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `BarOrPub` (nombre, coordenadas, mapa) y `FAQPage`. El schema omite
  `telephone`, dirección postal y horarios a propósito: no hay fuente verificable.
- Datos usados: nombre y coordenadas del enlace de Google Maps del cliente
  (36.276458, -6.0880376, entre El Palmar y Conil). Mención en Tripadvisor como
  restaurante cercano al Camping El Palmar.
- No se publican dirección, teléfono, horario, carta ni precios: no inventar.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del bar (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (fachada, barra, tapas).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa dirección exacta, teléfono, horario, NIF/CIF, razón social y correo del
   titular con datos del negocio.
