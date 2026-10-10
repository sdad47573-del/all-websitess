# Restaurante El chispito

Web informativa de **Restaurante El chispito**, restaurante en la **Pl. de la Almadraba, 4 · 21410 Isla Cristina (Huelva)**, con teléfono 859 80 04 21.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante El chispito (con la «c» minúscula) |
| Dirección               | Pl. de la Almadraba, 4 · 21410 Isla Cristina |
| Teléfono                | +34 859 80 04 21                       |
| Categoría de Google     | Restaurante (es la única que publica)   |
| Valoración              | 4,7 sobre 5 con 25 reseñas             |
| Horario                 | Cenas todos los días, 20:45 – 24:00    |
| Coordenadas             | 37.1939362, -7.3286936                 |
| Plus code               | 5MVC+HG Isla Cristina                  |
| Identificador del lugar | `ChIJx2nXc14kEA0RKBKCUrgu4uE`          |
| Identificador de canal  | `/g/11dxpgq62l`                        |
| Feature id              | `0xd10245e73d769c7:0xe1e22eb852821228` |

El número de reseñas se escribe **«25 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

### Una sola categoría y sin `servesCuisine`

La ficha publica **una única categoría**, «Restaurante», que es el tipo genérico de establecimiento y no declara ninguna cocina concreta. Siguiendo el criterio del repositorio (`bar-pallares`, `jimenez-restaurante`, `gastro-moli`, `meson-walter`…), el `restaurantSchema` **va sin `servesCuisine`**: no se inventa una cocina que la ficha no declara. Tampoco hay `priceRange` (no publica precios) ni `sameAs` (no publica web propia ni redes). `acceptsReservations: true` se mantiene como en el resto de webs.

### Sin descripción del titular y sin distintivo

Esta ficha **no publica descripción del titular** (`merchantdescription` viene vacío) ni **ningún distintivo** junto al nombre, así que:

- No hay sección «En sus palabras» como en otras webs del repositorio: no hay texto del titular que reproducir.
- La portada dice expresamente que la ficha no publica carta, precios, web propia, distintivo ni descripción del titular, y que por eso aquí no se reproduce nada de eso.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 20:45 – 24:00                  |
| Martes    | 20:45 – 24:00                  |
| Miércoles | 20:45 – 24:00                  |
| Jueves    | 20:45 – 24:00                  |
| Viernes   | 20:45 – 24:00                  |
| Sábado    | 20:45 – 24:00                  |
| Domingo   | 20:45 – 24:00                  |

Detalles que se trasladan tal cual a la web:

- El local sirve **cenas los siete días**, de 20:45 a 24:00, y **no publica ningún día de cierre** ni ningún tramo de mediodía. Es el único horario de este tipo entre las webs del repositorio, que suelen tener alguna jornada cerrada.
- El **lunes 12**, Fiesta Nacional de España, la ficha añade el aviso **«el horario podría ser diferente»**, que es el aviso de **tipo 2** (el local mantiene su horario habitual y Google solo advierte de que puede cambiar), no el de tipo 1, en el que la ficha publica el horario propio del festivo en lugar del habitual. Se recoge como en `bar-de-esteban`: el horario va tal cual en la tabla y el aviso se explica en la sección de horario.
- El turno de noche cierra a las 24:00, que en los datos estructurados se escribe como `closes: '00:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que salen **7 especificaciones** (una por día).

### Accesibilidad: dos servicios, los dos disponibles

La ficha **sí publica el grupo de accesibilidad**, con dos entradas y las dos disponibles:

- Acceso para sillas de ruedas.
- Asientos adaptados sillas de ruedas.

Como están disponibles, el `restaurantSchema` **incluye `amenityFeature`** con dos `LocationFeatureSpecification` (`value: true`), al contrario que en `bar-albero-tapas`, cuya ficha no publicaba este grupo. La web las lista con su etiqueta literal y no añade ningún dato más.

### El teléfono

Es el número que publica la ficha, **859 80 04 21**, con el prefijo 859 que trae. Se publica tal cual y `phoneHref` usa `tel:+34859800421`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación (incluido el «balcón» de la tercera, que es lo que publica la ficha, y los puntos suspensivos con los que termina la segunda). Google las guarda entre comillas dobles, pero esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las puntuaciones son 4, 5 y 5:

1. «Buen servicio, buenos precios y buena calidad y variedad de hamburguesas» (4/5)
2. «Todo rico de bocadillos, montaditos…» (5/5)
3. «Las patatas con cheddar y balcón estaban muy ricas.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-chispito   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-el-chispito
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete apaisadas (01, 02, 03, 04, 05, 06 y 08) y **tres verticales** (07, 09 y 10). No hay panorámica, a diferencia de `bar-albero-tapas`, así que los tres huecos del collage se cubren con una apaisada arriba y dos verticales abajo.
- El manifiesto **no atribuye autor** a ninguna foto (el campo `author` viene vacío), así que las diez van **sin pie**. La ficha tampoco describe su contenido y no se inventa ninguna descripción: todos los `alt` avisan solo de dónde salen.
- Tras optimizar, el manifiesto baja de **4,5 MB a 2,5 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-chispito
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario**, sobre todo el del **lunes 12**, que la ficha marca con el aviso de la Fiesta Nacional de España, y confirmar que de verdad abre cenas los siete días sin ningún cierre semanal.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Preguntar al titular por la carta, los precios y sus datos de contacto directos: la ficha no publica carta ni precios y el teléfono que da es el 859 80 04 21.
5. Si el dominio final no es `restaurante-el-chispito.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
