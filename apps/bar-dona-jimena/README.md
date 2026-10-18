# Bar Doña Jimena

Web informativa de **Bar Doña Jimena**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4709454, -6.3922918).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs bar-dona-jimena`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://bar-dona-jimena.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=bar-dona-jimena
bun run typecheck   # dentro de apps/bar-dona-jimena
```
