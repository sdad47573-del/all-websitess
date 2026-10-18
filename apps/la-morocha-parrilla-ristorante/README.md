# La Morocha Parrilla & Ristorante

Web informativa de **La Morocha Parrilla & Ristorante**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4739385, -6.3727746).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs la-morocha-parrilla-ristorante`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://la-morocha-parrilla-ristorante.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=la-morocha-parrilla-ristorante
bun run typecheck   # dentro de apps/la-morocha-parrilla-ristorante
```
