# Restaurante Mirador de María · Astro

Web local bilingüe para Mirador de María, restaurante en El Pinillo, Torremolinos.

## Desarrollo

```bash
bun run --filter mirador-de-maria dev
bun run --filter mirador-de-maria check
bun run --filter mirador-de-maria typecheck
bun run --filter mirador-de-maria build
```

## SEO y contenido

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos geográficos/sociales, sitemap, JSON-LD `Restaurant` y `FAQPage`.
- Incluye NAP, mapa, indicaciones y acceso telefónico.
- Las coordenadas y el identificador proceden de la ficha de Maps enviada. La dirección y el teléfono se encontraron en directorios públicos y deberían confirmarse con el restaurante. No se publica un horario definitivo porque no se verificó uno vigente.
- Dominio provisional: `https://mirador-de-maria.vercel.app`. Actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando se defina el dominio final.

## Fotografías

La ficha de Google Maps no facilitó archivos de foto directos para integrar. La web dirige a la galería original; el arte del hero y la tarjeta social son ilustraciones vectoriales propias, no fotos del restaurante. Las fotos de Facebook pueden consultarse en la página oficial enlazada desde el footer.
