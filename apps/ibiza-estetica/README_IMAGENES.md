# Imágenes — IBIZA centro de estética

## Descarga realizada

La ficha de Google Maps (`IBIZA centro de estética`, 37.89074,-4.799004, feature `0xd6cdf5ab814c91b:0x42908036c4ccb4e8`) solo expone **1 foto** en la portada de la galería. Se descargó con:

```bash
node scripts/fetch-maps-photos.mjs ibiza-estetica
```

Queda en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`:

- `ibiza-estetica-vertical-01.jpg` → portada / hero (única foto de Google)
- `ibiza-estetica-*.svg` → marcadores propios (galería, estudio, logo)

Si la ficha publica más fotos en el futuro, vuelve a ejecutar el script: solo descargará las nuevas.

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de esta imagen** (permiso por escrito del autor/negocio). Lo ideal: pedir al centro sus fotos originales (JPG, con permiso) y sustituir los SVG de marcador actualizando los imports en `src/data/site.ts`.
