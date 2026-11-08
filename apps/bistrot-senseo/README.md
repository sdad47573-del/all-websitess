# Bistrot Senséô

Web informativa de **Bistrot Senséô**, restaurante francés en **Av. Vicente Llorca Alós, 13 · 03502 Benidorm (Alicante)**, con teléfono 614 18 78 04.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Bitter** (títulos) y **Outfit** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Bistrot Senséô                           |
| Dirección               | Av. Vicente Llorca Alós, 13 · 03502 Benidorm |
| Teléfono                | +34 614 18 78 04                         |
| Categoría de Google     | Restaurante francés                      |
| Valoración              | 4,9 sobre 5 con 106 reseñas              |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.5335454, -0.1562864                   |
| Plus code               | GRMV+CF Benidorm                         |
| Identificador del lugar | `ChIJHwzSCgAbYg0R4SvmrptrDSI`            |
| Identificador de canal  | `/g/11yp5b66mb`                          |
| Feature id              | `0xd621b000ad20c1f:0x220d6b9baee62be1`   |

El número de reseñas se escribe **«106 reseñas»** y la valoración con coma decimal («4,9»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Segunda web del repositorio en Alicante**, después de `restaurante-22`. La provincia se recoge como `Alicante` y la comunidad como `Comunidad Valenciana`; `geo.region` usa el código de provincia **`ES-A`**, como el resto de webs del repositorio.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante francés», que alimenta `servesCuisine: ['Francesa', 'Mediterránea']`. El segundo término no sale de la categoría de Google, sino de la **descripción del titular**, que dice literalmente «Cuisine française et méditerranéenne»: es lo que el propio negocio declara cocinar, así que se recoge. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `sameAs` (sin web propia ni redes).

**La descripción del titular es la primera de este grupo que publica un precio.** Está escrita en francés, ocupa tres líneas y se reproduce **literal**, sin traducirla, sin corregirla y conservando los saltos de línea (la portada la pinta con `white-space: pre-line`):

```
Cuisine française et méditerranéenne , spécialités française, spécialités des montagnes à base de fromages français, menu à partir de 15€
Terrasse vue mer
Bar à cocktails
```

Detalles que se conservan tal cual: el **espacio antes de la coma** («méditerranéenne , spécialités»), el precio de partida del menú (**«menu à partir de 15€»**) y los saltos de línea.

**Sobre el precio.** Se reproduce dentro de la descripción porque es lo que el negocio escribe en su perfil, pero **no se añade `priceRange` a los datos estructurados**: la ficha no publica un rango de precios del establecimiento, solo el precio de partida del menú dentro de ese texto. La web lo explica así en la pregunta frecuente «¿Cuánto cuesta comer?». Si el titular quiere darle otro tratamiento (por ejemplo, publicar un menú con precios), hay que cambiarlo aquí y en `restaurantSchema`.

**Sin distintivo.** Google **no muestra ninguna etiqueta junto al nombre**, así que no existe la constante `distintivo` y la web no menciona ninguna (el caso mayoritario del repositorio).

**Componente «Planta G».** Los datos del lugar guardan, además de la dirección formateada, un componente **«Planta G»** que no forma parte de la dirección que Google publica («Av. Vicente Llorca Alós, 13, 03502 Benidorm, Alicante»). Se recoge como dato aparte (`business.planta`), se advierte en la pregunta frecuente de ubicación y **no se mete dentro de la calle**: conviene confirmarlo con el local antes de publicar.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 11:00 – 23:00                  |
| Martes    | Cerrado                        |
| Miércoles | 11:00 – 23:00                  |
| Jueves    | 11:00 – 23:00                  |
| Viernes   | 11:00 – 23:00                  |
| Sábado    | 11:00 – 23:00                  |
| Domingo   | 11:00 – 23:00                  |

Detalles que se trasladan tal cual a la web:

- **Tramo continuo de 11:00 a 23:00** todos los días menos el **martes**, que cierra.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera una entrada y el martes ninguna (**6 especificaciones** en total).
- **Dos marcas de festivo, y no son lo mismo.** El **viernes 9** la ficha lo marca como **«Día de la Comunidad Valenciana: el horario podría ser diferente»** (aviso de tipo 2: el horario podría cambiar). El **lunes 12** la ficha **publica directamente el horario de la Fiesta Nacional de España** («Horario de Fiesta Nacional de España», aviso de tipo 1: ese día tiene horario propio de festivo). Se recogen con esa distinción, como en `restaurante-la-abadia-de-calatrava`, que es el único precedente del repositorio de un aviso de tipo 1.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y los **asientos** adaptados para sillas de ruedas. No publica la entrada del aseo ni ninguna otra.

### El teléfono

Es un **móvil** (614 18 78 04), y así se publica: `phoneHref` usa `tel:+34614187804`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Comida muy rica, buen ambiente y mucha calidez en la atención.» (5/5)
2. «Los dueños son increíbles súper majos con un trato muy agradable.» (5/5)
3. «Recomendamos y volveremos sin duda.» (5/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bistrot-senseo   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **ocho verticales** (03, 04, 05, 06, 07, 08, 09 y 10), **una apaisada** (02, de 5712 × 4284) y **una cuadrada** (01, de 2048 × 2048). **Ninguna es panorámica.**
- El manifiesto de la descarga **sí atribuye autor**: las diez son del propio local («Bistrot Senséô»), así que **cada foto de la galería lleva su pie** («Foto de Bistrot Senséô»).
- El collage de portada usa la única **apaisada (02)** arriba (16/9) y las verticales **07** y **09** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-senseo-post.mjs`.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bistrot-senseo
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Decidir con el titular qué hacer con el precio publicado** («menu à partir de 15€»): hoy se reproduce dentro de su descripción y no se añade `priceRange`. Si quiere publicar un menú con precios, hay que ampliar `site.ts` y la portada.
3. **Confirmar el componente «Planta G»** que Google guarda en los datos del lugar y no incluye en la dirección formateada.
4. **Revisar la descripción del titular**: está en francés y se publica sin traducir, tal cual, con sus saltos de línea. Decidir si se mantiene así.
5. **Confirmar el horario** (11:00 a 23:00, martes cerrado) y el tratamiento de los dos festivos del 9 y el 12 de octubre.
6. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
7. Si el dominio final no es `bistrot-senseo.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
