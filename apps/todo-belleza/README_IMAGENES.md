# Imágenes — Todo Belleza

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Todo Belleza`, 36.7206367,-4.3645608)
tiene fotos con derechos de autor y sus condiciones prohíben descargarlas para
reutilizarlas en otra web.

Se localizó la ficha (feature `0xd7258371bb9c117:0xff99bb9b7cd16f11`, Calle
Escultor Marín Higuero, Echeverría del Palo, 29017 Málaga), pero **no se
descarga ninguna foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `todo-belleza-malaga.svg` → portada / hero
   - `todo-belleza-palo.svg` → el centro
   - `todo-belleza-facial.svg` → facial
   - `todo-belleza-corporal.svg` → corporal
3. `bun run --filter todo-belleza build`
