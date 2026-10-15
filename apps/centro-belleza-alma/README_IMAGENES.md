# Imágenes — Centro de Belleza Alma

## Descarga realizada

Se descargaron **10 fotos** de la portada de la galería de la ficha de Google Maps (`Centro de Belleza Alma`, 37.8983708,-4.7738382, feature `0xd6cdf234d2c947d:0xafe6a5a06659be61`) con:

```bash
node scripts/fetch-maps-photos.mjs centro-belleza-alma
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`):

- `centro-belleza-alma-apaisada-03.jpg` → portada / hero
- `-vertical-01/02/04/09/10.jpg`, `-cuadrada-05/06/07/08.jpg` → galería (8 usadas en `GALLERY`)
- `centro-belleza-alma-*.svg` → marcadores propios (logo incluido), por si hay que revertir

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de estas 10 imágenes** (permiso por escrito del autor/negocio). Si no, sustitúyelas por fotos originales:

1. Pide al centro sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts`.
3. `bun run --filter centro-belleza-alma build`
