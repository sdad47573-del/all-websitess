# Taberna Puerta de Mérida

Web informativa de **Taberna Puerta de Mérida**, taberna en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.47217, -6.371795).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs taberna-puerta-de-merida`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://taberna-puerta-de-merida.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=taberna-puerta-de-merida
bun run typecheck   # dentro de apps/taberna-puerta-de-merida
```
