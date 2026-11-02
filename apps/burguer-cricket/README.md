# Burguer Cricket · Astro

Sitio informativo para la hamburguesería de la Avenida Tablas de Daimiel, 7 (Ciudad Real).

## Desarrollo

```bash
bun run --filter burguer-cricket dev
bun run --filter burguer-cricket typecheck
bun run --filter burguer-cricket build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Av. Tablas de Daimiel, 7, 13004 Ciudad Real. Teléfono publicado: 926 25 34 79. Coordenadas, feature id y Plus Code (8CCRX3HF+G9) proceden del Google Maps proporcionado.
- Categorías: hamburguesería, restaurante americano y restaurante de comida rápida. Nota de Google: 3,9 sobre 5 con 669 reseñas.
- **La ficha no publica horario**: la web lo dice así, ofrece el teléfono y no rellena franjas. Sin `openingHoursSpecification` en el JSON-LD.
- Accesibilidad según la ficha: entrada, aseo y asientos adaptados. Terraza cubierta con mesas y sillas rojas, según las fotos.
- No hay carta con precios ni web propia. Los platos salen de las fotos del perfil (hamburguesa de buey, hamburguesa con huevo, plato combinado, nachos con queso, ensalada de atún, fachada, interior y terraza) y de las reseñas (hamburguesa de buey, ensaladas con salsa, quejas por la espera).
- Dominio provisional: `https://burguer-cricket.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs burguer-cricket`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
