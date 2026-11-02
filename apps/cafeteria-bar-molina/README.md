# Cafetería-Bar Molina · Astro

Sitio informativo para la cafetería y restaurante de cocina castellana de la calle Morería, 7 (Ciudad Real).

## Desarrollo

```bash
bun run --filter cafeteria-bar-molina dev
bun run --filter cafeteria-bar-molina typecheck
bun run --filter cafeteria-bar-molina build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Morería, 7, planta baja, 13002 Ciudad Real. Teléfono publicado: 926 30 91 59. Coordenadas, feature id y Plus Code proceden del Google Maps proporcionado.
- Nota de Google: 4,4 sobre 5 con 482 reseñas. Categorías: restaurante de cocina castellana y cafetería, con etiqueta «Brunch». La casa se describe como «Comida casera y manchega».
- Horario: de 9:00 a 17:00 de lunes a viernes, sábado de 9:30 a 17:00 y domingo cerrado. Accesibilidad: acceso y asientos adaptados; sin aparcamiento adaptado.
- La ficha no enlaza web propia ni publica carta con precios. Los platos salen de las fotos del perfil (salmorejo, boquerones, torreznos, arroz negro, pescado y carne a la plancha, postres) y de las reseñas (albóndigas, arroz, salmorejo, boquerones).
- Dominio provisional: `https://cafeteria-bar-molina.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs cafeteria-bar-molina`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
