# Doña Croqueta Cocina y Más

Web informativa de **Doña Croqueta Cocina y Más**, restaurante de cocina española en la **Ronda de Granada, 11 · 13004 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                              |
| ----------------------- | -------------------------------------------- |
| Nombre                  | Doña CROQUETA COCINA Y MÁS. (ver abajo)      |
| Dirección               | Rda. Granada, 11 · 13004 Ciudad Real         |
| Categoría de Google     | Restaurante de cocina española               |
| Valoración              | 4,1 sobre 5 con 1.496 reseñas                |
| Teléfono                | 926 25 02 36 (fijo)                          |
| Horario                 | Publicado (ver abajo)                        |
| Coordenadas             | 38.9799562, -3.926641                        |
| Plus code               | X3HF+X8 Ciudad Real                          |
| Identificador del lugar | `ChIJh_GAgGnDaw0R7i5uP_29lmU`                |
| Identificador de canal  | `/g/1tftgnv4`                                |
| Feature id              | `0xd6bc3698080f187:0x6596bdfd3f6e2eee`       |

El número de reseñas se escribe **«1.496 reseñas»** (con punto de millares) y la valoración con coma decimal («4,1»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**El nombre.** La ficha lo publica como **«Doña CROQUETA COCINA Y MÁS.»**, con el resto del nombre en mayúsculas y un punto final. En la web se normaliza a **«Doña Croqueta Cocina y Más»**, sin el punto suelto, como se hizo con «CUEVAS ALÍ BABÁ» en la web `cuevas-ali-baba`. Es el único dato del negocio que se normaliza.

**Dirección desarrollada.** Google publica la vía abreviada, **«Rda. Granada, 11»**, y sin más contexto. En la web se desarrolla la abreviatura a **Ronda de Granada, 11**, que es como figura la vía en los listados públicos del propio local; el código postal 13004 y el municipio (Ciudad Real) se publican tal cual. La ficha no publica ningún otro dato de dirección (ni planta, ni local).

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante de cocina española». Nombra un tipo de cocina concreto, así que se recoge traducida al español en `servesCuisine: ['Española']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **926 25 02 36**, y por su prefijo es un **fijo**: se publica como **+34 926 25 02 36** y el enlace de llamada es `tel:+34926250236`.

**Sin distintivo.** La ficha no muestra ninguna etiqueta junto al nombre, así que no hay export `distintivo` y ni la portada ni las preguntas frecuentes reproducen ninguna. El texto lo dice expresamente, en vez de callarlo.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

**Sin accesibilidad.** El bloque de atributos de la ficha viene **vacío** (`info[100]` = `[]`), así que no hay export `accesibilidad` ni `amenityFeature` en el JSON-LD. En su lugar, la sección de horario y ubicación muestra una nota (`notaAccesibilidad`) que dice que la ficha no publica ningún servicio de accesibilidad, y una de las preguntas frecuentes responde lo mismo: la web no afirma nada que la ficha no diga.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **todos los días menos el lunes**, con dos turnos de martes a sábado y solo mediodía el domingo:

| Día       | Horario publicado por la ficha       |
| --------- | ------------------------------------ |
| Lunes     | Cerrado                              |
| Martes    | 12:00 – 17:00 · 20:00 – 0:30         |
| Miércoles | 12:00 – 17:00 · 20:00 – 0:30         |
| Jueves    | 12:00 – 17:00 · 20:00 – 0:30         |
| Viernes   | 12:00 – 17:00 · 20:00 – 0:30         |
| Sábado    | 12:00 – 17:00 · 20:00 – 0:30         |
| Domingo   | 12:00 – 17:00                        |

Detalles que se trasladan tal cual a la web:

- **Cinco días con dos turnos** (martes a sábado) y **un día con un solo turno** (el domingo, solo mediodía). El lunes está cerrado y se escribe como «Cerrado» en la tabla y con `shifts: []` en los datos.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: cinco días por dos turnos más el domingo por uno dan **11 especificaciones**. El lunes cerrado no genera ninguna.
- El cierre de la cena se publica como **0:30** y en los datos estructurados se escribe como **00:30**.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes, aunque el lunes figure cerrado en la ficha.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la segunda escribe «empanada,croquetas» sin espacio detrás de la coma y la tercera termina en puntos suspensivos). Las tres son de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Buena cocina y buena atención, raciones generosas» (5/5)
2. «Buena comida como el Queso Frito, carne empanada,croquetas variadas.» (5/5)
3. «Muy buen trato, comida exquisita, atienden rápido buen ambiente...» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs dona-croqueta   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 dona-croqueta
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis verticales (02, 04, 05, 06, 07 y 10) y cuatro apaisadas (01, 03, 08 y 09). El reparto de `descriptor` lo decide la forma de cada foto.
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `restaurante-el-paso`, `que-no-falte-de-na`, `gigantes-street-food` y `makao-street-food`.
- El collage de portada usa la apaisada ancha, la **09**, arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **5,1 MB a 1,8 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-dona-croqueta-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada, la **09** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs dona-croqueta
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (dos turnos de martes a sábado, domingo solo mediodía y lunes cerrado) y ajustar `hours` si procede.
3. **Confirmar la dirección exacta** (la ficha la publica abreviada, «Rda. Granada, 11») y si el local tiene planta o número de local que añadir.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y preguntar al titular por la accesibilidad, que la ficha no publica.
6. Si el dominio final no es `dona-croqueta.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
