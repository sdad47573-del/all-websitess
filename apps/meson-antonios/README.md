# Mesón Antonio's

Web informativa del **Mesón Antonio's**, restaurante y taberna de cocina española en la **Calle las Bernardas, 8 · 23001 Jaén**, con teléfono 953 23 51 30.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Mesón Antonio's                            |
| Dirección               | C. las Bernardas, 8 · 23001 Jaén           |
| Teléfono                | +34 953 23 51 30                           |
| Categorías de Google    | Restaurante · Taberna · Restaurante de cocina española |
| Valoración              | 4,3 sobre 5 con 617 reseñas                |
| Horario                 | Publicado (ver abajo)                      |
| Coordenadas             | 37.7665817, -3.7855658                     |
| Plus code               | Q687+JQ Jaén                               |
| Identificador del lugar | `ChIJ1QOed3XXbQ0RvPGHl8zkOeE`              |
| Identificador de canal  | `/g/1tycx_k1`                              |
| Distintivo de la ficha  | Brunch                                     |

El número de reseñas se escribe **«617 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. las Bernardas, 8»). En la web se desarrolla a **Calle las Bernardas, 8**, como en el resto del repositorio; el código postal 23001 y el municipio (Jaén) se publican tal cual.

**`categories` y `servesCuisine`.** La ficha publica **tres categorías** en su orden: «Restaurante» (la principal, que se usa como `category`), «Taberna» y «Restaurante de cocina española». Se recogen las tres en `categories` sin añadir ninguna otra. `servesCuisine` traduce la tercera a `['Cocina española']`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario                     |
| --------- | --------------------------- |
| Lunes     | Cerrado                     |
| Martes    | Cerrado                     |
| Miércoles | 13:00 – 17:00 · 20:30 – 1:00 |
| Jueves    | 13:00 – 17:00 · 20:30 – 1:00 |
| Viernes   | 13:00 – 17:00 · 20:30 – 1:00 |
| Sábado    | 13:00 – 17:00 · 20:30 – 1:00 |
| Domingo   | 13:00 – 17:00 · 20:30 – 1:00 |

Detalles que se trasladan tal cual a la web:

- **Cierra lunes y martes.** Es la primera ficha del repositorio con dos días de descanso seguidos.
- **La cena termina a la 1:00**, pasada la medianoche; en los datos estructurados se escribe como `closes: '01:00'`.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto; como ese día el local ya cierra por descanso semanal, el aviso se recoge en el texto de la sección de horario y no se añade ninguna fila a la tabla. `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que lunes y martes cerrados no generan ninguna entrada (10 especificaciones en total).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas** y las tres están **disponibles**: el acceso, el aseo y los asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra, así que no se declara ni aparcamiento adaptado ni bucle magnético.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5; la tercera va sin puntuación y se reproduce igual:

1. «Atención exquisita, solomillo al Jerez y flamenquin al roquefort delicioso.»
2. «Pedimos cebolletas fritas y gambas al ajillo, muy ricos los dos platos.»
3. «Buena comida Raciones gigantes buen ambiente»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs meson-antonios   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 meson-antonios
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `adrizale`).
- Son formatos mezclados: tres apaisadas (una de 890×500 muy panorámica) y siete verticales. El collage de portada usa la apaisada 01 (4080×3072) arriba y las verticales 02 y 05 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas porque con retratos estrechos el mosaico se lee mejor que en una rejilla de recortes.
- Tras optimizar, el total bajó de **3,9 MB a 1,8 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs meson-antonios
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `meson-antonios.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
