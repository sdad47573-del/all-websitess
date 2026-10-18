# La Tabernita

Web informativa de **La Tabernita**, bar restaurante de tapas en la Calle Antonio Cánovas, 2 (50004 Zaragoza). Hecha con Astro y Tailwind/DaisyUI, igual que el resto de webs del monorepo.

## Datos y fuentes

- Dirección y ficha: enlace de Google Maps (41.6481691, -0.8908018).
- Teléfono 654 253 112 y horario: Páginas Amarillas. Otra fuente (Eatbu) da un horario distinto, así que la web pide confirmarlo.
- Valoración: 4,2 en TripAdvisor (48 opiniones).
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs la-tabernita`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.

## Pendiente

- `LEGAL.nif` y `LEGAL.email` en `src/data/site.ts`: sin completar.
- `siteUrl` (`https://la-tabernita.vercel.app`) es provisional.
- Carta y precios no publicados: no se inventan.

## Comandos (desde la raíz del monorepo)

```
bunx turbo run build --filter=la-tabernita
bun run typecheck   # dentro de apps/la-tabernita
```
