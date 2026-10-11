# Bar Seoane

Web informativa de **Bar Seoane**, bar restaurante en **Lugar Urbanización las Lomas, 6D · 21300 Calañas (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                  |
| ----------------------- | ------------------------------------------------ |
| Nombre                  | Bar Seoane                                       |
| Dirección               | Lugar Urbanizacion las Lomas, 6D · 21300 Calañas, Huelva |
| Categorías de Google    | Restaurante, Bar                                 |
| Valoración              | 4,6 sobre 5 con 208 reseñas                      |
| Teléfono                | 626 07 42 40 (móvil)                             |
| Horario                 | Publicado (ver abajo)                            |
| Coordenadas             | 37.6513889, -6.8816667                           |
| Identificador del lugar | `ChIJPYQCbqqlEQ0RUbw_36bsbSA`                    |
| Identificador de canal  | `/g/11c6w08nd2`                                  |
| Feature id              | `0xd11a5aa6e02843d:0x206deca6df3fbc51`           |

El número de reseñas se escribe **«208 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección con tilde.** Google publica la dirección sin acentuar («Lugar Urbanizacion las Lomas, 6D»). En la web se escribe **Lugar Urbanización las Lomas, 6D**, como el resto de normalizaciones ortográficas del repositorio (donde «C.» pasa a «Calle»); el código postal 21300 y el municipio (Calañas) se publican tal cual.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías**, en este orden: «Restaurante» y «Bar». Por eso `category` recoge la primera y `categories` las dos, pero **no hay `servesCuisine`**: ninguna nombra un tipo de cocina concreto. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **626 07 42 40**, y por su prefijo es un **móvil**: se publica como **+34 626 07 42 40** y el enlace de llamada es `tel:+34626074240`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **de lunes a sábado de 12:00 a 24:00** y **cierra los domingos**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 12:00 – 24:00                  |
| Martes    | 12:00 – 24:00                  |
| Miércoles | 12:00 – 24:00                  |
| Jueves    | 12:00 – 24:00                  |
| Viernes   | 12:00 – 24:00                  |
| Sábado    | 12:00 – 24:00                  |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **Domingo cerrado** (`shifts: []`, sin especificación de apertura en el JSON-LD); el resto de días generan su propia entrada (**6 especificaciones** en total).
- El cierre a las 24:00 se escribe como 00:00 en los datos estructurados, como en la web `restaurante-el-paso`.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra (tampoco aparcamiento adaptado).

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (4,6 / 5 con 208 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps, como en las webs `restaurante-alentejo` y `restaurante-el-portichuelo`.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-seoane   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro verticales (01, 03, 04 y 06) y seis apaisadas de 16:9 (02, 05, 07, 08, 09 y 10).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `solitaire` y `restaurante-podenco`.
- El collage de portada usa la apaisada **02** (16:9 nativo) arriba y las verticales **01** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-seoane
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de lunes a sábado de 12:00 a 24:00 con domingo cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `bar-seoane.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
