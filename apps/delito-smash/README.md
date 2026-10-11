# Delito Smash

Web informativa de **Delito Smash**, hamburguesería en el **C. Pescadores, 28 · 21410 Isla Cristina (Huelva)**, con teléfono 608 41 50 43.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Delito Smash                           |
| Dirección               | C. Pescadores, 28 · 21410 Isla Cristina |
| Teléfono                | +34 608 41 50 43 (móvil)               |
| Categoría de Google     | Hamburguesería (es la única que publica) |
| Valoración              | 4,8 sobre 5 con 13 reseñas             |
| Horario                 | Cenas de 21:00 a 24:00; el martes cierra |
| Coordenadas             | 37.1980233, -7.3156484                 |
| Plus code               | 5MXM+6P Isla Cristina                  |
| Identificador del lugar | `ChIJ7wUtle4lEA0Rk8tJGLpQ2GM`          |
| Identificador de canal  | `/g/11npckscpt`                        |
| Feature id              | `0xd1025ee952d05ef:0x63d850ba1849cb93` |

El número de reseñas se escribe **«13 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. Son pocas reseñas y la ficha las publica así: no se maquilla el dato.

### El tipo de la ficha no es un distintivo

La ficha marca este lugar como `SearchResult.TYPE_BURGER_RESTAURANT` (restaurante de hamburguesas) y su única categoría visible es «Hamburguesería». Ese tipo **no es un distintivo**: no aparece junto al nombre como «Brunch» en otras fichas del repositorio, así que aquí no hay `distintivo` y la portada no lo menciona.

### Una sola categoría: `servesCuisine` con lo que declara

«Hamburguesería» declara la comida que sirve, así que el `restaurantSchema` lleva **`servesCuisine: ['Hamburguesas']`**, con el mismo criterio con el que `restaurante-la-dorada` traduce su categoría «Pizzería» como `'Pizza'`, y `bar-restaurante-grand-pere` su «Restaurante mediterráneo» como `'Mediterránea'`. Sin `priceRange` (la ficha no publica precios), sin `sameAs` (no publica web propia ni redes) y con `acceptsReservations: true`, como el resto de webs del repositorio.

### Descripción del titular

La ficha **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, con su inglés de marca y su juego de palabras, en la sección «En sus palabras»:

> Smash burgers brutales, ingredientes top y mucho sabor. En Delito Smash cada hamburguesa es un crimen delicioso.

Es texto del titular y así se queda, incluido «Smash burgers» en inglés y la frase del «crimen delicioso», que es el juego con el nombre del local.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 21:00 – 24:00                  |
| Martes    | Cerrado                        |
| Miércoles | 21:00 – 24:00                  |
| Jueves    | 21:00 – 24:00                  |
| Viernes   | 21:00 – 24:00                  |
| Sábado    | 21:00 – 24:00                  |
| Domingo   | 21:00 – 24:00                  |

Detalles que se trasladan tal cual a la web:

- El local sirve **solo cenas, de 21:00 a 24:00**, y **cierra los martes**. No publica ningún tramo de mediodía. El martes aparece en la tabla con la marca de cerrado y no genera entrada en los datos estructurados.
- **El lunes 12**, Fiesta Nacional de España, la ficha añade el aviso **«el horario podría ser diferente»**, que es el aviso de **tipo 2** (el local mantiene su horario habitual y Google solo advierte de que puede cambiar), no el de tipo 1. Se recoge como en `bar-de-esteban`: el horario va tal cual en la tabla y el aviso se explica en la sección de horario.
- El cierre a las 24:00 se escribe como `closes: '00:00'` en los datos estructurados, y `openingHoursSpecification` sale con **6 especificaciones** (una por cada día abierto).

### Accesibilidad: un solo dato

La ficha **sí publica el grupo de accesibilidad**, pero con **una sola entrada**, el acceso para sillas de ruedas, y figura como disponible. El `restaurantSchema` incluye `amenityFeature` con esa única `LocationFeatureSpecification` (`value: true`), y la web lista esa etiqueta literal sin añadir ninguna más. No publica aseo ni asientos adaptados.

### El teléfono

Es el número que publica la ficha, **608 41 50 43**, un móvil. Se publica tal cual y `phoneHref` usa `tel:+34608415043`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción. Google las guarda entre comillas dobles, pero esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las puntuaciones son 4, 5 y 5:

1. «Volveremos a pedir, muchas gracias» (4/5)
2. «Hamburguesas variadas riquísimas con mucho sabor.» (5/5)
3. «Pedí la mexicana con un toque picante y una salsa riquísima.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs delito-smash   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 delito-smash
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **cuatro fotografías**: dos verticales (01 y 02) y dos cuadradas (03 y 04). Es una de las fichas del repositorio con menos fotos (otras traen tres, dos o una) y **no hay ninguna apaisada ni panorámica**.
- El collage de portada tiene un hueco de 16/9 arriba y dos de 4/5 abajo. Como no hay apaisada, arriba va la cuadrada **03** y el `object-fit: cover` la recorta al 16/9 del hueco; abajo van las dos verticales, la **01** y la **02**, que encajan sin recorte apreciable.
- El manifiesto **no atribuye autor** a ninguna foto (el campo `author` viene vacío), así que las cuatro van **sin pie**. La ficha tampoco describe su contenido y no se inventa ninguna descripción: todos los `alt` avisan solo de dónde salen.
- Tras optimizar, el manifiesto baja de **2,2 MB a 1,1 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto cuadrada **03**, porque no hay ninguna apaisada de la que recortar.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs delito-smash
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario**, sobre todo el del **lunes 12** (aviso de la Fiesta Nacional de España) y el cierre de los martes.
3. Preguntar por la carta, los precios y si hacen reservas o reparto: la ficha no publica nada de eso y la web no lo inventa.
4. Revisar las cuatro fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Si el dominio final no es `delito-smash.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
