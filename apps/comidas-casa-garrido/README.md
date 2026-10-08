# Comidas Casa Garrido

Web informativa de **Comidas Casa Garrido**, bar restaurante en la **Calle Cazalilla, 20 · 23009 Jaén**, con teléfono 664 60 90 65.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Comidas Casa Garrido       |
| Dirección               | C. Cazalilla, 20 · 23009 Jaén |
| Teléfono                | +34 664 60 90 65           |
| Categorías de Google    | Bar restaurante            |
| Valoración              | 4,5 sobre 5 con 457 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7964071, -3.7866763     |
| Plus code               | Q6W7+H8 Jaén               |
| Identificador del lugar | `ChIJEyDX1_jWbQ0RPWE3SdQ9Oqk` |
| Identificador de canal  | `/g/11c5sy6wgr`            |
| Feature id              | `0xd6dd6f8d7d72013:0xa93a3dd44937613d` |
| Distintivo de la ficha  | Brunch                     |

El número de reseñas se escribe **«457 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Respuesta incompleta en el primer intento.** La primera descarga llegó con la ficha a medias (sin reseñas destacadas). Se reintentó y la respuesta completa, de unos 27 KB, trajo las tres reseñas que se citan abajo. La web usa la respuesta completa.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Cazalilla, 20»). En la web se desarrolla a **Calle Cazalilla, 20**, como en el resto del repositorio; el código postal 23009 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **una sola categoría**, «Bar restaurante», así que no se añade `servesCuisine`: es un tipo de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La descripción del titular de la ficha viene vacía, así que no hay `descripcionLocal` y la portada no la menciona.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 7:00 – 17:00                    |
| Martes    | 7:00 – 17:00                    |
| Miércoles | 7:00 – 17:00                    |
| Jueves    | 7:00 – 17:00                    |
| Viernes   | 7:00 – 17:00                    |
| Sábado    | Cerrado                         |
| Domingo   | Cerrado                         |

Detalles que se trasladan tal cual a la web:

- **Horario continuo de 7:00 a 17:00, de lunes a viernes**, sin turnos separados.
- **Sábado y domingo cierran.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los fines de semana cerrados no generan ninguna entrada (**5 especificaciones** en total, una por cada día abierto).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (664 60 90 65), y así se publica: `phoneHref` usa `tel:+34664609065`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación, y con los emojis que incluyen. Dos son de 4 sobre 5 y una de 5 sobre 5. Google devuelve cada reseña envuelta en comillas rectas; aquí se quitan porque son el delimitador del propio campo y no forman parte del texto:

1. «El menú del día está muy bien 👌🏼 Los bocadillos son enormes y de buena calidad 🔝» (4/5)
2. «Buen trato, y servicio, buena comida y variada, buena relación calidad precio.» (4/5)
3. «Un menu muy bueno por 12,60, te atienden muy rapido, muy buen servicio» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs comidas-casa-garrido   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 comidas-casa-garrido
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: tres apaisadas (01, 08 y 10), una panorámica (05) y seis verticales (02, 03, 04, 06, 07 y 09).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Comidas Casa Garrido»), así que cada foto de la galería lleva su pie «Foto de Comidas Casa Garrido».
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **09** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **3,4 MB a 1,6 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs comidas-casa-garrido
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da 7:00–17:00 de lunes a viernes y cierra el fin de semana) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `comidas-casa-garrido.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
