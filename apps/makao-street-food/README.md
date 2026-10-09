# Makao - Street Food

Web informativa de **Makao - Street Food**, restaurante de comida callejera en el **Camino los Mártires · 13005 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                       |
| ----------------------- | ----------------------------------------------------- |
| Nombre                  | Makao - Street Food                                   |
| Dirección               | Cam. los Mártires · 13005 Ciudad Real                 |
| Categoría de Google     | Restaurante especializado en comida ecléctica          |
| Valoración              | 4,3 sobre 5 con 842 reseñas                            |
| Teléfono                | 683 30 73 81 (móvil)                                  |
| Horario                 | Publicado (ver abajo)                                 |
| Coordenadas             | 38.9939101, -3.9218651                                |
| Plus code               | X3VH+H7 Ciudad Real                                   |
| Identificador del lugar | `ChIJlb_FYd7Daw0RmThZm8ePNbg`                         |
| Identificador de canal  | `/g/11tdrgcqbw`                                       |
| Feature id              | `0xd6bc3de61c5bf95:0xb8358fc79b593899`                |

El número de reseñas se escribe **«842 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada y sin número.** La ficha publica la dirección abreviada **«Cam. los Mártires, 13005 Ciudad Real»** y **no publica número de portal**. En la web se desarrolla la abreviatura a **Camino los Mártires**, como el resto de abreviaturas del repositorio («C.» pasa a «Calle» y «Av.» a «Avenida»); el código postal 13005 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante especializado en comida ecléctica». Nombra un tipo de cocina concreto, así que se recoge traducida al español en `servesCuisine: ['Ecléctica']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **683 30 73 81**, y por su prefijo es un **móvil**: se publica como **+34 683 30 73 81** y el enlace de llamada es `tel:+34683307381`.

**Sin distintivo.** La ficha no muestra ninguna etiqueta junto al nombre, así que no hay export `distintivo` y ni la portada ni las preguntas frecuentes reproducen ninguna. El texto lo dice expresamente, en vez de callarlo.

**Descripción del titular.** La ficha sí publica descripción y se reproduce literal, sin corregirla ni recortarla: «La mejor comida callejera de cada rincón del mundo en pleno centro de Ciudad Real.». Se muestra en el bloque `.descripcion` de la portada.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **todos los días menos el martes**, con un reparto irregular por días:

| Día       | Horario publicado por la ficha       |
| --------- | ------------------------------------ |
| Lunes     | 13:00 – 17:00                        |
| Martes    | Cerrado                              |
| Miércoles | 13:00 – 17:00 · 20:00 – 24:00        |
| Jueves    | 13:00 – 17:00 · 20:00 – 24:00        |
| Viernes   | 13:00 – 1:30                         |
| Sábado    | 13:00 – 1:30                         |
| Domingo   | 13:00 – 17:00                        |

Detalles que se trasladan tal cual a la web:

- **Cuatro días con un solo turno** (lunes, viernes, sábado y domingo) y **dos días con dos turnos** (miércoles y jueves). El martes está cerrado y se escribe como «Cerrado» en la tabla y con `shifts: []` en los datos.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: cuatro días por un turno más dos días por dos turnos dan **8 especificaciones**. El martes cerrado no genera ninguna.
- Los cierres se escriben en formato de 24 horas en los datos estructurados: **24:00 como 00:00** y **1:30 como 01:30**.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Las quesadillas con panceta exquisitas y pedimos hamburguesas muy ricas.» (5/5)
2. «Comida y servicios perfectos, buen ambiente y camareros muy atentos y amables.» (5/5)
3. «La comida está buenísima, el local muy guay y la camarera muy atenta.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs makao-street-food   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 makao-street-food
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: ocho verticales (01, 02, 03, 05, 07, 08, 09 y 10) y dos apaisadas, una de ellas panorámica (04 y 06). El reparto de `descriptor` lo decide la forma de cada foto.
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `restaurante-el-paso`, `que-no-falte-de-na` y `gigantes-street-food`.
- El collage de portada usa la apaisada ancha, la **06**, arriba y las verticales **01** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, la galería pasa de unos **5,6 MB a 1,8 MB** (el optimizador redujo ocho de las diez fotos, de 5,2 MB a 1,4 MB). Los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-makao-street-food-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada, la **06** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs makao-street-food
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da horas distintas por día y cierra los martes) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `makao-street-food.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
