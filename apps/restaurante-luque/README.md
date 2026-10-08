# Restaurante Luque

Web informativa de **Restaurante Luque**, bar restaurante en la **Calle Cádiz, 7 · 23009 Jaén**, con teléfono 603 95 46 38.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Restaurante Luque          |
| Dirección               | C. Cádiz, 7 · 23009 Jaén   |
| Teléfono                | +34 603 95 46 38           |
| Categorías de Google    | Bar restaurante, Restaurante |
| Valoración              | 4,2 sobre 5 con 215 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.8015402, -3.7483598     |
| Plus code               | R722+JM Jaén               |
| Identificador del lugar | `ChIJC6XosijWbQ0RDZXvIUsp6Ls` |
| Identificador de canal  | `/g/11c48r_7g9`            |
| Feature id              | `0xd6dd628b2e8a50b:0xbbe8294b21ef950d` |
| Distintivo de la ficha  | Brunch                     |

El número de reseñas se escribe **«215 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Cádiz, 7»). En la web se desarrolla a **Calle Cádiz, 7**, como en el resto del repositorio; el código postal 23009 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías** —«Bar restaurante» y «Restaurante»— y ninguna declara un tipo de cocina concreto. `category` y `categories` recogen las dos en su orden, y **no se añade `servesCuisine`** a los datos estructurados porque ninguna de ellas es una cocina. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 12:00 – 23:30 (ver nota)        |
| Martes    | Cerrado                         |
| Miércoles | 12:00 – 23:30                   |
| Jueves    | 12:00 – 23:30                   |
| Viernes   | 12:00 – 23:30                   |
| Sábado    | 12:00 – 23:30                   |
| Domingo   | 12:00 – 24:00                   |

Detalles que se trasladan tal cual a la web:

- **Horario continuo de 12:00 a 23:30**, sin turnos separados de mediodía y noche.
- **El domingo alarga hasta las 24:00**, que en los datos estructurados se escribe como `closes: '00:00'`.
- **El martes cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el martes cerrado no genera ninguna entrada (**6 especificaciones** en total, una por cada día abierto).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto.

**Nota sobre el lunes y el domingo.** La ficha devuelve estas dos jornadas con valores internos incoherentes:

- El **lunes** llega con una entrada mal formada: dos turnos, `«0:00–11:30»` y `«12:00–23:30»`, donde el inicio y el fin que acompañan al primer turno son **12:00 y 23:30** (el mismo rango que repite la segunda entrada y que el resto de días abiertos). Aquí se recoge **12:00 – 23:30** y no se inventa el tramo «0:00–11:30», que además choca con su propio dato estructurado.
- El **domingo** muestra «12:00–24:00», pero el valor interno de cierre es «11:30». Se reproduce el **texto que ve el visitante en la ficha** (12:00 – 24:00).

Conviene **confirmar el horario con el titular** antes de dar la web por definitiva.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (603 95 46 38), y así se publica: `phoneHref` usa `tel:+34603954638`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 4 sobre 5 —una de ellas crítica con un plato— y una de 5 sobre 5:

1. «Buen sitio apartado del mundanal ruido para tomar una cerveza, raciones o cena» (4/5)
2. «Muy buen trato y muy buena cocina y buen ambiente me gusta mucho y lo recomiendo» (5/5)
3. «El solomillo al jerez que nos sirvieron nos supo demasiado a vino y saladillo.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-luque   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-luque
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete apaisadas (01, 02, 03, 06, 07, 08 y 09) y tres verticales (04, 05 y 10).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante Luque»), así que cada foto de la galería lleva su pie «Foto de Restaurante Luque».
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja a **1,9 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-luque
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da 12:00–23:30 continuo con el domingo hasta las 24:00 y el martes cerrado, y las jornadas del lunes y el domingo llegan con valores internos incoherentes) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-luque.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
