# Restaurante El Minero

Web informativa de **Restaurante El Minero**, restaurante de cocina española en la **Calle Dr. Fleming, 59 · 21530 Tharsis (Huelva)**, con teléfono 650 10 06 55.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, distintivo, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante El Minero                  |
| Dirección               | Calle Dr. Fleming, 59 · 21530 Tharsis  |
| Teléfono                | +34 650 10 06 55 (móvil)               |
| Categoría de Google     | Restaurante de cocina española (es la única que publica) |
| Distintivo              | Brunch                                 |
| Valoración              | 4,6 sobre 5 con 164 reseñas            |
| Horario                 | Abierto los siete días, sin cierres    |
| Coordenadas             | 37.6017153, -7.1203826                 |
| Plus code               | JV2H+MR Tharsis                        |
| Identificador del lugar | `ChIJeYNZ15tSEA0RCgL2Euk9kd4`          |
| Identificador de canal  | `/g/11b73jcz7t`                        |
| Feature id              | `0xd10529bd7598379:0xde913de912f6020a` |

El número de reseñas se escribe **«164 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

### Una sola categoría: `servesCuisine` con la cocina que declara

«Restaurante de cocina española» declara una cocina, así que el `restaurantSchema` lleva **`servesCuisine: ['Española']`**, con el mismo criterio y la misma categoría única que `dona-croqueta`. Sin `priceRange` (la ficha no publica precios), sin `sameAs` (no publica web propia ni redes) y con `acceptsReservations: true`, como el resto de webs del repositorio.

### Descripción del titular

La ficha **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, con todas sus irregularidades de puntuación, que son de la ficha, en la sección «En sus palabras»:

> Bar El Minero es el punto de encuentro en la Plaza del Minero. De lunes a viernes se sirve el Menú del Trabajador (platos caseros y abundantes) de 14:00 a 16:00,Por la noche no hay comidas solo bebidas. Los fines de semana el ambiente cambia: al mediodía servicio de comida a la carta completa se abre de 14:00 a 16:00 y 21:00 a 23:30, con carnes, pescados, picoteos y bebidas para compartir. Comida trato cercano y sabor a esfuerzo en El Minero siempre hay un plato esperando..

Lo que se respeta sin tocar: la **coma pegada** a la palabra siguiente («de 14:00 a 16:00,Por la noche»), la frase **sin conectar** («Comida trato cercano y sabor a esfuerzo») y los **dos puntos finales** («un plato esperando..»).

Dos detalles que se explican en la web con las palabras del titular, sin deducir nada:

- El titular se presenta como **«Bar El Minero»**, aunque el nombre publicado en la ficha es «Restaurante El Minero». Se deja tal cual y se avisa en la propia sección.
- El **Menú del Trabajador** de lunes a viernes y el servicio de fin de semana a la carta se recogen **atribuidos al titular**.

### El horario del titular no coincide con la tabla

La ficha publica **dos horarios distintos** y esta web **no elige entre ellos**:

| Fuente                       | Lo que dice                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| Descripción del titular      | Menú del Trabajador de 14:00 a 16:00; por la noche «no hay comidas solo bebidas»; fin de semana de 14:00 a 16:00 y 21:00 a 23:30 |
| Tabla de horarios de la ficha | Apertura a las 9:00 todos los días; de lunes a viernes dos turnos y el fin de semana de 9:00 a 24:00 |

Las dos cosas se reproducen por separado —la descripción en «En sus palabras» y la tabla en la sección de horario— y la diferencia tiene su propia **pregunta frecuente**, que remite al teléfono. No se resuelve por cuenta propia ni se silencia ninguna de las dos.

### El distintivo: «Brunch»

Junto al nombre, Google muestra el distintivo **«Brunch»**, el mismo que publican fichas como `bar-de-esteban` o `restaurante-la-purisima`. Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo: la portada lo menciona en la franja de datos y en la sección del local, y tiene una pregunta frecuente que remite al teléfono.

### El horario de la tabla

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. **Abre los siete días y no cierra ninguno**, con dos formas distintas de jornada:

| Día       | Horario publicado por la ficha   |
| --------- | -------------------------------- |
| Lunes     | 9:00 – 15:00 · 21:00 – 23:50     |
| Martes    | 9:00 – 15:30 · 21:00 – 23:50     |
| Miércoles | 9:00 – 15:30 · 21:00 – 23:50     |
| Jueves    | 9:00 – 15:30 · 21:00 – 23:50     |
| Viernes   | 9:00 – 16:00 · 21:00 – 23:50     |
| Sábado    | 9:00 – 24:00                     |
| Domingo   | 9:00 – 24:00                     |

Detalles que se trasladan tal cual a la web:

- De lunes a viernes hay **dos `shifts`** por día y el texto de la tabla los une con un punto medio; **sábado y domingo van con un solo turno continuo de 9:00 a 24:00**, una jornada de quince horas que también publican fichas como `los-mena` y `nueva-vida`.
- El cierre de los turnos de noche es a las **23:50**, y el de sábado y domingo a las 24:00, que en los datos estructurados se escribe `closes: '00:00'`.
- **El lunes 12**, Fiesta Nacional de España, la ficha añade el aviso **«el horario podría ser diferente»**, que es el aviso de **tipo 2**. Se recoge como en `bar-de-esteban`: el horario va tal cual en la tabla y el aviso se explica en la sección de horario.
- `openingHoursSpecification` sale con **12 franjas** (2 × 5 días laborables + 1 × 2 días de fin de semana).

### Accesibilidad: cuatro servicios, los cuatro disponibles

La ficha **sí publica el grupo de accesibilidad**, con cuatro entradas y las cuatro disponibles:

- Acceso para sillas de ruedas.
- Aparcamiento adaptado para sillas de ruedas.
- Aseo adaptado para sillas de ruedas.
- Asientos adaptados sillas de ruedas.

Es una de las **13 fichas del repositorio con las cuatro entradas de accesibilidad y las cuatro disponibles** (como `restaurante-luque`, `meson-el-poligono` o `nueva-vida`). El `restaurantSchema` incluye `amenityFeature` con las cuatro `LocationFeatureSpecification` (`value: true`). La web lista las etiquetas literales y no añade ninguna más.

### El teléfono

Es el número que publica la ficha, **650 10 06 55**, un móvil. Se publica tal cual y `phoneHref` usa `tel:+34650100655`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación (incluida la ausencia de punto final en la segunda). Google las guarda entre comillas dobles, pero esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las tres son de 5 sobre 5:

1. «Las raciones abundantes con buenos precios.» (5/5)
2. «Un sitio estupendo, la comida deliciosa y el trato excelente, pienso volver» (5/5)
3. «Muy bueno todo, nos encantó, las croquetas y la ensaladilla estaban buenísimas.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-minero   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-el-minero
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: dos apaisadas (02 y 08), **siete verticales** (01, 03, 04, 05, 06, 07 y 09) y una de proporción intermedia (10). Es una de las galerías del repositorio con más verticales sobre el total (otras tienen más en número absoluto, como `restaurante-baluarte`).
- El manifiesto **no atribuye autor** a ninguna foto (el campo `author` viene vacío), así que las diez van **sin pie**. La ficha tampoco describe su contenido y no se inventa ninguna descripción: todos los `alt` avisan solo de dónde salen.
- El collage de portada usa la apaisada **02** arriba; abajo van dos de las verticales, la **01** y la **03**.
- Tras optimizar, la carpeta baja de **5,3 MB a 2,5 MB** (el optimizador redujo 9 de las 10 imágenes; una ya venía por debajo del objetivo); los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-minero
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Aclarar con el titular el horario real**: la descripción de la ficha y su tabla de horarios no coinciden, y la web reproduce las dos. También conviene confirmar el aviso de la Fiesta Nacional del lunes 12.
3. Confirmar si el nombre correcto es «Restaurante El Minero» o «Bar El Minero»: la ficha usa los dos.
4. Preguntar por la carta, los precios y el Menú del Trabajador: la ficha no publica carta ni precios y la web no los inventa.
5. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
6. Si el dominio final no es `restaurante-el-minero.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
