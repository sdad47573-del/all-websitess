# Restaurante El Señor Perez

Web informativa de **Restaurante El Señor Perez**, restaurante de **Av. del Rey Santo, 8 · 13001 Ciudad Real**, con teléfono 610 43 64 06.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Playfair Display** (títulos) y **Work Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante El Señor Perez             |
| Dirección               | Av. del Rey Santo, 8 · 13001 Ciudad Real |
| Teléfono                | +34 610 43 64 06                       |
| Categoría de Google     | Restaurante de cocina castellana       |
| Valoración              | 4 sobre 5 con 729 reseñas              |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.9823631, -3.9302084                 |
| Plus code               | X3J9+WW Ciudad Real                    |
| Identificador del lugar | `ChIJ72GzO_7Daw0RdJd6denBfzY`          |
| Identificador de canal  | `/g/11qn2w1vmj`                        |
| Feature id              | `0xd6bc3fe3bb361ef:0x367fc1e9757a9774` |

El número de reseñas se escribe **«729 reseñas»** y la valoración con coma decimal («4» sin decimales, porque la ficha publica un entero): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**El nombre.** Google publica **«Restaurante El Señor Perez»**, con la «P» de «Perez» sin tilde. Se reproduce tal cual en todo el sitio, incluidos los datos estructurados, para no desviarse del nombre que indexa Google; si el titular prefiere «Pérez», hay que cambiarlo en `business.name` y en los textos de `index.astro` y `aviso-legal.astro`.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante de cocina castellana». Alimenta `servesCuisine: ['Castellana']`, traduciéndola como en el resto del repositorio. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Descripción del titular.** La ficha publica una descripción corta escrita por el propio negocio: «Restaurante de cocina de producto con servicio de barra y terraza exterior». Se reproduce **literal** (`descripcionLocal`), sin ampliarla ni corregirla.

**Distintivo «Brunch».** Google muestra junto al nombre la etiqueta **«Brunch»**. Se recoge como dato (`distintivo`) y la portada la menciona **tal cual**, sin ampliarla ni interpretarla: no se afirma nada sobre días, franja horaria ni contenido. La sección de preguntas frecuentes incluye una respuesta que remite al teléfono para ese detalle.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 10:00 – 24:00                  |
| Martes    | 10:00 – 24:00                  |
| Miércoles | 10:00 – 24:00                  |
| Jueves    | 10:00 – 24:00                  |
| Viernes   | 10:00 – 24:00                  |
| Sábado    | 11:00 – 24:00                  |
| Domingo   | 11:00 – 17:30                  |

Detalles que se trasladan tal cual a la web:

- **Horario continuado de 10:00 a 24:00 de lunes a viernes.**
- **El sábado abre a las 11:00 y cierra a medianoche.**
- **El domingo sirve de 11:00 a 17:30.**
- **Ningún día figura como cerrado.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día genera una entrada (**7 especificaciones** en total).
- El cierre a las 24:00 se escribe como **00:00** en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### El teléfono

Es un **móvil** (610 43 64 06), y así se publica: `phoneHref` usa `tel:+34610436406`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Aconsejo el tartar de atun y la tarta de queso.» (5/5)
2. «El cochinillo y la carrillera que pedimos exquisitos, así como los postres.» (5/5)
3. «Una ensaladilla muy rica y unos raviolis de berenjena excelentes.» (5/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-senor-perez   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (04, 05, 07 y 10), cuatro verticales (02, 06, 08 y 09) y dos cuadradas (01 y 03).
- El manifiesto de la descarga **sí atribuye autor**: las diez son del propio local («Restaurante El Señor Perez»), así que **cada foto de la galería lleva su pie** («Foto de Restaurante El Señor Perez»), como en `restaurante-sur` o `el-anzuelo-restaurante`.
- El collage de portada usa la **apaisada 10** arriba (16/9) y las verticales **09** y **06** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-senor-perez-post.mjs`.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **10** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-senor-perez
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular la dirección exacta** (Google publica «Av. del Rey Santo, 8, 13001 Ciudad Real») y si el nombre lleva tilde en «Pérez».
3. **Confirmar el horario** (continuado de 10:00 a 24:00 de lunes a viernes, desde las 11:00 el sábado y hasta las 17:30 el domingo) y ajustar `hours` si procede.
4. **Revisar el distintivo «Brunch»** y la descripción del titular: decidir si se mantienen literales o se ajustan.
5. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
6. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
7. Si el dominio final no es `restaurante-el-senor-perez.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
