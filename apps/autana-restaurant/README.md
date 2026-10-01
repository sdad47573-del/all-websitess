# Autana Restaurant · Astro

Web local bilingüe para Autana Restaurant, en Mijas Costa (Málaga).

## Desarrollo

```bash
bun run --filter autana-restaurant dev
bun run --filter autana-restaurant check
bun run --filter autana-restaurant typecheck
bun run --filter autana-restaurant build
```

## SEO y contenido

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos geográficos y sociales, sitemap, JSON-LD `Restaurant` y `FAQPage`.
- Incluye mapa, indicaciones, teléfono y llamadas de contacto.
- La ficha proporcionada confirma nombre y coordenadas. Dirección y teléfono aparecen en fuentes gastronómicas públicas; verifica que sigan vigentes con el restaurante. No se fijan horarios ni platos concretos porque pueden cambiar.
- Dominio provisional: `https://autana-restaurant.vercel.app`. Actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando se defina dominio propio.

## Fotografías

La ficha de Google Maps no expuso una URL directa de los archivos fotográficos. Los enlaces de la web llevan a la galería oficial; el hero y la tarjeta social usan ilustraciones vectoriales originales y no son fotos del restaurante. Si se obtienen archivos autorizados, pueden incorporarse en `src/assets/`.
