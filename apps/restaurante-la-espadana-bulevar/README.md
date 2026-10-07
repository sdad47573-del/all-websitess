# Restaurante La Espadaña Bulevar

Web informativa del **Restaurante La Espadaña Bulevar**, restaurante familiar en el **P.º de España, 31 · 23009 Jaén**, con teléfono 953 52 98 64.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.
- **No confundir con `restaurante-la-espadana-centro`**: son dos locales distintos de la misma marca. Aquel está en la C. Francisco Martí Mora, 1 (23002) y este en el P.º de España, 31 (23009); el identificador de lugar, el teléfono, el horario y la valoración no coinciden.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante La Espadaña Bulevar          |
| Dirección               | P.º de España, 31 · 23009 Jaén           |
| Teléfono                | +34 953 52 98 64                         |
| Categoría de Google     | Restaurante familiar                     |
| Valoración              | 4,3 sobre 5 con 479 reseñas              |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 37.786372, -3.7916322                    |
| Plus code               | Q6P5+G8 Jaén                             |
| Identificador del lugar | `ChIJV-JLV4HXbQ0R5XiDHw55hXY`            |
| Identificador de canal  | `/g/11tr_f21y0`                          |
| Distintivo de la ficha  | Brunch                                   |

El número de reseñas se escribe **«479 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`categories`, `servesCuisine`, `priceRange` y `sameAs`.** Esta ficha publica **una sola categoría**, «Restaurante familiar», así que `category` y `categories` llevan ese mismo texto y no se añade «Restaurante» suelto ni ningún tipo de cocina: **sin `servesCuisine`**. Tampoco hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual.

### El horario

Es el horario que publica la ficha y se comprobó estable en tres respuestas completas seguidas:

| Día       | Horario                          |
| --------- | -------------------------------- |
| Lunes     | Cerrado                          |
| Martes    | 13:00 – 17:00 · 20:30 – 24:00    |
| Miércoles | 13:00 – 17:00 · 20:30 – 24:00    |
| Jueves    | 13:00 – 17:00 · 20:30 – 24:00    |
| Viernes   | 13:00 – 17:00 · 20:30 – 24:00    |
| Sábado    | 13:00 – 17:00 · 20:00 – 24:00    |
| Domingo   | 13:00 – 17:00                    |

Dos detalles que se trasladan tal cual a la web:

- **La cena arranca antes el sábado**: a las 20:00, frente a las 20:30 de martes a viernes. En los cuatro días con noche, el cierre es a medianoche, que en los datos estructurados se escribe como `00:00`.
- **El domingo solo hay mediodía**: no aparece ningún turno de noche, así que la portada no lo inventa.

La respuesta trae además el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto; como ese día el local ya cierra por descanso semanal, el aviso se recoge en el texto de la sección de horario y no se añade ninguna fila a la tabla. `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada (11 especificaciones en total: dos por cada día de martes a sábado y una el domingo).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas** y las tres están **disponibles**: el acceso, el aseo y los asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra, así que no se declara ni aparcamiento adaptado ni bucle magnético.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. **No todas son de 5**: se reproduce igual una de 4, sin esconderla:

1. «Muy rico, todo lo que hemos probado: ensaladilla rusa, risotto y codillo.» (5 sobre 5)
2. «Y lo mejor los precios, 43€ salimos a 3 raciones y 3 rondas de cerveza.» (5 sobre 5)
3. «También pedimos Jamón y queso y nos dijeron que no había jamón...» (4 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-espadana-bulevar   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-espadana-bulevar
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto atribuye **las diez al propio restaurante** («Restaurante La Espadaña Bulevar»), así que cada foto lleva su pie `figcaption` con «Foto de …».
- Son formatos mezclados: cinco verticales, cuatro apaisadas y una casi cuadrada (2692×2477). El collage de portada usa la apaisada 01 (4000×2252, 16/9 exacto) arriba y las verticales 03 y 05 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas porque con retratos estrechos el mosaico se lee mejor que en una rejilla de recortes.
- Tras optimizar, el total bajó de **5,6 MB a 2,5 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-espadana-bulevar
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-la-espadana-bulevar.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
