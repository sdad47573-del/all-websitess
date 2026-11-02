# A boca2 Ciudad Real · Astro

Sitio informativo para la bocatería de la calle de los Hidalgos, 3 (Ciudad Real).

## Desarrollo

```bash
bun run --filter a-boca-2-ciudad-real dev
bun run --filter a-boca-2-ciudad-real typecheck
bun run --filter a-boca-2-ciudad-real build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. de los Hidalgos, 3, 13004 Ciudad Real. Coordenadas, feature id y Plus Code (8CCRX3MG+W9) proceden del Google Maps proporcionado.
- Categoría: bocatería. Nota de Google: 3,2 sobre 5 con 65 reseñas.
- **La ficha no publica teléfono ni horario**, y la web lo dice así en lugar de rellenar huecos. Sin `telephone` ni `openingHoursSpecification` en el JSON-LD.
- Atributos que sí constan: entrada accesible para sillas de ruedas y «Se admiten perros».
- No hay carta con precios ni web propia. Los productos salen de las fotos del perfil (lomo con queso, pollo, interior con barra naranja) y de las reseñas (kebab, patatas fritas, patatas con carne de kebab).
- La media se cuenta sin maquillar: la sección de la casa menciona tanto la reseña de cinco estrellas como las críticas.
- Dominio provisional: `https://a-boca-2-ciudad-real.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs a-boca-2-ciudad-real`, en `src/assets/fotos/` con su `.maps-manifest.json`. El perfil solo tiene cuatro fotos, así que la galería las muestra todas. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
