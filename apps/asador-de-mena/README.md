# Asador de Mena · Astro

Sitio informativo para el asador de pollo y comida casera de la calle Huerta del Obispo 25, Distrito Centro (Málaga).

## Desarrollo

```bash
bun run --filter asador-de-mena dev
bun run --filter asador-de-mena typecheck
bun run --filter asador-de-mena build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Huerta del Obispo, 25, Distrito Centro, 29007 Málaga. Teléfono publicado: +34 952 30 29 56. Coordenadas y ficha proceden del Google Maps proporcionado.
- Nota de Google: 4,6 sobre 5 con 105 reseñas. Horario: solo comidas, de 13:30 a 15:45, de martes a domingo; lunes cerrado.
- La ficha no enlaza web propia. El pollo asado y los menús 1–3 salen de la carta de reparto (precios de plataforma); los guisos y postres, de las fotos del perfil y del escaparate.
- Dominio provisional: `https://asador-de-mena.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs asador-de-mena`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
