# Restaurante Más Cachito

Web informativa de **Restaurante Más Cachito**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4557222, -6.3814867).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-mas-cachito`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://restaurante-mas-cachito.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-mas-cachito
bun run typecheck   # dentro de apps/restaurante-mas-cachito
```
