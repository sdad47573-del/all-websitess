# Vértice Cafetería-Restaurante

Web informativa de **Vértice Cafetería-Restaurante**, restaurante en Burgos. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (42.2958579, -3.7023749).
- Ciudad (Burgos): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs vertice-cafeteria-restaurante`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://vertice-cafeteria-restaurante.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=vertice-cafeteria-restaurante
bun run typecheck   # dentro de apps/vertice-cafeteria-restaurante
```
