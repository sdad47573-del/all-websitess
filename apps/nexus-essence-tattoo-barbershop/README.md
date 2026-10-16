# Nexus Essence Tattoo & Barbershop

Landing local para tatuaje y barbería Nexus Essence, en Av. Jorge Luis Borges, 46 · Teatinos-Universidad (29010 Málaga).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Nexus Essence Tattoo & Barbershop                    |
| Dirección               | Av. Jorge Luis Borges, 46 · Teatinos-Universidad · 29010 Málaga |
| Categoría de Google     | Barbería                                             |
| Valoración              | 5,0 sobre 5 con 73 reseñas                           |
| Teléfono                | 722 38 84 27 (+34 722 38 84 27)                      |
| Horario                 | L–V 8:00–21:00; S 10:00–16:00; D cerrado             |
| Coordenadas             | 36.7207307, -4.4715546                               |
| Identificador del lugar | `ChIJ9ct6OAD3cg0RRxfHuDHkphs`                        |
| Feature id              | `0xd72f700387acbf5:0x1ba6e431b8c71747`               |
| Reserva online          | https://booksy.com/es-es/182638_nexus-essence_barberia_29485_malaga |

## Fotos

Las fotos de la hero, la galería y el `og.jpg` se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs nexus-essence-tattoo-barbershop
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`). Hay 10 fotos descargadas el 16-10-2026. Se muestran optimizadas (AVIF) con enlace a la ficha original.

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

La URL canónica (`https://nexus-essence-tattoo-barbershop.vercel.app`) es provisional: cámbiala si el sitio se despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.
