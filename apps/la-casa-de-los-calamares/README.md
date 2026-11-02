# La Casa de los Calamares · Astro

Sitio informativo para el bar restaurante de frituras de la calle de Toledo, 81 (Ciudad Real).

## Desarrollo

```bash
bun run --filter la-casa-de-los-calamares dev
bun run --filter la-casa-de-los-calamares typecheck
bun run --filter la-casa-de-los-calamares build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. de Toledo, 81, 13003 Ciudad Real. Teléfono publicado: 642 38 41 02. Coordenadas, feature id y Plus Code (8CCRX3VC+WR) proceden del Google Maps proporcionado.
- Categoría: bar restaurante. Nota de Google: 3,7 sobre 5 con 115 reseñas.
- **La ficha no publica horario**: la web lo dice así, ofrece el teléfono y no rellena franjas. Sin `openingHoursSpecification` en el JSON-LD.
- Accesibilidad según la ficha: entrada y asientos adaptados.
- **Única carta con precios del perfil: la de bebidas** (caña 1,60/1,80 €, jarra 5,00/6,00 €, tinto de verano 2,50 €). La web los copia como referencia y avisa de que pueden haber cambiado. La comida no tiene precios publicados.
- Los platos salen de las fotos del perfil (fritura variada, bocadillo de calamar, boquerones, paella de marisco, cañas Calatrava, oreja frita, carta de bebidas) y de las reseñas (buenas frituras de pescado, sardinas, tapas).
- Dominio provisional: `https://la-casa-de-los-calamares.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs la-casa-de-los-calamares`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
