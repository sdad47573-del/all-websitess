# Bar Albero Tapas

Web informativa de **Bar Albero Tapas**, bar de tapas y marisquería en la **C. Castillo, 4 · 21410 Isla Cristina (Huelva)**, con teléfono 661 23 45 54.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                        |
| ----------------------- | ------------------------------------------------------ |
| Nombre                  | Bar Albero Tapas                                       |
| Dirección               | C. Castillo, 4 · 21410 Isla Cristina                   |
| Teléfono                | +34 661 23 45 54 (móvil)                               |
| Categorías de Google    | Restaurante especializado en tapas, Marisquería, Bar de tapas |
| Valoración              | 4,8 sobre 5 con 317 reseñas                            |
| Horario                 | Publicado (ver abajo)                                  |
| Coordenadas             | 37.2014868, -7.3275622                                 |
| Plus code               | 6M2C+HX Isla Cristina                                  |
| Identificador del lugar | `ChIJeaSwAfUkEA0R9fuWvzriV48`                          |
| Identificador de canal  | `/g/11gdy_yrk2`                                        |
| Feature id              | `0xd1024f501b0a479:0x8f57e23abf96fbf5`                 |

El número de reseñas se escribe **«317 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

### Sin distintivo

A diferencia de otras fichas del repositorio, esta **no publica ningún distintivo** junto al nombre, así que no hay `distintivo` y la portada no lo menciona.

### Descripción del titular

La ficha **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, en mayúsculas y con los espacios sueltos que trae (« .», « .SE»), en la sección «En sus palabras»:

> UN PEQUEÑO TROCITO DE SEVILLA ESCONDIDO Y FUSIONADO CON ESTA MARAVILLA LLAMADA ISLA CRISTINA . NUESTRO HORARIO SIEMPRE ESTÁ ACTUALIZADO EN GOOGLE, GRACIAS .SE RECOMIENDA RESERVA AL SER PEQUEÑO.

Además de presentarse, el local avisa de que mantiene su horario al día en Google y de que **recomienda reservar porque es pequeño**; esa recomendación se recoge en una pregunta frecuente, atribuida al titular.

### Categorías y `servesCuisine`

La ficha publica **tres categorías**: «Restaurante especializado en tapas» (la primera, que hace de categoría principal), «Marisquería» y «Bar de tapas». El `@type` es `Restaurant`, el del resto de webs del repositorio, y **`servesCuisine` traduce las que declaran comida**: `['Tapas', 'Marisco']`. `acceptsReservations: true` se mantiene igual. Sin `sameAs` (la ficha no publica web propia ni redes) y sin `priceRange` (no publica precios y no se inventa uno).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha            |
| --------- | ----------------------------------------- |
| Lunes     | 13:30 – 16:30 (Fiesta Nacional)           |
| Martes    | 20:30 – 23:30                             |
| Miércoles | Cerrado                                   |
| Jueves    | 20:30 – 23:30                             |
| Viernes   | 20:30 – 24:00                             |
| Sábado    | 20:30 – 24:00                             |
| Domingo   | 20:30 – 24:00                             |

Detalles que se trasladan tal cual a la web:

- **El local sirve de noche, de martes a domingo**: de 20:30 a 23:30 de martes a jueves y hasta las 24:00 de viernes a domingo. **El miércoles cierra** y no hay servicio de mediodía ningún día.
- **El lunes la ficha no publica el horario habitual**, sino el de la **Fiesta Nacional de España** (13:30 – 16:30): la respuesta lo marca con el aviso **«Horario de Fiesta Nacional de España»**, que es un aviso de **tipo 1** (ese día tiene horario propio de festivo), no el aviso de tipo 2 («el horario podría ser diferente»). Se recoge ese tramo en la tabla con la etiqueta de festivo y se explica en la sección de horario, como en `restaurante-la-abadia-de-calatrava` y `bistrot-senseo`, que son los precedentes del repositorio.
- El turno de noche cierra a las 24:00, que en los datos estructurados se escribe como `closes: '00:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el miércoles cerrado no genera entrada (**6 especificaciones** en total).

### Sin datos de accesibilidad

Esta ficha **no publica el grupo de accesibilidad** (`features` viene vacío), así que aquí **no hay lista de accesibilidad y el `restaurantSchema` va sin `amenityFeature`**. La web lo dice expresamente en su lugar: no hay dato que citar y no se inventa.

### El teléfono

Es un **móvil** (661 23 45 54), y así se publica: `phoneHref` usa `tel:+34661234554`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación (incluido el espacio suelto antes de la coma de la segunda y los puntos suspensivos dentro del paréntesis de la tercera). La ficha las presenta entrecomilladas, pero esas comillas son de Google y no forman parte del texto, así que no se reproducen. Las puntuaciones son 5, 4 y 4:

1. «Pedimos gambas fritas, croquetas variadas y unas lágrimas de pollo.» (5/5)
2. «Buenas tapas de pescado y marisco , buen trato y buen precio.» (4/5)
3. «Tapas ricas (queso frito, tartar de atún...).» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-albero-tapas   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 bar-albero-tapas
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: ocho apaisadas (01, 02, 03, 04, 05, 08, 09 y 10), una panorámica (07) y **una sola vertical** (06).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Bar Albero Tapas»), así que cada foto de la galería lleva su pie.
- El collage de portada usa la apaisada **01** arriba; abajo van la única vertical, la **06**, y la apaisada **02**, que el `object-fit` recorta al 4/5 del hueco. La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **2,9 MB a 1,9 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-albero-tapas
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario**, sobre todo el del **lunes**, que la ficha marca como horario de la Fiesta Nacional de España (13:30–16:30) y no como horario habitual, y confirmar que no hay servicio de mediodía el resto de la semana.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Preguntar al titular si quiere añadir datos de accesibilidad: la ficha no publica ese grupo y la web no lo inventa.
5. Si el dominio final no es `bar-albero-tapas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
