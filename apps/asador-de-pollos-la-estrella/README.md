# Asador de Pollos La Estrella · Astro

Sitio informativo para el asador de pollos de la calle San Jacinto 34, Triana, 41010 Sevilla.

## Desarrollo

```bash
bun run --filter asador-de-pollos-la-estrella dev
bun run --filter asador-de-pollos-la-estrella typecheck
bun run --filter asador-de-pollos-la-estrella build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. San Jacinto, 34, Triana, 41010 Sevilla. Teléfono publicado: +34 954 34 06 66. Coordenadas y ficha proceden del Google Maps proporcionado.
- Horario de la ficha: comidas de 12:30 a 16:00 (sábado desde las 12:00, domingo desde las 11:00). Cena solo viernes y sábado, de 20:00 a 23:00. Miércoles cerrado.
- Categoría de Google: pollería. La ficha marca que no hay aparcamiento adaptado ni asientos adaptados para sillas de ruedas.
- Nota de Google: 4,5 sobre 5 con 245 reseñas. Se citan las tres reseñas destacadas, incluida la crítica de 2 estrellas sobre la ensaladilla, y se enlaza a la ficha para leerlas todas.
- La ficha no publica carta con precios, descripción del negocio, web propia ni reparto a domicilio, así que la web no inventa importes: los productos que nombra vienen de la categoría, del nombre y de las reseñas.
- Dominio provisional: `https://asador-de-pollos-la-estrella.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs asador-de-pollos-la-estrella`, en `src/assets/fotos/` con su `.maps-manifest.json`: diez fotos del perfil (rótulo de la fachada, pollos en el horno giratorio, el asador con los pinchos y la bandeja, y una fuente de embutidos). La web usa el rótulo en la cabecera y seis en la galería.

Del perfil se han dejado fuera las dos fotos de pasos de Semana Santa y la de la calle de noche, porque no muestran el asador.

El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
