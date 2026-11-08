# GASTROBAR AMBROSÍA

Web informativa de **GASTROBAR AMBROSÍA**, bar restaurante en la **Av. Beniardá, 31 · 03502 Benidorm** (Alicante), con teléfono 611 09 52 86.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | GASTROBAR AMBROSÍA                     |
| Dirección               | Av. Beniardá, 31 · 03502 Benidorm      |
| Teléfono                | +34 611 09 52 86                       |
| Categorías de Google    | Bar restaurante                        |
| Valoración              | 4,5 sobre 5 con 261 reseñas            |
| Horario                 | 8:00 – 23:00; el jueves cierra         |
| Coordenadas             | 38.545581, -0.1331852                  |
| Plus code               | GVW8+6P Benidorm                       |
| Identificador del lugar | `ChIJx9YCQD0FYg0RGez4TxOdZYk`          |
| Identificador de canal  | `/g/11sc_34150`                        |
| Feature id              | `0xd62053d4002d6c7:0x89659d134ff8ec19` |
| Distintivo de la ficha  | Brunch                                 |

El número de reseñas se escribe **«261 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Respuesta completa al primer intento.** La primera descarga ya trajo la ficha entera (unos 30 KB), con la descripción del titular, el horario de los siete días y las tres reseñas que se citan abajo.

**Nombre en mayúsculas.** La ficha publica el nombre **«GASTROBAR AMBROSÍA»** todo en mayúsculas y así se reproduce en todos los sitios donde aparece: el nombre, los datos estructurados y la marca de la cabecera y el pie. Es el nombre tal como lo publica el negocio, como en `A JALAR`: son las dos únicas webs del repositorio, junto con `DAIVEL`, cuyo nombre llega todo en mayúsculas desde la ficha. `DAIVEL` sí usa una versión con inicial mayúscula en la cabecera («Daivel»); aquí no se hace ese retoque porque el nombre publicado incluye una palabra completa en mayúsculas, «GASTROBAR», y partirlo («Gastrobar AMBROSÍA») sería inventar una forma que la ficha no publica.

**Dirección desarrollada a medias.** Google publica «Av. Beniardá, 31», con la abreviatura «Av.»: se reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas de la ficha. El código postal 03502 y el municipio (Benidorm) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Bar restaurante», así que no se añade `servesCuisine`: es un tipo de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en un párrafo destacado de la sección «La casa», sin corregirla: conserva los **cuatro saltos de línea** del original, la falta de espacio tras «Almuerzos.» y los espacios antes de los puntos finales («caseros .»). El bloque `.descripcion` lleva `white-space: pre-line` para respetar esos saltos.

> Se sirven comida mediterránea desayunos.
> Almuerzos.y cenas.
> Menu del dia caseros .
> Variedad en postres caseros .

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la sección «La casa» y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 08:00 – 23:00                  |
| Martes    | 08:00 – 23:00                  |
| Miércoles | 08:00 – 23:00                  |
| Jueves    | Cerrado                        |
| Viernes   | 08:00 – 23:00                  |
| Sábado    | 08:00 – 23:00                  |
| Domingo   | 08:00 – 23:00                  |

Detalles que se trasladan tal cual a la web:

- **Un solo tramo continuado**, de **8:00 a 23:00**, de sábado a miércoles y el viernes.
- **El jueves cierra**, y así se marca en la tabla (`is-closed`) y en el resumen de la cabecera.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los seis días abiertos generan **seis especificaciones** y el jueves cerrado ninguna.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (611 09 52 86), y así se publica: `phoneHref` usa `tel:+34611095286`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera corta la enumeración con unos puntos suspensivos). **Las tres son de 5 sobre 5**:

1. «Ensaladilla rusa casera, paella, escalope ... todo buenísimo y buena cantidad.» (5/5)
2. «Muy buena comida y a muy buen precio, sus arroces están muy buenos, repetiremos.» (5/5)
3. «Los camareros muy serviciales y rápidos.» (5/5)

De ahí sale lo único que la web dice sobre la comida y el trato, además de la descripción del titular.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs gastrobar-ambrosia   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 gastrobar-ambrosia
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **siete verticales** (02, 03, 04, 05, 07, 08 y 10), **una panorámica** (06, la única por encima de 1,8 de proporción), **una apaisada** (01) y **una casi cuadrada** (09, que el script nombra `vista-9`).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author`: «GASTROBAR AMBROSÍA»), así que cada foto lleva su pie, `Foto de GASTROBAR AMBROSÍA`, con el estilo de `.cocina-item figcaption`.
- El collage de portada usa la panorámica **06** (2992 × 1602, la más ancha) arriba y las verticales **04** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total de las diez fotos baja de **4,6 MB a 1,7 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe, así que el manifiesto conserva las dimensiones originales).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica **06** de la galería, que ya venía en 1,87 de proporción: apenas se recorta.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs gastrobar-ambrosia
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da un tramo de 8:00 a 23:00 con el jueves cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `gastrobar-ambrosia.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
