# Restaurante Casa Gonzalez

Landing page en Astro para Restaurante Casa Gonzalez, en la calle Tabladilla 10 (41013 Sevilla), con SEO local, datos estructurados de tipo `Restaurant`, teléfono de contacto y enlaces a Google Maps.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter casa-gonzalez-sevilla
bun --filter casa-gonzalez-sevilla dev
```

Comprobaciones: `bun --filter casa-gonzalez-sevilla typecheck` y `bun --filter casa-gonzalez-sevilla build`. (`astro check` no puede ejecutarse con la versión de TypeScript del repositorio; se usa `tsc` para el typecheck.)

## Fuentes y contenido

- Google Maps: https://www.google.com/maps/place/Restaurante+Casa+Gonzalez/@37.363359,-5.980886,17z/

Todo el contenido publicado sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026: nombre, categoría, dirección, teléfono (**615 25 18 97**), coordenadas, valoración (4,8 sobre 290 reseñas) y horario. El negocio no tiene web propia ni perfiles de redes sociales localizables, así que no se enlaza ninguno.

Las diez fotografías de `src/assets/fotos/` se descargaron de la galería de la propia ficha con `node scripts/fetch-maps-photos.mjs casa-gonzalez-sevilla` y se optimizan en el build con `astro:assets` (AVIF, `srcset` y `sizes`). La atribución a la ficha de Google Maps aparece en la propia página. La imagen de `public/og.jpg` (1200×630) se genera a partir de una de esas fotografías.

Datos que no se inventan porque la ficha no los publica: no hay carta, precios ni lista de servicios. El horario de lunes queda marcado como **por confirmar**, porque el lunes que mostraba la ficha al consultarla coincidía con un festivo nacional y no se puede saber si un lunes normal abre. La página recomienda llamar al **615 25 18 97** para confirmar horario, carta y disponibilidad.

El dominio `casa-gonzalez-sevilla.vercel.app` es provisional y debe sustituirse por el dominio definitivo antes de publicar.
