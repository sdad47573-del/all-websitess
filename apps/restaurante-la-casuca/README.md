# Restaurante La Casuca

Web informativa de **Restaurante La Casuca**, parrilla y restaurante mediterráneo en la **Calle Palma, 10 · 13004 Ciudad Real**, con teléfono 926 25 54 80.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante La Casuca                  |
| Dirección               | C. Palma, 10 (planta G) · 13004 Ciudad Real |
| Teléfono                | +34 926 25 54 80                       |
| Categorías de Google    | Parrilla, Restaurante mediterráneo     |
| Valoración              | 4,6 sobre 5 con 601 reseñas            |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.9838046, -3.9254228                 |
| Plus code               | X3MF+GR Ciudad Real                    |
| Identificador del lugar | `ChIJZyvajD_Daw0RG5wPN1RT_OI`          |
| Identificador de canal  | `/g/11b7gp28fy`                        |
| Feature id              | `0xd6bc33f8cda2b67:0xe2fc5354370f9c1b` |

El número de reseñas se escribe **«601 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Palma, 10») y añade el detalle **«Planta G»**. En la web se desarrolla a **Calle Palma, 10, planta G**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle» y se conservan detalles como «local 1» o «bajo»); el código postal 13004 y el municipio (Ciudad Real) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías** en su orden: «Parrilla» (la principal) y «Restaurante mediterráneo». `category` y `categories` las recogen y `servesCuisine` las traduce a `['Parrilla', 'Cocina mediterránea']`, sin añadir ninguna más. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin distintivo ni descripción del titular.** Google no muestra ninguna etiqueta junto al nombre en esta ficha y la descripción del titular viene vacía, así que no hay `distintivo` ni `descripcionLocal`, y la portada no los menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha      |
| --------- | ----------------------------------- |
| Lunes     | 13:30 – 16:00 · 21:00 – 23:00       |
| Martes    | 13:30 – 16:00                       |
| Miércoles | 13:30 – 16:00 · 21:00 – 23:00       |
| Jueves    | 13:30 – 16:00 · 21:00 – 23:00       |
| Viernes   | 13:30 – 16:00 · 21:00 – 23:00       |
| Sábado    | 13:30 – 16:00 · 21:00 – 23:00       |
| Domingo   | Cerrado                             |

Detalles que se trasladan tal cual a la web:

- **Dos turnos de lunes a sábado**: mediodía de **13:30 a 16:00** y noche de **21:00 a 23:00**.
- **El martes abre solo al mediodía** (13:30 – 16:00), sin turno de noche.
- **El domingo cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los días de dos turnos generan dos entradas, el martes una y el domingo cerrado ninguna (**11 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y el **aseo** adaptados para sillas de ruedas. No publica ninguna otra (esta ficha **no** incluye los asientos adaptados, que sí aparecen en otras del repositorio).

### El teléfono

Es un **fijo** (926 25 54 80), y así se publica: `phoneHref` usa `tel:+34926255480`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Raciones variadas y muy ricas, elaboradas con productos de primera calidad.» (5/5)
2. «Buena relación calidad-precio, buena atención y sabores deliciosos.» (5/5)
3. «Pedimos el plato típico; un cocido y de postre tarta de queso casera.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-casuca   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-casuca
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 05, 07 y 10), cuatro verticales (02, 04, 08 y 09) y dos casi cuadradas que el script llamó `vista` (la 03 y la 06).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante La Casuca»), así que cada foto de la galería lleva su pie «Foto de Restaurante La Casuca».
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,1 MB a 1,7 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-casuca
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da dos turnos de lunes a sábado con el martes solo al mediodía y el domingo cerrado) y ajustar `hours` si procede.
3. **Comprobar la dirección y el detalle «Planta G»** que publica la ficha, por si conviene desarrollarlo de otra forma.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
6. Si el dominio final no es `restaurante-la-casuca.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
