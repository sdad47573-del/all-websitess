# Freiduría Luisa y Alexandra

Web informativa de la Freiduría Luisa y Alexandra, en la avenida de Emilio Lemos 19
(local 5C1), 41020 Sevilla.

- **Ficha de origen:** Google Maps, `37.4027135,-5.9226665`, feature
  `0xd126fdfe5ab394f:0x463c5182df9a0232`, place id `ChIJTzmr5d9vEg0RMgKa34JRPEY`,
  CID `5061009703796605490`.
- **Datos publicados en la ficha:** freiduría para llevar, 3,8 con 50 reseñas,
  642 98 38 13, todos los días de 13:00 a 17:00 y de 20:00 a 1:00, acceso para
  sillas de ruedas sí / asientos adaptados no.
- **Fotos:** 10 imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs freiduria-luisa-y-alexandra` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).
- **Sin precios:** la ficha no publica carta, así que la página nombra los productos
  que declaran la categoría, la descripción del negocio y las reseñas destacadas,
  sin importes.

## Comandos

```bash
bun run --filter freiduria-luisa-y-alexandra dev
bun run --filter freiduria-luisa-y-alexandra build
bun run --filter freiduria-luisa-y-alexandra typecheck
node scripts/check-site-content.mjs freiduria-luisa-y-alexandra
```

El dominio previsto es `https://freiduria-luisa-y-alexandra.vercel.app/`.
