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

La ficha de Google Maps no expuso una URL directa de los archivos de foto. Por eso, los enlaces abren la galería original y el hero/tarjeta social usan arte vectorial propio, no fotografías atribuidas al restaurante. Si se obtienen los archivos autorizados, pueden incorporarse en `src/assets/`.
