# Cafetería San José · Astro

Sitio informativo para la cafetería y bar de tapas del Paseo Carlos Eraña, 4 (Ciudad Real).

## Desarrollo

```bash
bun run --filter cafeteria-san-jose dev
bun run --filter cafeteria-san-jose typecheck
bun run --filter cafeteria-san-jose build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `CafeOrCoffeeShop`/`FAQPage`.
- Dirección: P.º Carlos Eraña, 4, 13004 Ciudad Real. Teléfono publicado: 926 036 598. Coordenadas y ficha proceden del Google Maps proporcionado.
- Nota de Google: 4,4 sobre 5 con 612 reseñas. Horario: de lunes a viernes, de 7:45 a 24:00; sábado y domingo cerrados. Accesibilidad publicada: acceso, aparcamiento, aseo y asientos adaptados.
- La ficha no enlaza web propia. La carta de raciones sale de la foto de la carta del perfil; los bocadillos, sándwiches y tostadas, de las fotos de la barra. No se publican precios: en la foto de la carta la columna de importes está cortada.
- Dominio provisional: `https://cafeteria-san-jose.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs cafeteria-san-jose`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
