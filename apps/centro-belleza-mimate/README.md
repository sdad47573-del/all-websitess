# Centro de Belleza Mimate

Landing local para el Centro de Belleza Mimate, en C. José Dámaso "Pepete", 21 · Poniente Sur (14005 Córdoba).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Centro de Belleza Mimate                             |
| Dirección               | C. José Dámaso "Pepete", 21 · Poniente Sur · 14005 Córdoba |
| Categoría de Google     | Peluquería                                           |
| Valoración              | 4,7 sobre 5 con 49 reseñas                           |
| Teléfono                | 695 17 35 32 (+34 695 17 35 32)                      |
| Horario                 | L, M, J y V 10:00–18:00; X y S 10:00–14:00; D cerrado |
| Coordenadas             | 37.8759824, -4.7971771                               |
| Identificador del lugar | `ChIJJ4hBXKYgbQ0R61xfTDYiRN8`                        |
| Feature id              | `0xd6d20a65c418827:0xdf4422364c5f5ceb`               |

## Fotos

Las fotos de la hero, la galería y el `og.jpg` se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs centro-belleza-mimate
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`). Hay 10 fotos descargadas el 16-10-2026. Se muestran optimizadas (AVIF) con enlace a la ficha original.

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

La URL canónica (`https://centro-belleza-mimate.vercel.app`) es provisional: cámbiala si el sitio se despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.
