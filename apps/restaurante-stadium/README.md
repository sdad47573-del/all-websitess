# Restaurante Stadium

Web informativa del **Restaurante Stadium**, restaurante y cocina mediterránea en la **Plaza Troyano Salaverry, 3Z · 23008 Jaén**, con teléfono 953 25 76 08.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                       |
| ----------------------- | ----------------------------------------------------- |
| Nombre                  | Restaurante Stadium                                   |
| Dirección               | Pl. Troyano Salaverry, 3Z · 23008 Jaén                |
| Teléfono                | +34 953 25 76 08                                      |
| Categorías de Google    | Restaurante · Restaurante mediterráneo                |
| Valoración              | 4,3 sobre 5 con 787 reseñas                           |
| Horario                 | Publicado (ver abajo)                                 |
| Coordenadas             | 37.7742119, -3.7865724                                |
| Plus code               | Q6F7+M9 Jaén                                          |
| Identificador del lugar | `ChIJQzbH0wvXbQ0RFJ7AKoXd4nw`                         |
| Identificador de canal  | `/g/1tg2fv5w`                                         |
| Distintivo de la ficha  | Brunch                                                |

El número de reseñas se escribe **«787 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Pl. Troyano Salaverry, 3Z»). En la web se desarrolla a **Plaza Troyano Salaverry, 3Z**, como en el resto del repositorio; el número «3Z» se publica tal cual lo da la ficha y el código postal 23008 con el municipio (Jaén) van igual.

**`categories` y `servesCuisine`.** La ficha publica **dos categorías** en su orden: «Restaurante» (la principal, que se usa como `category`) y «Restaurante mediterráneo». Se recogen las dos en `categories` sin añadir ninguna otra. `servesCuisine` traduce la segunda a `['Cocina mediterránea']`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario                       |
| --------- | ----------------------------- |
| Lunes     | 12:00 – 17:00 · 20:00 – 0:30  |
| Martes    | 12:00 – 17:00                 |
| Miércoles | Cerrado                       |
| Jueves    | 12:00 – 17:00 · 20:00 – 0:30  |
| Viernes   | 12:00 – 17:00 · 20:00 – 0:30  |
| Sábado    | 12:00 – 17:00 · 20:00 – 0:30  |
| Domingo   | 12:00 – 17:00 · 20:00 – 0:30  |

Detalles que se trasladan tal cual a la web:

- **Cierra los miércoles** todo el día.
- **El martes solo sirve el mediodía**: es el único día sin turno de cena.
- **La cena termina a las 0:30**, pasada la medianoche; en los datos estructurados se escribe como `closes: '00:30'`.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día el local abre con su horario habitual, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla. `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el miércoles cerrado no genera ninguna entrada (12 especificaciones en total).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**: el acceso, el aseo y los asientos adaptados para sillas de ruedas están **disponibles**, y el **aparcamiento adaptado está marcado como no disponible**. Se recogen las cuatro, incluida la que no está disponible, en vez de omitirla.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y la tercera de 4 sobre 5:

1. «Buena cocina exquisita forma de comer pescado en Jaen»
2. «Pedimos pulpo 🐙, ceviche, bacalao, presa ibérica y chuletitas de cordero.»
3. «Buen restaurante y mejor sitio para raciones y tapeo»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-stadium   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-stadium
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar.
- Son formatos mezclados: cuatro apaisadas, cinco verticales y una cuadrada. El collage de portada usa la apaisada 01 arriba y las verticales 03 y 05 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas porque con retratos estrechos el mosaico se lee mejor que en una rejilla de recortes.
- Tras optimizar, el total bajó de **4,0 MB a 2,1 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-stadium
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-stadium.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
