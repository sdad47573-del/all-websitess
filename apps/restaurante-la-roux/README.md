# Restaurante La Roux

Web informativa de **Restaurante La Roux**, restaurante de cocina castellana en la **Calle Altagracia, 50 · 13003 Ciudad Real**, con teléfono 926 25 68 53.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                     |
| ----------------------- | ----------------------------------- |
| Nombre                  | Restaurante La Roux                 |
| Dirección               | C. Altagracia, 50 · 13003 Ciudad Real |
| Teléfono                | +34 926 25 68 53                    |
| Categorías de Google    | Restaurante de cocina castellana    |
| Valoración              | 4,5 sobre 5 con 573 reseñas         |
| Horario                 | Publicado (ver abajo)               |
| Coordenadas             | 38.9940025, -3.9272418              |
| Plus code               | X3VF+J4 Ciudad Real                 |
| Identificador del lugar | `ChIJ52c_XXjDaw0RTD5Bwo0zgL0`       |
| Identificador de canal  | `/g/11t4bc8wrr`                     |
| Feature id              | `0xd6bc3785d3f67e7:0xbd80338dc2413e4c` |
| Distintivo de la ficha  | Brunch                              |

El número de reseñas se escribe **«573 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Altagracia, 50»). En la web se desarrolla a **Calle Altagracia, 50**, como en el resto del repositorio; el código postal 13003 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante de cocina castellana», que sí declara un tipo de cocina. `category` y `categories` llevan ese texto y `servesCuisine` lo traduce a `['Cocina castellana']`, como en `meson-antonios` con «Restaurante de cocina española». El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La descripción del titular de la ficha viene vacía, así que no hay `descripcionLocal` y la portada no la menciona.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 8:00 – 24:00                   |
| Miércoles | 8:00 – 24:00                   |
| Jueves    | 8:00 – 24:00                   |
| Viernes   | 8:00 – 24:00                   |
| Sábado    | 10:00 – 24:00                  |
| Domingo   | 10:00 – 16:00                  |

Detalles que se trasladan tal cual a la web:

- **Horario continuo de 8:00 a 24:00 de martes a viernes**, sin turnos separados de mediodía y noche.
- **El sábado empieza a las 10:00** y **el domingo cierra a las 16:00**.
- **El lunes cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada (**6 especificaciones** en total, una por cada día abierto).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **fijo** (926 25 68 53), y así se publica: `phoneHref` usa `tel:+34926256853`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Hamburguesa vegana buenísima y muchas opciones para personas vegetarianas.» (5/5)
2. «No entiendo los malos comentarios, fuimos el otro día y quedamos encantados!» (5/5)
3. «Tarta de queso y tarta de zanahoria como postre, dos cervezas y un agua grande.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-roux   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-roux
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco verticales (01, 02, 04, 08 y 09), cuatro apaisadas (05, 06, 07 y 10) y una panorámica (03).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante La Roux»), así que cada foto de la galería lleva su pie «Foto de Restaurante La Roux».
- El collage de portada usa la panorámica **03** arriba y las verticales **01** y **02** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **3,5 MB a 1,4 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica **03** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-roux
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da 8:00–24:00 de martes a viernes con el sábado desde las 10:00, el domingo de 10:00 a 16:00 y el lunes cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-la-roux.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
