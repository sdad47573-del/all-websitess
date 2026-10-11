# Restaurante La_Pepa

Web informativa de **Restaurante La_Pepa**, restaurante en la **Pl. Resolana, 2 · 21570 Santa Bárbara de Casa (Huelva)**, con teléfono 616 53 42 15.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, distintivo, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante La_Pepa (con su guion bajo) |
| Dirección               | Pl. Resolana, 2 · 21570 Santa Bárbara de Casa |
| Teléfono                | +34 616 53 42 15 (móvil)               |
| Categoría de Google     | Restaurante (es la única que publica)   |
| Distintivo              | Se admiten perros                      |
| Valoración              | 4,8 sobre 5 con 30 reseñas             |
| Horario                 | Viernes, sábado y domingo, con dos turnos |
| Coordenadas             | 37.796557, -7.1881817                  |
| Plus code               | QRW6+JP Santa Bárbara de Casa          |
| Identificador del lugar | `ChIJswW_lyf5EA0R5m1GPBptVG4`          |
| Identificador de canal  | `/g/11y1d1k602`                        |
| Feature id              | `0xd10f92797bf05b3:0x6e546d1a3c466de6` |

El número de reseñas se escribe **«30 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

### El nombre lleva guion bajo

La ficha publica el nombre como **«Restaurante La_Pepa»**, con el guion bajo entre «La» y «Pepa». Se recoge tal cual en el título, el encabezado, las reseñas y los datos estructurados: no se corrige a un espacio ni se quita.

### Una sola categoría y sin `servesCuisine`

La ficha publica **una única categoría**, «Restaurante», que es el tipo genérico de establecimiento y no declara ninguna cocina concreta. Siguiendo el criterio del repositorio, el `restaurantSchema` **va sin `servesCuisine`**: lo que el local sirve se cuenta en la sección «En sus palabras», con la descripción del titular, y no se inventa una cocina. Tampoco hay `priceRange` (no publica precios) ni `sameAs` (no publica web propia ni redes). `acceptsReservations: true` se mantiene como en el resto de webs.

### Descripción del titular

La ficha **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, sin corregir su redacción ni su puntuación (incluido «andevalo» sin tilde), en la sección «En sus palabras»:

> Establecimiento con carta de la mejor carne ibérica del andevalo y pescado directo de lonja comprado semanalmente, menús para grupos o quedadas de empresa y organización de alguna que otra fiesta ya que nuestro local cuenta con todas las comodidades tanto para un público específico, como para otro público más joven.

De ahí salen dos cosas que la web recoge **atribuidas al titular** y sin ampliar:

- Los **menús para grupos o quedadas de empresa**, que tienen su propia pregunta frecuente.
- La **carne ibérica del Andévalo** y el **pescado directo de lonja**, que la portada menciona como lo que el titular publica, nunca como una carta.

### El distintivo: «Se admiten perros»

Junto al nombre, Google muestra el distintivo **«Se admiten perros»**, el mismo que publican las fichas de `daivel` y `la-talega`. Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo: la portada lo menciona en la franja de datos y en la sección del local, y tiene una pregunta frecuente que remite al teléfono para cualquier condición.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. **Solo abre viernes, sábado y domingo**, y lo hace con **dos turnos**:

| Día       | Horario publicado por la ficha   |
| --------- | -------------------------------- |
| Lunes     | Cerrado                          |
| Martes    | Cerrado                          |
| Miércoles | Cerrado                          |
| Jueves    | Cerrado                          |
| Viernes   | 9:00 – 17:00 · 20:00 – 1:00      |
| Sábado    | 9:00 – 17:00 · 20:00 – 1:00      |
| Domingo   | 9:00 – 17:00 · 20:00 – 1:00      |

Detalles que se trasladan tal cual a la web:

- De **lunes a jueves la ficha da el local como cerrado**: esos cuatro días aparecen en la tabla con la marca de cerrado y **no generan ninguna entrada** en los datos estructurados, que salen con **6 franjas horarias** (2 turnos × 3 días).
- Cada día abierto lleva **dos `shifts`** y el texto de la tabla los une con un punto medio («9:00 – 17:00 · 20:00 – 1:00»), como en `abaceria-tinta-de-toro`.
- El turno de noche **cierra a la 1:00 del día siguiente**. La ficha lo escribe «1:00» y se recoge así en la tabla; en los datos estructurados se normaliza a `closes: '01:00'` (mismo criterio que el cierre a las 02:00 de `abaceria-tinta-de-toro`).
- **El lunes lleva el aviso de la Fiesta Nacional de España** («el horario podría ser diferente») **aunque ese día la ficha lo da como cerrado**. Es un caso que no aparece en otras fichas del repositorio: el aviso se recoge porque la ficha lo publica, y la web lo explica diciendo que **no se deduce de él ninguna apertura**.

### Accesibilidad: tres servicios, los tres disponibles

La ficha **sí publica el grupo de accesibilidad**, con tres entradas y las tres disponibles:

- Acceso para sillas de ruedas.
- Aseo adaptado para sillas de ruedas.
- Asientos adaptados sillas de ruedas.

El `restaurantSchema` incluye `amenityFeature` con tres `LocationFeatureSpecification` (`value: true`). La web lista las tres etiquetas literales y no añade ninguna más.

### El teléfono

Es el número que publica la ficha, **616 53 42 15**, un móvil. Se publica tal cual y `phoneHref` usa `tel:+34616534215`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación (incluido «Buenisima» sin tilde y la ausencia de punto final en la segunda). Google las guarda entre comillas dobles, pero esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las tres son de 5 sobre 5:

1. «Buenisima comida, buenos precios y sobre todo un servicio fantástico.» (5/5)
2. «Super buen trato, comida riquísima 100% recomendable, super amables» (5/5)
3. «Buenísima la comida y el trato.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-pepa   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-pepa
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: tres apaisadas (01, 02 y 07), una panorámica (10), cuatro verticales (03, 04, 05 y 06) y dos de proporción intermedia (08 y 09).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante La_Pepa»), así que cada foto de la galería lleva su pie «Foto de Restaurante La_Pepa», como en `bar-albero-tapas`.
- El collage de portada usa la apaisada **01** arriba; abajo van dos de las verticales, la **03** y la **04**. La panorámica y las dos de proporción intermedia se quedan en la galería.
- Tras optimizar, el manifiesto baja de **3,7 MB a 1,9 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-pepa
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario**, sobre todo los **cuatro días cerrados** (lunes a jueves) y el aviso de la Fiesta Nacional que la ficha publica precisamente el lunes.
3. Preguntar por la carta, los precios y los menús para grupos: la ficha solo publica la frase del titular y la web no inventa ni precios ni platos.
4. Aclarar si el guion bajo del nombre es intencionado o un error de la ficha antes de dar por bueno el nombre en títulos y datos estructurados.
5. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
6. Si el dominio final no es `restaurante-la-pepa.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
