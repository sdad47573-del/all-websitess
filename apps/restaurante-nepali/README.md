# Restaurante Nepalí

Web informativa de **Restaurante Nepalí**, restaurante nepalí e indio en la **Calle Lepanto, 21 · 03503 Benidorm** (Alicante), con teléfono 965 89 81 27.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante Nepalí                     |
| Dirección               | C. Lepanto, 21 · 03503 Benidorm        |
| Teléfono                | +34 965 89 81 27                       |
| Categorías de Google    | Restaurante nepalí, Restaurante indio  |
| Valoración              | 4,7 sobre 5 con 1.216 reseñas          |
| Horario                 | 12:30 – 15:30 y 18:00 – 1:00 (ver abajo) |
| Coordenadas             | 38.5382525, -0.1133746                 |
| Plus code               | GVQP+8M Benidorm                       |
| Identificador del lugar | `ChIJf2z1kvcEYg0RtguiXVkwZn8`          |
| Identificador de canal  | `/g/11g8vwdt_b`                        |
| Feature id              | `0xd6204f792f56c7f:0x7f6630595da20bb6` |

El número de reseñas se escribe **«1.216 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Lepanto, 21»). En la web se desarrolla a **Calle Lepanto, 21**, como en el resto del repositorio; el código postal 03503 y el municipio (Benidorm) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías**, «Restaurante nepalí» (la primera, que hace de categoría principal) y «Restaurante indio». Aquí las dos son **cocinas declaradas**, no tipos de establecimiento, así que `servesCuisine` recoge las dos: `['Cocina nepalí', 'Cocina india']`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** En esta ficha el campo de descripción del negocio **llega vacío**, así que no hay `descripcionLocal`, la portada no reproduce ninguna y el aviso de que «no se publica» se da explícitamente en el texto de la sección «La casa».

**Sin distintivo.** La ficha **no publica ningún distintivo** junto al nombre (ni «Brunch» ni otro), así que no hay `distintivo` y la portada no lo menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha     |
| --------- | ---------------------------------- |
| Lunes     | 18:00 – 1:00                       |
| Martes    | 12:30 – 15:30 · 18:00 – 1:00       |
| Miércoles | 12:30 – 15:30 · 18:00 – 1:00       |
| Jueves    | 12:30 – 15:30 · 18:00 – 1:00       |
| Viernes   | 12:30 – 15:30 · 18:00 – 1:00       |
| Sábado    | 12:30 – 15:30 · 18:00 – 1:00       |
| Domingo   | 12:30 – 15:30 · 18:00 – 1:00       |

Detalles que se trasladan tal cual a la web:

- **Todos los días hay servicio de noche, de 18:00 a 1:00**, y **de martes a domingo también se sirve el mediodía, de 12:30 a 15:30**.
- **El lunes solo abre por la noche**, de 18:00 a 1:00: no hay ningún día marcado como cerrado.
- El cierre a la **1:00 es de madrugada**, y en los datos estructurados se escribe como `closes: '01:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que sale **una entrada por turno: 13 en total** (el lunes, con un solo turno, aporta una).
- La respuesta trae el aviso **«Fiesta Nacional de España: el horario podría ser diferente»** junto al lunes (12 de octubre). Ese aviso se recoge en el texto de la sección de horario (constante `avisoFestivo`) y **no cambia la tabla**.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. Es la primera ficha del repositorio con el aseo adaptado publicado.

### El teléfono

Es un **fijo** (965 89 81 27), y así se publica: `phoneHref` usa `tel:+34965898127`. La ficha no publica ningún otro número.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una, muy crítica, de 1 sobre 5:

1. «Comida India deliciosa, muy bien elaborada, sabores variados y muy exóticos.» (5/5)
2. «Muy buena atención, todos los camareros encantadores y la comida muy rica.» (5/5)
3. «No pidáis nuggets para los niños, son congelados de bolsa, de los malos...» (1/5)

La reseña de 1 sobre 5 se pinta con un filo distinto (`.quote.is-low`) para que no se confunda con las demás, pero **se publica igual**: la web recoge las tres reseñas que destaca Google, sin filtrar la negativa.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-nepali   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-nepali
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías distintas** (los diez ficheros tienen MD5 distinto, sin duplicados): vistas 01 y 03, verticales 02, 05 y 08, y apaisadas 04, 06, 07, 09 y 10.
- El manifiesto de la descarga trae el campo `author` **vacío**: la ficha **no indica quién hizo las fotos**, así que **no hay a quién citar y las fotos van sin pie**. Es el único caso así en las webs recientes del repositorio, donde las demás fichas sí traen autor.
- El collage de portada usa la apaisada **06** (proporción 16/9 nativa) arriba y las verticales **02** y **08** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar (lado máximo 1600 px), el optimizador reduce **9 de las 10** fotos (la vista 03 ya estaba dentro del límite) e informa de un **−54 %** en esas nueve. El conjunto completo pasa de ≈4,7 MB a **2,3 MiB** (2.376.036 bytes) entre las diez. Los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630, ≈78 KB) es un recorte centrado de la foto apaisada **06** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-nepali
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (abre todos los días hasta la 1:00 y el lunes solo por la noche) y el aviso de festivo del 12 de octubre, y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, no indica autor, y **la web no las cita a ninguna fuente**. Conviene confirmar con el local que se pueden usar.
4. Si el dominio final no es `restaurante-nepali.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
