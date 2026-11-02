# El Asador

Web informativa de El Asador, pollería en la calle Pedrera Alta, 38, bajo, 13003
Ciudad Real.

- **Ficha de origen:** Google Maps, `38.9925357,-3.9302337`, feature
  `0xd6bc368e66f05f5:0x210803d1537c4967`, place id `ChIJ9QVv5mjDaw0RZ0l8U9EDCCE`,
  código `/g/12qfzg443`.
- **Datos publicados en la ficha:** categoría «Pollería», 4,2 con 153 reseñas,
  926 25 09 26, de 11:00 a 14:30 de martes a viernes, sábados hasta las 15:30 y
  domingos hasta las 15:00, lunes cerrado. Entrada adaptada sí; aparcamiento y
  asientos adaptados no.
- **Sin carta publicada:** la ficha no tiene carta ni precios, así que la página
  no muestra platos con importes; nombra el pollo asado y las croquetas que citan
  las reseñas destacadas.
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs el-asador-ciudad-real` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).

## Comandos

```bash
bun run --filter el-asador-ciudad-real dev
bun run --filter el-asador-ciudad-real build
bun run --filter el-asador-ciudad-real typecheck
node scripts/check-site-content.mjs el-asador-ciudad-real
```

El dominio previsto es `https://el-asador-ciudad-real.vercel.app/`.
