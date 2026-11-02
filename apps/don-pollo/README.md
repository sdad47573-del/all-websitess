# Don Pollo · Astro

Sitio informativo para el restaurante especializado en pollo de la calle Sirena Varada, 41013 Sevilla.

## Desarrollo

```bash
bun run --filter don-pollo dev
bun run --filter don-pollo typecheck
bun run --filter don-pollo build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. la Sirena Varada, 41013 Sevilla. Teléfono publicado: +34 955 09 52 78. Coordenadas y ficha proceden del Google Maps proporcionado.
- Horario de la ficha: de 21:00 a 2:00, de lunes a sábado. Domingo cerrado. No hay servicio de mediodía.
- Categoría de Google: restaurante especializado en pollo. La ficha marca que no hay aparcamiento adaptado para sillas de ruedas.
- Nota de Google: 4,3 sobre 5 con 51 reseñas. Las tres reseñas destacadas se citan en la portada con la puntuación de su autor.
- La carta, los precios y el aviso de reparto (1,50 € de incremento, 10 € de mínimo) están transcritos de la pizarra de precios del local, que aparece en una de las fotos de su perfil de Google.
- La ficha no enlaza web propia, así que la web es informativa y no tramita reservas ni pedidos.
- Dominio provisional: `https://don-pollo.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs don-pollo`, en `src/assets/fotos/` con su `.maps-manifest.json`. El perfil tiene tres fotos: el interior con la pizarra verde, los carteles de precios de la pared morada y la pizarra amarilla con la carta.

El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
