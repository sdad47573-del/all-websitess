# Benavra · sitio web Astro

Web local bilingüe para Benavra, restaurante familiar de cocina internacional en Torrenueva, La Cala de Mijas.

## Desarrollo

Desde la raíz del monorepo, con Bun y dependencias instaladas:

```bash
bun run --filter benavra dev
bun run --filter benavra check
bun run --filter benavra typecheck
bun run --filter benavra build
```

## Contenido y SEO

- Español en `/` e inglés en `/en/`, con canonical y `hreflang`.
- Astro estático, sitemap, `robots.txt`, metadatos Open Graph y Twitter, y schema `Restaurant` + `FAQPage`.
- Mapa, enlaces para llamar y llegar, enlaces de Instagram y Facebook.
- Dominio provisional: `https://benavra.vercel.app`. Actualizar `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando se conozca el dominio definitivo.
- El teléfono, la dirección y las coordenadas parten de la ficha de Maps y de perfiles públicos asociados. Horarios y platos concretos se omiten o se dejan pendientes de confirmar para no publicar información caducada.

## Fotos

La página enlaza a la ficha y a la galería oficial en Google Maps. No se ha podido extraer desde la página de Maps una URL directa de imagen para integrarla localmente, aunque exista permiso de reutilización. El arte geométrico del hero y la tarjeta social son SVG originales, no fotos del restaurante. Para publicar imágenes propias de la ficha, se pueden incorporar en `src/assets/` una vez obtenidos los archivos autorizados.
