# Bar Pallares

Web informativa de **Bar Pallares**, bar restaurante en la **Calle Langreo, 5 · 03502 Benidorm** (Alicante), con teléfono 965 86 57 65.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Bar Pallares                           |
| Dirección               | C. Langreo, 5 · 03502 Benidorm         |
| Teléfono                | +34 965 86 57 65                       |
| Categoría de Google     | Restaurante                            |
| Distintivo              | Brunch                                 |
| Valoración              | 4,3 sobre 5 con 252 reseñas            |
| Horario                 | 8:00 – 1:00, los siete días            |
| Coordenadas             | 38.532197, -0.1652157                  |
| Plus code               | GRJM+VW Benidorm                       |
| Identificador del lugar | `ChIJ-R1MYyEbYg0RWV3Z8g_vhxA`          |
| Identificador de canal  | `/g/11cmzkwgdw`                        |
| Feature id              | `0xd621b21634c1df9:0x1087ef0ff2d95d59` |

El número de reseñas se escribe **«252 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Langreo, 5»). En la web se desarrolla a **Calle Langreo, 5**, como en el resto del repositorio; el código postal 03502 y el municipio (Benidorm) se publican tal cual.

**Sin `servesCuisine`.** Es el punto delicado de esta ficha: Google publica **una sola categoría genérica**, «Restaurante», **sin cocina declarada**, y la ficha **no publica descripción del titular** (el campo llega vacío). Así que **no hay `servesCuisine`**: no se inventa una cocina que la ficha no declara. Es el mismo criterio que en `restaurante-sur`, donde las categorías eran tipos de establecimiento y no cocinas. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Lo único que se sabe de la comida** es lo que dicen las **tres reseñas que destaca Google**, y eso es justo lo que cuenta la portada, citándolas: tapitas con la bebida y buenas raciones, la sepia, las bravas y los arroces con buena relación precio. La web **no deduce** de ahí ninguna etiqueta de cocina para los datos estructurados.

### El distintivo «Brunch»

Google muestra junto al nombre la etiqueta **«Brunch»**, el distintivo que publica esta ficha. Se recoge como dato, aparece en la franja de la portada y tiene su propia pregunta frecuente, sin ampliarlo ni interpretarlo.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 8:00 – 1:00                    |
| Martes    | 8:00 – 1:00                    |
| Miércoles | 8:00 – 1:00                    |
| Jueves    | 8:00 – 1:00                    |
| Viernes   | 8:00 – 1:00                    |
| Sábado    | 8:00 – 1:00                    |
| Domingo   | 8:00 – 1:00                    |

- **Abre de 8:00 a 1:00 los siete días de la semana**, con **horario continuo**: son unas 17 horas al día, uno de los horarios más largos de las fichas de este lote.
- **No hay ningún día cerrado** (a diferencia de las fichas de Nepalí, J.Manu o Ulia La Nucía, que sí cierran algún día).
- El cierre a la **1:00 es de madrugada**, y en los datos estructurados se escribe como `closes: '01:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: **7 especificaciones**, una por día, porque ningún día queda cerrado.
- La respuesta trae el aviso **«Fiesta Nacional de España: el horario podría ser diferente»** junto al lunes (12 de octubre). Se recoge en el texto de la sección de horario (constante `avisoFestivo`) y **no cambia la tabla**.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. **No publica el aparcamiento adaptado**, que sí aparece en otras fichas del lote (Nepalí, Nueva vida y Ulia La Nucía).

### El teléfono

Es un **fijo** (965 86 57 65), y así se publica: `phoneHref` usa `tel:+34965865765`. La ficha no publica ningún otro número.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera mantiene sus emojis, y la tercera la frase «con buena relación precio», como la escribió quien la firmó). Dos son de 4 sobre 5 y una de 5 sobre 5, así que **ninguna es crítica** y no se usa el estilo `.quote.is-low`:

1. «Te ponen tus tapitas con tu bebida y buenas raciones 👍🏾🍺» (4/5)
2. «La sepia buenísima, las bravas bien.» (5/5)
3. «Muy ricos los arroces y con buena relación precio.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-pallares   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 bar-pallares
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías distintas** (los diez ficheros tienen MD5 distinto, sin duplicados): siete apaisadas (01, 02, 04, 05, 06, 07 y 09; cuatro de ellas en 16/9 y las otras tres en 4/3) y tres verticales (03, 08 y 10, de proporción 0,75).
- El manifiesto de la descarga trae el campo `author` **vacío**: la ficha **no indica quién hizo las fotos**, así que **no hay a quién citar y las fotos van sin pie**.
- El collage de portada usa la apaisada **02**, que ya viene en **16/9 nativo** (4624 × 2608) y por tanto no hay que recortarla, y las verticales **03** y **08** en los dos huecos inferiores, que encajan en la proporción 4/5 del repositorio. La galería va en tres columnas.
- Tras optimizar (lado máximo 1600 px), las diez fotos bajan de **4,1 MB a 2,4 MB** (−43 %); los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630, ≈136 KiB) es un recorte de la apaisada **02**, la única de la ficha que ya está en la proporción exacta de la imagen de compartir.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-pallares
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (de 8:00 a 1:00, sin día de cierre) y el aviso de festivo del 12 de octubre, y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe ni indica autor, así que la web no cita a ninguna fuente. Conviene confirmar con el local que se pueden usar.
4. Si el dominio final no es `bar-pallares.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
