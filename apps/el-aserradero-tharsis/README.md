# El Aserradero Tharsis

Web informativa de **El Aserradero Tharsis**, hamburguesería en la **Calle Calderón, 23 · 21530 Tharsis (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                              |
| ----------------------- | -------------------------------------------- |
| Nombre                  | El Aserradero Tharsis                        |
| Dirección               | C. Calderon, 23 · 21530 Tharsis, Huelva      |
| Categoría de Google     | Hamburguesería                               |
| Valoración              | 5 sobre 5 con 3 reseñas                      |
| Teléfono                | No publica ninguno («Añadir teléfono»)       |
| Horario                 | No publica ninguno                           |
| Coordenadas             | 37.600544, -7.1198206                        |
| Identificador del lugar | `ChIJpd-WEwBTEA0RkDFyCjKsVb0`                |
| Identificador de canal  | `/g/11z4gyffvq`                              |
| Feature id              | `0xd1053001396dfa5:0xbd55ac320a723190`       |

El número de reseñas se escribe **«3 reseñas»**: sale de `toLocaleString('es-ES')` en el código, sin escribirlo a mano.

Es una **ficha mínima** y la web lo refleja: no hay tabla de horario, ni botones de llamada, ni lista de accesibilidad. Lo único que publica la ficha (nombre, dirección, categoría, valoración y fotos) es lo único que muestra la web. La sección de ubicación explica que no hay horario ni teléfono publicados y remite a las indicaciones y a la ficha de Maps.

**Dirección desarrollada.** Google publica la dirección abreviada y sin acentuar («C. Calderon, 23»). En la web se desarrolla a **Calle Calderón, 23**, como el resto de normalizaciones del repositorio (donde «C.» pasa a «Calle»); el código postal 21530 y el municipio (Tharsis) se publican tal cual.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Hamburguesería». Por eso `category` y `categories` la recogen y el JSON-LD declara `servesCuisine: ['Hamburguesas']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (5 / 5 con 3 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs el-aserradero-tharsis   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **cuatro fotografías** (las únicas que devuelve la portada de la ficha): tres verticales (01, 03 y 04) y una apaisada (02).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**.
- El collage de portada usa la apaisada **02** arriba y las verticales **01** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs el-aserradero-tharsis
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Pedir al titular el horario y un teléfono** para la ficha y la web: ahora mismo no hay ni tabla de horario ni botones de llamada porque la ficha no publica ninguno. Cuando se confirmen, añadir `hours`, `phone` y sus bloques siguiendo la web `meson-san-benito`.
3. Revisar las cuatro fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `el-aserradero-tharsis.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
