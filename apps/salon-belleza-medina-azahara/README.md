# Salón de Belleza Medina Azahara

Landing local para el Salón de Belleza Medina Azahara, en Av. de Medina Azahara, 10 · Poniente Sur (14005 Córdoba).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Salón de Belleza Medina Azahara                      |
| Dirección               | Av. de Medina Azahara, 10 · Poniente Sur · 14005 Córdoba |
| Categorías de Google    | Centro de estética, peluquería, spa                  |
| Valoración              | 4,3 sobre 5 con 62 reseñas                           |
| Teléfono                | 675 48 68 31 (+34 675 48 68 31)                      |
| Horario                 | L–X 10:00–14:00 y 16:30–20:00; J–V 10:00–20:00; S 9:30–14:00; D cerrado |
| Coordenadas             | 37.8854452, -4.7909253                               |
| Identificador del lugar | `ChIJyQ5Q0ePfbA0RX20bYyXCwGY`                        |
| Feature id              | `0xd6cdfe3d1500ec9:0x66c0c225631b6d5f`               |

## Fotos

Las fotos de la hero, la galería y el `og.jpg` se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs salon-belleza-medina-azahara
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`). Hay 10 fotos descargadas el 16-10-2026. Se muestran optimizadas (AVIF) con enlace a la ficha original.

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

La URL canónica (`https://salon-belleza-medina-azahara.vercel.app`) es provisional: cámbiala si el sitio se despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.
