# Hamburguesería y Asador de Pollos Padilla · Astro

Sitio informativo para el asador de pollos y hamburguesería de la avenida del Doctor Marañón 47, Palma-Palmilla (Málaga).

## Desarrollo

```bash
bun run --filter hamburgueseria-asador-padilla dev
bun run --filter hamburgueseria-asador-padilla typecheck
bun run --filter hamburgueseria-asador-padilla build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Av. del Dr. Marañón, 47, Palma-Palmilla, 29009 Málaga. Teléfono: +34 952 28 65 30.
- Nota de Google: 4,2 sobre 5 con 217 reseñas.
- Horario del cartel del local: dos turnos (10:00–16:30 y 20:00–00:00) todos los días. La ficha de Google marca el miércoles cerrado y horario continuado de 10:00 a 24:00; la web advierte de la diferencia.
- Reparto a domicilio con Glovo, pedido mínimo 10,00 €, según el cartel del local.
- La ficha no publica carta con precios: los platos salen de la descripción de la casa, las reseñas y las fotos del perfil (pollo asado, albóndigas, potaje, croquetas, arroces y ensaladas). No se dan precios.
- Dominio provisional: `https://hamburgueseria-asador-padilla.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs hamburgueseria-asador-padilla`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
