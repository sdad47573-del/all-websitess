# Pico de Oro · Astro

Sitio informativo para la freiduría y pollería de la calle Pablo Coso Calero 107, 41930 Bormujos (Sevilla).

## Desarrollo

```bash
bun run --filter pico-de-oro dev
bun run --filter pico-de-oro typecheck
bun run --filter pico-de-oro build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Pablo Coso Calero, 107, 41930 Bormujos (Sevilla). Teléfono publicado: +34 614 10 84 96. Coordenadas y ficha proceden del Google Maps proporcionado.
- Horario de la ficha: de 10:30 a 16:00 y de 19:00 a 23:30, todos los días salvo el martes (solo 10:30–15:00) y el miércoles (cerrado). Viernes y sábado, noche hasta las 24:00.
- Categorías de Google: comida para llevar, pollería, freiduría, hamburguesería, comida a domicilio, bar de tapas, tortillería, pastelería y panadería.
- La ficha marca acceso para sillas de ruedas y aparcamiento adaptado.
- Nota de Google: 4,0 sobre 5 con 163 reseñas. Se citan las reseñas destacadas y se enlaza a la ficha para leerlas todas.
- Reparto y platos salen de la descripción que publica el propio negocio en su ficha: Glovo y Uber Eats de 11:00 a 16:00 y de 18:30 a 23:30, pollo al carbón, pescados fritos, arroces, comida casera, tapas, paellas, migas los domingos y terraza con el Café Bar Bohemia.
- La ficha no publica carta con precios ni dominio propio (el campo de web apunta a un enlace corto de Google), así que la web no muestra importes.
- Dominio provisional: `https://pico-de-oro.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs pico-de-oro`, en `src/assets/fotos/` con su `.maps-manifest.json`: diez fotos del perfil (fachada, pollos sobre la brasa, migas, vitrina de guisos, tortilla, asados de cordero). La web usa ocho en la galería y la fachada en la cabecera.

El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
