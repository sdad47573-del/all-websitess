# El Mesoncito De Andrés

Web informativa de **El Mesoncito De Andrés**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4455146, -6.5074009).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs el-mesoncito-de-andres`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://el-mesoncito-de-andres.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=el-mesoncito-de-andres
bun run typecheck   # dentro de apps/el-mesoncito-de-andres
```
