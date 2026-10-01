# A Fuego Brasería · Córdoba

Landing page Astro con diseño adaptable, SEO local, datos estructurados, carta orientativa, mapa y reservas telefónicas.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter a-fuego-braseria
bun --filter a-fuego-braseria dev
```

Validación: `bun --filter a-fuego-braseria check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/A+fuego+braser%C3%ADa/data=!4m7!3m6!1s0xd6cdfd7c652e277:0xf1af25deeee485a9!8m2!3d37.8948051!4d-4.7770884!16s%2Fg%2F11jcm9p59y
- Instagram oficial: https://www.instagram.com/afuegobraseria/
- Facebook: https://www.facebook.com/afuegobraseria/
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g187430-d21037346-Reviews-A_fuego_braseria-Cordoba_Province_of_Cordoba_Andalucia.html
- Cobertura cultural local: https://www.cordobahoy.es/articulo/cultura/arte-que-nace-cordoba-comparte-fuego-braseria/20260321194615193616.html

El enlace de Maps identifica el negocio y las coordenadas, pero no proporciona una URL directa de archivo fotográfico. La web enlaza las galerías del perfil de Maps, Instagram y Facebook; los SVG y fondos son gráficos originales, no fotografías del establecimiento.

La dirección se referencia como Av. Al-Nasir, esquina con C/ Martín Gaite (14006 Córdoba); algunas fuentes la enumeran como Av. Al-Nasir, 11 o C/ Martín Gaite, 2. Teléfono publicado en Instagram y directorios: +34 957 84 71 36. Los horarios varían entre fuentes y no se fijan en la web; se recomienda confirmar llamando. La selección de platos es orientativa, no una carta oficial.

## Dominio

`https://a-fuego-braseria-cordoba.vercel.app` es provisional. Actualizar en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` al definir el dominio final.
