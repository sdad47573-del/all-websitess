# Los Mena

Web informativa de **Los Mena**, restaurante de **Calle Italia, 4 · 13005 Ciudad Real**, con teléfono 627 34 80 57.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Los Mena                               |
| Dirección               | C. Italia, 4 · 13005 Ciudad Real       |
| Teléfono                | +34 627 34 80 57                       |
| Categoría de Google     | Restaurante de cocina castellana       |
| Valoración              | 4,6 sobre 5 con 139 reseñas            |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.9804652, -3.9131735                 |
| Plus code               | X3JP+5P Ciudad Real                    |
| Identificador del lugar | `ChIJ35cQJ4LDaw0RqRXoGuoiZ80`          |
| Identificador de canal  | `/g/11v5_6x18r`                        |
| Feature id              | `0xd6bc382271097df:0xcd6722ea1ae815a9` |

El número de reseñas se escribe **«139 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Italia, 4»). En la web se desarrolla a **Calle Italia, 4**, como el resto de direcciones del repositorio; el código postal 13005 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante de cocina castellana», que alimenta `servesCuisine: ['Castellana']`, traduciéndola como el resto del repositorio (por ejemplo `restaurante-parritas` traduce «cocina española»). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Descripción del titular.** La ficha publica una descripción escrita por el propio negocio, **en cuatro líneas**: «Comida casera / Postres caseros / Tapas manchegas y variadas / Raciones variadas». Se reproduce **literal** (`descripcionLocal`), conservando los saltos de línea con `\n`; `.descripcion` usa `white-space: pre-line` para mostrarlos como tales.

**Distintivo «Brunch».** Google muestra junto al nombre la etiqueta **«Brunch»**. Se recoge como dato (`distintivo`) y la portada la menciona **tal cual**, sin ampliarla ni interpretarla: no se afirma que se sirva brunch a ninguna hora concreta. La sección de preguntas frecuentes incluye una respuesta que remite al teléfono para ese detalle.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 9:00 – 23:00                   |
| Miércoles | 9:00 – 23:00                   |
| Jueves    | 9:00 – 23:00                   |
| Viernes   | 9:00 – 24:00                   |
| Sábado    | 12:00 – 24:00                  |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **De martes a jueves, de 9:00 a 23:00.**
- **El viernes, de 9:00 a 24:00.**
- **El sábado, de 12:00 a 24:00** (abre más tarde).
- **El domingo y el lunes cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera una entrada y el lunes y el domingo ninguna (**5 especificaciones** en total).
- El cierre a las 24:00 se escribe como **00:00** en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y los **asientos** adaptados para sillas de ruedas. La ficha no publica un aseo adaptado, así que no se declara.

### El teléfono

Es un **móvil** (627 34 80 57), y así se publica: `phoneHref` usa `tel:+34627348057`.

### Las reseñas

La ficha destaca **dos reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las dos son de 5 sobre 5:

1. «Raciones grandes y de calidad, muy buen servicio y buen ambiente.» (5/5)
2. «Acabamos de ir a cenar a este sitio de casualidad y un descubrimiento .» (5/5)

Son **dos**, no tres: es lo que destaca esta ficha, y el número se cuenta en el código (`reviews.length`). La segunda conserva el espacio suelto antes del punto final, tal como lo guarda Google.

**Comillas quitadas.** Google guarda aquí cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs los-mena   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 los-mena
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: dos panorámicas (01 y 07), cuatro apaisadas (02, 03, 04 y 05), tres verticales (06, 09 y 10) y una casi cuadrada (08, de 1080 × 1079).
- **Las diez van atribuidas al propio restaurante** (`author` = «Los Mena»), así que cada foto de la galería lleva su pie «Foto de Los Mena», como en `asador-de-camilo`. La ficha no describe el contenido de las fotos, así que no se inventa ninguna descripción y los `alt` solo avisan de dónde salen.
- El collage de portada usa la panorámica **01** arriba (16/9) y las verticales **09** y **10** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- El optimizador redujo **nueve de las diez fotos** (2,8 MB → 1,6 MB); el manifiesto queda en **1,7 MB**, con los `bytes` actualizados al tamaño real con `scripts/tmp-mena-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **05** de la galería, que ya venía en 16:9.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs los-mena
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (martes a jueves de 9:00 a 23:00, viernes hasta las 24:00, sábado desde las 12:00, y cierre domingo y lunes) y ajustar `hours` si procede.
3. **Comprobar el distintivo «Brunch»** y qué se sirve realmente, ya que la ficha lo muestra junto al nombre pero no detalla horario ni carta.
4. Revisar la **descripción del titular** en cuatro líneas y la **segunda reseña** (con su espacio antes del punto): decidir si se mantienen literales.
5. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
6. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
7. Si el dominio final no es `los-mena.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
