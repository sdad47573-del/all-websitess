# Imágenes — Vikings Barbershop

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Vikings barbershop`,
36.7236202,-4.4411333) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- Condiciones de Google Maps / Google Earth (sección "Contenido"): no copiar,
  descargar ni reutilizar fotos ajenas sin permiso del titular.
- Las fotos de la ficha pertenecen a sus autores, no son libres.

Se localizó la ficha (feature `0xd72f7ce0eba386d:0x293b476aaf7eb1e8`, Calle
Sondalezas 14, Bailén-Miraflores, 29010 Málaga), pero **no se descarga
ninguna foto**: esta plantilla trae 5 imágenes propias de marcador en
`src/assets/fotos/*.svg`. La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide a la barbería sus fotos originales (JPG, con permiso escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `vikings-barbershop-malaga.svg` → portada / hero
   - `vikings-barbershop-sondalezas.svg` → la barbería
   - `vikings-barbershop-corte.svg` → corte
   - `vikings-barbershop-barba.svg` → barba
3. `bun run --filter vikings-barbershop build`
