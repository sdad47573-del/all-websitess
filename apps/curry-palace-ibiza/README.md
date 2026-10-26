# Curry Palace · Cala de Bou

Landing page en Astro para Restaurante Curry Palace C.B, cocina india en Carrer de Cala de Bou, 13 (Sant Josep de sa Talaia, Ibiza). Incluye portada con la fachada, presentación, selección de carta, galería con las fotos de la ficha de Google Maps, reseñas, mapa, horarios, preguntas frecuentes y aviso legal. El pie acredita la web a Sur Digital enlazando a <https://sur-digital.vercel.app/>.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter curry-palace-ibiza
bun --filter curry-palace-ibiza dev
```

Validación: `bun --filter curry-palace-ibiza check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: <https://www.google.com/maps/place/Restaurante+Curry+Palace+C.B/@38.9684084,1.302251,17z>
- Tripadvisor: <https://www.tripadvisor.com/Restaurant_Review-g652116-d5414911-Reviews-Curry_Palace-Sant_Antoni_de_Portmany_Ibiza_Balearic_Islands.html>
- Facebook: <https://www.facebook.com/CurryPalaceSanAntonioBay/>
- Wanderlog: <https://wanderlog.com/es/place/details/2630518/restaurante-curry-palace-cb>

Datos tomados de esas fuentes en octubre de 2026: dirección (Carrer de Cala de Bou, 13, 07829 Sant Josep de sa Talaia), teléfono (+34 971 80 45 36), horario publicado en Google Maps (13:00–23:00 todos los días), categorías (restaurante indio y taberna) y valoración media de Google (4,5 con 404 reseñas). La carta de la web es una selección orientativa basada en las reseñas y directorios, no la carta oficial; no se publican precios.

## Fotografías

Las diez imágenes de `src/assets/fotos` se descargaron con `node scripts/fetch-maps-photos.mjs curry-palace-ibiza` desde la galería pública de la ficha de Google Maps (el manifiesto `.maps-manifest.json` guarda los ids). La fachada se usa en el hero y las otras nueve en la galería; Astro las convierte a WebP y genera `srcset`, por lo que la app necesita `sharp`.

El `favicon.svg` y el `og.jpg` son originales: el segundo se compone sobre la foto de fachada con un degradado y el nombre del restaurante.

## Pendiente antes de producción

- Completar en `src/pages/aviso-legal.astro` el NIF/CIF, la razón social y el correo de contacto del titular.
- `https://curry-palace-ibiza.vercel.app` es el dominio provisional. Al definir el dominio final hay que actualizar `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt`.
- El restaurante no tiene web propia ni perfiles de Instagram verificados en las fuentes consultadas; los enlaces del pie son Google Maps, Facebook y Tripadvisor.
