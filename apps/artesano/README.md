# Artesano

Web informativa de Artesano, pollos asados y comida para llevar en la calle Don
José Mora, 7, 13170 Miguelturra (Ciudad Real).

- **Ficha de origen:** Google Maps, `38.9651396,-3.8888546`, feature
  `0xd6bdd9ff38bf8d9:0x7ada93b8f7e168ee`, place id `ChIJ2fiL85_daw0R7mjh97iT2no`,
  CID `13901850854891497299`.
- **Datos publicados en la ficha:** «Restaurante de comida para llevar» y
  «Asador de pollos y comida para llevar», 4,9 con 28 reseñas, 660 18 20 21, de
  12:00 a 15:30 con el martes cerrado.
- **Precios:** copiados de los carteles de azulejo del propio local que aparecen
  en su perfil de Google Maps (pollos asados, platos principales, delicias,
  postres y comida por encargo). El cartel vertical recoge la carta completa.
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs artesano` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).
- **Sin web propia:** la ficha de Google no enlaza ningún sitio del negocio; esta
  página no tramita pedidos.

## Comandos

```bash
bun run --filter artesano dev
bun run --filter artesano build
bun run --filter artesano typecheck
node scripts/check-site-content.mjs artesano
```

El dominio previsto es `https://artesano.vercel.app/`.
