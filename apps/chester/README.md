# Chester · Astro

Sitio informativo para Chester (Frankfurt Chester), hamburguesería y casa de tapas, salchichas y bocadillos en la Plaça Príncep Benlloch 2 de Andorra la Vella.

## Desarrollo

```bash
bun run --filter chester dev
bun run --filter chester typecheck
bun run --filter chester build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Plaça Príncep Benlloch, 2, AD500 Andorra la Vella, Andorra. Teléfono publicado en la ficha: +376 864 333. Coordenadas y ficha proceden del Google Maps proporcionado.
- Nota de Google: 3,9 sobre 5 con 1.421 reseñas. Horario: todos los días de 12:00 a 23:00. La ficha marca brunch, acceso y asientos adaptados (sin aparcamiento adaptado). La casa se presenta en andorra.com como especialista en tapas, salchichas y bocadillos.
- La ficha no enlaza web propia. La carta se transcribe de la pizarra de la barra y del papel de la mesa que aparecen en las fotos del perfil: frankfurts, bocadillo de lomo, hamburguesas, patatas, croquetas, alitas, ensaladas y postres. Solo se publican los precios legibles en esas fotos.
- Dominio provisional: `https://chester.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs chester`, en `src/assets/fotos/` con su `.maps-manifest.json`. Son diez fotos: fachada y terraza, comedor, barra con la pizarra, pared de cervezas y platos. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
