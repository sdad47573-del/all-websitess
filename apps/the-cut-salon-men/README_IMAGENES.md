# Imágenes — The Cut - Salon Men

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`The Cut -Salon Men`,
36.720243,-4.4752066) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- Condiciones de Google Maps / Google Earth (sección "Contenido"): no copiar,
  descargar ni reutilizar fotos ajenas sin permiso del titular.
- Las fotos de la ficha pertenecen a sus autores, no son libres.

Se localizó la ficha (feature `0xd72f735fb45beaf:0x38e355f79da0d334`, Calle
Teseo 2, Teatinos, 29010 Málaga), pero **no se descarga ninguna foto**:
esta plantilla trae 5 imágenes propias de marcador en `src/assets/fotos/*.svg`.
La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG, con permiso escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `the-cut-salon-men-malaga.svg` → portada / hero
   - `the-cut-salon-men-teseo.svg` → el salón
   - `the-cut-salon-men-corte.svg` → corte
   - `the-cut-salon-men-barba.svg` → barba
3. `bun run --filter the-cut-salon-men build`
