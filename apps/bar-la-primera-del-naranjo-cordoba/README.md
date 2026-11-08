# Bar La Primera del Naranjo · Córdoba

Landing page adaptable en Astro con SEO local, datos estructurados, carta orientativa, horarios, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter bar-la-primera-del-naranjo-cordoba
bun --filter bar-la-primera-del-naranjo-cordoba dev
```

Validación: `bun --filter bar-la-primera-del-naranjo-cordoba check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Bar+La+Primera+Del+Naranjo/@37.9086583,-4.780602,17z/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g187430-d12661457-Reviews-Bar_La_Primera_Del_Naranjo-Cordoba_Province_of_Cordoba_Andalucia.html
- Páginas Amarillas: https://www.paginasamarillas.es/f/cordoba/la-primera-del-naranjo_196226781_000000001.html
- Reportaje ABC Gurmé (Loli Bueno): https://www.abc.es/espana/andalucia/cordoba/loli-bueno-primera-naranjo-20240518133235-nts.html
- Descripción y reseñas: https://www.toppingsandsalads.es/bar/bar-la-primera-del-naranjo/

Dirección Calle Académico Sarazá, 4 (bajo), 14012 Córdoba (barrio del Naranjo), y teléfono +34 957 76 71 03, coincidentes entre la ficha de Maps, Páginas Amarillas (que además confirma las coordenadas) y varios directorios. La casa se inauguró en septiembre de 1924 y sigue llevándola la cuarta generación de la familia. El horario (cerrado lunes y martes; de miércoles a domingo al mediodía y cenas de miércoles a sábado) procede de directorios gastronómicos y se muestra como orientativo, por lo que conviene confirmarlo por teléfono.

El enlace de Google Maps identifica la ficha, pero no incluye URLs directas a los archivos de imagen. La web enlaza a las galerías de Maps, Tripadvisor y a la ficha de Páginas Amarillas para consultar fotos auténticas; los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://bar-la-primera-del-naranjo-cordoba.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
