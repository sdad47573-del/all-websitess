# Imágenes — Diamond Woman Belleza y Bienestar

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Diamond Woman Belleza y Bienestar`,
36.6953161,-4.4498068) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f7688efbc541:0xb9d4a972be1ac7d0`, Calle
Haendel 2, La Paz, 29004 Málaga), pero **no se descarga ninguna foto**: esta
plantilla trae 5 imágenes propias de marcador en `src/assets/fotos/*.svg`. La
web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `diamond-woman-malaga.svg` → portada / hero
   - `diamond-woman-la-paz.svg` → el centro
   - `diamond-woman-facial.svg` → facial
   - `diamond-woman-corporal.svg` → bienestar
3. `bun run --filter diamond-woman-belleza-bienestar build`
