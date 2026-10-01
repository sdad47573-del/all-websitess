# Restaurante El Olivo · Luque (Córdoba)

Landing page adaptable en Astro con SEO local, datos estructurados, carta orientativa, horarios, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-el-olivo-luque
bun --filter restaurante-el-olivo-luque dev
```

Validación: `bun --filter restaurante-el-olivo-luque check`, `typecheck` y `build`.

## Fuentes consultadas

- Web oficial: https://restauranteolivoluque.es/
- Google Maps: https://www.google.com/maps/place/Restaurante+El+Olivo/@37.5549734,-4.2825977,17z/
- Instagram oficial: https://www.instagram.com/restauranteolivo1/
- Facebook: https://www.facebook.com/p/Restaurante-El-Olivo-100063502634840/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g1539130-d7182793-Reviews-Restaurante_EL_OLIVO-Luque_Province_of_Cordoba_Andalucia.html
- Guía Macarfi: https://macarfi.com/index.php/es/cor/ficha-restaurante/restaurante-el-olivo-luque
- Prensa (ABC Gurme): https://www.abc.es/gurme/cordoba/sevi-olivo-tradicion-innovacion-202301100636_noticia.html
- Turismo Subbética: https://turismodelasubbetica.es/luque/item/restaurante-el-olivo

Dirección Calle Cronista Vicente Estrada, 21, 14880 Luque (Córdoba), teléfonos 655 97 55 25 / 605 21 51 75 y correo fbaronacanete@gmail.com, coincidentes con la web oficial, la ficha de Maps y las guías consultadas. El horario (lunes 12:00–16:30 / 20:30–23:00; martes cerrado; de miércoles a domingo 12:30–16:30 / 20:00–00:00) proviene de la web oficial; puede variar en festivos, por lo que se muestra con la recomendación de confirmar por teléfono.

El enlace de Google Maps identifica la ficha, pero no incluye URLs directas a los archivos de imagen. La web enlaza a las galerías de Maps, Instagram y Facebook para consultar fotos auténticas; los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://restaurante-el-olivo-luque.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
