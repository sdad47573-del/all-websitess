# Restaurante El Azafrán · Córdoba

Landing Astro adaptable con SEO local, datos estructurados, cocina cordobesa, mapa, contacto y enlaces a galerías públicas.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-el-azafran-cordoba
bun --filter restaurante-el-azafran-cordoba dev
```

Validación: `bun --filter restaurante-el-azafran-cordoba check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+El+Azafran/data=!4m7!3m6!1s0xd6d20a6c9a0cb81:0x3d2affd0120a5795!8m2!3d37.8772324!4d-4.7954674!16s%2Fg%2F11cmg1d683
- Turismo de Córdoba: https://www.turismodecordoba.org/restaurante-el-azafran
- Instagram conjunto Casa Fran / El Azafrán: https://www.instagram.com/casafran_y_azafran/
- Facebook: https://www.facebook.com/restauranteelazafran/
- ABC Gurmé: https://www.abc.es/gurme/cordoba/bares-y-restaurantes/sevi-restaurante-el-azafran-201710252041_noticia.html

El enlace de Maps identifica la ficha pero no trae URLs directas a archivos de fotos. La web enlaza la ficha de Maps, el Instagram del grupo y perfiles sociales; las ilustraciones vectoriales son originales, no fotografías del local.

Turismo de Córdoba y ABC indican C/ Manuel Fuentes Bocanegra, 31 y teléfono 957 084 652; Páginas Amarillas lista el número 33 y coincide en teléfono. Se muestra el 31 y se advierte de la discrepancia de numeración. La oferta y los horarios publicados pueden haber cambiado, así que se recomienda confirmar por teléfono.

## Dominio

`https://restaurante-el-azafran-cordoba.vercel.app` es provisional. Actualizarlo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` antes de desplegar.
