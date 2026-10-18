# La Taberna de Santi

Web informativa de **La Taberna de Santi**, taberna en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4698117, -6.3805495).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs la-taberna-de-santi`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://la-taberna-de-santi.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=la-taberna-de-santi
bun run typecheck   # dentro de apps/la-taberna-de-santi
```
