# Restaurante Hostal Frasca · Astro

Sitio informativo para el restaurante y bar de tapas de la Plaza Agustín Salido, 2 (Ciudad Real).

## Desarrollo

```bash
bun run --filter restaurante-hostal-frasca dev
bun run --filter restaurante-hostal-frasca typecheck
bun run --filter restaurante-hostal-frasca build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Pl. Agustín Salido, 2, 13003 Ciudad Real. Teléfono publicado: 651 83 86 60. Coordenadas, feature id y Plus Code proceden del Google Maps proporcionado.
- Nota de Google: 3,9 sobre 5 con 531 reseñas. Horario: de 8:00 a 1:00 de lunes a sábado y de 8:00 a 17:00 los domingos, sin día de cierre en la ficha. Accesibilidad: acceso y asientos adaptados; la ficha marca que no hay aparcamiento adaptado.
- La ficha no enlaza web propia ni publica carta con precios. Los platos salen de las fotos del perfil (migas con sardinas, torreznos, chorizo criollo y morcilla a la plancha, tortilla, ensalada, bocadillos) y de las reseñas destacadas.
- Aunque el nombre comercial y el toldo de la fachada digan «Hostal ★★», la ficha solo publica la parte de restauración: la web no inventa habitaciones, tarifas ni un teléfono de alojamiento.
- Dominio provisional: `https://restaurante-hostal-frasca.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-hostal-frasca`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
