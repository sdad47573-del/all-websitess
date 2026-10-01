# Restaurante La Antigua Brasa · Córdoba

Landing Astro adaptable con SEO local, datos estructurados, especialidades, contacto y mapa.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-la-antigua-brasa
bun --filter restaurante-la-antigua-brasa dev
```

Validación: `bun --filter restaurante-la-antigua-brasa check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+La+Antigua+Brasa/@37.8986422,-4.7314714,17z/
- Facebook del establecimiento: https://www.facebook.com/p/Restaurante-la-Antigua-Brasa-C%C3%B3rdoba-100067700404681/
- Páginas Amarillas: https://www.paginasamarillas.es/f/cordoba/la-antigua-brasa_200358091_000000001.html
- Directorio de Córdoba: https://restaurantedecordoba.com/restaurante/restaurante-la-antigua-brasa
- Wheree: https://restaurante-la-antigua-brasa.wheree.com/

El enlace de Maps es la ficha del negocio y no contiene URLs directas a archivos de imagen. El sitio invita a abrir las fotos de Google Maps y las del perfil público de Facebook; los SVG y fondos de la página son ilustraciones originales, no fotografías del restaurante.

Se usa la dirección C. Letonia, 5, 14014 Córdoba, confirmada por Páginas Amarillas y otros directorios, y las coordenadas exactas del enlace de Maps. El teléfono aparece como +34 957 32 63 54 en el perfil público del negocio y varias fuentes; Páginas Amarillas muestra un dígito diferente, por lo que se recomienda confirmar por Facebook o Maps. Horarios y oferta pueden cambiar y deben consultarse con el restaurante.

## Dominio

`https://restaurante-la-antigua-brasa-cordoba.vercel.app` es provisional. Cambiarlo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` al definir el dominio real.
