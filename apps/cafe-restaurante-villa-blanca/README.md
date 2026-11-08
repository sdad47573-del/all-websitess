# Café Restaurante Villa Blanca

Web informativa de **Café Restaurante Villa Blanca**, restaurante en Chipiona (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.7398338, -6.4396801).
- Dirección y teléfono de directorios locales (Calle los Corrales, 4, 11550 Chipiona · 666 26 46 35): se muestran como datos a confirmar en la ficha oficial.
- Pendiente de confirmar: horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs cafe-restaurante-villa-blanca`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://cafe-restaurante-villa-blanca.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=cafe-restaurante-villa-blanca
bun run typecheck   # dentro de apps/cafe-restaurante-villa-blanca
```
