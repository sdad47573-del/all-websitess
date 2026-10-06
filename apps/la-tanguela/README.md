# La Tanguela · Corrales (Huelva)

Landing Astro con la información del restaurante, SEO local, galería de fotografías descargadas de
la ficha de Google Maps, teléfono para reservar y mapa.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter la-tanguela
bun --filter la-tanguela dev
```

Validación: `bun --filter la-tanguela check`, `typecheck` y `build`.

## Fuentes de los datos

- **Google Maps:** https://www.google.com/maps/place/La+Tanguela/@37.2772964,-6.9915035,17z/ —
  ficha pública consultada en octubre de 2026. De ahí salen el nombre, la categoría
  («Restaurante andaluz», la única que declara el campo `categories`), la dirección
  (C. Lazareto, 9, 21120 Corrales, Huelva), el teléfono (666 21 28 95), las coordenadas
  (37.2772964, -6.9915035), el código Plus (8C9M72G5+W9), el horario, la valoración
  (4,6 con 830 reseñas) y el texto de las tres reseñas citadas.
- Las fotografías se descargan con `node scripts/fetch-maps-photos.mjs la-tanguela`, que deja en
  `src/assets/fotos/` las 10 imágenes de la galería de la ficha (todas publicadas por el propio
  negocio, según el campo `author` del manifiesto).

No se inventa nada que la ficha no diga: **no hay carta, precios, alérgenos ni servicios
publicados**, así que la web no los muestra y remite al teléfono. Tampoco se declara accesibilidad
ni terraza. El negocio **no tiene web propia ni redes sociales localizables**: cuando las tenga, se
añaden en `src/lib/business.ts` y en el pie de página.

La tarjeta social (`public/og.svg`, rasterizada a `og.png`) y el `favicon.svg` son originales y no
son fotografías del local.

## Aviso legal

`src/pages/aviso-legal.astro` mantiene marcados como pendientes el NIF/CIF, la razón social y el
correo de contacto (LSSI-CE y RGPD). La dirección y el teléfono son los de la ficha de Maps y hay
que confirmarlos con el titular antes de publicar.

## Dominio

`https://la-tanguela.vercel.app` es provisional. Actualízalo en `astro.config.mjs`,
`src/lib/business.ts`, `public/robots.txt` y `src/pages/aviso-legal.astro` cuando se conozca el
dominio final.
