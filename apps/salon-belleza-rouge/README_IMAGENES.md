# Imágenes — Salón de Belleza Rouge

## Descarga realizada

Se descargaron **3 fotos** de la portada de la galería de la ficha de Google Maps (`Salón de Belleza Rouge`, 37.8803241,-4.7897898, feature `0xd6d209ff5d936db:0xe55774cb08fc28f0`) con:

```bash
node scripts/fetch-maps-photos.mjs salon-belleza-rouge
```

La ficha solo expone 3 fotos en su portada de galería (verificado en 2 ejecuciones: la segunda devolvió las mismas 3, sin novedades). Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`):

- `salon-belleza-rouge-vertical-01.jpg` → portada / hero
- `-vertical-02.jpg` → sección del salón
- `-vertical-03.jpg` → tarjeta del hero
- Las 3 forman la galería (`GALLERY` con 3 entradas)
- `salon-belleza-rouge-logo.svg` → marcador propio, por si hay que revertir

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de estas 3 imágenes** (permiso por escrito del autor/negocio). Si no, sustitúyelas por fotos originales:

1. Pide al centro sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts`.
3. `bun run --filter salon-belleza-rouge build`
