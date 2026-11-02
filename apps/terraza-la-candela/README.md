# Terraza La Candela · Astro

Sitio informativo para el restaurante de cocina española de la Avenida de los Reyes Católicos, 7 (Ciudad Real).

## Desarrollo

```bash
bun run --filter terraza-la-candela dev
bun run --filter terraza-la-candela typecheck
bun run --filter terraza-la-candela build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Av. de los Reyes Católicos, 7, 13005 Ciudad Real. Teléfono publicado: 926 92 20 83. Coordenadas, feature id y Plus Code proceden del Google Maps proporcionado.
- Nota de Google: 3,4 sobre 5 con 274 reseñas. Categoría: restaurante de cocina española, con etiqueta «Brunch». Accesibilidad: acceso, aseo y asientos adaptados.
- **Sin horario**: la ficha de Google no publica horario semanal, solo el estado «abierto ahora». La web lo dice explícitamente, enseña una única fila con «No publicado · consultar por teléfono» y no añade `openingHoursSpecification` al JSON-LD.
- La ficha no enlaza web propia ni publica carta con precios. Los platos salen de las fotos del perfil (huevos con jamón, solomillo en salsa, guiso, pisto, ensalada, paella, postres) y de las reseñas.
- Se descarta la foto del perfil en la que aparece una clienta comiendo: es una imagen de una persona identificable y no aporta al sitio.
- Dominio provisional: `https://terraza-la-candela.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs terraza-la-candela`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
