# Salón de belleza CrissFany's

Landing local para el Salón de belleza CrissFany's, en Av. de la Viñuela, 22 · Levante (14010 Córdoba).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Salón de belleza CrissFany's                         |
| Dirección               | Av. de la Viñuela, 22 · Levante · 14010 Córdoba      |
| Categorías de Google    | Peluquería, depilación láser, manicura y pedicura, cera |
| Valoración              | 4,8 sobre 5 con 6 reseñas                            |
| Teléfono                | 622 68 18 21 (+34 622 68 18 21)                      |
| Horario                 | L y D cerrado; M y V 9:00–18:00; X y J 9:00–13:30 y 16:30–19:30; S 9:00–14:00 |
| Coordenadas             | 37.888565, -4.762951                                 |
| Identificador del lugar | `ChIJFzMRBoHfbA0RCiMxuUzJAm4`                        |
| Feature id              | `0xd6cdf8106113317:0x6e02c94cb931230a`               |

## Fotos

Las fotos de la hero, la galería y el `og.jpg` se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs salon-belleza-crissfany
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`). Hay 10 fotos descargadas el 16-10-2026. Se muestran optimizadas (AVIF) con enlace a la ficha original.

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

La URL canónica (`https://salon-belleza-crissfany.vercel.app`) es provisional: cámbiala si el sitio se despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.
