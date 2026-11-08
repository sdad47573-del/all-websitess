# Gastro Molí

Web informativa de **Gastro Molí**, restaurante en la **Av. de Benidorm, 13 · 03509 Finestrat** (Alicante), con teléfono 865 75 19 96.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Gastro Molí                            |
| Dirección               | Av. de Benidorm, 13 · 03509 Finestrat  |
| Teléfono                | +34 865 75 19 96                       |
| Categoría de Google     | Restaurante                            |
| Distintivo              | Brunch                                 |
| Valoración              | 4,4 sobre 5 con 525 reseñas            |
| Horario                 | Sábado 10:00–23:00, domingo 10:00–18:00 y lunes 9:30–19:00; cerrado de martes a viernes |
| Coordenadas             | 38.5692906, -0.2100694                 |
| Plus code               | HQ9Q+PX Finestrat                      |
| Identificador del lugar | `ChIJMXUsDAocYg0RK6fVxCNR6ao`          |
| Identificador de canal  | `/g/11zbqqhf5`                         |
| Feature id              | `0xd621c0a0c2c7531:0xaae95123c4d5a72b` |

El número de reseñas se escribe **«525 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Primera ficha del repositorio en Finestrat.** Las demás webs del lote son de Benidorm y de otras localidades; esta es la única que publica `Finestrat` como municipio.

**Sin `servesCuisine` y sin descripción del titular.** Google publica **una sola categoría genérica**, «Restaurante», **sin cocina declarada**, y la ficha **no publica descripción del titular** (el campo llega vacío: `desc: null`). Así que **no hay `servesCuisine`** y la portada no reproduce ningún texto del local más allá de sus reseñas: no se inventa una cocina que la ficha no declara. Es el mismo criterio que en `bar-pallares` y `restaurante-sur`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Lo único que se sabe de la comida** es lo que dicen las **tres reseñas que destaca Google**, y eso es justo lo que cuenta la portada, citándolas. La web **no deduce** de ahí ninguna etiqueta de cocina para los datos estructurados.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 9:30 – 19:00                   |
| Martes    | Cerrado                        |
| Miércoles | Cerrado                        |
| Jueves    | Cerrado                        |
| Viernes   | Cerrado                        |
| Sábado    | 10:00 – 23:00                  |
| Domingo   | 10:00 – 18:00                  |

Detalles que se trasladan tal cual a la web:

- **Solo tres días abiertos**, y **cada uno con un tramo distinto**: el lunes cierra a las 19:00, el sábado a las 23:00 y el domingo a las 18:00.
- **Cuatro días cerrados** (martes, miércoles, jueves y viernes), que en la tabla se marcan con `is-closed`. En los datos estructurados esos cuatro días **no generan ninguna especificación**: `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts` y sus `shifts` están vacíos, así que salen **tres especificaciones**.
- La respuesta trae junto al lunes el aviso **«Horario de Fiesta Nacional de España»**: significa que el tramo que la ficha da para ese lunes (12 de octubre, festivo) es el horario de festivo. Se recoge en la constante `avisoFestivo` y se explica en la sección de horario, **sin cambiar la tabla ni los datos estructurados**.

### El distintivo «Brunch»

Google muestra junto al nombre la etiqueta **«Brunch»**. Se recoge como dato, aparece en la franja de la portada y tiene su propia pregunta frecuente, sin ampliarlo ni interpretarlo.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica el aparcamiento adaptado, que sí aparece en otras fichas del lote (Nueva vida, Ulia La Nucía o Restaurante Rays, entre otras).

### El teléfono

Es un **865** (prefijo de la Comunidad Valenciana), y así se publica: `phoneHref` usa `tel:+34865751996`. La ficha no publica ningún otro número.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la tercera mantiene sus puntos suspensivos y sus dos signos de admiración). **Dos son de 5 sobre 5 y una de 1 sobre 5**:

1. «Es una paella con un arroz suculento y bien surtida de marisco.» (5/5)
2. «Pedimos pulpo, croquetas, ensalada de ventresca y arroz a banda.» (1/5)
3. «Me sirvieron un atun a la brasa con una salsa.. riquísimo!!» (5/5)

La segunda **es una reseña crítica** y se publica **tal cual**, sin recortarla ni suavizarla, con su 1 sobre 5 visible en el pie de la cita: la portada la marca con el estilo `.quote.is-low`, el mismo que usa el resto del repositorio para las reseñas de menos de 3 sobre 5 (`restaurante-nepali` también destaca una de 1 sobre 5 y la pinta así). Las otras dos son de 5 sobre 5, así que el aviso de que hay una crítica se limita a esa cita.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs gastro-moli   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 gastro-moli
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías distintas** (los diez ficheros tienen MD5 distinto, sin duplicados): **tres apaisadas** (05, 09 y 10; la 09 es la única en 16/9 y las otras dos en 4/3) y **siete verticales** (01, 02, 03, 04, 06, 07 y 08; cinco de proporción 0,75 y las otras dos —02 y 08— de móvil vertical, 0,56).
- El manifiesto atribuye **las diez al propio local** (`author`: «Gastro Molí»), así que **cada foto lleva su pie**, `Foto de Gastro Molí`, con el estilo `.cocina-item figcaption` que se añadió a esta hoja de estilos.
- El collage de portada usa la apaisada **09**, la única que ya viene en **16/9 nativo** (4624 × 2604), y las verticales **01** y **04** en los dos huecos inferiores, que encajan en la proporción 4/5 del repositorio. La galería va en tres columnas.
- Tras optimizar (lado máximo 1600 px), las diez fotos bajan de **5,9 MB a 2,1 MB** (−65 %); los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630, ≈112 KiB) es un recorte centrado de la apaisada **09**, la única de la ficha que ya está en la proporción exacta de la imagen de compartir.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs gastro-moli
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario**, que es el punto delicado de esta ficha: tres días abiertos con tramos distintos y cuatro días cerrados. Conviene preguntar además por los festivos, porque la ficha ya avisa del 12 de octubre.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha las atribuye al local, pero no las describe.
4. Si el dominio final no es `gastro-moli.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
