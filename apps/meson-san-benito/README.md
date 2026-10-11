# Meson san Benito

Web informativa de **Meson san Benito**, restaurante en la **Calle la Vega, 57 · 21320 El Cerro de Andévalo (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                  |
| ----------------------- | ------------------------------------------------ |
| Nombre                  | Meson san Benito (así, sin tilde y con «san» en minúscula) |
| Dirección               | C. la Vega, 57 · 21320 El Cerro de Andévalo, Huelva |
| Categoría de Google     | Restaurante                                      |
| Valoración              | 4,6 sobre 5 con 222 reseñas                      |
| Teléfono                | 676 62 07 06 (móvil)                             |
| Horario                 | Publicado (ver abajo)                            |
| Coordenadas             | 37.7344113, -6.9326184                           |
| Identificador del lugar | `ChIJH9VjcqepEQ0R92dconYewag`                    |
| Identificador de canal  | `/g/11f86967nv`                                  |
| Feature id              | `0xd11a9a77263d51f:0xa8c11e76a25c67f7`           |

El número de reseñas se escribe **«222 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Nombre tal cual.** La ficha escribe «Meson san Benito», sin tilde y con «san» en minúscula. En la web se reproduce así; el acortado de cabecera y mapa es «San Benito».

**Dirección desarrollada.** Google publica la dirección abreviada («C. la Vega, 57»). En la web se desarrolla a **Calle la Vega, 57**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 21320 y el municipio (El Cerro de Andévalo) se publican tal cual.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **676 62 07 06**, y por su prefijo es un **móvil**: se publica como **+34 676 62 07 06** y el enlace de llamada es `tel:+34676620706`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **de lunes a viernes de 6:00 a 22:30**, el **sábado de 6:00 a 16:30** y **cierra los domingos**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 6:00 – 22:30                   |
| Martes    | 6:00 – 22:30                   |
| Miércoles | 6:00 – 22:30                   |
| Jueves    | 6:00 – 22:30                   |
| Viernes   | 6:00 – 22:30                   |
| Sábado    | 6:00 – 16:30                   |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **Domingo cerrado** (`shifts: []`, sin especificación de apertura en el JSON-LD); el resto de días generan su propia entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y las dos figuran como disponibles: el **acceso** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra (tampoco aparcamiento ni aseo adaptados).

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (4,6 / 5 con 222 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps, como en las webs `restaurante-alentejo` y `restaurante-el-portichuelo`.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs meson-san-benito   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis verticales (01, 05, 06, 08, 09 y 10), dos apaisadas (03 y 07) y dos panorámicas (02 y 04).
- El manifiesto de la descarga **atribuye las diez al propio local** (`author`: «Meson san Benito»), así que **cada foto lleva su pie**, `Foto de Meson san Benito`, con el estilo `.cocina-item figcaption` heredado de la plantilla.
- El collage de portada usa la panorámica **02** (4080 × 1836) arriba y las verticales **01** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs meson-san-benito
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de lunes a viernes de 6:00 a 22:30, sábado hasta las 16:30 y domingo cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `meson-san-benito.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
