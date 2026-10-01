# Restaurante Hermanos Plazuelo · Córdoba

Landing page adaptable en Astro con SEO local, datos estructurados, carta orientativa, horarios, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-hermanos-plazuelo-cordoba
bun --filter restaurante-hermanos-plazuelo-cordoba dev
```

Validación: `bun --filter restaurante-hermanos-plazuelo-cordoba check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+Hermanos+Plazuelo/@37.8463552,-4.7960916,17z/
- Facebook: https://www.facebook.com/p/BAR-Restaurante-HNOS-Plazuelo-I-y-II-100061845895735/
- Turismo de Córdoba: https://www.turismodecordoba.org/hermanos-plazuelo-i
- Páginas Amarillas: https://www.paginasamarillas.es/f/cordoba/hermanos-plazuelo_014809206_000000002.html
- Ficha del negocio (micrositio): https://restaurantehermanosplazuelo1.makro.rest/
- Descripción y reseñas: https://www.toppingsandsalads.es/bar-restaurante/restaurante-hermanos-plazuelo/

Dirección Avenida Amargacena, 7 (Nave 7-F, polígono Amargacena-Torrecilla), 14013 Córdoba, y teléfono +34 957 20 49 93, coincidentes entre la ficha de Maps, la página de Facebook, Turismo de Córdoba y varios directorios. El móvil +34 629 88 99 18 y el correo h.plazuelo@gmail.com proceden del micrositio del negocio. Los horarios publicados varían ligeramente entre la ficha propia (L–V 6:00–18:00 y sábado 6:00–15:00) y Páginas Amarillas (L–S 7:00–22:00), por lo que se muestran como orientativos.

El enlace de Google Maps identifica la ficha, pero no incluye URLs directas a los archivos de imagen. La web enlaza a las galerías de Maps, Facebook y a la ficha de Páginas Amarillas para consultar fotos auténticas; los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://restaurante-hermanos-plazuelo-cordoba.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
