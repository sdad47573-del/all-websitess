# Imágenes — La Barbería de Teatinos

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`La Barbería de Teatinos`,
36.7209134,-4.4728015) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f736372655af:0x2096b7484de5aceb`, Av.
Plutarco 81, Teatinos, 29010 Málaga), pero **no se descarga ninguna foto**:
esta plantilla trae 5 imágenes propias de marcador en `src/assets/fotos/*.svg`.
La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide a la barbería sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `barberia-teatinos-malaga.svg` → portada / hero
   - `barberia-teatinos-plutarco.svg` → la barbería
   - `barberia-teatinos-corte.svg` → corte
   - `barberia-teatinos-barba.svg` → barba
3. `bun run --filter barberia-teatinos build`
