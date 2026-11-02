# Mi Fogón comidas para llevar

Web informativa de Mi Fogón comidas para llevar, en Rda. Pte. 7, 30320 Fuente
Álamo (Murcia).

- **Ficha de origen:** Google Maps, `37.7228307,-1.1768293`, feature
  `0xd6363001b4ef7a9:0x3893280c2f3e5c8d`, place id `ChIJqfdOGwBjYw0RjVw-Lwwokzg`,
  CID `4076646120497765517`.
- **Datos publicados en la ficha:** restaurante de comida para llevar, 3,8 con 12
  reseñas, teléfono **641 23 67 43**, de 8:00 a 16:00 de miércoles a domingo con
  lunes y martes cerrado.
- **Descripción del negocio:** «Cocina casera, platos típicos con toques
  personales en algunas recetas».
- **Reseñas:** se publican las tres que Google destaca (dos de cinco estrellas y
  una de una estrella), con su puntuación real.
- **Lo que la ficha NO publica (y la web no inventa):** carta con precios, web
  propia y datos de accesibilidad.
- **Fotos:** 10 imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs mi-fogon` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).

## Comandos

```bash
bun run --filter mi-fogon dev
bun run --filter mi-fogon build
bun run --filter mi-fogon typecheck
node scripts/check-site-content.mjs mi-fogon
```

El dominio previsto es `https://mi-fogon.vercel.app/`.
