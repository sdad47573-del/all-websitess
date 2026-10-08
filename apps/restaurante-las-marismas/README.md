# Restaurante Las Marismas

Web informativa de **Restaurante Las Marismas**, restaurante de tapas en la **Avenida Príncipe Felipe · 23600 Martos (Jaén)**, con teléfono 953 70 24 86.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Restaurante Las Marismas   |
| Dirección               | Av. Príncipe Felipe · 23600 Martos (Jaén) |
| Teléfono                | +34 953 70 24 86           |
| Categorías de Google    | Restaurante, Restaurante especializado en tapas |
| Valoración              | 4,4 sobre 5 con 428 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7111738, -3.9682659     |
| Plus code               | P26J+FM Martos             |
| Identificador del lugar | `ChIJgwT97sfFbQ0RH1GUfrDyIe0` |
| Identificador de canal  | `/g/11gdh0pxjd`            |
| Feature id              | `0xd6dc5c7eefd0483:0xed21f2b07e94511f` |
| Distintivo de la ficha  | Brunch                     |

El número de reseñas se escribe **«428 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Municipio.** La ficha sitúa el negocio en **Martos** (provincia de Jaén), no en la capital: `business.city` es «Martos», el código postal 23600 y la provincia sigue siendo Jaén (por eso el `geo.region` es `ES-JA`).

**Dirección sin número.** Google publica la dirección como «Av. Príncipe Felipe», **sin número de portal**. En la web se desarrolla la abreviatura a **Avenida Príncipe Felipe** y se deja sin número, porque la ficha no publica ninguno.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías** —«Restaurante» (la primera, que hace de categoría principal) y «Restaurante especializado en tapas»— y **no se añade `servesCuisine`**: son tipos de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 6:00 – 24:00                    |
| Martes    | 6:00 – 24:00                    |
| Miércoles | 6:00 – 24:00                    |
| Jueves    | 6:00 – 24:00                    |
| Viernes   | 6:00 – 24:00                    |
| Sábado    | 6:00 – 24:00                    |
| Domingo   | Cerrado                         |

Detalles que se trasladan tal cual a la web:

- **Horario continuo de 6:00 a 24:00, de lunes a sábado**, sin turnos separados.
- **El domingo cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el domingo cerrado no genera ninguna entrada (**6 especificaciones** en total, una por cada día abierto).
- El cierre a las 24:00 se escribe como `closes: '00:00'` en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **fijo** (953 70 24 86), y así se publica: `phoneHref` usa `tel:+34953702486`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (incluida la falta de puntuación de la segunda). Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Para echar una cerveza está muy bien, tienen tapas variadas y de buena calidad.» (5/5)
2. «Todo buenísimo y un buen trato Volveremos Un saludo desde Algeciras» (5/5)
3. «Buen sitio para tapear con tapas ricas y abundantes.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-las-marismas   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-las-marismas
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 02, 03 y 08), una panorámica (07) y cinco verticales (04, 05, 06, 09 y 10).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante Las Marismas»), así que cada foto de la galería lleva su pie «Foto de Restaurante Las Marismas».
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,3 MB a 2,1 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-las-marismas
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da 6:00–24:00 de lunes a sábado y cierra el domingo) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-las-marismas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
