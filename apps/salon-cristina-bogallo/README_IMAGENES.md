# Imágenes — Salón De Belleza Cristina Bogallo

## Descarga intentada (sin fotos)

La ficha de Google Maps (`Salón De Belleza Cristina Bogallo`, 37.885418,-4.7771482, feature `0xd6cdf7cf69e77d7:0x779d1b2f72014443`) **no devolvió bloque de fotos** en 3 ejecuciones de:

```bash
node scripts/fetch-maps-photos.mjs salon-cristina-bogallo
```

La web usa 4 SVG propios de marcador en `src/assets/fotos/` (más el logo):

- `salon-cristina-bogallo-malaga.svg` → portada / hero
- `-estudio/-facial/-corporal.svg` → secciones y galería (`GALLERY` con 4 entradas)
- `salon-cristina-bogallo-logo.svg` → logo

Si la ficha publica fotos más adelante, reintenta el script y actualiza los imports en `src/data/site.ts`.

## Cómo sustituirlas por fotos reales

1. Pide al salón sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts` y `GALLERY`.
3. `bun run --filter salon-cristina-bogallo build`

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.
