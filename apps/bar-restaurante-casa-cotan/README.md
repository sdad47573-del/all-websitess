# Bar Restaurante Casa Cotan

Web informativa de **Bar Restaurante Casa Cotan**, bar restaurante en Chipiona (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.7314941, -6.4268583).
- Dirección y teléfono de directorios locales (Av. del Universo 35, 11550 Chipiona · 681 67 83 88): se muestran como datos a confirmar en la ficha oficial.
- Pendiente de confirmar: horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs bar-restaurante-casa-cotan`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://bar-restaurante-casa-cotan.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=bar-restaurante-casa-cotan
bun run typecheck   # dentro de apps/bar-restaurante-casa-cotan
```
