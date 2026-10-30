# Restaurante Lucheng Teatinos · Astro

Sitio informativo para el restaurante chino de la calle de Demóstenes 15, en Teatinos-Universidad (Málaga).

## Desarrollo

```bash
bun run --filter restaurante-lucheng-teatinos dev
bun run --filter restaurante-lucheng-teatinos typecheck
bun run --filter restaurante-lucheng-teatinos build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. de Demóstenes, 15, Teatinos-Universidad, 29010 Málaga. Teléfono publicado: +34 952 27 40 54. Coordenadas y ficha proceden del Google Maps proporcionado.
- Nota de Google: 4,0 sobre 5 con 548 reseñas. Horario: todos los días 13:00–16:15 y 20:00–23:30; los martes la cena empieza a las 20:30.
- La ficha no publica carta: los platos de la web salen de las fotografías del perfil y de la cocina de la casa, sin precios.
- Dominio provisional: `https://restaurante-lucheng-teatinos.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-lucheng-teatinos`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
