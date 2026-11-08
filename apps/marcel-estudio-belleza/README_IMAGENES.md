# Imágenes — Marcel Estudio de belleza

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`Marcel Estudio de belleza`,
36.7206202,-4.4646642) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

Por eso **no se descarga ninguna foto**: esta plantilla trae 5 imágenes propias
de marcador en `src/assets/fotos/*.svg`. La web compila y se ve bien con ellas,
y evita cualquier problema legal.

## Cómo poner fotos reales (2 minutos)

1. Pide al estudio sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `marcel-malaga.svg` → portada / hero
   - `marcel-estudio.svg` → el estudio
   - `marcel-facial.svg` → facial
   - `marcel-corporal.svg` → corporal
   - `marcel-logo.svg` → logo (o usa el logo real)
3. `bun run --filter marcel-estudio-belleza build`

## Alternativa gratuita y legal

Si necesitas fotos temporales libres, usa [Unsplash](https://unsplash.com/es)
(belleza, facial, spa) con su licencia gratuita y cita al autor si lo pide
la licencia.
