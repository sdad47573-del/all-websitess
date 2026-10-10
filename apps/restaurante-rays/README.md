# Restaurante Rays

Web informativa de **Restaurante Rays**, restaurante de fish & chips en la **C/ de Sant Vicent, 4 · 03501 Benidorm** (Alicante), con teléfono 965 85 92 11.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, distintivo, resumen del lugar, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                             |
| ----------------------- | ------------------------------------------- |
| Nombre                  | Restaurante Rays                            |
| Dirección               | C/ de Sant Vicent, 4 · 03501 Benidorm       |
| Teléfono                | +34 965 85 92 11                            |
| Categorías de Google    | Restaurante de fish & chips                 |
| Valoración              | 4,6 sobre 5 con 532 reseñas                 |
| Horario                 | 12:00 – 21:30; el domingo cierra            |
| Coordenadas             | 38.5361922, -0.1320868                      |
| Plus code               | GVP9+F5 Benidorm                            |
| Identificador del lugar | `ChIJM6n5Pt0EYg0RxzpW2zB_3Fk`               |
| Identificador de canal  | `/g/1v8l0z3r`                               |
| Feature id              | `0xd6204dd3ef9a933:0x59dc7f30db563ac7`      |
| Distintivo de la ficha  | Pescado frito de tipo inglés desde 1979     |

El número de reseñas se escribe **«532 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Respuesta completa al primer intento.** La primera descarga ya trajo la ficha entera (unos 30 KB), con el horario de los siete días, el distintivo, el resumen del lugar y las tres reseñas que se citan abajo.

**Dirección abreviada.** Google publica «C/ de Sant Vicent, 4»: se reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas de la ficha. El código postal 03501 y el municipio (Benidorm) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante de fish & chips», que **sí nombra una cocina**, así que —a diferencia de las webs cuya categoría es un tipo de establecimiento— aquí **sí se declara `servesCuisine: ['Fish & chips']`**, tomado de la propia categoría publicada. Es el caso de `asador-de-camilo` (`Parrilla`) o `dona-croqueta` (`Española`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin descripción del titular, pero con resumen de Google

La ficha **no publica descripción del titular** (`merchantdescription` viene vacío), así que no hay texto que citar del negocio. Google sí publica **dos textos propios** sobre el lugar, y los dos se recogen literales:

- El **distintivo** que aparece junto al nombre (`info[88][0]`), en `distintivo`:
  > Pescado frito de tipo inglés desde 1979
- El **resumen del lugar** (`info[32][0]`), un campo que ninguna otra web del repositorio usaba todavía, guardado aquí en **`resumenFicha`**:
  > Friso de azulejo y cuadro de nudos marineros en un restaurante inglés de 1979 con pescado frito y patatas.

Los dos son de Google, no del titular, y así se dice en la web y en su pregunta frecuente. El «de 1979» se deja como lo escribe Google: **no se traduce a «abierto desde 1979»**, porque la ficha no afirma eso.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 12:00 – 21:30                  |
| Martes    | 12:00 – 21:30                  |
| Miércoles | 12:00 – 21:30                  |
| Jueves    | 12:00 – 21:30                  |
| Viernes   | 12:00 – 21:30                  |
| Sábado    | 12:00 – 21:30                  |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **Un solo tramo continuado**, de **12:00 a 21:30**, de lunes a sábado.
- **El domingo cierra**, y así se marca en la tabla (`is-closed`) y en el resumen de la cabecera.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los seis días abiertos generan **seis especificaciones** y el domingo cerrado ninguna.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto.

### Accesibilidad: las dos entradas vienen en negativo

La ficha publica el grupo «Accesibilidad» con **dos entradas y ninguna disponible**:

| Entrada que publica la ficha               | Valor en la ficha                                |
| ------------------------------------------ | ------------------------------------------------ |
| Aparcamiento adaptado para sillas de ruedas | No hay aparcamiento accesible con silla de ruedas |
| Asientos adaptados sillas de ruedas         | No hay asientos adaptados para discapacitados     |

En la respuesta, estas dos entradas se distinguen de las afirmativas por el valor interno (`0` en vez de `1`), así que se declaran **`disponible: false`** y la web las enseña con la cruz y el color apagado de `.access-list li.is-no`. Es el mismo caso que `bodega-la-fuente` o `malavida-bulevar`, y la nota que sigue a la lista sigue el modelo de `taberna-4-esquinas`.

La ficha **no publica el acceso ni el aseo**, así que la web no dice nada de ellos.

### El teléfono

Es un **fijo** (965 85 92 11), y así se publica: `phoneHref` usa `tel:+34965859211`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la tercera cierra con dos signos de exclamación). **Las tres son de 5 sobre 5**:

1. «Buena calidad de la comida, el bacalao muy rico y el rebozado muy bueno.» (5/5)
2. «Volveré a pedir el pastel de carne y la tarta manzana.» (5/5)
3. «Excelente pescado con patatas, y ensalada de atún!!» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-rays   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-rays
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **cinco apaisadas** (01, 03, 04, 07 y 10, todas en 4:3) y **cinco verticales** (02, 05, 06, 08 y 09). Ninguna llega a panorámica.
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar. Es el mismo caso que `restaurante-el-gato`; en `restaurante-luque`, en cambio, el manifiesto sí trae autor y por eso allí cada foto lleva su pie.
- El collage de portada usa la apaisada **07** (4608 × 3469, la más grande) arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total de las diez fotos baja de **5,0 MB a 2,5 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe, así que el manifiesto conserva las dimensiones originales).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **07** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-rays
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da un tramo de 12:00 a 21:30 con el domingo cerrado) y ajustar `hours` si procede.
3. **Confirmar con el titular el dato de 1979** del distintivo y del resumen antes de usarlo en la comunicación del local: la ficha no aclara si es la fecha de apertura.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
6. Si el dominio final no es `restaurante-rays.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
