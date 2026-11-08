# Gastro Bar Bo

Web informativa de **Gastro Bar Bo**, restaurante familiar en **Av. de la Marina Baixa, 3, local 13 · 03502 Benidorm (Alicante)**, con teléfono 965 21 49 87.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Bitter** (títulos) y **Outfit** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Gastro Bar Bo                          |
| Dirección               | Av. de la Marina Baixa, 3, local 13 · 03502 Benidorm |
| Teléfono                | +34 965 21 49 87                       |
| Categoría de Google     | Restaurante familiar                   |
| Valoración              | 4,9 sobre 5 con 307 reseñas            |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.5269155, -0.166096                  |
| Plus code               | GRGM+QH Benidorm                       |
| Identificador del lugar | `ChIJrUeAI50bYg0RS9L37N0ieqM`          |
| Identificador de canal  | `/g/11td8hrnj0`                        |
| Feature id              | `0xd621b9d238047ad:0xa37a22ddecf7d24b` |

El número de reseñas se escribe **«307 reseñas»** y la valoración con coma decimal («4,9»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Tercera web del repositorio en Alicante**, después de `restaurante-22` y `bistrot-senseo`. La provincia se recoge como `Alicante` y la comunidad como `Comunidad Valenciana`; `geo.region` usa el código de provincia **`ES-A`**, como el resto de webs del repositorio.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante familiar», que **no declara ninguna cocina**. Por eso no se añade `servesCuisine` a los datos estructurados, igual que en `restaurante-la-espadana-bulevar`, la otra ficha del repositorio con esa misma categoría. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica carta ni precios) y sin `sameAs` (sin web propia ni redes).

**La descripción del titular lleva emoji y tres líneas.** Es el texto que el propio negocio escribe en su perfil y se reproduce **literal**, sin corregirlo y conservando los saltos de línea (la portada lo pinta con `white-space: pre-line`):

```
🌿 Gastro Bar Bo 🌿
Un lugar creado con amor, donde cada plato cuenta nuestra historia. Sabor, pasión y un ambiente que te hace sentir en casa.
```

**Sin distintivo.** Google **no muestra ninguna etiqueta junto al nombre**, así que no existe la constante `distintivo` y la web no menciona ninguna (el caso mayoritario del repositorio).

**Componente «Cala de».** Los datos del lugar guardan, además de la dirección formateada, un componente **«Cala de»** que no forma parte de la calle que Google publica («Av. de la Marina Baixa, 3, local 13, 03502 Benidorm, Alicante»). Se recoge como dato aparte (`business.barrio`), se advierte en la pregunta frecuente de ubicación y **no se mete dentro de la dirección**: conviene confirmarlo con el local antes de publicar.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha      |
| --------- | ----------------------------------- |
| Lunes     | Cerrado                             |
| Martes    | 10:00 – 16:00 y 19:00 – 22:00       |
| Miércoles | 10:00 – 16:00 y 19:00 – 22:00       |
| Jueves    | 10:00 – 16:00 y 19:00 – 22:00       |
| Viernes   | 10:00 – 16:00 y 19:00 – 22:00       |
| Sábado    | 10:00 – 16:00 y 19:00 – 22:00       |
| Domingo   | 10:00 – 16:00 y 19:00 – 22:00       |

Detalles que se trasladan tal cual a la web:

- **Dos turnos, de 10:00 a 16:00 y de 19:00 a 22:00**, todos los días menos el **lunes**, que cierra.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera **dos entradas** y el lunes ninguna (**12 especificaciones** en total).
- **Dos marcas de festivo, ambas de aviso.** El **viernes 9** la ficha lo marca como **«Día de la Comunidad Valenciana: el horario podría ser diferente»** y el **lunes 12** como **«Fiesta Nacional de España: el horario podría ser diferente»**. Las dos son avisos de que el horario podría cambiar, así que se recogen igual, atribuidas a su día.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas.

### El teléfono

Es un **fijo de Benidorm** (965 21 49 87), y así se publica: `phoneHref` usa `tel:+34965214987`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Raciones abundantes y de buena calidad» (5/5)
2. «Un lugar tranquilo con muy buena comida y muy buen servicio.» (5/5)
3. «Hemos comido de tapeo y estaba buenísimo todo.» (5/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona. La primera no lleva punto final porque tampoco lo lleva en la ficha.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs gastro-bar-bo   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 gastro-bar-bo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **cuatro apaisadas** (04, 06, 07 y 10), **cinco verticales** (01, 02, 05, 08 y 09) y **una casi cuadrada** (03, de 1179 × 1199). **Ninguna es panorámica.**
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `restaurante-podenco`, `taberna-la-raquelita`, `restaurante-la-casuca` y `casa-loan` del repositorio.
- El collage de portada usa la **apaisada 04** arriba (16/9) y las verticales **01** y **08** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,8 MB a 1,9 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-bo-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **04** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs gastro-bar-bo
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar el componente «Cala de»** que Google guarda en los datos del lugar y no incluye en la dirección formateada, y la grafía de «Av. de la Marina Baixa, 3, local 13».
3. **Revisar la descripción del titular**: se publica literal, con su emoji y sus saltos de línea. Decidir si se mantiene así.
4. **Confirmar el horario** (dos turnos de 10:00 a 16:00 y de 19:00 a 22:00, lunes cerrado) y el tratamiento de los dos festivos del 9 y el 12 de octubre.
5. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
6. Si el dominio final no es `gastro-bar-bo.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
