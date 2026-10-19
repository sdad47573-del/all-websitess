# Bar Restaurante Las Campanas · Cantina de Quintanapalla

Web informativa de **Bar Restaurante Las Campanas · Cantina de Quintanapalla**, restaurante en Quintanapalla. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (42.4086059, -3.533353).
- Ciudad (Quintanapalla): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs bar-restaurante-las-campanas`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://bar-restaurante-las-campanas.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=bar-restaurante-las-campanas
bun run typecheck   # dentro de apps/bar-restaurante-las-campanas
```
