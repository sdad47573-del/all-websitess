# Café Restaurante Las Rías · Astro

Web local bilingüe para Café Restaurante Las Rías, en La Carihuela, Torremolinos.

## Desarrollo

```bash
bun run --filter cafe-restaurante-las-rias dev
bun run --filter cafe-restaurante-las-rias check
bun run --filter cafe-restaurante-las-rias typecheck
bun run --filter cafe-restaurante-las-rias build
```

## SEO y datos

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos locales y sociales, sitemap, JSON-LD `Restaurant` y `FAQPage`.
- Incluye teléfono, mapa, indicaciones y enlaces a Facebook y Google Maps.
- La ficha de Maps proporcionada es la fuente de nombre, identificador y coordenadas. Dirección, teléfono y cocina se contrastaron con directorios, reseñas y páginas públicas del negocio. Los horarios de terceros pueden estar desactualizados: llama para confirmarlos.
- Dominio provisional: `https://las-rias-torremolinos.vercel.app`. Actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando se asigne dominio propio.

## Fotografías

La página de Google Maps no expuso URL directa de sus archivos de imagen. La web enlaza a la galería oficial; el hero y la tarjeta social son ilustraciones vectoriales originales, no fotografías del restaurante. Si se obtienen fotos autorizadas, pueden agregarse en `src/assets/`.
