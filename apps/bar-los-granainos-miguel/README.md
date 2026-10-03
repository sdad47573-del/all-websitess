# Bar Los Granaínos de Miguel · Astro

Web local bilingüe para el bar de Miguel, en La Cala de Mijas.

## Desarrollo

```bash
bun run --filter bar-los-granainos-miguel dev
bun run --filter bar-los-granainos-miguel check
bun run --filter bar-los-granainos-miguel typecheck
bun run --filter bar-los-granainos-miguel build
```

## SEO y datos

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos locales/sociales, sitemap, JSON-LD `Restaurant` y `FAQPage`.
- Incluye ubicación, teléfono, mapa e indicaciones.
- Nombre, Place ID y coordenadas corresponden a la ficha de Maps proporcionada. Dirección y teléfono se encuentran en directorios públicos. El copy gastronómico se basa en descripciones y reseñas públicas; no constituye carta vigente. Los horarios de fuentes externas no coinciden completamente, así que se recomienda confirmarlos por teléfono.
- Dominio provisional: `https://bar-los-granainos-miguel.vercel.app`. Actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` al definir dominio propio.

## Fotografías

- Se usan siete fotos de Bar Los Granaínos de Miguel encontradas mediante Google en la ficha de Málaga Directory y guardadas localmente en `public/images/`.
- El hero, la sección de cocina, la galería y las tarjetas sociales muestran estas fotos; la galería enlaza la fuente. Los derechos siguen perteneciendo a sus autores.
- Google Maps no expuso archivos de imagen directos; el botón de la galería mantiene el enlace a la ficha de Maps.
