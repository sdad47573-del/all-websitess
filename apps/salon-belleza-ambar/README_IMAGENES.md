# Imágenes — Salon de Belleza AMBAR

## Descarga intentada (sin fotos)

La ficha de Google Maps (`Salon De Belleza Ambar`, 37.89835,-4.759369, feature `0xd6cdf9a0298840f:0xb5d2fd301a9849d6`) **no devolvió bloque de fotos** en 3 ejecuciones de:

```bash
node scripts/fetch-maps-photos.mjs salon-belleza-ambar
```

La web usa 4 SVG propios de marcador en `src/assets/fotos/` (más el logo):

- `salon-belleza-ambar-malaga.svg` → portada / hero
- `-estudio/-facial/-corporal.svg` → secciones y galería (`GALLERY` con 4 entradas)
- `salon-belleza-ambar-logo.svg` → logo

Si la ficha publica fotos más adelante, reintenta el script y actualiza los imports en `src/data/site.ts`.

## Cómo sustituirlas por fotos reales

1. Pide al salón sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts` y `GALLERY`.
3. `bun run --filter salon-belleza-ambar build`

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.
