# Casa Domingo

Web informativa de **Casa Domingo**, taberna en la **Calle Melchor Cobo Medina, s/n · 23001 Jaén (casco viejo)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **15 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Casa Domingo                                         |
| Dirección               | C. Melchor Cobo Medina, s/n · 23001 Jaén             |
| Categoría de Google     | Restaurante                                          |
| Valoración              | 4,4 sobre 5 con 745 reseñas                          |
| Teléfono                | 620 79 27 83 (fijo)                                  |
| Horario                 | L–M y J–S 13:00–17:00 y 20:00–24:00; X 13:00–17:00; D cerrado |
| Coordenadas             | 37.767719, -3.785879                                 |
| Identificador del lugar | `ChIJCTKbdnXXbQ0Rx5nzdu1rfDM`                        |
| Identificador de canal  | `/g/12qfyglf1`                                       |
| Feature id              | `0xd6dd775769b3209:0x337c6bed76f399c7`               |

El número de reseñas se escribe **«745 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Melchor Cobo Medina, s/n»). En la web se desarrolla a **Calle Melchor Cobo Medina, s/n**; el código postal 23001 y el municipio (Jaén) se publican tal cual.

Dos datos no vienen de la ficha y se marcan como tales en la web: el carácter de **taberna clásica de chacinas, quesos y cocina tradicional jienense** (así la describen las guías de la ciudad) y el **Solete Repsol de otoño de 2023** (guía Repsol).

## Fotos

Las 10 fotos de la portada y la galería se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs taberna-casa-domingo
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`). El `og.jpg` de `public/` se genera a 1200×630 a partir de la primera apaisada.
