# Restaurante Canadian · Córdoba

Landing page adaptable en Astro con SEO local, datos estructurados, carta orientativa, horarios, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-canadian-cordoba
bun --filter restaurante-canadian-cordoba dev
```

Validación: `bun --filter restaurante-canadian-cordoba check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+Canadian/@37.8843724,-4.789673,17z/
- Instagram oficial: https://www.instagram.com/canadiancordoba/
- Facebook: https://www.facebook.com/canadiantapas/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g187430-d1792033-Reviews-Canadian_Bar_and_Tapas-Cordoba_Province_of_Cordoba_Andalucia.html
- Páginas Amarillas: https://www.paginasamarillas.es/f/cordoba/canadian_233374347_000000001.html
- Descripción y reseñas: https://www.toppingsandsalads.es/bar-restaurante/restaurante-canadian/

Dirección Calle Albéniz, 6, 14005 Córdoba (barrio de Poniente Sur) y teléfono +34 957 45 27 56, coincidentes entre la ficha de Maps, el Instagram del negocio, Páginas Amarillas y varios directorios. El horario (cerrado los lunes; de martes a domingo 7:00–17:00) procede de los datos de Google recogidos por el directorio y se muestra como orientativo, por lo que conviene confirmarlo por teléfono.

El enlace de Google Maps identifica la ficha, pero no incluye URLs directas a los archivos de imagen. La web enlaza a las galerías de Maps, Instagram y Facebook para consultar fotos auténticas; los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://restaurante-canadian-cordoba.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
