# Imágenes — Salón De Belleza Esperanza

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Salón De Belleza Esperanza`,
36.7185004,-4.4399478) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f77574dd887b:0x7cc1cdfa09f3e306`, Av.
Herrera Oria 20, Cruz de Humilladero, 29007 Málaga), pero **no se descarga
ninguna foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `salon-belleza-esperanza-malaga.svg` → portada / hero
   - `salon-belleza-esperanza-humilladero.svg` → el salón
   - `salon-belleza-esperanza-facial.svg` → facial
   - `salon-belleza-esperanza-corporal.svg` → corporal
3. `bun run --filter salon-belleza-esperanza build`
