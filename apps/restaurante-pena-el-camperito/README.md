# Restaurante Peña El Camperito

Web informativa de **Restaurante Peña El Camperito**, restaurante en Chipiona (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.723255, -6.413198).
- Dirección de directorios locales (Av. Puerto de Chipiona, 11550 Chipiona): se muestra como dato a confirmar en la ficha oficial.
- Pendiente de confirmar: teléfono, horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-pena-el-camperito`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://restaurante-pena-el-camperito.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-pena-el-camperito
bun run typecheck   # dentro de apps/restaurante-pena-el-camperito
```
