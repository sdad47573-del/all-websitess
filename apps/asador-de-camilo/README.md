# Asador de Camilo

Web informativa del **Asador de Camilo**, parrilla en la **Calle Puerta del Sol, 4 · 23007 Jaén**, con teléfono 722 66 26 11.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                         |
| ----------------------- | --------------------------------------- |
| Nombre                  | Asador de Camilo                        |
| Dirección               | C. Prta del Sol, 4 · 23007 Jaén         |
| Teléfono                | +34 722 66 26 11                        |
| Categoría de Google     | Parrilla                                |
| Valoración              | 4,4 sobre 5 con 284 reseñas             |
| Horario                 | Publicado (ver abajo)                   |
| Coordenadas             | 37.7726566, -3.7922662                  |
| Plus code               | Q6F5+33 Jaén                            |
| Identificador del lugar | `ChIJiepVsA3XbQ0Rfg5p-gkrI0A`           |
| Identificador de canal  | `/g/11c5_5pp_y`                         |

El número de reseñas se escribe **«284 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Prta del Sol, 4»). En la web se desarrolla a **Calle Puerta del Sol, 4**, como en el resto del repositorio; el código postal 23007 y el municipio (Jaén) se publican tal cual.

**`servesCuisine`.** La ficha publica una sola categoría, «Parrilla», que además ya está en español, así que `category` y `categories` llevan ese mismo texto, `servesCuisine` repite `['Parrilla']` sin traducirlo (como en `el-chuleton`) y no se añade ningún otro tipo de cocina. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual.

### El horario

Es el horario que publica la ficha:

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | Cerrado       |
| Martes    | 11:30 – 17:00 |
| Miércoles | 11:30 – 17:00 |
| Jueves    | 11:30 – 17:00 |
| Viernes   | 11:30 – 17:00 |
| Sábado    | 11:30 – 17:00 |
| Domingo   | 11:30 – 17:30 |

Detalles que se trasladan tal cual a la web:

- **Un único turno de mediodía.** No hay cena ningún día, así que la portada no la inventa.
- **El domingo cierra media hora más tarde** (17:30 frente a las 17:00 del resto).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto; como ese día el local ya cierra por descanso semanal, el aviso se recoge en el texto de la sección de horario y no se añade ninguna fila a la tabla. `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada (6 especificaciones en total).

### Sin accesibilidad ni distintivo

La ficha **no publica atributos ni servicios del local** (ni accesibilidad, ni terraza, ni aparcamiento) y **no muestra ningún distintivo** junto al nombre, así que no hay sección de accesibilidad, no se añade `amenityFeature` y no se recoge ninguna etiqueta de este tipo.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Pedimos presa, solomillo y surtido de croquetas.»
2. «Buena cocina, buen servicio y atención por parte de los camareros.»
3. «El trato inmejorable, la comida exquisita y muy buen ambiente, seguro volveré.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs asador-de-camilo   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 asador-de-camilo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto atribuye **las diez al propio asador** («Asador de Camilo»), así que cada foto lleva su pie `figcaption` con «Foto de …».
- Son formatos mezclados: seis apaisadas (una panorámica), tres verticales y una casi cuadrada. El collage de portada usa la apaisada 04 (4096×2304, 16/9 exacto) arriba y las verticales 07 y 09 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas porque con formatos mezclados el mosaico se lee mejor que en una rejilla de recortes.
- Tras optimizar, el total bajó de **4,4 MB a 1,6 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 04 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs asador-de-camilo
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `asador-de-camilo.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
