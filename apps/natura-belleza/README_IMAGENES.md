# Imágenes — Natura Belleza

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Natura Belleza`, 36.689509,-4.4514252)
tiene fotos con derechos de autor y sus condiciones prohíben descargarlas para
reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f931d76454ab:0x98f52030721dcb70`, Camino
del Pato 22, Puerta Blanca, 29004 Málaga), pero **no se descarga ninguna
foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `natura-belleza-malaga.svg` → portada / hero
   - `natura-belleza-puerta-blanca.svg` → el centro
   - `natura-belleza-facial.svg` → facial
   - `natura-belleza-corporal.svg` → natural / corporal
3. `bun run --filter natura-belleza build`
