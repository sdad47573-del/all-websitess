# Asador la Esperanza 2 · Astro

Sitio informativo para el asador de pollo y parrilla de la calle Corregidor Francisco de Molina 7, Los Corazones (Málaga).

## Desarrollo

```bash
bun run --filter asador-la-esperanza-2 dev
bun run --filter asador-la-esperanza-2 typecheck
bun run --filter asador-la-esperanza-2 build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Corregidor Francisco de Molina, 7, barrio de los Corazones, Cruz de Humilladero, 29006 Málaga. Teléfono: +34 952 31 49 33.
- Nota de Google: 4,7 sobre 5 con 90 reseñas. Horario: miércoles a domingo, 10:30–15:30; lunes y martes cerrados.
- La carta sale de la pizarra del local fotografiada en el perfil: menús 1–3, pollo y guarniciones, especiales por día y platos combinados. Los precios pueden haber cambiado.
- Dominio provisional: `https://asador-la-esperanza-2.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs asador-la-esperanza-2`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
