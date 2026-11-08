# Bar Restaurante El Sótano

Web informativa de **Bar Restaurante El Sótano**, restaurante en la **Calle Magdalena del Prado, 6, local 1 · 23003 Jaén**, con teléfono 651 46 28 23.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Bar Restaurante El Sótano  |
| Dirección               | C. Magdalena del Prado, 6, Loc 1 · 23003 Jaén |
| Teléfono                | +34 651 46 28 23           |
| Categorías de Google    | Restaurante                |
| Valoración              | 4,4 sobre 5 con 588 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7689495, -3.790165      |
| Plus code               | Q695+HW Jaén               |
| Identificador del lugar | `ChIJF8JBTHPXbQ0R49VLcAgTQI4` |
| Identificador de canal  | `/g/11c2ltbk6q`            |
| Feature id              | `0xd6dd7734c41c217:0x8e401308704bd5e3` |
| Distintivo de la ficha  | Brunch                     |

El número de reseñas se escribe **«588 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Magdalena del Prado, 6, Loc 1»). En la web se desarrollan las abreviaturas a **Calle Magdalena del Prado, 6, local 1**, como en el resto del repositorio; el código postal 23003 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», así que no se añade `servesCuisine`: es un tipo de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### La descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en la portada con el rótulo «Descripción de la ficha»:

> Bar con zona infantil ( parque para niños )

Se copia tal cual, sin corregir los espacios que deja la ficha detrás de cada paréntesis.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | Cerrado                         |
| Martes    | Cerrado                         |
| Miércoles | Cerrado                         |
| Jueves    | Cerrado                         |
| Viernes   | 13:00 – 16:30 · 20:00 – 23:30   |
| Sábado    | 13:00 – 16:30 · 20:00 – 23:30   |
| Domingo   | 13:30 – 16:30                   |

Detalles que se trasladan tal cual a la web:

- **Solo abre de viernes a domingo.** De lunes a jueves cierra.
- **Viernes y sábado** tienen dos turnos, mediodía de 13:00 a 16:30 y noche de 20:00 a 23:30; el **domingo** solo abre al mediodía, de 13:30 a 16:30.
- Por eso `openingHoursSpecification` tiene **5 especificaciones** (dos del viernes, dos del sábado y una del domingo), construidas con un `flatMap` sobre `item.shifts`: los días cerrados no generan entrada.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto; ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aseo**, los **asientos** y el **aparcamiento adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (651 46 28 23), y así se publica: `phoneHref` usa `tel:+34651462823`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la segunda menciona un «flamenquin», escrito así en la reseña). **Las tres son de 5 sobre 5.** Google devuelve cada reseña envuelta en comillas rectas; aquí se quitan porque son el delimitador del propio campo y no forman parte del texto:

1. «Los platillos exquisitos, bien elaborados y las raciones generosas.» (5/5)
2. «Estuve con un amigo y nos pedimos un flamenquin y el solomillo a la pimienta.» (5/5)
3. «Exquisita comida y abundante, servicio excelente, muy contentos volveremos» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-restaurante-el-sotano   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 bar-restaurante-el-sotano
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete apaisadas (01, 02, 03, 06, 07, 09 y 10), una vista (05) y dos verticales (04 y 08).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Bar Restaurante El Sótano»), así que cada foto de la galería lleva su pie «Foto de Bar Restaurante El Sótano».
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **08** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,4 MB a 2,5 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-restaurante-el-sotano
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha lo da cerrado de lunes a jueves y abierto de viernes a domingo) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable, sobre todo si se ve la zona infantil) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `bar-restaurante-el-sotano.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
