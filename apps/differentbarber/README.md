# DifferentBarber

Landing local para la barbería DifferentBarber, en C. Nuzas, 2 · Teatinos-Universidad (29010 Málaga).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | DifferentBarber                                      |
| Dirección               | C. Nuzas, 2 · Teatinos-Universidad · 29010 Málaga    |
| Categoría de Google     | Barbería                                             |
| Valoración              | 4,6 sobre 5 con 10 reseñas                           |
| Teléfono                | 693 32 59 59 (móvil)                                 |
| Horario                 | L 16:00–20:00; M–V 10:00–13:00 y 16:00–20:00; S 10:00–13:00; D cerrado |
| Coordenadas             | 36.7271106, -4.4673494                               |
| Identificador del lugar | `ChIJ5dXVe3z3cg0R-zbgeIt02n0`                        |
| Identificador de canal  | `/g/11yn6c5vz_`                                      |
| Feature id              | `0xd72f77c7bd5d5e5:0x7dda748b78e036fb`               |

## Fotos

Las fotos de la hero, la galería y el `og.jpg` se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs differentbarber
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`).
