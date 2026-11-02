# Panaria · Astro

Sitio informativo para el local de Panaria de la calle de Alarcos, 3 (Ciudad Real).

## Desarrollo

```bash
bun run --filter panaria dev
bun run --filter panaria typecheck
bun run --filter panaria build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `CafeOrCoffeeShop`/`FAQPage`.
- Dirección: C. de Alarcos, 3, 13001 Ciudad Real. Coordenadas, feature id y Plus Code (8CCRX3MC+92) proceden del Google Maps proporcionado.
- Categorías de la ficha: cafetería, panadería, bar, restaurante de desayunos, de brunch, servicio de catering, comida rápida, pastelería y bocatería. Nota de Google: 3,8 sobre 5 con 621 reseñas.
- **La ficha no publica teléfono ni horario**: la web lo dice así y no rellena huecos. Sin `telephone` ni `openingHoursSpecification` en el JSON-LD.
- Accesibilidad según la ficha: entrada, aseo y asientos adaptados.
- No hay carta con precios ni web propia del local. Los productos salen de las fotos del perfil (bandeja de desayuno, vitrina de tartas, café con nata, donuts, croissant de jamón, barra, comedor, fachada) y de las reseñas (variedad de cafés, batidos, infusiones y bollería).
- La web se presenta como informativa de este local, no como web de la cadena Panaria.
- Dominio provisional: `https://panaria-ciudad-real.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs panaria`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
