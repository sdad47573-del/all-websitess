# Restaurante El Rincón Hispano

Web informativa de **Restaurante El Rincón Hispano**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4675084, -6.3785565).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-el-rincon-hispano`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://restaurante-el-rincon-hispano.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-el-rincon-hispano
bun run typecheck   # dentro de apps/restaurante-el-rincon-hispano
```
