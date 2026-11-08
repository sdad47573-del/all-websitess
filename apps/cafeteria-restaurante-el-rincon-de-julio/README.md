# El Rincón de Julio

Web informativa de **El Rincón de Julio**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4666183, -6.3776563).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs cafeteria-restaurante-el-rincon-de-julio`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://cafeteria-restaurante-el-rincon-de-julio.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=cafeteria-restaurante-el-rincon-de-julio
bun run typecheck   # dentro de apps/cafeteria-restaurante-el-rincon-de-julio
```
