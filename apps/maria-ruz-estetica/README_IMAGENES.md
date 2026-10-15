# Imágenes — María Ruz Centro de Estética & Bienestar

## Descarga realizada

La ficha de Google Maps (`María Ruz Centro de Estética & Bienestar`, 37.9009463,-4.7582646, feature `0xd6cdf9778890e5b:0x8ded725e6d501e93`) expone **3 fotos** en la portada de la galería. Se descargaron con:

```bash
node scripts/fetch-maps-photos.mjs maria-ruz-estetica
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`:

- `maria-ruz-estetica-apaisada-02.jpg` → portada / hero
- `maria-ruz-estetica-vertical-01.jpg` → el centro
- `maria-ruz-estetica-apaisada-03.jpg` → galería
- `maria-ruz-*.svg` → marcadores propios (galería parcial, logo)

Si la ficha publica más fotos en el futuro, vuelve a ejecutar el script: solo descargará las nuevas.

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de estas 3 imágenes** (permiso por escrito del autor/negocio). Lo ideal: pedir al centro sus fotos originales (JPG, con permiso) y completar la galería actualizando `src/data/site.ts`.
