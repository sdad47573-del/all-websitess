# Sabores Piano Kebab · Astro

Sitio informativo para el restaurante turco y bocatería de la Ronda de Calatrava, 14 (Ciudad Real).

## Desarrollo

```bash
bun run --filter sabores-piano-kebab dev
bun run --filter sabores-piano-kebab typecheck
bun run --filter sabores-piano-kebab build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Ronda de Calatrava, 14, 13003 Ciudad Real. Teléfono publicado: 926 92 22 87. Coordenadas y feature id proceden del Google Maps proporcionado; el kgmid de la ficha es `/g/1tfzj37g`.
- Nota de Google: 2,8 sobre 5 con 811 reseñas. Categorías: restaurante turco y bocatería. La media se publica tal cual, sin redondear ni ocultar.
- La ficha **no publica horario**, ni carta con precios, ni web propia; solo marca que no hay aparcamiento adaptado. La tabla de visita lo dice con esas palabras y el JSON-LD va sin `openingHoursSpecification`.
- Los platos salen de las fotos del perfil (pincho de döner, plato de kebab, dürüm, calzones, patatas con dos salsas, pollo a la brasa con arroz, curry con naan, carteles de la pared) y de las reseñas (falafel, pizzas, menú de calzone por 22 €, que se cita como reseña y no como tarifa).
- Dominio provisional: `https://sabores-piano-kebab.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs sabores-piano-kebab`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
