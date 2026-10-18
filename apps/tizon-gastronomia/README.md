# Tizón Gastronomía

Web informativa de **Tizón Gastronomía**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4582091, -6.3790894).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs tizon-gastronomia`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://tizon-gastronomia.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=tizon-gastronomia
bun run typecheck   # dentro de apps/tizon-gastronomia
```
