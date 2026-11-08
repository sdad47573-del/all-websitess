# Pandokum Braseria

Web informativa de **Pandokum Braseria**, restaurante armenio en **Carrer Migjorn, 2 · 03570 Benidorm (Alicante)**, con teléfono 611 70 62 44.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Bitter** (títulos) y **Outfit** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Pandokum Braseria                      |
| Dirección               | Carrer Migjorn, 2 · 03570 Benidorm     |
| Teléfono                | +34 611 70 62 44                       |
| Categoría de Google     | Restaurante armenio                    |
| Valoración              | 4,7 sobre 5 con 248 reseñas            |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.5258588, -0.1696283                 |
| Plus code               | GRGJ+84 Benidorm                       |
| Identificador del lugar | `ChIJTR8hrwMbYg0RmnH3v8snD98`          |
| Identificador de canal  | `/g/11t2t7fg4b`                        |
| Feature id              | `0xd621b03af211f4d:0xdf0f27cbbff7719a` |

El número de reseñas se escribe **«248 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Quinta web del repositorio en Alicante**, después de `restaurante-22`, `bistrot-senseo`, `gastro-bar-bo` y `daivel`. La provincia se recoge como `Alicante` y la comunidad como `Comunidad Valenciana`; `geo.region` usa el código de provincia **`ES-A`**, como el resto de webs del repositorio.

**Es la primera ficha de este grupo con una cocina nacional declarada** (`Restaurante armenio`), así que es la primera de las cinco de Alicante que lleva `servesCuisine`. Se traduce la única categoría que publica Google: **`servesCuisine: ['Cocina armenia']`**, con el mismo criterio que `restaurante-canton` («Restaurante vietnamita» → «Cocina vietnamita»). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica carta ni precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular y sin distintivo.** La ficha **no publica** ninguna descripción del negocio ni muestra ninguna etiqueta junto al nombre, así que no existen `descripcionLocal` ni `distintivo` y la web no menciona ninguno de los dos. Es el mismo caso que `restaurante-sur` o `restaurante-22`.

**El código postal es 03570**, no el 03501/03502/03503 que usan las otras fichas de Benidorm del repositorio. Se recoge **tal cual lo publica Google** y queda anotado como pendiente de confirmar con el titular.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 13:00 – 24:00                  |
| Miércoles | 13:00 – 24:00                  |
| Jueves    | 13:00 – 24:00                  |
| Viernes   | 13:00 – 24:00                  |
| Sábado    | 13:00 – 24:00                  |
| Domingo   | 14:00 – 24:00                  |

Detalles que se trasladan tal cual a la web:

- **Un solo turno que cierra a las 24:00**: de martes a sábado desde las 13:00 y **los domingos desde las 14:00**, una hora más tarde que el resto. Los **lunes** cierra todo el día.
- El cierre lo publica Google como «–24:00» y se recoge **literal**, con `close: '24:00'`, como en `a-jalar` y `bar-restaurante-grand-pere`: es la medianoche de ese mismo día, y no se convierte a «00:00».
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera una entrada y el lunes ninguna (**6 especificaciones** en total).
- **Dos marcas de festivo, ambas de aviso.** El **viernes 9** la ficha lo marca como **«Día de la Comunidad Valenciana: el horario podría ser diferente»** y el **lunes 12** como **«Fiesta Nacional de España: el horario podría ser diferente»**. Las dos son avisos de que el horario podría cambiar, así que se recogen igual, atribuidas a su día.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas.

### El teléfono

Es un **móvil** (611 70 62 44), y así se publica: `phoneHref` usa `tel:+34611706244`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Comida típica armenia/ deliciosa Bien aconsejado y atendido por Karen Volveremos» (5/5)
2. «Recomiendo a las personas que busquen buena cocina de asados.» (5/5)
3. «Repetiremos y muchas gracias de corazón.» (5/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona. Se conservan la barra «armenía/ deliciosa» y las mayúsculas internas de la primera («Bien aconsejado...»).

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs pandokum-braseria   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 pandokum-braseria
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **cinco apaisadas** (01, 04, 06, 07 y 09) y **cinco verticales** (02, 03, 05, 08 y 10). **Ninguna es panorámica ni cuadrada.**
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `restaurante-podenco`, `gastro-bar-bo`, `daivel`, `taberna-la-raquelita`, `restaurante-la-casuca` y `casa-loan`.
- El collage de portada usa la **apaisada 01** arriba (16/9) y las verticales **03** y **05** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **5,7 MB a 2,2 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-pandokum-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs pandokum-braseria
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar el código postal**: la ficha publica **03570** y el resto de fichas de Benidorm del repositorio usan 03501/03502/03503. Verificar cuál es el correcto antes de publicar.
3. **Confirmar el horario** (13:00 a 24:00 de martes a sábado, 14:00 a 24:00 los domingos, lunes cerrado) y el tratamiento de los dos festivos del 9 y el 12 de octubre.
4. **Decidir si se añade una descripción del negocio**: la ficha no publica ninguna, así que la web no tiene texto de presentación. Si el titular la publica, se añadiría `descripcionLocal` y se pintaría en la portada.
5. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
6. Si el dominio final no es `pandokum-braseria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
