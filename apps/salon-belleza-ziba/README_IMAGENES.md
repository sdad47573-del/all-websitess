# Imágenes — Salón de belleza Zibá

## Descarga realizada

Se descargaron **10 fotos** de la portada de la galería de la ficha de Google Maps (`Salon de belleza Zibá`, 37.8782833,-4.7617569, feature `0xd6d217a055decaf:0x8fa845e1833ab6b7`) con:

```bash
node scripts/fetch-maps-photos.mjs salon-belleza-ziba
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`):

- `salon-belleza-ziba-apaisada-04.jpg` → portada / hero
- `salon-belleza-ziba-vertical-01.jpg`, `-apaisada-02.jpg`, `-vertical-03.jpg`, `-vertical-05.jpg`, `-vertical-06.jpg`, `-vertical-07.jpg`, `-cuadrada-08.jpg`, `-cuadrada-09.jpg`, `-vertical-10.jpg` → galería (8 usadas en `GALLERY`)
- `salon-belleza-ziba-*.svg` → marcadores propios (logo incluido), por si hay que revertir

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de estas 10 imágenes** (permiso por escrito del autor/negocio). Si no, sustitúyelas por fotos originales:

1. Pide al salón sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts`.
3. `bun run --filter salon-belleza-ziba build`
