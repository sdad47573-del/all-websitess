# Imágenes — Peluquería Bartolí

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Peluquería Bartolí`,
36.7301844,-4.4684813) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- Condiciones de Google Maps / Google Earth (sección "Contenido"): no copiar,
  descargar ni reutilizar fotos ajenas sin permiso del titular.
- Las fotos de la ficha pertenecen a sus autores, no son libres.

Se localizó la ficha (feature `0xd72f73aca4dd945:0x7aeb24e388ba03bd`, Av.
Lope de Vega 19, Teatinos, 29010 Málaga), pero **no se descarga ninguna
foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide a la peluquería sus fotos originales (JPG, con permiso escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `peluqueria-bartoli-malaga.svg` → portada / hero
   - `peluqueria-bartoli-lope-de-vega.svg` → la peluquería
   - `peluqueria-bartoli-corte.svg` → corte
   - `peluqueria-bartoli-barba.svg` → barba
3. `bun run --filter peluqueria-bartoli build`
