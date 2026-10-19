# Restaurante El Potalazo

Web informativa de **Restaurante El Potalazo**, restaurante en Chipiona (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.741266, -6.4366988).
- Dirección y teléfono de directorios locales (Isaac Peral 2, Paseo Cruz del Mar, 11550 Chipiona · 609 43 07 67): se muestran como datos a confirmar en la ficha oficial.
- Pendiente de confirmar: horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-el-potalazo`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://restaurante-el-potalazo.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-el-potalazo
bun run typecheck   # dentro de apps/restaurante-el-potalazo
```
