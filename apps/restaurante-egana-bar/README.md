# Restaurante Egaña Bar · Astro

Sitio informativo para el bar y restaurante vasco de Egaña Kalea, 14, Abando (Bilbao).

## Desarrollo

```bash
bun run --filter restaurante-egana-bar dev
bun run --filter restaurante-egana-bar typecheck
bun run --filter restaurante-egana-bar build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Egaña Kalea, 14, Abando, 48010 Bilbao (Bizkaia). Teléfono publicado: 685 92 95 84. Coordenadas, feature id, Place ID (`ChIJp7UjjSlQTg0RvqObce0J26g`), kgmid `/g/1tqnmyw8` y Plus Code `8CMV7356+9G` proceden de la ficha de Google Maps.
- Nota: 4,2 sobre 5 con 564 reseñas. Categorías: bar y restaurante vasco. Descripción del local según su ficha: «pintxos caseros y una cuidada selección de vinos».
- Horario publicado: lunes a viernes 7:00–22:30, sábado 8:00–22:30, domingo cerrado. Accesibilidad: **sin acceso adaptado** y **sin aparcamiento adaptado**.
- La ficha no publica carta ni precios ni web propia. Los platos salen de la descripción del local y de las reseñas (pintxos, menú, café, vinos, ensalada, ensaladilla, callos para llevar).
- Dominio provisional: `https://restaurante-egana-bar.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-egana-bar`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
