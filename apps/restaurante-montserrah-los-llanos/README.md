# Restaurante Montserrah Los Llanos

Web informativa del **Restaurante Montserrah Los Llanos**, bar restaurante en la **Calle de los Herreros, 29 · 23170 Jaén**, con teléfono 953 88 24 83.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                       |
| ----------------------- | ----------------------------------------------------- |
| Nombre                  | Restaurante Montserrah Los Llanos                     |
| Dirección               | C. de los Herreros, 29 · 23170 Jaén                   |
| Teléfono                | +34 953 88 24 83                                      |
| Categorías de Google    | Bar restaurante                                       |
| Valoración              | 4,4 sobre 5 con 137 reseñas                           |
| Horario                 | Publicado (ver abajo)                                 |
| Coordenadas             | 37.7788644, -3.7593618                                |
| Plus code               | Q6HR+G7 Jaén                                          |
| Identificador del lugar | `ChIJa9GryP7XbQ0Rme4V9SAdVgU`                         |
| Identificador de canal  | `/g/11qr35prc0`                                       |
| Distintivo de la ficha  | Brunch                                                |

El número de reseñas se escribe **«137 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. de los Herreros, 29»). En la web se desarrolla a **Calle de los Herreros, 29**, como en el resto del repositorio; el código postal 23170 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **una sola categoría**, «Bar restaurante», que no declara ningún tipo de cocina. `category` y `categories` llevan ese texto y **no se añade `servesCuisine`** a los datos estructurados (igual que en `abaceria-tinta-de-toro`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario      |
| --------- | ------------ |
| Lunes     | 6:30 – 16:00 |
| Martes    | 6:30 – 16:00 |
| Miércoles | 6:30 – 16:00 |
| Jueves    | 6:30 – 16:00 |
| Viernes   | 6:30 – 16:00 |
| Sábado    | 6:30 – 16:00 |
| Domingo   | Cerrado      |

Detalles que se trasladan tal cual a la web:

- **Un solo turno**, de 6:30 a 16:00, sin cena. En los datos estructurados se escribe como `opens: '06:30'` y `closes: '16:00'`.
- **Cierra los domingos.** `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el domingo cerrado no genera ninguna entrada (6 especificaciones en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día el local abre con su horario habitual, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas** y las dos están **disponibles**: el aseo y los asientos adaptados para sillas de ruedas. La ficha no publica ni el acceso ni el aparcamiento adaptados, así que no se declaran.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Buen sitio para bocadillos y para comer,y para tomar café,y buen ambiente.»
2. «Camareros encantadores y bocatas buenísimos.»
3. «De lujo, las tostadas aceite tomate riquisima.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-montserrah-los-llanos   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-montserrah-los-llanos
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga atribuye las diez al **propio local** (`author`: «Restaurante Montserrah Los Llanos»). Como sí hay a quién citar, cada foto de la galería lleva su pie («Foto de Restaurante Montserrah Los Llanos»), siguiendo el criterio de `asador-de-camilo`.
- Son formatos mezclados: seis apaisadas (todas 16:9) y cuatro verticales. El collage de portada usa la apaisada 01 arriba y las verticales 03 y 04 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total bajó de **3,8 MB a 2,0 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-montserrah-los-llanos
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-montserrah-los-llanos.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
