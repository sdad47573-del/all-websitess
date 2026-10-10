# Restaurante Las Cordobesas

Web informativa de **Restaurante Las Cordobesas**, restaurante andaluz en la **Avenida Foietes, 10 · 03502 Benidorm** (Alicante), con teléfono 603 03 12 80.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante Las Cordobesas             |
| Dirección               | Av. Foietes, 10 · 03502 Benidorm       |
| Teléfono                | +34 603 03 12 80                       |
| Categoría de Google     | Restaurante andaluz                    |
| Distintivo              | Brunch                                 |
| Valoración              | 4,5 sobre 5 con 377 reseñas            |
| Horario                 | 10:00 – 22:00 de martes a domingo      |
| Coordenadas             | 38.5432506, -0.1357616                 |
| Plus code               | GVV7+8M Benidorm                       |
| Identificador del lugar | `ChIJp4kHC_sFYg0RMRI5EvpxOr8`          |
| Identificador de canal  | `/g/11kf3163pb`                        |
| Feature id              | `0xd6205fb0b0789a7:0xbf3a71fa12391231` |

El número de reseñas se escribe **«377 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. Foietes, 10»). En la web se desarrolla a **Avenida Foietes, 10**, como en el resto del repositorio; el código postal 03502 y el municipio (Benidorm) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante andaluz», y de ahí sale `servesCuisine: ['Cocina andaluza']`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Brunch»

Google muestra junto al nombre el distintivo **«Brunch»**, el único que publica esta ficha. Se recoge como dato y no se amplía ni se interpreta: la portada y las preguntas frecuentes lo mencionan tal cual y remiten al teléfono para saber qué se sirve.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 10:00 – 22:00                  |
| Miércoles | 10:00 – 22:00                  |
| Jueves    | 10:00 – 22:00                  |
| Viernes   | 10:00 – 22:00                  |
| Sábado    | 10:00 – 22:00                  |
| Domingo   | 10:00 – 22:00                  |

- El local **abre de 10:00 a 22:00 de martes a domingo** y **cierra los lunes**, con horario continuo.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada (**6 especificaciones** en total).
- El único día cerrado se marca como «Cerrado» en la tabla de la sección de horario.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y los **asientos adaptados para sillas de ruedas**. No publica ni el aseo ni el aparcamiento.

### Los dos teléfonos

La ficha publica un **móvil**, el 603 03 12 80, que es el que usan la cabecera, la portada y `phoneHref` (`tel:+34603031280`). Además, la **descripción del titular** que publica la ficha indica un número distinto para reservas: **670 96 12 13**. Se publican los dos tal cual, cada uno en su sitio (el de la ficha en los botones y el de reservas dentro de la propia descripción y en la sección de horario), y se deja constancia aquí de que son números diferentes.

### La descripción del titular

La ficha trae un texto escrito por el propio negocio y se reproduce **literal**, con sus saltos de línea y su puntuación original (conserva «A que estas esperando» y los signos de apertura dobles de «¡¡ven a AVENIDA FOIETES Nº 10!!»). Se pinta con `white-space: pre-line`, así que en la portada se ve tal como lo escribió el local, en un párrafo destacado.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (incluido el entrecomillado de «pescaíto frito»). Dos son de 5 sobre 5 y una de 3 sobre 5:

1. «Pedimos 2 raciones de croquetas, 1 de bravas y la sepia familiar.» (3/5)
2. «El trato excelente los dueños y los camareros super amables!!!» (5/5)
3. «Magnifico restaurante para tomar "pescaíto frito" y arroces.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-las-cordobesas   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-las-cordobesas
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La ficha devuelve **diez entradas**, pero **dos fotografías panorámicas (la 02 y la 08) son el mismo fichero byte a byte** (mismo MD5), así que se publica una sola vez y **la galería queda en nueve fotos distintas**: apaisada 01, panorámica 02, vista 03, verticales 04 y 05, vista 06, apaisada 07 y verticales 09 y 10.
- El manifiesto de la descarga atribuye **las nueve al propio local** (`author` = «Restaurante Las Cordobesas»), así que cada foto de la galería lleva su pie «Foto de Restaurante Las Cordobesas». Como sí hay a quién citar, los pies se mantienen.
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar (lado máximo 1600 px), las nueve fotos ocupan **≈2,3 MB** en total; los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-las-cordobesas
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da un horario continuo de 10:00 a 22:00 con el lunes cerrado) y ajustar `hours` si procede.
3. **Aclarar los dos teléfonos**: la ficha publica el 603 03 12 80 y la descripción del titular da el 670 96 12 13 para reservas. Conviene comprobar cuál es el número de atención al público.
4. Revisar las nueve fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe y no se inventa ninguno.
5. Si el dominio final no es `restaurante-las-cordobesas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
