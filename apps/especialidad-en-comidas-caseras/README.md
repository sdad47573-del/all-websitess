# Especialidad en Comidas Caseras · Astro

Sitio informativo para el bar de comidas caseras y tapeo de la avenida de la Paloma 46, Carretera de Cádiz (Málaga).

## Desarrollo

```bash
bun run --filter especialidad-en-comidas-caseras dev
bun run --filter especialidad-en-comidas-caseras typecheck
bun run --filter especialidad-en-comidas-caseras build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Av. de la Paloma, 46, Carretera de Cádiz, 29003 Málaga. Teléfono: +34 685 21 69 46.
- Nota de Google: 3,9 sobre 5 con 69 reseñas. Horario: todos los días de 8:00 a 24:00.
- La ficha no publica carta ni precios: los platos salen de las fotos del perfil y de las reseñas (fritura de pescado, albóndigas, carne guisada, paella, mejillones, molletes). No se dan precios.
- Dominio provisional: `https://especialidad-en-comidas-caseras.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs especialidad-en-comidas-caseras`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
