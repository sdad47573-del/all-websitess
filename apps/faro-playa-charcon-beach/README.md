# Faro Playa & Charcón Beach · Astro

Web local bilingüe para Restaurante Faro Playa & Charcón Beach, junto a Playa del Charcón, Mijas Costa.

## Desarrollo

```bash
bun run --filter faro-playa-charcon-beach dev
bun run --filter faro-playa-charcon-beach check
bun run --filter faro-playa-charcon-beach typecheck
bun run --filter faro-playa-charcon-beach build
```

## SEO y datos

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos locales/sociales, sitemap, JSON-LD `Restaurant` y `FAQPage`.
- Incluye teléfono, indicaciones y mapa centrado en las coordenadas de Google Maps.
- Nombre, ID y coordenadas proceden de la ficha indicada. Dirección, teléfono y horarios se contrastaron con directorios públicos. Los martes aparecen como día de cierre habitual, pero se recomienda confirmar horas según temporada.
- Dominio provisional: `https://faro-playa-charcon.vercel.app`. Actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` al definir el dominio definitivo.

## Fotografías

La ficha de Google Maps no expuso archivos directos de foto. Los botones de galería abren la ficha oficial; hero y tarjeta de redes son ilustraciones originales, no fotografías del restaurante. Se encontró una página social de Charcón Beach, pero no se usa como cuenta del restaurante sin confirmación de que sea la misma entidad.
