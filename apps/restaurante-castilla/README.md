# Restaurante Castilla

Web informativa de **Restaurante Castilla**, restaurante, bar y cafetería en la **Calle de la Mata, 6 · 13004 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante Castilla                     |
| Dirección               | C. de la Mata, 6 · 13004 Ciudad Real     |
| Categorías de Google    | Restaurante, Bar y Cafetería             |
| Valoración              | 4,3 sobre 5 con 715 reseñas              |
| Teléfono                | 926 22 53 66 (fijo)                      |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9854357, -3.9222505                   |
| Plus code               | X3PH+53 Ciudad Real                      |
| Identificador del lugar | `ChIJP11HvEDDaw0RlEWAqEJKxEQ`            |
| Identificador de canal  | `/g/11b61pt_cd`                          |
| Feature id              | `0xd6bc340bc475d3f:0x44c44a42a8804594`   |

El número de reseñas se escribe **«715 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. de la Mata, 6»). En la web se desarrolla a **Calle de la Mata, 6**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 13004 y el municipio (Ciudad Real) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **tres categorías**: «Restaurante», «Bar» y «Cafetería». Ninguna nombra un tipo de cocina concreto, así que **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **926 22 53 66**, y por su prefijo es un **fijo**: se publica como **+34 926 22 53 66** y el enlace de llamada es `tel:+34926225366`.

**Distintivo.** Google no muestra ninguna etiqueta junto al nombre en esta ficha, así que no hay `distintivo` y la portada no lo menciona.

## Sin descripción del titular

El campo de descripción de la ficha devuelve **solo la palabra «Abierto»** (el estado de apertura), no un texto escrito por el negocio. Como un estado suelto no es una descripción y podría ser un artefacto de la propia ficha, **no se publica**: `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs. Es la primera ficha del repositorio en la que el campo de descripción no trae un texto real.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 8:00 – 0:30                    |
| Miércoles | 8:00 – 0:30                    |
| Jueves    | 8:00 – 0:30                    |
| Viernes   | 8:00 – 0:30                    |
| Sábado    | 9:30 – 0:30                    |
| Domingo   | 10:00 – 0:30                   |

Detalles que se trasladan tal cual a la web:

- **El cierre es a las 0:30**, media hora después de medianoche. En los datos estructurados se escribe como **`00:30`**.
- Abre **de martes a viernes desde las 8:00**, el sábado desde las 9:30 y el domingo desde las 10:00; **el lunes cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: los seis días abiertos generan su propia entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una sola entrada**, y figura como disponible: el **acceso** para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la tercera abrevia «tb»). Las tres son de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Raciones exquisitas, la oreja buenísima.» (5/5)
2. «Buen sitio, buen ambiente, buenos precios y buenos camareros.» (5/5)
3. «La merluza con una ración de ensalada tb muy bien, a la romana, en su punto.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-castilla   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-castilla
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco verticales (02, 03, 05, 06 y 10) y cinco apaisadas (01, 04, 07, 08 y 09).
- El manifiesto de la descarga **atribuye las diez al propio negocio** (`author` = «Restaurante Castilla»), así que cada foto de la galería lleva su pie «Foto de Restaurante Castilla».
- El collage de portada usa una apaisada, la **01**, arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **5,2 MB a 2,0 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-restaurante-castilla-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada, la **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-castilla
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da cierre a las 0:30 y cierra los lunes) y ajustar `hours` si procede.
3. **Comprobar la descripción del titular**: la ficha solo devuelve «Abierto»; si el local tiene una descripción real, añadirla a `src/data/site.ts` como `descripcionLocal` y reponer su bloque en la portada.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
6. Si el dominio final no es `restaurante-castilla.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
