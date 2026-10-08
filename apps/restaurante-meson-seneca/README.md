# Restaurante Mesón Séneca

Web informativa de **Restaurante Mesón Séneca**, restaurante en la **Avenida de Andalucía, 27 · 23005 Jaén**, con teléfono 953 25 07 44.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Restaurante Mesón Séneca   |
| Dirección               | Av. de Andalucía, 27 · 23005 Jaén |
| Teléfono                | +34 953 25 07 44           |
| Categorías de Google    | Restaurante                |
| Valoración              | 4 sobre 5 con 675 reseñas  |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.777223, -3.79427        |
| Plus code               | Q6G4+V7 Jaén               |
| Identificador del lugar | `ChIJhzWf1Q_XbQ0RS1NwfpbdQew` |
| Identificador de canal  | `/g/1q5gqgh_0`             |
| Feature id              | `0xd6dd70fd59f3587:0xec41dd967e70534b` |
| Distintivo de la ficha  | Brunch                     |

El número de reseñas se escribe **«675 reseñas»** y la valoración con coma decimal cuando procede; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. Aquí la valoración es un **4 entero**, así que se muestra «4 sobre 5», sin decimales.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. de Andalucía, 27»). En la web se desarrolla a **Avenida de Andalucía, 27**, como en el resto del repositorio; el código postal 23005 y el municipio (Jaén) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que no declara ningún tipo de cocina. `category` y `categories` llevan ese texto y **no se añade `servesCuisine`** a los datos estructurados (igual que en `restaurante-caseria-de-cristobal` y `jimenez-restaurante`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | Cerrado                         |
| Martes    | 12:00 – 16:30 · 20:00 – 24:00   |
| Miércoles | 12:00 – 16:30 · 20:00 – 24:00   |
| Jueves    | 12:00 – 16:30 · 20:00 – 24:00   |
| Viernes   | 12:00 – 16:30 · 20:00 – 24:00   |
| Sábado    | 12:00 – 16:30 · 20:00 – 24:00   |
| Domingo   | 12:00 – 17:00                   |

Detalles que se trasladan tal cual a la web:

- **De martes a sábado hay dos turnos**, mediodía y noche, y el de noche termina a las **24:00**, que en los datos estructurados se escribe como `closes: '00:00'`.
- **El domingo abre un solo turno**, de 12:00 a 17:00, y **el lunes cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada (**11 especificaciones** en total: dos por cada día de martes a sábado y una del domingo).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**: el aseo y los asientos adaptados para sillas de ruedas están **disponibles**, y el **aparcamiento adaptado** aparece marcado como **no disponible**. No publica ni el acceso ni ninguna otra.

### El teléfono

Es un **fijo** (953 25 07 44), y así se publica: `phoneHref` usa `tel:+34953250744`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (incluida la falta de tilde de la segunda). Una es de 1 sobre 5, otra de 4 y otra de 5, y se reproducen tal cual, también la negativa:

1. «Raciones abundantes, cerveza fría y tapas adecuadas.» (5/5)
2. «Buen trato, ambiente familiar con buena comida, economico.» (4/5)
3. «Las patatas fritas saben a calamares, boquerones, rosada, aceite requemado...» (1/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-meson-seneca   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-meson-seneca
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga **no atribuye ninguna a un autor con nombre** (`author` vacío), así que las fotos **no llevan pie**.
- Cinco apaisadas y cinco verticales. El collage de portada usa la apaisada 01 arriba y las verticales 02 y 06 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total bajó de **5,4 MB a 1,5 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-meson-seneca
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da dos turnos de martes a sábado y mediodía el domingo) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe ni las atribuye.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-meson-seneca.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
