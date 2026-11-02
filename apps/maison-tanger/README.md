# Maison Tánger

Web informativa de Maison Tánger, restaurante marroquí en la calle Quevedo, 18,
13004 Ciudad Real.

- **Ficha de origen:** Google Maps, `38.9880043,-3.9214967`, feature
  `0xd6bc3ed4b8cee0b:0x3f1f11fd6da9393a`, place id `ChIJC-6MS-3Daw0ROjmpbf0RHz8`,
  código `/g/11nc8v3rn1`.
- **Datos publicados en la ficha:** «Restaurante marroquí», 5,0 con 21 reseñas,
  926 72 20 22, de 9:00 a 16:00 y de 19:00 a 23:00 de lunes a sábado, domingos
  solo de 9:00 a 16:00. No enlaza web propia ni redes sociales.
- **Sin carta publicada:** los platos que se nombran (pastela de pollo, tajín de
  pollo, tajín de kofta, cuscús, crepes y pastas marroquíes) salen de las reseñas
  que destaca Google y de las fotos del perfil. No hay precios.
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs maison-tanger` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).

## Comandos

```bash
bun run --filter maison-tanger dev
bun run --filter maison-tanger build
bun run --filter maison-tanger typecheck
node scripts/check-site-content.mjs maison-tanger
```

El dominio previsto es `https://maison-tanger.vercel.app/`.
