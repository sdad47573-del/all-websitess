# Restaurante Brasería JM · San Sebastián de los Ballesteros

Landing page adaptable en Astro con SEO local, datos estructurados, especialidades de brasa, horario orientativo, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-braseria-jm-san-sebastian
bun --filter restaurante-braseria-jm-san-sebastian dev
```

Validación: `bun --filter restaurante-braseria-jm-san-sebastian check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+Braseria+JM/@37.6527778,-4.8244444,17z/
- Instagram oficial: https://www.instagram.com/restaurantebraseriajm/
- Facebook oficial: https://www.facebook.com/RestauranteBraseriaJM/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g1726223-d23025497-Reviews-Bar_Restaurante_Jm-San_Sebastian_de_los_Ballesteros_Province_of_Cordoba_Andaluc.html
- ABC de Córdoba: https://www.abc.es/gurme/cordoba/sevi-restaurante-cocina-calidad-y-proximidad-san-sebastian-ballesteros-202206010636_noticia.html
- Descripción y reseñas: https://www.toppingsandsalads.es/restaurante/restaurante-braseria-jm/

Calle Nuevas Poblaciones, 0, 14150 San Sebastián de los Ballesteros (Córdoba) y teléfono +34 957 30 90 39, coincidentes con la ficha de Maps, el Instagram del restaurante y la prensa gastronómica. El horario se publica como orientativo porque varía entre invierno y verano (cierra lunes; martes solo mañana; de miércoles a domingo, servicio continuo; en verano amplía).

El enlace de Google Maps identifica la ficha, pero no incluye URLs directas a los archivos de imagen. La web enlaza a las galerías de Maps, Instagram y Facebook para consultar fotos auténticas; los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://restaurante-braseria-jm-cordoba.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
