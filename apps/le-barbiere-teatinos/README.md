# PELUQUERÍA LE BARBIERE TEATINOS

Landing local para la peluquería y barbería LE BARBIERE TEATINOS, en C. Hermes, 5, Loc 2 · Teatinos-Universidad (29010 Málaga).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | PELUQUERÍA LE BARBIERE TEATINOS                      |
| Dirección               | C. Hermes, 5, Loc 2 · Teatinos-Universidad · 29010 Málaga |
| Categorías de Google    | Peluquería, Barbería                                 |
| Valoración              | 4,8 sobre 5 con 221 reseñas                          |
| Teléfono                | 640 17 50 44 (+34 640 17 50 44)                      |
| Horario                 | L–V 10:00–13:00 y 16:00–19:00; S–D cerrado           |
| Coordenadas             | 36.7218951, -4.475792                                |
| Identificador del lugar | `ChIJZ8kf5633cg0R8picvdCpldM`                        |
| Feature id              | `0xd72f7ade71fc967:0xd395a9d0bd9c98f2`               |
| Reserva online          | https://booksy.com/es-es/7319_le-barbiere-teatinos_barberia_29485_malaga |
| Instagram               | https://www.instagram.com/lebarbiere_teatinos/       |

Precios de Booksy (13,00 € corte, etc.) y resto de carta **no** se copian: cambian y deben confirmarse en Booksy.

## Fotos

Las fotos de la hero, la galería y el `og.jpg` se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs le-barbiere-teatinos
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`). Hay 7 fotos descargadas el 16-10-2026. Se muestran optimizadas (AVIF) con enlace a la ficha original.

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run check` — validación Astro.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

La URL canónica (`https://le-barbiere-teatinos.vercel.app`) es provisional: cámbiala si el sitio se despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.
