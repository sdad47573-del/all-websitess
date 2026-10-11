# Restaurante Simon

Web informativa de **Restaurante Simon**, restaurante mediterráneo en la **Av. la Palmera, 13 · 21409 Punta del Moral (Huelva)**, con teléfono 959 47 70 26.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante Simon                      |
| Dirección               | Av. la Palmera, 13 · 21409 Punta del Moral |
| Teléfono                | +34 959 47 70 26 (fijo)                |
| Categoría de Google     | Restaurante mediterráneo (es la única que publica) |
| Valoración              | 4,5 sobre 5 con 634 reseñas            |
| Horario                 | Mediodía y noche los siete días        |
| Coordenadas             | 37.1886806, -7.3410585                 |
| Plus code               | 5MQ5+FH Punta del Moral                |
| Identificador del lugar | `ChIJxcWPqXskEA0RcRGtdJSJY24`          |
| Identificador de canal  | `/g/1z44b44fx`                         |
| Feature id              | `0xd10247ba98fc5c5:0x6e63899474ad1171` |

El número de reseñas se escribe **«634 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

### La localidad

La ficha publica **Punta del Moral** como localidad (con el código postal 21409) y **Huelva** como provincia. Punta del Moral es una entidad local de Ayamonte, pero la ficha no nombra Ayamonte en ningún sitio, así que **no se añade**: la web escribe la localidad tal como aparece publicada.

### Una sola categoría: `servesCuisine` con la cocina que declara

La ficha publica **una única categoría**, «Restaurante mediterráneo», que sí declara una cocina. Siguiendo el criterio de `bar-restaurante-grand-pere` (que traduce esa misma categoría), el `restaurantSchema` lleva **`servesCuisine: ['Mediterránea']`** y ninguna otra. Sin `priceRange` (la ficha no publica precios), sin `sameAs` (no publica web propia ni redes) y con `acceptsReservations: true`, como el resto de webs del repositorio.

### Descripción del titular

La ficha **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, con sus dos líneas y **sin corregir su redacción**, en la sección «En sus palabras»:

> Arroz marinera y pescados fresco y mariscos
> Especialidad en brasas y comidas de celiaco

«Arroz marinera», «pescados fresco» y «comidas de celiaco» son palabras de la ficha y así se quedan. El salto de línea se respeta con `white-space: pre-line` en `.descripcion-local`, el mismo recurso que usan las webs del repositorio cuya ficha publica descripción multilínea (`abaceria-tinta-de-toro`, `bistrot-senseo`, `bar-de-esteban`…).

Dos consecuencias de esta descripción:

- La especialidad en **«comidas de celiaco»** se recoge en una pregunta frecuente, atribuida al titular y **sin prometer nada**: no es una carta ni una garantía de la cocina.
- El titular recomienda pescados y mariscos, brasas y arroces; la web lo reproduce y no amplía.

### Sin distintivo

La ficha **no publica ningún distintivo** junto al nombre, así que no hay `distintivo` y la portada no lo menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. **Los siete días llevan dos turnos y ninguno está cerrado**, algo que no aparece en ninguna otra web del repositorio: las demás tienen alguna jornada de un solo turno o alguna jornada de cierre.

| Día       | Horario publicado por la ficha   |
| --------- | -------------------------------- |
| Lunes     | 13:30 – 16:30 · 20:30 – 24:00    |
| Martes    | 13:00 – 16:30 · 20:30 – 24:00    |
| Miércoles | 12:30 – 17:00 · 20:00 – 0:30     |
| Jueves    | 13:00 – 16:30 · 20:30 – 0:30     |
| Viernes   | 13:00 – 16:30 · 20:30 – 0:30     |
| Sábado    | 13:00 – 16:30 · 20:30 – 0:30     |
| Domingo   | 13:00 – 16:30 · 20:30 – 0:30     |

Detalles que se trasladan tal cual a la web:

- Cada día lleva **dos `shifts`** y el texto de la tabla los une con un punto medio («13:00 – 16:30 · 20:30 – 0:30»), como en `abaceria-tinta-de-toro`.
- Los turnos de noche de sábado, domingo, miércoles, jueves y viernes **cierran a las 0:30 del día siguiente**. La ficha lo escribe «0:30» y se recoge así en la tabla; en los datos estructurados se normaliza a `closes: '00:30'` (mismo criterio que el cierre a las 02:00 de `abaceria-tinta-de-toro`). El lunes y el martes cierran a las 24:00, que se escribe `00:00`.
- **El lunes 12**, Fiesta Nacional de España, la ficha añade el aviso **«el horario podría ser diferente»**, que es el aviso de **tipo 2** (el local mantiene su horario habitual y Google solo advierte de que puede cambiar), no el de tipo 1. Se recoge como en `bar-de-esteban`: el horario va tal cual en la tabla y el aviso se explica en la sección de horario.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que salen **14 especificaciones** (dos por cada uno de los siete días).

### Accesibilidad: tres servicios, los tres disponibles

La ficha **sí publica el grupo de accesibilidad**, con tres entradas y las tres disponibles:

- Acceso para sillas de ruedas.
- Aseo adaptado para sillas de ruedas.
- Asientos adaptados sillas de ruedas.

El `restaurantSchema` incluye `amenityFeature` con tres `LocationFeatureSpecification` (`value: true`), incluido el **aseo adaptado**, una entrada que otras fichas del repositorio también publican. La web lista las tres etiquetas literales y no añade ninguna más.

### El teléfono

Es el número que publica la ficha, **959 47 70 26**, un fijo. Se publica tal cual y `phoneHref` usa `tel:+34959477026`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción. Google las guarda entre comillas dobles, pero esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las puntuaciones son las que publica la ficha, **5, 5 y 1**:

1. «Exquisitos pescados fritos y buenísimo arroz.» (5/5)
2. «Probamos los fideos a la marinera, las coquinas, los boquerones y los chocos.» (5/5)
3. «Tras llegada pedimos croquetas, frito variado y chanquetes y marchamos el arroz.» (1/5)

La tercera es una reseña **de una estrella** que la propia ficha destaca. Se cita con su puntuación, igual que las demás (hay precedente en el repositorio: `gastro-moli`, `las-coronas`, `malavida-bulevar`), y no se retoca ni se esconde: es lo que publica la ficha.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-simon   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-simon
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis apaisadas (01, 03, 04, 05, 06 y 09) y **cuatro verticales** (02, 07, 08 y 10). No hay panorámica.
- El collage de portada usa la apaisada **01** arriba; abajo van dos de las verticales, la **02** y la **07**.
- El manifiesto **no atribuye autor** a ninguna foto (el campo `author` viene vacío), así que las diez van **sin pie**. La ficha tampoco describe su contenido y no se inventa ninguna descripción: todos los `alt` avisan solo de dónde salen.
- Tras optimizar, el manifiesto baja de **5,1 MB a 2,2 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-simon
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario**, sobre todo el del **lunes 12** (aviso de la Fiesta Nacional de España), los tramos propios del miércoles y los cierres a las 0:30 del día siguiente.
3. **Contrastar la «comida de celiaco»**: la ficha solo publica esa frase del titular y la web no promete nada más. Conviene preguntar por el alcance real de las opciones sin gluten.
4. Confirmar si la localidad correcta es Punta del Moral o Ayamonte: se publica la que da la ficha.
5. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
6. Si el dominio final no es `restaurante-simon.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
