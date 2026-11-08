# Bar Restaurante Avenida

Web informativa de **Bar Restaurante Avenida**, bar restaurante en Sanlúcar de Barrameda (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.7934622, -6.3371888).
- Dirección y teléfono de directorios locales (Av. de Huelva 108, 11540 Sanlúcar · 956 38 07 51): se muestran como datos a confirmar en la ficha oficial.
- Pendiente de confirmar: horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs bar-restaurante-avenida`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://bar-restaurante-avenida.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=bar-restaurante-avenida
bun run typecheck   # dentro de apps/bar-restaurante-avenida
```
