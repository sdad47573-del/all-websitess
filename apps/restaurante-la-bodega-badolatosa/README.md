# Restaurante La Bodega · Badolatosa

Landing page adaptable en Astro con SEO local, datos estructurados, mapa, contacto y enlaces a las galerías públicas del negocio.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter restaurante-la-bodega-badolatosa
bun --filter restaurante-la-bodega-badolatosa dev
```

Validación: `bun --filter restaurante-la-bodega-badolatosa check`, `typecheck` y `build`.

## Fuentes consultadas

- Google Maps: https://www.google.com/maps/place/Restaurante+la+Bodega/data=!4m7!3m6!1s0xd6d66c3754e50a9:0x93cfe83b11786520!8m2!3d37.3082618!4d-4.6736902!16s%2Fg%2F1v5ft7m3
- Facebook del negocio: https://www.facebook.com/pages/La-Bodega/287181491411378
- Páginas Amarillas: https://www.paginasamarillas.es/f/badolatosa/la-bodega_196136345_000000001.html
- Cylex: https://www.cylex.es/badolatosa/restaurante-la-bodega-13479148.html
- TodoBares: https://www.todobares.com/bar/restaurante-la-bodega-badolatosa/

La dirección Av. de Cuba, 50 y el teléfono +34 954 01 80 62 aparecen en directorios coincidentes con la ficha y las coordenadas facilitadas. Páginas Amarillas describe el local como cafetería-restaurante de cocina tradicional. Los horarios publicados por los directorios no coinciden; por ello, la web no los fija y recomienda llamar antes de ir.

El enlace de Google Maps identifica la ficha, pero no incluye una URL directa descargable para sus fotos. La web enlaza a las galerías de Maps y Facebook para consultar imágenes auténticas; el SVG de Open Graph es una ilustración original y está etiquetado como tal, no es una foto del restaurante.

## Dominio

`https://restaurante-la-bodega-badolatosa.vercel.app` es provisional. Sustitúyelo en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se conozca el dominio definitivo.
