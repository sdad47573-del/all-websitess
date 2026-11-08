# Mesón San Basilio · Córdoba

Landing page adaptable en Astro con SEO local, datos estructurados, carta orientativa, horarios, mapa, contacto y enlaces a las galerías oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter meson-san-basilio-cordoba
bun --filter meson-san-basilio-cordoba dev
```

Validación: `bun --filter meson-san-basilio-cordoba check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/MESÓN+SAN+BASILIO/@37.8764889,-4.7837944,17z/
- Instagram oficial: https://www.instagram.com/mesonsanbasiliocordoba/
- Facebook: https://www.facebook.com/Mesonsanbasilio/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g187430-d2076095-Reviews-Meson_San_Basilio-Cordoba_Province_of_Cordoba_Andalucia.html
- Turismo de Córdoba: https://www.turismodecordoba.org/meson-san-basilio
- Guía de restaurantes: https://cordobaflamenca.com/donde-comer/74-restaurantes-cordoba/meson-san-basilio/
- Guía histórica: http://www.cordoba24.info/restaurants/html/meson_san_basilio_es.html

Dirección Calle San Basilio, 19, 14004 Córdoba (barrio de San Basilio / Alcázar Viejo, casco histórico) y teléfono +34 957 29 70 07, coincidentes en la ficha de Maps, Instagram, Turismo de Córdoba y varias guías. El local ocupa una casa de arquitectura tradicional cordobesa de principios del siglo XIX, con capacidad próxima a cien personas, bodega, patio y salones independientes. El horario (13:00–16:00 y 20:00–23:30, con el domingo por la noche cerrado) procede de guías de restaurantes y se muestra como orientativo, por lo que conviene confirmarlo por teléfono.

El enlace de Google Maps identifica la ficha, pero no incluye URLs directas a los archivos de imagen. La web enlaza a las galerías de Maps, Instagram y Facebook para consultar fotos auténticas; los SVG (favicon y Open Graph) son ilustraciones originales y están etiquetados como tal.

## Dominio

`https://meson-san-basilio-cordoba.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
