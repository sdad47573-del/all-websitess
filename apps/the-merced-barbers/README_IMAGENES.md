# Imágenes — The Merced Barber's

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`The merced barber's`,
36.7238737,-4.417914) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- Condiciones de Google Maps / Google Earth (sección "Contenido"): no copiar,
  descargar ni reutilizar fotos ajenas sin permiso del titular.
- Las fotos de la ficha pertenecen a sus autores, no son libres.

Se localizó la ficha (feature `0xd72f79036ca3007:0x4e1bab3a671b078b`, Calle
San Juan de Letrán 2, La Merced, 29012 Málaga), pero **no se descarga
ninguna foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide a la barbería sus fotos originales (JPG, con permiso escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `the-merced-barbers-malaga.svg` → portada / hero
   - `the-merced-barbers-merced.svg` → la barbería
   - `the-merced-barbers-corte.svg` → corte
   - `the-merced-barbers-barba.svg` → barba
3. `bun run --filter the-merced-barbers build`
