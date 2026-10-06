# Restaurante La Nicoba · Huelva

Landing Astro con la información del restaurante, SEO local, galería de fotografías descargadas de
la ficha de Google Maps, teléfono de contacto y mapa.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter la-nicoba
bun --filter la-nicoba dev
```

Validación: `bun --filter la-nicoba check`, `typecheck` y `build`.

## Fuentes de los datos

- **Google Maps:** https://www.google.com/maps/place/Restaurante+La+Nicoba/@37.3030204,-6.8879083,17z/
  — ficha pública consultada en octubre de 2026. De ahí salen el nombre, la categoría (el campo
  `categories` solo declara «Restaurante»), la dirección (A-5000-R, 21007 Huelva), el teléfono
  (697 81 72 79), las coordenadas (37.3030204, -6.8879083), los códigos Plus (8C9M8436+6R y
  8436+6R Huelva), el horario (lunes a viernes de 6:30 a 17:00; sábado y domingo cerrado), la
  valoración (4,7 con 102 reseñas) y el texto de las tres reseñas citadas.
- Las fotografías se descargan con `node scripts/fetch-maps-photos.mjs la-nicoba`, que deja en
  `src/assets/fotos/` las 10 imágenes de la galería de la ficha. La portada usa la panorámica
  disponible y la elige el propio componente por la forma del nombre del archivo, no por un
  nombre fijo.

**No se inventa nada que la ficha no diga.** El negocio no publica carta, precios, alérgenos ni
servicios, así que la web no los muestra: la sección «qué se come» reproduce solo el menú del día,
el salmorejo y el plato con huevo que citan las reseñas. Tampoco se declara accesibilidad (la ficha
tiene campos genéricos que no se pueden confirmar). El restaurante **no tiene web propia ni redes
sociales localizables**: cuando las tenga, se añaden en `src/lib/business.ts` y en el pie.

La ficha no publica número de portal, solo la carretera (`A-5000-R`), y la web lo dice tal cual y
remite al mapa. Otros directorios (Restaurant Guru) publican otra nota (3,7 con 99 reseñas): la web
usa la de Google, que es la que se puede comprobar en la ficha enlazada.

La tarjeta social (`public/og.svg`, rasterizada a `og.png`) y el `favicon.svg` son originales y no
son fotografías del local.

## Aviso legal

`src/pages/aviso-legal.astro` mantiene marcados como pendientes el NIF/CIF, la razón social y el
correo de contacto (LSSI-CE y RGPD). La dirección y el teléfono son los de la ficha de Maps y hay
que confirmarlos con el titular antes de publicar.

## Dominio

`https://la-nicoba.vercel.app` es provisional. Actualízalo en `astro.config.mjs`,
`src/lib/business.ts`, `public/robots.txt` y `src/pages/aviso-legal.astro` cuando se conozca el
dominio final.
