# Restaurante El Errante

Web informativa de **Restaurante El Errante**, restaurante en Burgos. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (42.3440844, -3.6881851).
- Ciudad (Burgos): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-el-errante`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://restaurante-el-errante.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-el-errante
bun run typecheck   # dentro de apps/restaurante-el-errante
```
