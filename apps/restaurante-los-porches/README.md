# Restaurante Los Porches · Astro

Web local bilingüe para Restaurante Los Porches, en La Cala de Mijas.

## Desarrollo

```bash
bun run --filter restaurante-los-porches dev
bun run --filter restaurante-los-porches check
bun run --filter restaurante-los-porches typecheck
bun run --filter restaurante-los-porches build
```

## SEO y contenido

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos locales/sociales, sitemap, JSON-LD `Restaurant` y `FAQPage`.
- Incluye teléfono, mapa, indicaciones y Facebook.
- Coordenadas e identificador proceden de la ficha de Maps enviada. Dirección y teléfono se contrastaron con el directorio oficial de Turismo de Mijas y otras fuentes públicas. El mismo directorio indica cierre los lunes; conviene confirmar el horario con el restaurante antes de ir.
- El restaurante comunica que ofrece carnes, pescados y mariscos y que lleva abierto desde 1988.
- Dominio provisional: `https://restaurante-los-porches.vercel.app`. Actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando se asigne dominio propio.

## Fotografías

La ficha de Maps no expuso archivos de foto directos para integrar. La página dirige a la galería original; el hero y la tarjeta social usan ilustraciones vectoriales propias, no fotos del restaurante. Si se obtienen fotos autorizadas, pueden añadirse en `src/assets/`.
