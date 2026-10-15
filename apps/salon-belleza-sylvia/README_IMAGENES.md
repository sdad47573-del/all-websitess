# Imágenes — Salón de Belleza Sylvia

## Sin fotos descargables (verificado 3 veces)

La ficha de Google Maps (`Salón de Belleza Sylvia`, 37.9090705,-4.7791103, feature `0xd6cdf0e10a27169:0x554bed62b708a429`) **no devolvió bloque de fotos** en el endpoint `/maps/preview/place`:

```bash
node scripts/fetch-maps-photos.mjs salon-belleza-sylvia
# → "sin fotos en la respuesta" (3 ejecuciones × 6 reintentos)
```

Por eso la web usa **5 imágenes propias de marcador** en `src/assets/fotos/*.svg` (portada, salón, facial, corporal, logo). Compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts` (misma base, extensión `.jpg`).
3. `bun run --filter salon-belleza-sylvia build`

Si la ficha publica fotos más tarde, vuelve a ejecutar el script: descargará solo las nuevas.

## Aviso legal

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.
