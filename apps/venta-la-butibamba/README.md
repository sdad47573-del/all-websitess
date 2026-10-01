# Venta La Butibamba · web Astro

Landing estática bilingüe de la Venta La Butibamba, restaurante tradicional en La Cala de Mijas.

## Desarrollo

```bash
bun run --filter venta-la-butibamba dev
bun run --filter venta-la-butibamba check
bun run --filter venta-la-butibamba typecheck
bun run --filter venta-la-butibamba build
```

## SEO y contenido

- Español en `/` e inglés en `/en/`, con URLs, canonical, `hreflang` y metadatos por idioma.
- Sitemap, `robots.txt`, datos estructurados `Restaurant` + `FAQPage`, metadatos Open Graph y Twitter.
- Mapa, indicaciones, teléfono principal y alternativo, y Facebook.
- Dirección/teléfonos basados en la ficha, Turismo de Mijas y perfiles públicos; confirmar la información antes de publicar cambios permanentes.
- Dominio provisional: `https://venta-la-butibamba.vercel.app`. El dominio `ventabutibamba.com` aparece actualmente aparcado; cambiar `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando se configure el dominio real.

## Fotografías

Se enlaza a la ficha original de Google Maps y su galería. No se pudo extraer una URL directa de foto desde la ficha accesible; el hero y la tarjeta social usan ilustraciones vectoriales SVG propias y no se presentan como fotos reales. Si se obtienen imágenes autorizadas del local, se pueden añadir a `src/assets/`.
