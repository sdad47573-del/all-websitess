# Casa Pirigüeta

Web informativa de **Casa Pirigüeta**, restaurante marinero en Sanlúcar de Barrameda (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.7895816, -6.3509637).
- Dirección y teléfono de directorios locales (Pórtico de Bajo de Guía 24, 11540 Sanlúcar · 601 64 01 83): se muestran como datos a confirmar en la ficha oficial.
- Pendiente de confirmar: horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs casa-pirigueta`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://casa-pirigueta.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=casa-pirigueta
bun run typecheck   # dentro de apps/casa-pirigueta
```
