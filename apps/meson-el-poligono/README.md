# Mesón El Polígono

Web informativa de Mesón El Polígono, bar restaurante en la calle Segadores, 2,
Polígono la Estrella, 13170 Miguelturra (Ciudad Real).

- **Ficha de origen:** Google Maps, `38.9699673,-3.8996377`, feature
  `0xd6bdcd12bd3de45:0x5dbc32ad836772c4`, código `/g/11hbqck1h7`.
- **Datos publicados en la ficha:** bar restaurante y bar de brunch, 4,7 con 259
  reseñas, 926 09 02 23, de 6:30 a 16:00 de lunes a sábado con el domingo
  cerrado, y entrada, aseo, aparcamiento y asientos adaptados para sillas de
  ruedas. La ficha avisa de que el Día de Todos los Santos el local está cerrado.
- **Carta:** sin precios, porque la ficha no los publica. Los platos salen de la
  pizarra pintada en la pared del comedor (visible en una de las fotos del
  perfil) y de lo que muestran las fotos: paella de marisco, chuletillas de
  cordero, revuelto de huevos con jamón, calamares, bacalao, albóndigas, carne
  con tomate, patatas a lo pobre, alpargatas, picadillo de chorizos, hamburguesas,
  perritos, sándwich, pinchos de pollo, patatas bravas y tarta de tres chocolates.
- **Reseñas:** las tres citas que Google destaca, copiadas literalmente y sin
  puntuación inventada.
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs meson-el-poligono` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).

## Comandos

```bash
bun run --filter meson-el-poligono dev
bun run --filter meson-el-poligono build
bun run --filter meson-el-poligono typecheck
node scripts/check-site-content.mjs meson-el-poligono
```

El dominio previsto es `https://meson-el-poligono.vercel.app/`.
