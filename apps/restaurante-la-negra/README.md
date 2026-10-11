# Restaurante La Negra

Web informativa de **Restaurante La Negra**, restaurante andaluz en la **Avenida de Portugal, 10 · 21530 Tharsis (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                              |
| ----------------------- | -------------------------------------------- |
| Nombre                  | Restaurante La Negra                         |
| Dirección               | Av. de Portugal, 10 · 21530 Tharsis, Huelva  |
| Categoría de Google     | Restaurante andaluz                          |
| Valoración              | 4,4 sobre 5 con 339 reseñas                  |
| Teléfono                | 636 48 14 46 (móvil)                         |
| Horario                 | Publicado (ver abajo)                        |
| Coordenadas             | 37.60016, -7.12398                           |
| Identificador del lugar | `ChIJjV71QZtSEA0R1X4aRm-MmIY`                |
| Identificador de canal  | `/g/11ysklx2w`                               |
| Feature id              | `0xd10529b41f55e8d:0x86988c6f461a7ed5`       |

El número de reseñas se escribe **«339 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. de Portugal, 10»). En la web se desarrolla a **Avenida de Portugal, 10**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 21530 y el municipio (Tharsis) se publican tal cual.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante andaluz». Por eso `category` y `categories` la recogen y el JSON-LD declara `servesCuisine: ['Cocina andaluza']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **636 48 14 46**, y por su prefijo es un **móvil**: se publica como **+34 636 48 14 46** y el enlace de llamada es `tel:+34636481446`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **todos los días, sin ningún día de cierre**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 6:30 – 18:00                   |
| Martes    | 6:30 – 18:00                   |
| Miércoles | 6:30 – 18:00                   |
| Jueves    | 6:30 – 18:00                   |
| Viernes   | 6:30 – 18:00                   |
| Sábado    | 7:00 – 19:00                   |
| Domingo   | 8:00 – 18:00                   |

Detalles que se trasladan tal cual a la web:

- **Sin ningún día de cierre**: los siete días generan su propia entrada en `openingHoursSpecification` (**7 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aparcamiento** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra (tampoco aseo adaptado).

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (4,4 / 5 con 339 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps, como en las webs `restaurante-alentejo` y `restaurante-el-portichuelo`.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-negra   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco verticales (04, 06, 07, 09 y 10), tres apaisadas (01, 05 y 08), una panorámica (03) y una vista cuadrada (02).
- El manifiesto de la descarga **atribuye las diez al propio local** (`author`: «Restaurante La Negra»), así que **cada foto lleva su pie**, `Foto de Restaurante La Negra`, con el estilo `.cocina-item figcaption` heredado de la plantilla.
- El collage de portada usa la panorámica **03** (9488 × 4384) arriba y la vertical **04** con la apaisada **08** (16:9) en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica **03** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-negra
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de lunes a viernes de 6:30 a 18:00, sábado de 7:00 a 19:00 y domingo de 8:00 a 18:00) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-la-negra.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
