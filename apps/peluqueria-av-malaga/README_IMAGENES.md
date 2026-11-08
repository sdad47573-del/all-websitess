# Imágenes — Peluquería AV

## Fotos descargadas de la ficha de Google Maps

La ficha pública (`Peluquería AV`, 36.7218896,-4.4731652,
feature `0xd72f7cff17ea2bf:0xd10a6931609ad5ad`, C. Margarita Xirgu,
29010 Málaga) se descargó el 16-10-2026 con:

```sh
node scripts/fetch-maps-photos.mjs peluqueria-av-malaga
```

Hay **10 fotos** en `src/assets/fotos/peluqueria-av-malaga-*.jpg` (con su
`.maps-manifest.json`). Se muestran optimizadas (AVIF/varios tamaños) en
hero y galería, con enlace a la ficha original. Los SVG antiguos quedan
solo como logo de respaldo (`peluqueria-av-logo.svg`).

Si la peluquería aporta fotos originales, sustitúyelas en `src/data/site.ts`
y reconstruye con `bun run --filter peluqueria-av-malaga build`.
