# Asador de pollos Nora · Astro

Sitio informativo para el asador de pollos y comida árabe de la avenida de Carlos Haya 63, Cruz de Humilladero (Málaga).

## Desarrollo

```bash
bun run --filter asador-de-pollos-nora dev
bun run --filter asador-de-pollos-nora typecheck
bun run --filter asador-de-pollos-nora build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Av. de Carlos Haya, 63, Cruz de Humilladero, 29010 Málaga. Teléfono: +34 652 10 98 20.
- Nota de Google: 4,6 sobre 5 con 96 reseñas. Horario variable por día (detallado en `src/data/site.ts`).
- La ficha no publica carta ni precios: los platos salen de la descripción de la casa, las reseñas y las fotos del perfil (cuscús, pastela, pollo, pescado, fritos y dulces). No se dan precios.
- Dominio provisional: `https://asador-de-pollos-nora.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs asador-de-pollos-nora`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
