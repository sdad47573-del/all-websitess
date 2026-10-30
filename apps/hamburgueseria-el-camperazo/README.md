# Hamburguesería El Camperazo · Astro

Sitio informativo para la hamburguesería de la calle Mora y Cabrera 38 (esquina), Puerto de la Torre (Málaga).

## Desarrollo

```bash
bun run --filter hamburgueseria-el-camperazo dev
bun run --filter hamburgueseria-el-camperazo typecheck
bun run --filter hamburgueseria-el-camperazo build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Mora y Cabrera, 38, Puerto de la Torre, 29190 Málaga. Teléfono: +34 633 13 03 10. Pedidos: +34 654 18 82 30 (tarjeta del local).
- Nota de Google: 3,8 sobre 5 con 485 reseñas. Horario: jueves a domingo de 20:00 a 24:00; cerrado de lunes a miércoles.
- Carta con precios copiada de las pizarras y carteles fotografiados en el perfil de Google Maps (supercamperos, superbocatas, superhamburguesas, pizzas, raciones y bebidas).
- Dominio provisional: `https://hamburgueseria-el-camperazo.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs hamburgueseria-el-camperazo`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
