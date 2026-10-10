# Las Sevillanas - El Tapeito

Web informativa de **Las Sevillanas - El Tapeito**, restaurante de tapeo andaluz y arroces en la **Avenida de la Marina Baixa, 3 · 03509 Benidorm (Alicante)**, con teléfono 966 81 39 42.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Las Sevillanas - El Tapeito                |
| Dirección               | Av. de la Marina Baixa, 3 · 03509 Benidorm |
| Teléfono                | +34 966 81 39 42 (fijo)                    |
| Categoría de Google     | Restaurante                                |
| Valoración              | 4,5 sobre 5 con 408 reseñas                |
| Horario                 | Publicado (ver abajo)                      |
| Coordenadas             | 38.5245434, -0.1652351                     |
| Plus code               | GRFM+RW Benidorm                           |
| Identificador del lugar | `ChIJz8zsHN8aYg0RuD52Bu21njU`              |
| Identificador de canal  | `/g/11g8xhzgcv`                            |
| Feature id              | `0xd621adf1ceccccf:0x359eb5ed06763eb8`     |

El número de reseñas se escribe **«408 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. La portada, eso sí, lleva su `meta description` escrita a mano para poder medir su longitud; es el único sitio donde «4,5» y «408» aparecen literalmente.

**Respuesta incompleta en el primer intento.** La primera descarga llegó con la ficha a medias (solo el horario del día en curso y sin reseñas). Se reintentó hasta obtener una respuesta completa, de unos 30 KB, con la descripción del titular, el horario con los siete días y las tres reseñas que se citan abajo. La web usa la respuesta completa.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. de la Marina Baixa, 3»). En la web se desarrolla a **Avenida de la Marina Baixa, 3**, como en el resto del repositorio; el código postal 03509 y el municipio (Benidorm) se publican tal cual. Está en la misma avenida que `gastro-bar-bo` y `restaurante-peter`.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que no declara cocina, así que la categoría no se traslada a `servesCuisine`. Sí se añade **`servesCuisine: ['Cocina andaluza']`**, porque la propia **descripción del titular** habla de «raciones típicas andaluzas». El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin distintivo

La ficha **no muestra ninguna etiqueta junto al nombre**, así que no hay constante `distintivo` y la portada no menciona ninguna (el caso mayoritario del repositorio).

### Descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en la sección «La casa», sin corregir su redacción ni su puntuación (conserva «muchisimas mas» y «La paellas»):

> Local de raciones típicas andaluzas, arroces exquisitos y muchisimas mas cositas regentado por dos sevillanas con mucho arte. Se recomienda reservar los arroces al mismo tiempo que la mesa para garantizar un mejor servicio. La paellas por la tarde solo se sirven por encargo.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 12:00 – 24:00                  |
| Martes    | 12:00 – 24:00                  |
| Miércoles | Cerrado                        |
| Jueves    | Cerrado                        |
| Viernes   | 12:00 – 24:00                  |
| Sábado    | 12:00 – 24:00                  |
| Domingo   | 12:00 – 24:00                  |

Detalles que se trasladan tal cual a la web:

- **Abre de 12:00 a 24:00** los lunes, martes, viernes, sábados y domingos, y **cierra miércoles y jueves**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los dos días cerrados no generan ninguna entrada (**5 especificaciones** en total).
- El cierre a las **24:00** se escribe como **00:00** en los datos estructurados.
- La **descripción del titular** añade dos avisos que **no** son el horario de apertura: recomienda **reservar los arroces al mismo tiempo que la mesa** y avisa de que **las paellas por la tarde solo se sirven por encargo**. Se recogen en la nota de la sección de horario y en su pregunta frecuente, sin mezclarlos con la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ni el acceso ni el aparcamiento adaptado.

### El teléfono

Es un **fijo** (966 81 39 42), y así se publica: `phoneHref` usa `tel:+34966813942`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera abre un paréntesis que no cierra y la tercera encadena puntos suspensivos). Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Pedimos oreja, chopitos y Cazón en adobo (todo muy rico y el pescado sabroso.» (5/5)
2. «Magnífico bar y su dueña aun mejor, cerveza fresquita e inmejorables tapas» (5/5)
3. «Sitio agradable muy buen tapeo..viendo el mar..buena calidad y buen precio» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs las-sevillanas-el-tapeito   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 las-sevillanas-el-tapeito
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: tres apaisadas (01, 04 y 06), una panorámica (03) y seis verticales (02, 05, 07, 08, 09 y 10).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Las Sevillanas - El Tapeito»), así que cada foto de la galería lleva su pie.
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **7,2 MB a 2,1 MB**; los `bytes` se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs las-sevillanas-el-tapeito
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da 12:00 a 24:00 de lunes, martes y de viernes a domingo, con cierre miércoles y jueves) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos, que la ficha no detalla.
5. Si el dominio final no es `las-sevillanas-el-tapeito.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
