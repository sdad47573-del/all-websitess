# Zero Onze hair studio

Landing local para la barbería Zero Onze hair studio, en Av. Parménides, 17 · Teatinos-Universidad (29010 Málaga).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Zero Onze hair studio                                      |
| Dirección               | Av. Parménides, 17 · Teatinos-Universidad · 29010 Málaga    |
| Categoría de Google     | Barbería                                             |
| Valoración              | 5,0 sobre 5 con 135 reseñas                           |
| Teléfono                | 693 32 59 59 (móvil)                                 |
| Horario                 | L 16:00–20:00; M–V 10:00–13:00 y 16:00–20:00; S 10:00–13:00; D cerrado |
| Coordenadas             | 36.7207816, -4.4798433                               |
| Identificador del lugar | `ChIJrUGIurT3cg0Rif9DsHyUwmQ`                        |
| Identificador de canal  | `/g/11kk4sjbxw`                                      |
| Feature id              | `0xd72f7b4ba8841ad:0x64c2947cb043ff89`               |

## Fotos

Las fotos de la hero, la galería y el `og.jpg` se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs zero-onze-hair-studio
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`).
