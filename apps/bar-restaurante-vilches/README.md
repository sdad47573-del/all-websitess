# Bar Restaurante Vilches

Web informativa de **Bar Restaurante Vilches**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4961872, -6.3673871).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs bar-restaurante-vilches`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://bar-restaurante-vilches.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=bar-restaurante-vilches
bun run typecheck   # dentro de apps/bar-restaurante-vilches
```
