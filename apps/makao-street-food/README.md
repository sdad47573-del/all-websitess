# Makao - Street Food

Web informativa de Makao - Street Food, comida callejera en el Camino de los
Mártires, 13005 Ciudad Real.

- **Ficha de origen:** Google Maps, `38.9939101,-3.9218651`, feature
  `0xd6bc3de61c5bf95:0xb8358fc79b593899`, place id `ChIJlb_FYd7Daw0RmThZm8ePNbg`,
  código `/g/11tdrgcqbw`.
- **Datos publicados en la ficha:** «Restaurante especializado en comida
  ecléctica», 4,3 con 841 reseñas, 683 30 73 81, horario de comidas y cenas con el
  martes cerrado, entrada, aseo y asientos accesibles, y calendario de reservas
  del propio restaurante.
- **Descripción del negocio:** «La mejor comida callejera de cada rincón del mundo
  en pleno centro de Ciudad Real».
- **Sin carta publicada:** la ficha no tiene carta ni precios, así que la página
  nombra las quesadillas con panceta y las hamburguesas que citan las reseñas.
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs makao-street-food` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).

## Comandos

```bash
bun run --filter makao-street-food dev
bun run --filter makao-street-food build
bun run --filter makao-street-food typecheck
node scripts/check-site-content.mjs makao-street-food
```

El dominio previsto es `https://makao-street-food.vercel.app/`.
