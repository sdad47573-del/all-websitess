# Imágenes — Centro de belleza Mª Jesús

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Centro de belleza MªJesús`,
36.7028354,-4.4376122) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f781dcc095fd:0x2fd96c88aea8cd2a`, Calle
Garcerán 43, Huelin, 29002 Málaga), pero **no se descarga ninguna foto**: esta
plantilla trae 5 imágenes propias de marcador en `src/assets/fotos/*.svg`. La
web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `centro-belleza-ma-jesus-malaga.svg` → portada / hero
   - `centro-belleza-ma-jesus-huelin.svg` → el centro
   - `centro-belleza-ma-jesus-facial.svg` → facial
   - `centro-belleza-ma-jesus-corporal.svg` → corporal
3. `bun run --filter centro-belleza-ma-jesus build`
