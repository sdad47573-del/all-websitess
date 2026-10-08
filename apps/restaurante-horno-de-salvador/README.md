# Restaurante Horno de Salvador

Web informativa del **Restaurante Horno de Salvador**, parrilla y restaurante mediterráneo en la **Carretera del Castillo de Santa Catalina, s/n · 23001 Jaén**, con teléfono 953 23 05 28.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                     |
| ----------------------- | ------------------------------------------------------------------- |
| Nombre                  | Restaurante Horno de Salvador                                       |
| Dirección               | Carretera del Castillo de Santa Catalina Jaén, s/n · 23001 Jaén     |
| Teléfono                | +34 953 23 05 28                                                    |
| Categorías de Google    | Parrilla · Restaurante mediterráneo                                 |
| Valoración              | 4,1 sobre 5 con 308 reseñas                                         |
| Horario                 | Publicado (ver abajo)                                               |
| Coordenadas             | 37.7691434, -3.8084488                                              |
| Plus code               | Q59R+MJ Jaén                                                        |
| Identificador del lugar | `ChIJP_Y1ygrXbQ0R0f8Xe8dCorQ`                                       |
| Identificador de canal  | `/g/12qgd7hcb`                                                      |
| Distintivo de la ficha  | Brunch                                                              |

El número de reseñas se escribe **«308 reseñas»** y la valoración con coma decimal («4,1»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección depurada.** Google publica la vía como «Carretera del Castillo de Santa Catalina Jaén, s/n», con un **«Jaén» suelto en medio del nombre de la calle** (un artefacto de Google cuando no hay número). En la web se deja la vía limpia, **Carretera del Castillo de Santa Catalina, s/n**, y el municipio en su campo (23001 Jaén).

**`categories` y `servesCuisine`.** La ficha publica **dos categorías**: «Parrilla» (la principal, que se usa como `category`) y «Restaurante mediterráneo». Se recogen las dos en `categories`, y `servesCuisine` las traduce a `['Parrilla', 'Cocina mediterránea']`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y **sin `sameAs`** (sin web propia ni redes).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | Cerrado       |
| Martes    | 13:30 – 23:00 |
| Miércoles | 13:30 – 23:00 |
| Jueves    | 13:30 – 23:00 |
| Viernes   | 13:30 – 23:00 |
| Sábado    | 13:30 – 23:00 |
| Domingo   | 13:30 – 16:00 |

Detalles que se trasladan tal cual a la web:

- **Cierra el lunes.** El domingo **solo abre hasta las 16:00**; el resto de días, hasta las 23:00.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto; como ese día el local ya cierra por descanso semanal, el aviso se recoge en el texto de la sección de horario y no se añade ninguna fila a la tabla. `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada (6 especificaciones en total).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas** y las cuatro están **disponibles**: el acceso, el **aparcamiento**, el aseo y los asientos adaptados para sillas de ruedas. Es una de las pocas fichas del repositorio que publica el aparcamiento adaptado (y lo da por disponible). La ficha no publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. **No todas son de 5** y se reproducen igual, sin esconderlas:

1. «Excelente lugar con mucho encanto, calidad en sus raciones y buena atención» (**5** sobre 5)
2. «Mis a compañantes tuvieron que comer ese solomillo muy dulce y yo seco ....» (**1** sobre 5)
3. «Quizá por la epoca en la que fui...» (**4** sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-horno-de-salvador   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-horno-de-salvador
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `adrizale`).
- Son formatos mezclados: siete apaisadas (una panorámica de 5664×2752) y tres verticales. El collage de portada usa la apaisada 01 (4608×2592, 16:9 exacto) arriba y las verticales 04 y 08 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas porque con formatos mezclados el mosaico se lee mejor que en una rejilla de recortes.
- Tras optimizar, el total bajó de **4,4 MB a 2,6 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-horno-de-salvador
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-horno-de-salvador.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
