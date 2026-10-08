# Restaurante Asador "Los Olivares"

Web informativa de **Restaurante Asador "Los Olivares"**, asador en el **Polígono Industrial Los Olivares, Calle Espeluy, 50 · 23009 Jaén**, con teléfono 953 28 18 05.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Restaurante Asador "Los Olivares" |
| Dirección               | Polígono Industrial Los Olivares, Calle Espeluy, 50 · 23009 Jaén |
| Teléfono                | +34 953 28 18 05           |
| Categorías de Google    | Parrilla, Cafetería, Restaurante |
| Valoración              | 4,3 sobre 5 con 615 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7984383, -3.7821002     |
| Plus code               | Q6X9+95 Jaén               |
| Identificador del lugar | `ChIJ8XvPTVbWbQ0RuA4m7iAMKTo` |
| Identificador de canal  | `/g/1tjcqt6p`              |
| Feature id              | `0xd6dd6564dcf7bf1:0x3a290c20ee260eb8` |
| Distintivo de la ficha  | Brunch                     |

El número de reseñas se escribe **«615 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección completa.** La ficha publica el polígono y la calle: «Polígono Industrial Los Olivares, Calle Espeluy, 50». Se reproduce tal cual, sin desarrollar ninguna abreviatura, con el código postal 23009 y el municipio (Jaén).

**Categorías y `servesCuisine`.** La ficha publica **tres categorías** —«Parrilla» (la primera, que hace de categoría principal), «Cafetería» y «Restaurante»— y **no se añade `servesCuisine`**: son tipos de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Descripción del titular.** La ficha publica una «descripción del titular» que se reproduce **literal** en `descripcionLocal` y en la sección «La casa»:

> Restaurante de 2 tenedores, muy familiar y de comida casera, con amplios salones. Ideal para tus eventos de empresa o para tus celebraciones familiares.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 6:30 – 19:00                    |
| Martes    | 6:30 – 19:00                    |
| Miércoles | 6:30 – 19:00                    |
| Jueves    | 6:30 – 19:00                    |
| Viernes   | 6:30 – 19:00                    |
| Sábado    | Cerrado                         |
| Domingo   | Cerrado                         |

Detalles que se trasladan tal cual a la web:

- **Horario continuo de 6:30 a 19:00, de lunes a viernes**, sin turnos separados.
- **El sábado y el domingo cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los días cerrados no generan ninguna entrada (**5 especificaciones** en total, una por cada día laborable).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **fijo** (953 28 18 05), y así se publica: `phoneHref` usa `tel:+34953281805`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Una es de 5 sobre 5 y las otras dos de 4 sobre 5:

1. «Me ha gustado, buen menú y venden un aceite, riquísimo y a un precio razonable» (5/5)
2. «Está muy bien, hay buenas tapas y cerveza fresquita, buenos precios.» (4/5)
3. «Buen servicio de camareros y baños limpios.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-asador-los-olivares   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-asador-los-olivares
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro panorámicas (01, 03, 04 y 05), tres apaisadas (02, 06 y 07) y tres verticales (08, 09 y 10).
- El manifiesto de la descarga **no atribuye ninguna a un autor con nombre** (`author` vacío), así que las fotos **no llevan pie**.
- El collage de portada usa la apaisada **02** arriba (las panorámicas son demasiado alargadas para el recorte 16/9) y las verticales **08** y **09** en los dos huecos inferiores, con las proporciones por defecto del repositorio. La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **2,8 MB a 1,5 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-asador-los-olivares
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da 6:30–19:00 de lunes a viernes y cierra el fin de semana) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe ni las atribuye.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-asador-los-olivares.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
