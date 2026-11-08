# Imágenes — Carolina Centro & Belleza

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Carolina Centro & Belleza`,
36.742079,-4.4216928) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f7b4c3f1a54f:0x7ab2145b0a7faf1c`, Calle
Francisco López López 8, Ciudad Jardín, 29014 Málaga), pero **no se descarga
ninguna foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `carolina-belleza-malaga.svg` → portada / hero
   - `carolina-belleza-ciudad-jardin.svg` → el centro
   - `carolina-belleza-facial.svg` → facial
   - `carolina-belleza-corporal.svg` → corporal
3. `bun run --filter carolina-centro-belleza build`
