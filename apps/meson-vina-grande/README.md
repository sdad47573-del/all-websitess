# Mesón Viña Grande

Web informativa de **Mesón Viña Grande**, restaurante en Cáceres. Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, ciudad (Cáceres), enlace de Google Maps y coordenadas (39.471503, -6.3787469).
- Pendiente de confirmar: dirección, código postal, teléfono, horario, carta, precios y valoración. Las fuentes consultadas se contradicen o no se pudieron leer, así que la web no los inventa. Están marcados en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs meson-vina-grande`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://meson-vina-grande.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=meson-vina-grande
bun run typecheck   # dentro de apps/meson-vina-grande
```
