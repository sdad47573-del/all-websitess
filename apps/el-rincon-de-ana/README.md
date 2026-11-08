# Bar restaurante El rincón de Ana · Huelva

Landing Astro con la información del bar restaurante, SEO local, galería de fotografías descargadas
de la ficha de Google Maps, teléfono de contacto y mapa.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter el-rincon-de-ana
bun --filter el-rincon-de-ana dev
```

Validación: `bun --filter el-rincon-de-ana check`, `typecheck` y `build`.

## Fuentes de los datos

- **Google Maps:** https://www.google.com/maps/place/Bar+restaurante+El+rinc%C3%B3n+de+Ana/@37.2589158,-6.9566516,17z/
  — ficha pública consultada en octubre de 2026. De ahí salen el nombre, la categoría (el campo
  `categories` solo declara «Bar restaurante»), la dirección (C. los Emires, 1, 21002 Huelva), el
  teléfono (617 44 88 78), las coordenadas (37.2589158, -6.9566516), los códigos Plus (8C9M725V+H8 y
  725V+H8 Huelva), el horario (martes a viernes de 7:30 a 16:00 y de 21:00 a 23:30; lunes, sábado y
  domingo cerrado), la valoración (4,6 con 387 reseñas) y el texto de las tres reseñas citadas.
- Las fotografías se descargan con `node scripts/fetch-maps-photos.mjs el-rincon-de-ana`, que deja en
  `src/assets/fotos/` las 10 imágenes de la galería de la ficha. La portada usa la foto vertical
  disponible y la elige el propio componente por la forma del nombre del archivo, no por un nombre
  fijo.

**No se inventa nada que la ficha no diga.** El negocio no publica carta, precios, alérgenos ni
servicios, así que la web no los muestra: la sección «qué se come» reproduce solo los pescados y
mariscos, los fritos (calamares y chocos) y las raciones que citan las reseñas. Tampoco se declara
accesibilidad (la ficha tiene campos genéricos que no se pueden confirmar). El bar **no tiene web
propia ni redes sociales localizables**: cuando las tenga, se añaden en `src/lib/business.ts` y en el
pie.

La ficha no publica número de portal distinto del 1 de la calle los Emires; la web usa esa dirección
tal cual y remite al mapa.

La tarjeta social (`public/og.svg`, rasterizada a `og.png`) y el `favicon.svg` son originales y no
son fotografías del local.

## Aviso legal

`src/pages/aviso-legal.astro` mantiene marcados como pendientes el NIF/CIF, la razón social y el
correo de contacto (LSSI-CE y RGPD). La dirección y el teléfono son los de la ficha de Maps y hay
que confirmarlos con el titular antes de publicar.

## Dominio

`https://el-rincon-de-ana.vercel.app` es provisional. Actualízalo en `astro.config.mjs`,
`src/lib/business.ts`, `public/robots.txt` y `src/pages/aviso-legal.astro` cuando se conozca el
dominio final.
