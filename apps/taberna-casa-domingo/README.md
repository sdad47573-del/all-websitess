# Restaurante La Tasca de Alonso

Web informativa de **Restaurante La Tasca de Alonso**, restaurante en la **Avenida Villanueva de las Cruces, 36 · 21300 Calañas (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Restaurante La Tasca de Alonso                       |
| Dirección               | Av Villanueva de las Cruces, 36 · 21300 Calañas, Huelva |
| Categoría de Google     | Restaurante                                          |
| Valoración              | 4,5 sobre 5 con 87 reseñas                           |
| Teléfono                | 658 93 78 81 (móvil)                                 |
| Horario                 | No publica ninguno (ver abajo)                       |
| Coordenadas             | 37.6519023, -6.8798916                               |
| Identificador del lugar | `ChIJtZ4bTKqlEQ0Rpq8dBiiU-Ik`                        |
| Identificador de canal  | `/g/11f0_fj7mw`                                      |
| Feature id              | `0xd11a5aa4c1b9eb5:0x89f89428061dafa6`               |

El número de reseñas se escribe **«87 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av Villanueva de las Cruces, 36»). En la web se desarrolla a **Avenida Villanueva de las Cruces, 36**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 21300 y el municipio (Calañas) se publican tal cual.

**Sin horario.** La respuesta de la ficha no trae ningún día de la semana: **no publica horario** (solo el estado de «Abierto ahora», que cambia según el momento y no se reproduce). Por eso `src/data/site.ts` no tiene `hours`, la portada no muestra tabla de horario (la sección explica que hay que llamar), el JSON-LD no declara `openingHoursSpecification` y la pregunta frecuente del horario remite al teléfono.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **658 93 78 81**, y por su prefijo es un **móvil**: se publica como **+34 658 93 78 81** y el enlace de llamada es `tel:+34658937881`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra (tampoco aparcamiento adaptado).

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (4,5 / 5 con 87 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps, como en las webs `restaurante-alentejo` y `restaurante-el-portichuelo`.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-tasca-de-alonso   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete verticales (02, 03, 04, 07, 08, 09 y 10) y tres apaisadas (01, 05 y 06).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `solitaire` y `restaurante-podenco`.
- El collage de portada usa la apaisada **01** (4000 × 3000) arriba y las verticales **02** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-tasca-de-alonso
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Pedir al titular el horario** para publicarlo: la ficha no da ninguno y la web lo dice abiertamente. Cuando se confirme, añadir `hours`, la tabla y `openingHoursSpecification` siguiendo la web `bar-seoane`.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-la-tasca-de-alonso.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
