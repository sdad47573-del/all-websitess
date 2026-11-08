# Restaurante Blasón del Tubo

Web de **Restaurante Blasón del Tubo**, tapas y cocina de tradición en el Tubo
(Calle Blasón Aragonés, s/n · 50003 Zaragoza).

## Datos

- Enlace de Google Maps de origen: feature `0xd5914ec0e2397db:0x24e03da6a0dedc65`.
- Dirección: Calle Blasón Aragonés, s/n · 50003 Zaragoza.
- Tel: 976 20 46 87 (`tel:+34976204687`).
- Horario: no unificado entre fuentes; la web pide confirmarlo por teléfono.
- Valoración: 4,1 en TripAdvisor (166 opiniones).

## Fotos

Las fotos son de la ficha de Google Maps, descargadas con
`node scripts/fetch-maps-photos.mjs blason-del-tubo` y guardadas en
`src/assets/fotos/` (con `.maps-manifest.json`). El logo es propio.

## Pendiente antes de publicar

- NIF y email en `LEGAL` (`src/data/site.ts`).
- Confirmar horario, carta y precios con el restaurante.

## Desarrollo

```bash
bun install
bunx turbo run build --filter=blason-del-tubo
```
