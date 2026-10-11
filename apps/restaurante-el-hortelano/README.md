# Restaurante El Hortelano

Web informativa de **Restaurante El Hortelano**, restaurante de cocina española en la **Calle Segadores, 11 · 21550 Puebla de Guzmán (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                              |
| ----------------------- | -------------------------------------------- |
| Nombre                  | Restaurante El Hortelano                     |
| Dirección               | C. Segadores, 11 · 21550 Puebla de Guzmán, Huelva |
| Categoría de Google     | Restaurante de cocina española               |
| Valoración              | 4,5 sobre 5 con 408 reseñas                  |
| Teléfono                | 645 17 86 00 (móvil)                         |
| Horario                 | Publicado (ver abajo)                        |
| Coordenadas             | 37.6097067, -7.2516677                       |
| Identificador del lugar | `ChIJJ-OpAW1QEA0R511KhefshZc`                |
| Identificador de canal  | `/g/11cn9pwgt9`                              |
| Feature id              | `0xd10506d01a9e327:0x9785ece7854a5de7`       |

El número de reseñas se escribe **«408 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Segadores, 11»). En la web se desarrolla a **Calle Segadores, 11**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 21550 y el municipio (Puebla de Guzmán) se publican tal cual.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante de cocina española». Por eso `category` y `categories` la recogen y el JSON-LD declara `servesCuisine: ['Cocina española']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **645 17 86 00**, y por su prefijo es un **móvil**: se publica como **+34 645 17 86 00** y el enlace de llamada es `tel:+34645178600`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **de lunes a jueves y el domingo de 11:00 a 16:00**, el **sábado de 12:00 a 16:00** y **cierra los viernes**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 11:00 – 16:00                  |
| Martes    | 11:00 – 16:00                  |
| Miércoles | 11:00 – 16:00                  |
| Jueves    | 11:00 – 16:00                  |
| Viernes   | Cerrado                        |
| Sábado    | 12:00 – 16:00                  |
| Domingo   | 11:00 – 16:00                  |

Detalles que se trasladan tal cual a la web:

- **Viernes cerrado** (`shifts: []`, sin especificación de apertura en el JSON-LD); el resto de días generan su propia entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra (tampoco aparcamiento adaptado).

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (4,5 / 5 con 408 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps, como en las webs `restaurante-alentejo` y `restaurante-el-portichuelo`.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-hortelano   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro verticales (02, 04, 06 y 08), cuatro apaisadas (01, 03, 07 y 10), una panorámica (05) y una cuadrada (09).
- El manifiesto de la descarga **atribuye las diez al propio local** (`author`: «Restaurante El Hortelano»), así que **cada foto lleva su pie**, `Foto de Restaurante El Hortelano`, con el estilo `.cocina-item figcaption` que se añadió a esta hoja de estilos.
- El collage de portada usa la panorámica **05** (4000 × 1848) arriba y la vertical **02** con la apaisada **10** (16:9) en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica **05** de la galería, que ya venía en proporción 2,16: apenas se recorta.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-hortelano
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de lunes a jueves y domingo de 11:00 a 16:00, sábado de 12:00 a 16:00 y viernes cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-el-hortelano.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
