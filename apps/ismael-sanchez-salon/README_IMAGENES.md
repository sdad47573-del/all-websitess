# Imágenes — Ismael Sánchez Salón de Caballeros

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Ismael Sánchez Salón de caballeros`,
36.7109257,-4.4650043) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- Condiciones de Google Maps / Google Earth (sección "Contenido"): no copiar,
  descargar ni reutilizar fotos ajenas sin permiso del titular.
- Las fotos de la ficha pertenecen a sus autores, no son libres.

Se localizó la ficha (feature `0xd72f71cfbb00305:0xca0fca5428860fb2`, C.
Quasimodo 18, Teatinos, 29006 Málaga), pero **no se descarga ninguna
foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG, con permiso escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `ismael-sanchez-malaga.svg` → portada / hero
   - `ismael-sanchez-quasimodo.svg` → el salón
   - `ismael-sanchez-corte.svg` → corte
   - `ismael-sanchez-barba.svg` → barba
3. `bun run --filter ismael-sanchez-salon build`
