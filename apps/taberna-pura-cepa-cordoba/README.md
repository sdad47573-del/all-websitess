# Taberna Pura Cepa · Córdoba

Landing page adaptable en Astro con SEO local, datos estructurados, carta orientativa, horarios, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter taberna-pura-cepa-cordoba
bun --filter taberna-pura-cepa-cordoba dev
```

Validación: `bun --filter taberna-pura-cepa-cordoba check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Taberna+Pura+Cepa+(C%C3%B3rdoba)/@37.8794347,-4.7887686,17z/
- Instagram oficial: https://www.instagram.com/puracepacordoba/
- Facebook oficial: https://www.facebook.com/tabernapuracepa/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g187430-d7784015-Reviews-Taberna_Pura_Cepa-Cordoba_Province_of_Cordoba_Andalucia.html
- Directorio gastronómico: https://restaurantedecordoba.com/restaurante/taberna-pura-cepa-cordoba
- Descripción y reseñas: https://www.toppingsandsalads.es/servicio-de-catering/taberna-pura-cepa-cordoba/

Dirección Av. del Aeropuerto, 6 (Pasaje Poniente Sur), 14004 Córdoba, y teléfono +34 957 08 49 06, coincidentes con la ficha de Maps, el Instagram del negocio y varios directorios. El horario publicado (cerrado los lunes, servicio de desayunos, comidas y noches de jueves a sábado) proviene de los datos de Google Business recogidos por el directorio; puede variar, por lo que se muestra como orientativo.

Las fotos de la portada y de la sección «Pura Cepa, en fotos.» son las de la ficha pública de Google Maps (identificadores anotados en `src/assets/fotos/.maps-manifest.json`), descargadas a `src/assets/fotos/` y servidas optimizadas en AVIF con varios tamaños. La web sigue enlazando a las galerías de Maps, Instagram y Facebook para consultar el resto de fotos. Los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://taberna-pura-cepa-cordoba.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
