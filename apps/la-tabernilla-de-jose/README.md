# La Tabernilla de Jose

Web informativa de **La Tabernilla de Jose**, restaurante en la **Calle Cuatro Torres, 4 · 23001 Jaén**, con teléfono 678 67 51 35.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | La Tabernilla de Jose      |
| Dirección               | C. Cuatro Torres, 4 · 23001 Jaén |
| Teléfono                | +34 678 67 51 35           |
| Categorías de Google    | Restaurante                |
| Valoración              | 4,3 sobre 5 con 245 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7673096, -3.7868387     |
| Plus code               | Q687+W7 Jaén               |
| Identificador del lugar | `ChIJ8zok_XTXbQ0RLUUpB_bsTmU` |
| Identificador de canal  | `/g/11c5zvkw6s`            |
| Distintivo de la ficha  | Ninguno                    |

El número de reseñas se escribe **«245 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Cuatro Torres, 4»). En la web se desarrolla a **Calle Cuatro Torres, 4**, como en el resto del repositorio; el código postal 23001 y el municipio (Jaén) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que no declara ningún tipo de cocina. `category` y `categories` llevan ese texto y **no se añade `servesCuisine`** a los datos estructurados (igual que en `restaurante-caseria-de-cristobal` y `jimenez-restaurante`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin distintivo

A diferencia de otras fichas, aquí Google **no muestra ninguna etiqueta** junto al nombre, así que la web no recoge ningún distintivo (como en `abaceria-tinta-de-toro` o `chiringuito-manolo-poligono-jaen`).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días, **repetida dos veces** para descartar un error puntual (las dos respuestas coinciden):

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 13:00 – 16:30 · 20:30 – 24:00   |
| Martes    | 0:00 – 23:45                   |
| Miércoles | 13:00 – 23:45                  |
| Jueves    | 13:00 – 23:45                  |
| Viernes   | 13:00 – 23:45                  |
| Sábado    | 13:00 – 23:45                  |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **El lunes tiene dos turnos** y el de noche termina a las **24:00**, que en los datos estructurados se escribe como `closes: '00:00'`.
- **El martes la ficha lo publica como un único tramo de 0:00 a 23:45**, es decir, empezando a medianoche, que es justo cuando termina el turno de noche del lunes. Es una peculiaridad de la propia ficha: **se reproduce tal cual y no se interpreta ni se corrige**, y tanto la sección de horario como la pregunta frecuente lo explican para que nadie lo lea mal. (Se consultaron además dos directorios externos y sus horarios no coinciden entre sí ni con la ficha —uno dice «lunes a sábado 13:00-22:30, domingo 13:00-16:00»—, así que no se tomaron como fuente.)
- **El domingo cierra.** `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el domingo cerrado no genera ninguna entrada (7 especificaciones en total: dos del lunes y una de cada día de martes a sábado).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día el local abre con su horario habitual, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**: el acceso y el aseo adaptados para sillas de ruedas están **disponibles**, y el **aparcamiento adaptado está marcado como no disponible**. Se recogen las tres, incluida la que no está disponible.

### El teléfono

Es un **móvil** (678 67 51 35), no un fijo, y así se publica: `phoneHref` usa `tel:+34678675135`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Marisco fresco, las gambas exquisitas, puntillitas ricas ricas… Recomendable!»
2. «Muy buena calidad sobretodo en pescado y marisco»
3. «Un lugar acogedor, con buen servicio y buen trato y buena calidad en la cocina.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs la-tabernilla-de-jose   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 la-tabernilla-de-jose
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga atribuye las diez al **propio local** (`author`: «La Tabernilla de Jose»). Como sí hay a quién citar, cada foto de la galería lleva su pie («Foto de La Tabernilla de Jose»), siguiendo el criterio de `asador-de-camilo`.
- Son formatos mezclados: siete verticales y tres apaisadas. El collage de portada usa la apaisada 01 arriba y las verticales 02 y 04 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total bajó de **5,1 MB a 2,0 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs la-tabernilla-de-jose
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario del martes** (la ficha lo publica como 0:00–23:45) y el del lunes, y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `la-tabernilla-de-jose.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
