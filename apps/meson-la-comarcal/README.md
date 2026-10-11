# Mesón La Comarcal

Web informativa de **Mesón La Comarcal**, restaurante en la **Calle Manganilla, 13 · 21550 Puebla de Guzmán (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                  |
| ----------------------- | ------------------------------------------------ |
| Nombre                  | Mesón La Comarcal                                |
| Dirección               | C. Manganilla, 13 · 21550 Puebla de Guzmán, Huelva |
| Categoría de Google     | Restaurante                                      |
| Valoración              | 4,5 sobre 5 con 200 reseñas                      |
| Teléfono                | 626 08 56 48 (móvil)                             |
| Horario                 | Publicado (ver abajo)                            |
| Coordenadas             | 37.6138476, -7.2506928                           |
| Identificador del lugar | `ChIJi_Jxk25QEA0RDNf9lFcUUXk`                    |
| Identificador de canal  | `/g/11g5_dzs31`                                  |
| Feature id              | `0xd10506e9371f28b:0x7951145794fdd70c`           |

El número de reseñas se escribe **«200 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Manganilla, 13»). En la web se desarrolla a **Calle Manganilla, 13**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 21550 y el municipio (Puebla de Guzmán) se publican tal cual.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **626 08 56 48**, y por su prefijo es un **móvil**: se publica como **+34 626 08 56 48** y el enlace de llamada es `tel:+34626085648`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **de lunes a jueves de 9:00 a 16:00**, el **viernes y el sábado de 9:00 a 23:00** y **cierra los domingos**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 9:00 – 16:00                   |
| Martes    | 9:00 – 16:00                   |
| Miércoles | 9:00 – 16:00                   |
| Jueves    | 9:00 – 16:00                   |
| Viernes   | 9:00 – 23:00                   |
| Sábado    | 9:00 – 23:00                   |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **Domingo cerrado** (`shifts: []`, sin especificación de apertura en el JSON-LD); el resto de días generan su propia entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra (tampoco aparcamiento adaptado).

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (4,5 / 5 con 200 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps, como en las webs `restaurante-alentejo` y `restaurante-el-portichuelo`.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs meson-la-comarcal   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: tres verticales (03, 04 y 09), seis apaisadas (01, 05, 06, 07, 08 y 10) y una panorámica (02, de solo 640 × 352).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `solitaire` y `restaurante-podenco`.
- El collage de portada usa la apaisada **07** (4032 × 2268, 16:9 nativo) arriba y las verticales **03** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La panorámica **02** se reserva para la galería: con 640 × 352 perdería demasiada calidad en el hueco ancho. La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **07** de la galería, que ya viene en 16:9.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs meson-la-comarcal
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de lunes a jueves de 9:00 a 16:00, viernes y sábado hasta las 23:00 y domingo cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `meson-la-comarcal.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
