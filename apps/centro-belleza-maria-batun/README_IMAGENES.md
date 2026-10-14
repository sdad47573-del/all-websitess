# Imágenes — Centro de belleza María Batún

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Centro de belleza María Batún`,
36.6947801,-4.4529713) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f9395b398e63:0x6daad6055fc675a4`, Calle
Baltasar Gracián, Los Girasoles, 29003 Málaga), pero **no se descarga ninguna
foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `maria-batun-malaga.svg` → portada / hero
   - `maria-batun-girasoles.svg` → el centro
   - `maria-batun-facial.svg` → facial
   - `maria-batun-corporal.svg` → corporal
3. `bun run --filter centro-belleza-maria-batun build`
