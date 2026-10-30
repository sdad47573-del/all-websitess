# D'LUNCH · Astro

Sitio informativo para el asador de pollos y comida casera de la calle Eugenio Gross 16, Distrito Centro (Málaga).

## Desarrollo

```bash
bun run --filter d-lunch dev
bun run --filter d-lunch typecheck
bun run --filter d-lunch build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Eugenio Gross, 16, Distrito Centro, 29009 Málaga. Teléfono publicado: +34 951 15 28 75. Coordenadas y ficha proceden del Google Maps proporcionado.
- Nota de Google: 4,4 sobre 5 con 21 reseñas. La ficha no publica horario: la web lo dice y remite al teléfono.
- La carta sale de los carteles amarillos del local fotografiados en el perfil (pollo, menús 1 y 2, comidas caseras a 2,50 €, ensaladas, cuscús). Los precios pueden no estar actualizados.
- Dominio provisional: `https://d-lunch.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs d-lunch`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
