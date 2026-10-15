# Imágenes — Barbería & Peluquería NELD

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Barbería & Peluquería - NELD`,
36.7207181,-4.4646552) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- Condiciones de Google Maps / Google Earth (sección "Contenido"): no copiar,
  descargar ni reutilizar fotos ajenas sin permiso del titular.
- Las fotos de la ficha pertenecen a sus autores, no son libres.

Se localizó la ficha (feature `0xd72f78e8acca3b3:0xcb70ffa956a732a8`, Calle
Doctor Miguel Díaz Recio 38, Teatinos, 29010 Málaga), pero **no se descarga
ninguna foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG, con permiso escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `neld-barberia-malaga.svg` → portada / hero
   - `neld-barberia-diaz-recio.svg` → el salón
   - `neld-barberia-corte.svg` → corte
   - `neld-barberia-barba.svg` → barba
3. `bun run --filter neld-barberia build`
