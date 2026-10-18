# Café Bar El Patio

Web informativa de **Café Bar El Patio**, café bar en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4597372, -6.3752548).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs cafe-bar-el-patio`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://cafe-bar-el-patio.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=cafe-bar-el-patio
bun run typecheck   # dentro de apps/cafe-bar-el-patio
```
