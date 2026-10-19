# Mesón de Manuela, La Montanera

Web informativa de **Mesón de Manuela, La Montanera**, mesón en Sanlúcar de Barrameda (Cádiz). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos

- Verificado: nombre, enlace de Google Maps y coordenadas (36.7797295, -6.3535882).
- Dirección de directorios locales (Calle Bolsa 10, 11540 Sanlúcar de Barrameda): se muestra como dato a confirmar en la ficha oficial.
- Pendiente de confirmar: teléfono, horario detallado, carta, precios y valoración. Marcado en `src/data/site.ts` como `PENDIENTE`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs meson-de-manuela-la-montanera`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos).
- `siteUrl` (`https://meson-de-manuela-la-montanera.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=meson-de-manuela-la-montanera
bun run typecheck   # dentro de apps/meson-de-manuela-la-montanera
```
