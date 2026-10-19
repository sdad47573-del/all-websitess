# Restaurante Nuevo Piti

Web informativa de **Restaurante Nuevo Piti**, restaurante en Sanlúcar de Barrameda (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.8200289, -6.3318002).
- Dirección de directorio local (Ctra. CA-624 156, La Algaida, Sanlúcar): se muestra como dato a confirmar en la ficha oficial.
- Pendiente de confirmar: teléfono, horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-nuevo-piti`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://restaurante-nuevo-piti.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-nuevo-piti
bun run typecheck   # dentro de apps/restaurante-nuevo-piti
```
