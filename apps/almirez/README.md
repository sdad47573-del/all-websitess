# Almirez, Comida Tradicional Para Llevar

Web informativa de Almirez, comida tradicional para llevar en la calle Margarita
Xirgu 4, bajo A, Teatinos-Universidad, 29010 Málaga.

- **Ficha de origen:** Google Maps, `36.7211669,-4.4753877`, feature
  `0xd72f71705186dd1:0x8cd6747ab60dbff8`, place id `ChIJ0W0YBRf3cg0R-L8Ntnp01ow`,
  CID `10148426880715177976`.
- **Datos publicados en la ficha:** comida tradicional para llevar, 4,6 con 87
  reseñas, 644 67 80 99, de 10:00 a 15:30 de lunes a domingo con el martes
  cerrado, acceso para sillas de ruedas sí / aparcamiento adaptado no.
- **Descripción del negocio:** «Comida tradicional para llevar. Plato de cuchara a
  diario. Menús por encargo. Postres caseros. Fruta y bebida. Paellas, guisos,
  tortillas, Migas, etc....».
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs almirez` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).
- **Sin precios:** la ficha no publica carta, así que la página nombra los platos
  que declara el negocio y los que citan las reseñas destacadas, sin importes.

## Comandos

```bash
bun run --filter almirez dev
bun run --filter almirez build
bun run --filter almirez typecheck
node scripts/check-site-content.mjs almirez
```

El dominio previsto es `https://almirez.vercel.app/`.
