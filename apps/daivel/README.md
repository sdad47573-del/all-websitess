# DAIVEL

Web informativa de **DAIVEL**, bar restaurante en **Av. de la Armada Española, 21 · 03502 Benidorm (Alicante)**, con teléfono 661 02 59 49.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Bitter** (títulos) y **Outfit** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                         |
| ----------------------- | --------------------------------------- |
| Nombre                  | DAIVEL (todo en mayúsculas)             |
| Dirección               | Av. de la Armada Española, 21 · 03502 Benidorm |
| Teléfono                | +34 661 02 59 49                        |
| Categoría de Google     | Bar restaurante                         |
| Valoración              | 4,7 sobre 5 con 1.131 reseñas           |
| Horario                 | Publicado (ver abajo)                   |
| Coordenadas             | 38.5367542, -0.1490919                  |
| Plus code               | GVP2+P9 Benidorm                        |
| Identificador del lugar | `ChIJIe-yvNIEYg0R93ObeNN_jSI`           |
| Identificador de canal  | `/g/11dxdm6hwp`                         |
| Feature id              | `0xd6204d2bcb2ef21:0x228d7fd3789b73f7`  |

El número de reseñas se escribe **«1.131 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Cuarta web del repositorio en Alicante**, después de `restaurante-22`, `bistrot-senseo` y `gastro-bar-bo`. La provincia se recoge como `Alicante` y la comunidad como `Comunidad Valenciana`; `geo.region` usa el código de provincia **`ES-A`**, como el resto de webs del repositorio.

**Es la ficha con más reseñas de este grupo de webs**: 1.131, frente a las 236 de `restaurante-sur` o las 101 de `restaurante-podenco`.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Bar restaurante», que **no declara cocina**. Por eso no se añade `servesCuisine` a los datos estructurados, igual que en `bar-restaurante-di-mari` o `meson-el-poligono`, las otras fichas del repositorio con esa misma categoría. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica carta ni precios) y sin `sameAs` (sin web propia ni redes).

**La descripción del titular es la más corta de este grupo y queda abierta.** Son tres palabras, se reproduce **literal** y termina en unos puntos suspensivos que no se completan, como en `bar-restaurante-di-mari`:

```
Arroces, fideuá, carnes...
```

**Sí hay distintivo.** Google muestra junto al nombre la etiqueta **«Se admiten perros»**, la única de ese tipo que publica la ficha. Se recoge en la constante `distintivo` y se menciona tal cual, sin ampliarla ni interpretarla, con su propia pregunta frecuente («¿Qué significa el distintivo «Se admiten perros»?»). Mismo caso que `restaurante-podenco`, `la-talega` y `restaurante-atracon-jaen`.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 10:00 – 17:00                  |
| Martes    | Cerrado                        |
| Miércoles | Cerrado                        |
| Jueves    | 10:00 – 17:00                  |
| Viernes   | 10:00 – 17:00                  |
| Sábado    | 10:00 – 17:00                  |
| Domingo   | 10:00 – 17:00                  |

Detalles que se trasladan tal cual a la web:

- **Un solo turno, de 10:00 a 17:00**, de **jueves a lunes**. Cierra **martes y miércoles**: es la primera ficha del grupo con **dos días de cierre**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera una entrada y los dos cerrados ninguna (**5 especificaciones** en total).
- **Dos marcas de festivo, ambas de aviso.** El **viernes 9** la ficha lo marca como **«Día de la Comunidad Valenciana: el horario podría ser diferente»** y el **lunes 12** como **«Fiesta Nacional de España: el horario podría ser diferente»**. Las dos son avisos de que el horario podría cambiar, así que se recogen igual, atribuidas a su día.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas.

### El teléfono

Es un **móvil** (661 02 59 49), y así se publica: `phoneHref` usa `tel:+34661025949`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. **Las tres son de 4 sobre 5**, no de 5: es la primera web del grupo en la que las reseñas destacadas no son todas de cinco estrellas, así que la nota de cada una se muestra tal cual («4 sobre 5») y no se redondea ni se omite.

1. «Una cerveza con buena atencion a buen precio y con una tapita de jamon muy rico» (4/5)
2. «Raciones abundantes, ricas y a precios muy competitivos.» (4/5)
3. «Platos combinados buenos, precios asequibles y el camarero es un crack.» (4/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona. Se conservan **las faltas de tilde y la puntuación originales** de la primera («atencion», «jamon»).

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs daivel   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 daivel
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **tres apaisadas** (01, 02 y 10), **tres verticales** (07, 08 y 09), **dos cuadradas** (04 y 05), **una panorámica** (03, de 4624 × 2084) y **una casi cuadrada** (06, de 1156 × 1061). Es la ficha del grupo con **más formas distintas** de foto.
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `restaurante-podenco`, `gastro-bar-bo`, `taberna-la-raquelita`, `restaurante-la-casuca` y `casa-loan`.
- El collage de portada usa la **panorámica 03** arriba (16/9) y las verticales **07** y **09** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **5,4 MB a 2,2 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-daivel-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica **03** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs daivel
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Decidir cómo publicar el nombre**: la ficha lo escribe todo en mayúsculas («DAIVEL») y la web lo mantiene así en el nombre y los datos estructurados, pero usa «Daivel» en la marca de la cabecera y el pie.
3. **Confirmar la descripción del titular**: son solo tres palabras y quedan abiertas con puntos suspensivos. Si el titular publica una descripción completa, conviene actualizarla aquí.
4. **Revisar el distintivo «Se admiten perros»**: decidir si se mantiene tal cual o se concreta con el titular (condiciones, terraza, etc.).
5. **Confirmar el horario** (10:00 a 17:00 de jueves a lunes, martes y miércoles cerrado) y el tratamiento de los dos festivos del 9 y el 12 de octubre.
6. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
7. Si el dominio final no es `daivel.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
