# Gigantes Street Food

Web informativa de **Gigantes Street Food**, restaurante americano en la **Calle Elisa Cendrero, 18 · 13003 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Gigantes Street Food                     |
| Dirección               | C. Elisa Cendrero, 18 · 13003 Ciudad Real |
| Categorías de Google    | Restaurante americano · Restaurante      |
| Valoración              | 4,6 sobre 5 con 788 reseñas              |
| Teléfono                | 642 40 89 78 (móvil)                     |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9897263, -3.9276655                   |
| Plus code               | X3QC+VW Ciudad Real                      |
| Identificador del lugar | `ChIJfWhlCQDDaw0RC7HWqksAHwQ`            |
| Identificador de canal  | `/g/11y3jml53k`                          |
| Feature id              | `0xd6bc3000965687d:0x41f004baad6b10b`    |

El número de reseñas se escribe **«788 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Elisa Cendrero, 18»). En la web se desarrolla a **Calle Elisa Cendrero, 18**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 13003 y el municipio (Ciudad Real) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías**: «Restaurante americano» y «Restaurante». La primera sí nombra un tipo de cocina concreto, así que se traduce al español y se recoge en `servesCuisine: ['Americana']`; «Restaurante» no nombra ninguna y no genera entrada. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **642 40 89 78**, y por su prefijo es un **móvil**: se publica como **+34 642 40 89 78** y el enlace de llamada es `tel:+34642408978`.

**Sin distintivo.** La ficha no muestra ninguna etiqueta junto al nombre, así que no hay export `distintivo` y ni la portada ni las preguntas frecuentes reproducen ninguna. El texto lo dice expresamente, en vez de callarlo.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **de jueves a domingo con dos turnos**, de 13:00 a 16:30 y de 20:00 a 0:30, y cierra lunes, martes y miércoles:

| Día       | Horario publicado por la ficha       |
| --------- | ------------------------------------ |
| Lunes     | Cerrado                              |
| Martes    | Cerrado                              |
| Miércoles | Cerrado                              |
| Jueves    | 13:00 – 16:30 · 20:00 – 0:30         |
| Viernes   | 13:00 – 16:30 · 20:00 – 0:30         |
| Sábado    | 13:00 – 16:30 · 20:00 – 0:30         |
| Domingo   | 13:00 – 16:30 · 20:00 – 0:30         |

Detalles que se trasladan tal cual a la web:

- **Cuatro días de apertura con dos turnos cada uno**, de comida y de cena. Los tres días cerrados se escriben como «Cerrado» en la tabla y con `shifts: []` en los datos.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: cuatro días por dos turnos dan **8 especificaciones**. Los días cerrados no generan ninguna.
- La ficha publica el cierre de la cena como **0:30**, y en los datos estructurados se escribe como **00:30**.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes, aunque el lunes figure cerrado en la ficha.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y las dos figuran como disponibles: el **acceso** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la segunda no lleva punto final). Las tres son de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Muy buena atención, los camareros muy atentos y cuidadosos con el servicio.» (5/5)
2. «Quesadillas de jarrete increíbles y tarta de queso deliciosa» (5/5)
3. «El perrito con queso fundido y bacon sigue la misma línea de sabores intensos.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs gigantes-street-food   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 gigantes-street-food
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete verticales (01, 02, 05, 06, 07, 08 y 09) y tres apaisadas (03, 04 y 10). El reparto de `descriptor` lo decide la forma de cada foto.
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `restaurante-el-paso` y `que-no-falte-de-na`.
- El collage de portada usa la apaisada ancha, la **04**, arriba y las verticales **01** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **6,3 MB a 2,0 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-gigantes-street-food-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada, la **04** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs gigantes-street-food
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de jueves a domingo, de 13:00 a 16:30 y de 20:00 a 0:30, con lunes, martes y miércoles cerrados) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `gigantes-street-food.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
