# Restaurante Rincón Gallego Egabrense · Cabra (Córdoba)

Landing page adaptable en Astro con SEO local, datos estructurados, carta orientativa, horarios, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter rincon-gallego-egabrense-cabra
bun --filter rincon-gallego-egabrense-cabra dev
```

Validación: `bun --filter rincon-gallego-egabrense-cabra check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+Rinc%C3%B3n+Gallego+Egabrense/@37.4697147,-4.4320193,17z/
- Instagram oficial: https://www.instagram.com/rincongallegoegabrense/
- Facebook: https://www.facebook.com/rincongallegoegabrense/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g665931-d12475623-Reviews-Restaurante_Rincon_Gallego_Egabrense-Cabra_Province_of_Cordoba_Andalucia.html
- Descripción y reseñas: https://www.toppingsandsalads.es/restaurante-gallego/restaurante-rincon-gallego-egabrense/
- Guía de restaurantes: https://www.restauranis.com/restaurante-rincon-gallego-egabrense-cabra

Dirección Avenida Fuente del Río, 34, 14940 Cabra (Córdoba) y teléfono +34 679 51 11 65, coincidentes en la ficha de Maps, Instagram, Facebook, Waze y varias guías. El nombre del negocio hace referencia a Cabra (Iulia Egabrum en época romana). El horario (lunes cerrado; martes y miércoles solo comida; de jueves a sábado comida y cena; domingo solo mediodía) se muestra como orientativo, por lo que conviene confirmarlo por teléfono.

El enlace de Google Maps identifica la ficha, pero no incluye URLs directas a los archivos de imagen. La web enlaza a las galerías de Maps, Instagram y Facebook para consultar fotos auténticas; los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://rincon-gallego-egabrense-cabra.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
