# Meson Walter

Web informativa de **Meson Walter**, restaurante en el **Paseo de la Estación, 33 · 23007 Jaén**, con teléfono 693 64 79 54.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Meson Walter               |
| Dirección               | P.º de la Estación, 33 · 23007 Jaén |
| Teléfono                | +34 693 64 79 54           |
| Categorías de Google    | Restaurante                |
| Valoración              | 4,5 sobre 5 con 206 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7751209, -3.7893904     |
| Plus code               | Q6G6+26 Jaén               |
| Identificador del lugar | `ChIJp6o6VqfXbQ0Rkyly-XbKiIs` |
| Identificador de canal  | `/g/11g6qgj_l8`            |
| Feature id              | `0xd6dd7a7563aaaa7:0x8b88ca76f9722993` |

El número de reseñas se escribe **«206 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Nombre sin tilde.** La ficha publica el nombre como **«Meson Walter»**, sin tilde en «Meson». Se reproduce tal cual, igual que el resto de los datos, sin corregirlo.

**Dirección desarrollada.** Google publica la dirección abreviada («P.º de la Estación, 33»). En la web se desarrolla a **Paseo de la Estación, 33**, como en el resto del repositorio; el código postal 23007 y el municipio (Jaén) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que no declara ningún tipo de cocina. `category` y `categories` llevan ese texto y **no se añade `servesCuisine`** a los datos estructurados (igual que en `restaurante-meson-seneca`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin distintivo ni accesibilidad

A diferencia de otras fichas del repositorio, esta **no publica ningún distintivo** junto al nombre (ni «Brunch» ni otro), así que no hay `distintivo` y la portada no lo menciona. Tampoco publica **ninguna entrada de accesibilidad**: `accesibilidad` queda vacío, la portada no muestra esa lista (en su lugar indica que la ficha no publica esos datos) y los datos estructurados **omiten `amenityFeature`**.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 13:30 – 16:30                   |
| Martes    | 13:30 – 16:30 · 20:30 – 23:30   |
| Miércoles | 13:30 – 16:30                   |
| Jueves    | 13:30 – 16:30 · 20:30 – 23:30   |
| Viernes   | 13:30 – 16:30 · 20:30 – 23:30   |
| Sábado    | 13:30 – 16:30 · 20:30 – 23:30   |
| Domingo   | Cerrado                         |

Detalles que se trasladan tal cual a la web:

- **El mediodía se sirve de lunes a sábado**, de 13:30 a 16:30.
- **La noche solo de martes a sábado**, de 20:30 a 23:30. El **lunes y el miércoles** cierran por la noche (solo abren al mediodía).
- **El domingo cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el domingo cerrado no genera ninguna entrada (**10 especificaciones** en total: una del lunes, dos de martes, una del miércoles y dos por cada día de jueves a sábado).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto al mediodía igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### El teléfono

Es un **móvil** (693 64 79 54), y así se publica: `phoneHref` usa `tel:+34693647954`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Atención inmediata carta abierta y muy buena atención» (5/5)
2. «Buena cocina y buena gente» (4/5)
3. «Volveremos para probar el arroz o el jarrete!» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs meson-walter   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 meson-walter
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete apaisadas (01, 04, 05, 06, 07, 09 y 10) y tres verticales (02, 03 y 08).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Meson Walter»), así que cada foto de la galería lleva su pie «Foto de Meson Walter».
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total baja de **3,3 MB a 1,8 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs meson-walter
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da mediodía de lunes a sábado y cenas de martes a sábado salvo el miércoles) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `meson-walter.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
