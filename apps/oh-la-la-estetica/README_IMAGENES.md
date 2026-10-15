# Imágenes — Oh la la Centro de Estética

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Oh la la Centro de Estética`,
36.7226163,-4.4722677) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

Por eso **no se descarga ninguna foto**: esta plantilla trae 5 imágenes propias
de marcador en `src/assets/fotos/*.svg`. La web compila y se ve bien con ellas,
y evita cualquier problema legal.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `ohlala-malaga.svg` → portada / hero
   - `ohlala-estudio.svg` → el estudio
   - `ohlala-facial.svg` → facial
   - `ohlala-corporal.svg` → corporal
   - `ohlala-logo.svg` → logo (o usa el logo real)
3. `bun run --filter oh-la-la-estetica build`

## Alternativa gratuita y legal

Si necesitas fotos temporales libres, usa [Unsplash](https://unsplash.com/es)
(estética, facial, spa) con su licencia gratuita y cita al autor si lo pide
la licencia.
