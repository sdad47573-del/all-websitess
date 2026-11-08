# El Rincon Burguer

Web informativa de **El Rincon Burguer**, cafetería, hamburguesería y pizzería en el **Paseo Constitución, 9 · 21540 Villanueva de los Castillejos (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | El Rincon Burguer (sin tilde en la ficha)            |
| Dirección               | PASEO CONSTITUCION, 9 · 21540 Villanueva de los Castillejos, Huelva |
| Categorías de Google    | Cafetería, Restaurante especializado en pollo, Hamburguesería, Heladería, Pizzería |
| Valoración              | 5 sobre 5 con 11 reseñas                             |
| Teléfono                | 959 77 04 08 (fijo)                                  |
| Horario                 | Publicado, en dos turnos (ver abajo)                 |
| Coordenadas             | 37.5004598, -7.2727658                               |
| Identificador del lugar | `ChIJT78pUK1FEA0RBQGCdXX_WVM`                        |
| Identificador de canal  | `/g/11wfhsvxpb`                                      |
| Feature id              | `0xd1045ad5029bf4f:0x5359ff7575820105`               |

El número de reseñas se escribe **«11 reseñas»**: sale de `toLocaleString('es-ES')` en el código, sin escribirlo a mano.

**Nombre tal cual.** La ficha escribe «El Rincon Burguer», sin tilde. En la web se reproduce así; el acortado de cabecera y mapa es «El Rincón Burguer».

**Dirección normalizada.** Google publica la dirección en mayúsculas y sin acentuar («PASEO CONSTITUCION, 9»). En la web se escribe **Paseo Constitución, 9**, como el resto de normalizaciones del repositorio (donde «C.» pasa a «Calle»); el código postal 21540 y el municipio (Villanueva de los Castillejos) se publican tal cual.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categorías y `servesCuisine`.** La ficha publica **cinco categorías**, en este orden: «Cafetería», «Restaurante especializado en pollo», «Hamburguesería», «Heladería» y «Pizzería». Por eso `category` recoge la primera y `categories` las cinco, y el JSON-LD declara `servesCuisine: ['Cafetería', 'Pollo', 'Hamburguesas', 'Helados', 'Pizzas']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **959 77 04 08**, y por su prefijo es un **fijo**: se publica como **+34 959 77 04 08** y el enlace de llamada es `tel:+34959770408`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local **cierra de lunes a miércoles** y abre **de jueves a domingo en dos turnos**, mediodía y noche:

| Día       | Horario publicado por la ficha      |
| --------- | ----------------------------------- |
| Lunes     | Cerrado                             |
| Martes    | Cerrado                             |
| Miércoles | Cerrado                             |
| Jueves    | 9:00 – 12:00 · 20:00 – 23:30       |
| Viernes   | 9:00 – 14:00 · 20:00 – 2:00        |
| Sábado    | 12:00 – 14:00 · 20:00 – 2:00       |
| Domingo   | 12:00 – 14:00 · 20:00 – 23:30      |

Detalles que se trasladan tal cual a la web:

- Los días cerrados llevan `shifts: []`, sin especificación de apertura en el JSON-LD; los días abiertos generan una entrada por turno (**8 especificaciones** en total).
- La ficha no aclara si las 2:00 del viernes y el sábado son de la madrugada siguiente, así que la web lo reproduce sin interpretarlo: en los datos estructurados el cierre se declara como `02:00`, como lo lee Google en el resto de fichas del repositorio.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y las dos figuran como disponibles: el **acceso** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (5 / 5 con 11 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs el-rincon-burguer   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **ocho fotografías** (las únicas que devuelve la portada de la ficha): siete verticales (02–08) y una cuadrada (01).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**.
- El collage de portada usa la cuadrada **01** arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5): la ficha no trae ninguna apaisada. La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la cuadrada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs el-rincon-burguer
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de jueves a domingo en dos turnos con lunes a miércoles cerrado) y ajustar `hours` si procede. Aclarar también si las 2:00 son de la madrugada siguiente.
3. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `el-rincon-burguer.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
