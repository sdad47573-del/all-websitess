# Imágenes — Centro de Belleza Integral

## Descarga realizada

La ficha de Google Maps (`CENTRO DE BELLEZA INTEGRAL`, 37.9010719,-4.7536495, feature `0xd6cdf084d8e952b:0x7b7d396cd058f365`) solo expone **1 foto** en la portada de la galería (endpoint `/maps/preview/place`). Se descargó con:

```bash
node scripts/fetch-maps-photos.mjs centro-belleza-integral
```

Queda en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`:

- `centro-belleza-integral-apaisada-01.jpg` → portada / hero (única foto de Google)
- `centro-belleza-integral-*.svg` → marcadores propios (galería, estudio, logo)

Si la ficha publica más fotos en el futuro, vuelve a ejecutar el script: solo descargará las nuevas.

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de esta imagen** (permiso por escrito del autor/negocio). Lo ideal: pedir al centro sus fotos originales (JPG, con permiso) y sustituir los SVG de marcador actualizando los imports en `src/data/site.ts`.
