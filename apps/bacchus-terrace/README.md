# Bacchus’ Terrace · Astro

Web local bilingüe para Bacchus’ Terrace en Benalmádena Costa.

## Desarrollo

```bash
bun run --filter bacchus-terrace dev
bun run --filter bacchus-terrace check
bun run --filter bacchus-terrace typecheck
bun run --filter bacchus-terrace build
```

## SEO y datos

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos sociales y datos Schema.org `Restaurant` + `FAQPage`.
- Mapa, indicaciones, teléfono, enlace a Facebook y acceso a galería Maps.
- Dirección, teléfono y ubicación proceden de la ficha pública y fuentes de mapas; horario expresamente sujeto a confirmación porque los directorios discrepan.
- Dominio provisional: `https://bacchus-terrace.vercel.app`. Actualizar `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` al definir dominio propio.

## Fotografías

- Cinco fotos de Bacchus Terrace, publicadas por visitantes en Find Me Gluten Free, se guardan localmente en `public/images/` y se usan en el hero, la sección de cocina, la galería y las tarjetas sociales.
- La galería enlaza la ficha original como fuente; los derechos de las fotos siguen perteneciendo a sus autores.
- Google Maps no expuso enlaces directos a archivos de imagen. El CTA de galería sigue llevando a la ficha de Google Maps.
