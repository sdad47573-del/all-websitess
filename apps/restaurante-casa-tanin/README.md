# Restaurante Casa Tanín

Web informativa de **Restaurante Casa Tanín**, restaurante en Burgos. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (42.3382422, -3.696122).
- Ciudad (Burgos): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-casa-tanin`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://restaurante-casa-tanin.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-casa-tanin
bun run typecheck   # dentro de apps/restaurante-casa-tanin
```
