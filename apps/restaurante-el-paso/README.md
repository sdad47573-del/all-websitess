# Restaurante El Paso

Web informativa de **Restaurante El Paso**, restaurante en la **Calle Inmaculada Concepción, 6 · 13003 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante El Paso                      |
| Dirección               | C. Inmaculada Concepción, 6 · 13003 Ciudad Real |
| Categoría de Google     | Restaurante                              |
| Valoración              | 4,2 sobre 5 con 116 reseñas              |
| Teléfono                | 926 96 16 72 (fijo)                      |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9894308, -3.9226992                   |
| Plus code               | X3QG+QW Ciudad Real                      |
| Identificador del lugar | `ChIJVR5lXkHDaw0RLQKLYzanwfs`            |
| Identificador de canal  | `/g/11cmg1bz80`                          |
| Feature id              | `0xd6bc3415e651e55:0xfbc1a736638b022d`   |

El número de reseñas se escribe **«116 reseñas»** y la valoración con coma decimal («4,2»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Inmaculada Concepción, 6»). En la web se desarrolla a **Calle Inmaculada Concepción, 6**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 13003 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **926 96 16 72**, y por su prefijo es un **fijo**: se publica como **+34 926 96 16 72** y el enlace de llamada es `tel:+34926961672`.

**Distintivo.** Google muestra junto al nombre la etiqueta **«Brunch»**, la única de ese tipo en la ficha. Se recoge tal cual, sin interpretarla.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **todos los días con el mismo horario**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 12:00 – 24:00                  |
| Martes    | 12:00 – 24:00                  |
| Miércoles | 12:00 – 24:00                  |
| Jueves    | 12:00 – 24:00                  |
| Viernes   | 12:00 – 24:00                  |
| Sábado    | 12:00 – 24:00                  |
| Domingo   | 12:00 – 24:00                  |

Detalles que se trasladan tal cual a la web:

- **De 12:00 a 24:00 los siete días de la semana**, sin ningún día de cierre.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: al no cerrar ningún día, los siete generan su propia entrada (**7 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera deja un espacio antes de la coma y escribe «Volveremos» con mayúscula). Dos son de 5 sobre 5 y una de 4 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Comida muy rica , buena atención, Volveremos.» (4/5)
2. «Buen servicio, comidas caseras y en menús variados, buen precio.» (5/5)
3. «Buena cocina y excelente trato al cliente por parte de Antonio, un buen hombre.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-paso   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-el-paso
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: ocho verticales (01, 03, 04, 05, 06, 08, 09 y 10) y dos apaisadas (02 y 07).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `solitaire` y `restaurante-podenco`.
- El collage de portada usa una apaisada, la **02**, arriba y las verticales **01** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **4,5 MB a 1,7 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-restaurante-el-paso-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada, la **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-paso
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da un horario continuo de 12:00 a 24:00 los siete días) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-el-paso.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
