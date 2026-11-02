# Chicken BBQ Sevilla · Astro

Sitio informativo para el asador de pollo a la brasa de la avenida de Alemania 19, Los Bermejales, 41012 Sevilla.

## Desarrollo

```bash
bun run --filter chicken-bbq-sevilla dev
bun run --filter chicken-bbq-sevilla typecheck
bun run --filter chicken-bbq-sevilla build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Av. de Alemania, 19, Los Bermejales, 41012 Sevilla. Teléfono publicado: +34 955 38 61 30. Coordenadas y ficha proceden del Google Maps proporcionado.
- Horario de la ficha: solo comidas, de 11:00 a 16:00 de martes a domingo y desde las 10:00 los lunes. Sin cenas.
- Categorías de Google: restaurante especializado en pollo, parrilla, restaurante de barbacoa, zona de barbacoa, pollería, restaurante especializado en costillas al estilo coreano y comida a domicilio. La ficha marca acceso para sillas de ruedas, pero no aparcamiento ni asientos adaptados.
- Nota de Google: 3,8 sobre 5 con 135 reseñas. Se citan tres reseñas destacadas y se enlaza a la ficha para leerlas todas.
- El negocio describe su producto en la ficha: «Pollo a la Brasa. Productos frescos hechos a la leña de encinas».
- La ficha no publica carta con precios ni web propia, así que la web no muestra importes: los productos que nombra vienen de la descripción, de las categorías y de las reseñas.
- Dominio provisional: `https://chicken-bbq-sevilla.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs chicken-bbq-sevilla`, en `src/assets/fotos/` con su `.maps-manifest.json`. La web usa una en la cabecera y el resto en la galería.

El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
