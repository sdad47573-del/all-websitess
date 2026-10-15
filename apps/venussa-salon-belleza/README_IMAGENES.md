# Imágenes — Venussa Salon De Belleza Unisex

## Descarga intentada (sin fotos)

La ficha de Google Maps (`Venussa Salon De Belleza Unisex`, 37.8965903,-4.7781236, feature `0xd6cdf7194afe9d5:0x9b36dbffce3eb5cc`) **no devolvió bloque de fotos** en 3 ejecuciones de:

```bash
node scripts/fetch-maps-photos.mjs venussa-salon-belleza
```

La web usa 4 SVG propios de marcador en `src/assets/fotos/` (más el logo):

- `venussa-salon-belleza-malaga.svg` → portada / hero
- `-estudio/-facial/-corporal.svg` → secciones y galería (`GALLERY` con 4 entradas)
- `venussa-salon-belleza-logo.svg` → logo

Si la ficha publica fotos más adelante, reintenta el script y actualiza los imports en `src/data/site.ts`.

## Cómo sustituirlas por fotos reales

1. Pide al salón sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts` y `GALLERY`.
3. `bun run --filter venussa-salon-belleza build`

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.
