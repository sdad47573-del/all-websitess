# Restaurante Orense

Web informativa de **Restaurante Orense**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4714805, -6.3787986).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-orense`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://restaurante-orense.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-orense
bun run typecheck   # dentro de apps/restaurante-orense
```
