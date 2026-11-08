# Imágenes — Desmelenate

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Desmelenate`, 36.7252201,-4.4731599) tiene
fotos con derechos de autor y sus condiciones prohíben descargarlas para
reutilizarlas en otra web.

Se localizó la ficha (feature `0xd72f76b64470123:0x2a8da6883a2439dd`, Calle
Escritora Carmen Conde 3, Teatinos, 29010 Málaga), pero **no se descarga
ninguna foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide a la peluquería sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `desmelenate-malaga.svg` → portada / hero
   - `desmelenate-teatinos.svg` → la pelu
   - `desmelenate-peluqueria.svg` → corte y peinado
   - `desmelenate-color.svg` → color
3. `bun run --filter desmelenate build`
