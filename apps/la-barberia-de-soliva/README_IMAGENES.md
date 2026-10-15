# Imágenes — La Barbería de Soliva

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`La Barberia de Soliva`,
36.7243848,-4.4900346) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- Condiciones de Google Maps / Google Earth (sección "Contenido"): no copiar,
  descargar ni reutilizar fotos ajenas sin permiso del titular.
- Las fotos de la ficha pertenecen a sus autores, no son libres.

Se localizó la ficha (feature `0xd72f0c8ab307885:0x7f0c93635731992c`, C.
Félix Gancedo 1, Soliva, 29010 Málaga), pero **no se descarga ninguna
foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide a la barbería sus fotos originales (JPG, con permiso escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `la-barberia-de-soliva-malaga.svg` → portada / hero
   - `la-barberia-de-soliva-gancedo.svg` → la barbería
   - `la-barberia-de-soliva-corte.svg` → corte
   - `la-barberia-de-soliva-barba.svg` → barba
3. `bun run --filter la-barberia-de-soliva build`
