# Imágenes — The Haircut & Sunbody

## Por qué no se usan las fotos de Google Maps

La ficha pública de Google Maps (`The Haircut`,
36.7238757,-4.4618764) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas, reutilizarlas o incrustarlas con hotlink en otra web:

- Condiciones de Google Maps / Google Earth (sección "Contenido"): no copiar,
  descargar, enlazar en caliente ni reutilizar fotos ajenas sin permiso del titular.
- Las fotos de la ficha pertenecen a sus autores, no son libres.

La versión anterior de esta web incrustaba una foto de Google con hotlink
(`lh3.googleusercontent.com`); se ha eliminado por ese motivo. Se localizó la
ficha (feature `0xd72f73e5f16aa83:0xdee0796f6180324f`, Calle Flaubert 3,
Teatinos, 29010 Málaga), pero **no se descarga ni se enlaza ninguna foto**:
esta web trae 5 imágenes propias de marcador en `src/assets/fotos/*.svg`.
La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG, con permiso escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `the-haircut-malaga.svg` → portada / hero
   - `the-haircut-flaubert.svg` → el estudio
   - `the-haircut-corte.svg` → corte
   - `the-haircut-barba.svg` → barba
3. `bun run --filter the-haircut build`
