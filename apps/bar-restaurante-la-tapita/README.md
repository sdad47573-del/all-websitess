# Bar restaurante La Tapita

Web informativa de **Bar restaurante La Tapita**, bar restaurante en Sanlúcar de Barrameda (Cádiz). Astro, Tailwind y DaisyUI, como el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps (octubre de 2026): nombre, dirección
  (P.º Jardín Botánico, 10, 11540 Sanlúcar de Barrameda), teléfono (677 03 13 17), horario,
  valoración (4,3 con 118 reseñas), accesibilidad y coordenadas (36.7681126, -6.3552193).
- La carta y los precios no se publican: no hay una confirmada. Los platos que aparecen en
  `/carta` son los citados por los clientes en sus reseñas de Google.
- Fotos: descargadas de la galería de la ficha con
  `node scripts/fetch-maps-photos.mjs bar-restaurante-la-tapita` y guardadas en
  `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://bar-restaurante-la-tapita.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=bar-restaurante-la-tapita
bun run typecheck   # dentro de apps/bar-restaurante-la-tapita
node scripts/check-site-content.mjs bar-restaurante-la-tapita
```

## Crédito

El pie incluye «Creado por Sur Digital» con enlace a <https://sur-digital.vercel.app/>.
