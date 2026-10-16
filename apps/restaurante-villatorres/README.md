# Restaurante Villatorres

Web informativa de **Restaurante Villatorres**, bar restaurante en la **Calle Villatorres, 18 · 23009 Jaén (polígono Los Olivares, junto al Hospital Princesa de España)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Restaurante Villatorres                              |
| Dirección               | C. Villatorres, 18 · 23009 Jaén                      |
| Categoría de Google     | Bar restaurante                                      |
| Valoración              | 4,3 sobre 5 con 872 reseñas                          |
| Teléfono                | 953 28 17 80 (fijo)                                  |
| Horario                 | L–S 7:30–16:30; D cerrado                            |
| Coordenadas             | 37.798035, -3.7823332                                |
| Identificador del lugar | `ChIJqbSw21nWbQ0R0v3fT93WT4o`                        |
| Identificador de canal  | `/g/1td6hv2c`                                        |
| Feature id              | `0xd6dd659dbb0b4a9:0x8a4fd6dd4fdffdd2`               |

El número de reseñas se escribe **«872 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Villatorres, 18»). En la web se desarrolla a **Calle Villatorres, 18**; el código postal 23009 y el municipio (Jaén) se publican tal cual.

Dos datos no vienen de la ficha y se marcan como tales en la web: el **menú diario** (así lo anuncia su página de Facebook) y el **correo de reservas** `reservas@restaurantevillatorres.es` (publicado por el directorio Jaén Paraíso Interior).

## Fotos

Las 10 fotos de la portada y la galería se descargan de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs restaurante-villatorres
```

y viven en `src/assets/fotos/` (con su `.maps-manifest.json`). El `og.jpg` de `public/` se genera a 1200×630 a partir de la apaisada 04 (1920×1080, 16/9 exacto).
