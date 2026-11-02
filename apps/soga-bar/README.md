# Soga bar · Astro

Sitio informativo para el bar de tapas y restaurante de la Plaza de la Provincia, 5 (Ciudad Real).

## Desarrollo

```bash
bun run --filter soga-bar dev
bun run --filter soga-bar typecheck
bun run --filter soga-bar build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Pl. de la Provincia, número 5, 13001 Ciudad Real. Teléfono publicado: 926 92 13 68. Coordenadas, feature id y Plus Code (8CCRX3J9+VX) proceden del Google Maps proporcionado.
- Categorías: restaurante, bar y bar de tapas, con etiqueta «Brunch». Nota de Google: 4,2 sobre 5 con 827 reseñas.
- **La ficha no publica horario**: la web lo dice así, ofrece el teléfono y no rellena franjas. Sin `openingHoursSpecification` en el JSON-LD.
- Accesibilidad según la ficha: entrada, aseo y asientos adaptados; sin aparcamiento adaptado.
- No hay carta con precios ni web propia. Los platos salen de las fotos del perfil (comedor, ensalada de gambas con pato, tortellini de calabaza con rabo de toro, carne a la plancha, lomo en salsa, jamón, croquetas, dos postres) y de las reseñas (tomate escaldado, pimientos con bacalao, suprema de bacalao, ensaladas, pastas y arroces).
- Dominio provisional: `https://soga-bar.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs soga-bar`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
