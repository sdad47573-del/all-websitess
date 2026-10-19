# Restaurante Mesón Don Paco

Web informativa de **Restaurante Mesón Don Paco**, restaurante en Jerez de la Frontera (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.6978329, -6.12528).
- Dirección y teléfono de directorios locales (Av. del Ejército s/n, Urb. El Bosque, 11405 Jerez · 956 30 65 74): se muestran como datos a confirmar en la ficha oficial.
- Pendiente de confirmar: horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-meson-don-paco`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://restaurante-meson-don-paco.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-meson-don-paco
bun run typecheck   # dentro de apps/restaurante-meson-don-paco
```
