# Alcaraván Gastroteca

Web informativa de **Alcaraván Gastroteca**, gastroteca en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (39.4724381, -6.3790827).
- Ciudad (Cáceres): deducida de las coordenadas, no de un dato confirmado.
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs alcaravan-gastroteca`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://alcaravan-gastroteca.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=alcaravan-gastroteca
bun run typecheck   # dentro de apps/alcaravan-gastroteca
```
