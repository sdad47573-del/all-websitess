# Imágenes — Salon de Belleza Goya

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Salon de Belleza Goya`,
36.705377,-4.436806) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f782258bef07:0x1d1d6edfd7cf54a6`, Calle
Goya 2, Huelin, 29002 Málaga), pero **no se descarga ninguna foto**: esta
plantilla trae 5 imágenes propias de marcador en `src/assets/fotos/*.svg`. La
web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `salon-belleza-goya-malaga.svg` → portada / hero
   - `salon-belleza-goya-huelin.svg` → el salón
   - `salon-belleza-goya-facial.svg` → facial
   - `salon-belleza-goya-corporal.svg` → corporal
3. `bun run --filter salon-belleza-goya build`
