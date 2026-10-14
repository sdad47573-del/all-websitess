# Imágenes — Salón de belleza Toñi Bravo

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps tiene fotos con derechos de autor y sus
condiciones prohíben descargarlas para reutilizarlas en otra web.

Esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base.
3. `bun run --filter toni-bravo-salon-de-belleza build`
