# Imágenes — Medicina & Belleza

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Medicina & Belleza`, 36.7194888,-4.4112038)
tiene fotos con derechos de autor y sus condiciones prohíben descargarlas para
reutilizarlas en otra web.

Se intentó localizar la ficha (feature `0xd72f7de5f47c371:0x27faea6671b86c3e`,
Av. Cánovas del Castillo 3, La Malagueta, 29016 Málaga), pero **no se descarga
ninguna foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `medicina-belleza-malaga.svg` → portada / hero
   - `medicina-belleza-clinica-malagueta.svg` → la clínica
   - `medicina-belleza-facial-malaga.svg` → facial
   - `medicina-belleza-corporal-malaga.svg` → corporal
3. `bun run --filter medicina-belleza build`
