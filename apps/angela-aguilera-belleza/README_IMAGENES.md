# Imágenes — Ángela Aguilera Belleza

## Descarga realizada

Se descargaron **10 fotos** de la portada de la galería de la ficha de Google Maps (`Ángela Aguilera Belleza`, 37.8781135,-4.7973138, feature `0xd6d212447796f59:0xa3a908549458e20b`) con:

```bash
node scripts/fetch-maps-photos.mjs angela-aguilera-belleza
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`):

- `angela-aguilera-belleza-vertical-01.jpg` → portada / hero
- `-vertical-02/03/04/05/07/08/09/10.jpg`, `-apaisada-06.jpg` → galería (8 usadas en `GALLERY`)
- `angela-aguilera-*.svg` → marcadores propios (logo incluido), por si hay que revertir

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que la titular autoriza el uso de estas 10 imágenes** (permiso por escrito). Si no, sustitúyelas por fotos originales:

1. Pide al centro sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts`.
3. `bun run --filter angela-aguilera-belleza build`
