# Imágenes — La Barbería de Teatinos

## Fotos descargadas de la ficha de Google Maps

La ficha pública (`La Barbería de Teatinos`, 36.7209134,-4.4728015,
feature `0xd72f736372655af:0x2096b7484de5aceb`, Av. Plutarco 83 Loc 2,
29010 Málaga) se descargó el 16-10-2026 con:

```sh
node scripts/fetch-maps-photos.mjs barberia-teatinos
```

Hay **10 fotos** en `src/assets/fotos/barberia-teatinos-*.jpg` (con su
`.maps-manifest.json`). Se muestran optimizadas (AVIF/varios tamaños) en
hero y galería, con enlace a la ficha original. Los 5 SVG antiguos quedan
solo como logo de respaldo (`barberia-teatinos-logo.svg`).

Si el titular aporta fotos originales, sustitúyelas en `src/data/site.ts`
y reconstruye con `bun run --filter barberia-teatinos build`.
