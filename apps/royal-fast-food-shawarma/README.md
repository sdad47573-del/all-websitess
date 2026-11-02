# ROYAL FAST FOOD Shawarma House Kebab

Web informativa de ROYAL FAST FOOD Shawarma House Kebab, en la calle Feria, 8,
13001 Ciudad Real.

- **Ficha de origen:** Google Maps, `38.9858602,-3.9288998`, feature
  `0xd6bc32189a1ed13:0x263aadc175bf11f1`, place id `ChIJE-2hiSHDaw0R8RG_dcGtOiY`,
  código `/g/11xm_4mwzp`.
- **Datos publicados en la ficha:** «Pizzería», «Restaurante especializado en
  döner kebab», «Restaurante de pollo frito para llevar» y «Taquería»; 4,4 con
  172 reseñas; 613 39 41 91; cenas de 19:30 a 1:00 todos los días y mediodía de
  13:00 a 17:00 de miércoles a domingo.
- **Web del negocio:** la ficha enlaza `royalfast.foodyservice.com`, que es donde
  se hacen los pedidos online. Esta página solo enlaza allí.
- **Sin carta publicada:** la ficha no tiene carta ni precios; los platos que se
  nombran (pizza, kebab de pollo, durum, shawarma, pollo frito) salen de sus
  categorías y de las reseñas destacadas.
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs royal-fast-food-shawarma` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).

## Comandos

```bash
bun run --filter royal-fast-food-shawarma dev
bun run --filter royal-fast-food-shawarma build
bun run --filter royal-fast-food-shawarma typecheck
node scripts/check-site-content.mjs royal-fast-food-shawarma
```

El dominio previsto es `https://royal-fast-food-shawarma.vercel.app/`.
