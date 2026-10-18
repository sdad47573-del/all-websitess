# Restaurante Casafran

Web de **Restaurante Casafran**, restaurante en la Carretera de Cogullada 22 (50014 Zaragoza), junto a Mercazaragoza.

- Dirección: Carretera de Cogullada 22 · 50014 Zaragoza.
- Valoración: 4,2 en TripAdvisor (19 opiniones).
- Teléfono y horario: no verificados en fuentes públicas. La web remite a la ficha de Google.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs casafran`, guardadas en `src/assets/fotos/`.

## Pendiente antes de publicar

- Confirmar teléfono, horario y carta con el restaurante.
- Completar NIF y email en `LEGAL` (`src/data/site.ts`).
- Revisar `siteUrl` (`https://casafran.vercel.app` es provisional).

## Comandos

```bash
bunx turbo run build --filter=casafran
bunx turbo run typecheck --filter=casafran
```
