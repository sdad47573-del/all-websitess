# Imágenes — Velari antigua

## Descarga realizada

El 15/10/2026 se descargaron **10 fotos** de la portada de la galería de la ficha de Google Maps (`Velari antigua`, 36.7097005,-4.4427071, feature `0xd72f7fd57db4b6d:0x663d7451caa9239c`) con:

```bash
node scripts/fetch-maps-photos.mjs velari-antigua
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`):

- `velari-antigua-apaisada-01.jpg` → portada / hero
- `velari-antigua-vertical-02.jpg`, `-vertical-03.jpg`, `-cuadrada-05.jpg`, `-vertical-06.jpg`, `-vertical-07.jpg`, `-vertical-09.jpg`, `-vista-4-04.jpg`, `-vista-8-08.jpg`, `-vista-10-10.jpg` → galería
- `velari-antigua-*.svg` → marcadores propios (logo incluido), por si hay que revertir

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de estas 10 imágenes** (permiso por escrito del autor/negocio). Si no, sustitúyelas por fotos originales:

1. Pide al estudio sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts`.
3. `bun run --filter velari-antigua build`
