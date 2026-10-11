# Restaurante El Portichuelo

Web informativa de **Restaurante El Portichuelo**, restaurante especializado en tapas en la **Carretera San Bartolomé, S/N · 21520 Alosno (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                              |
| ----------------------- | -------------------------------------------- |
| Nombre                  | Restaurante El Portichuelo                   |
| Dirección               | Carretera San Bartolomé, S/N · 21520 Alosno, Huelva |
| Categoría de Google     | Restaurante especializado en tapas           |
| Valoración              | 4,6 sobre 5 con 1.433 reseñas                |
| Teléfono                | 959 39 62 85 (fijo)                          |
| Horario                 | Publicado (ver abajo)                        |
| Coordenadas             | 37.5485647, -7.1209035                       |
| Plus code               | GVXH+CJ Alosno (`8C9JGVXH+CJ`)               |
| Identificador del lugar | `ChIJB8dZbSlNEA0RpXth8UEBg2A`                |
| Identificador de canal  | `/g/1thsbm2b`                                |
| Feature id              | `0xd104d296d59c707:0x60830141f1617ba5`       |

El número de reseñas se escribe **«1.433 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante especializado en tapas». Por eso `category` y `categories` la recogen y el JSON-LD declara `servesCuisine: ['Tapas']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **959 39 62 85**, y por su prefijo es un **fijo**: se publica como **+34 959 39 62 85** y el enlace de llamada es `tel:+34959396285`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **de martes a domingo de 7:00 a 17:00** y **cierra los lunes**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 7:00 – 17:00                   |
| Miércoles | 7:00 – 17:00                   |
| Jueves    | 7:00 – 17:00                   |
| Viernes   | 7:00 – 17:00                   |
| Sábado    | 7:00 – 17:00                   |
| Domingo   | 7:00 – 17:00                   |

Detalles que se trasladan tal cual a la web:

- **Lunes cerrado** (`shifts: []`, sin especificación de apertura en el JSON-LD); el resto de días generan su propia entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y las cuatro figuran como disponibles: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (4,6 / 5 con 1.433 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps, como en la web `restaurante-alentejo`.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-portichuelo   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis verticales (02, 05, 06, 07, 08 y 09) y cuatro apaisadas (01, 03, 04 y 10).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `solitaire` y `restaurante-podenco`.
- El collage de portada usa la apaisada **01** (16:9) arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-portichuelo
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de martes a domingo de 7:00 a 17:00 con lunes cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-el-portichuelo.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
