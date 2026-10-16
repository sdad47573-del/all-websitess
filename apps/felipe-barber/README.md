# Felipe Barber

Landing local para la barbería Felipe Barber, en C. Nuzas, 2A · Teatinos-Universidad (29010 Málaga).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Felipe Barber                                      |
| Dirección               | C. Nuzas, 2A · Teatinos-Universidad · 29010 Málaga    |
| Categoría de Google     | Barbería                                             |
| Valoración              | 4,9 sobre 5 con 36 reseñas                           |
| Teléfono                | 693 32 59 59 (móvil)                                 |
| Horario                 | L 16:00–20:00; M–V 10:00–13:00 y 16:00–20:00; S 10:00–13:00; D cerrado |
| Coordenadas             | 36.7275167, -4.4674271                               |
| Identificador del lugar | `ChIJN0NL8Nn3cg0R9VtYRdtk_g8`                        |
| Identificador de canal  | `/g/11gxn5y32_`                                      |
| Feature id              | `0xd72f7d9f04b4337:0xffe64db45585bf5`               |

## Fotos

Las fotos de la hero, la galería y el `og.jpg` se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs felipe-barber
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`).
