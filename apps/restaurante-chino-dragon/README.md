# Restaurante Chino Dragón · Astro

Sitio informativo para el restaurante chino de la calle Andrómeda 24, en Teatinos-Universidad (Málaga).

## Desarrollo

```bash
bun run --filter restaurante-chino-dragon dev
bun run --filter restaurante-chino-dragon check
bun run --filter restaurante-chino-dragon typecheck
bun run --filter restaurante-chino-dragon build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Andrómeda, 24, Teatinos-Universidad, 29010 Málaga. Teléfono publicado: +34 952 27 76 09. Coordenadas y ficha proceden del Google Maps proporcionado.
- Nota de Google: 3,6 sobre 5 con 398 reseñas. Horario publicado: todos los días, 12:30–16:30 y 20:00–24:00.
- El menú del día (8,75 €) está copiado de la carta fotografiada en la ficha del restaurante. Los precios pueden cambiar.
- Dominio provisional: `https://restaurante-chino-dragon.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-chino-dragon`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
