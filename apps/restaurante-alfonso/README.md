# Restaurante Alfonso

Web informativa de **Restaurante Alfonso**, restaurante en Chipiona (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.738977, -6.4319695).
- Dirección y teléfono de directorios locales (Av. de la Diputación 16, 11550 Chipiona · 629 77 40 50): se muestran como datos a confirmar en la ficha oficial.
- Pendiente de confirmar: horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-alfonso`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://restaurante-alfonso.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-alfonso
bun run typecheck   # dentro de apps/restaurante-alfonso
```
