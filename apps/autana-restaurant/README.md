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
- Dominio provisional: `https://autana-restaurant.netlify.app`. Actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando se defina dominio propio.

## Fotografías

- Se usan fotos de Autana Restaurant publicadas en su ficha de TheFork, localizadas mediante la búsqueda de Google y guardadas en `public/images/` para que la web no dependa del servidor externo.
- El hero, la galería de seis imágenes y las tarjetas sociales usan estos archivos locales. La nota de la galería atribuye las fotos a la ficha y enlaza a la fuente; los derechos siguen perteneciendo a sus autores.
- Google Maps no ofreció enlaces directos a sus archivos fotográficos; el CTA de la galería abre la ficha del restaurante en Maps.
