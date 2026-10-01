# Restaurante Caravelle · Córdoba

Landing page adaptable en Astro con SEO local, datos estructurados, carta orientativa, horarios, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-caravelle-cordoba
bun --filter restaurante-caravelle-cordoba dev
```

Validación: `bun --filter restaurante-caravelle-cordoba check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+Caravelle/@37.8763338,-4.7963928,17z/
- Facebook: https://www.facebook.com/caravellec/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g187430-d9729250-Reviews-Caravelle-Cordoba_Province_of_Cordoba_Andalucia.html
- Descripción y reseñas: https://www.toppingsandsalads.es/bar-restaurante/restaurante-caravelle/
- Guía de Córdoba: https://restaurantedecordoba.com/restaurante/caravelle

Dirección Calle José María Martorell, 40, 14005 Córdoba (Poniente Sur) y teléfono +34 957 41 09 65, coincidentes entre la ficha de Maps, Facebook, varios directorios y la ficha de reserva. El horario (cerrado los lunes; de martes a domingo 12:00–16:00 y 20:00–01:00) procede de directorios gastronómicos y se muestra como orientativo.

La web que figuraba en los perfiles del negocio (`caravellecordoba.com`) ya no resuelve, por lo que no se enlaza. Tampoco se ha localizado un perfil oficial de Instagram. Las fotos se consultan en Google Maps, Facebook y Tripadvisor; los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://restaurante-caravelle-cordoba.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
