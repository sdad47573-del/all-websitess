# Restaurante J.Manu

Web informativa de **Restaurante J.Manu**, restaurante de cocina valenciana y mediterránea en la **Calle de la Palma, 15 · 03501 Benidorm** (Alicante), con teléfono 659 77 94 66.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante J.Manu                       |
| Dirección               | C/de la Palma, 15 · 03501 Benidorm       |
| Teléfono                | +34 659 77 94 66                         |
| Categorías de Google    | Cocina valenciana, Mediterráneo, Cocina española |
| Distintivo              | Brunch                                   |
| Valoración              | 4,5 sobre 5 con 575 reseñas              |
| Horario                 | 13:00 – 16:00 y 19:30 – 23:00 (ver abajo) |
| Coordenadas             | 38.5371976, -0.1300436                   |
| Plus code               | GVP9+VX Benidorm                         |
| Identificador del lugar | `ChIJC1SH4-cEYg0Rb8TxRzWZnmM`            |
| Identificador de canal  | `/g/12q4q04qh`                           |
| Feature id              | `0xd6204e7e387540b:0x639e993547f1c46f`   |

El número de reseñas se escribe **«575 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C/de la Palma, 15»). En la web se desarrolla a **Calle de la Palma, 15**, como en el resto del repositorio; el código postal 03501 y el municipio (Benidorm) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **tres categorías de cocina**: «Restaurante de cocina valenciana» (la primera, que hace de categoría principal), «Restaurante mediterráneo» y «Restaurante de cocina española». Las tres son cocinas declaradas, así que `servesCuisine` recoge las tres: `['Cocina valenciana', 'Cocina mediterránea', 'Cocina española']`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** En esta ficha el campo de descripción del negocio **llega vacío**, así que no hay `descripcionLocal`, la portada no reproduce ninguna y el texto de la sección «La casa» lo dice expresamente.

### El distintivo «Brunch»

Google muestra junto al nombre el distintivo **«Brunch»**, el único que publica esta ficha. Se recoge como dato, aparece en la franja de la portada y tiene su propia pregunta frecuente, sin ampliarlo ni interpretarlo.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha   |
| --------- | -------------------------------- |
| Lunes     | Cerrado                          |
| Martes    | 13:00 – 16:00 · 19:30 – 23:00    |
| Miércoles | 13:00 – 16:00 · 19:30 – 23:00    |
| Jueves    | 13:00 – 16:00 · 19:30 – 23:00    |
| Viernes   | 13:00 – 16:00 · 19:30 – 23:00    |
| Sábado    | 13:00 – 16:00 · 19:30 – 23:00    |
| Domingo   | 13:00 – 16:00                    |

Detalles que se trasladan tal cual a la web:

- **De martes a sábado hay mediodía (13:00–16:00) y noche (19:30–23:00)**.
- **El domingo solo abre al mediodía**, de 13:00 a 16:00: no hay cena.
- **El lunes cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: **11 especificaciones** (cinco días con dos turnos, el domingo con uno y el lunes cerrado sin ninguna).
- La respuesta trae el aviso **«Fiesta Nacional de España: el horario podría ser diferente»** junto al lunes (12 de octubre). Se recoge en el texto de la sección de horario (constante `avisoFestivo`) y **no cambia la tabla**.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y el **aparcamiento** adaptados para sillas de ruedas. No publica ni el aseo ni los asientos.

### El teléfono

Es un **móvil** (659 77 94 66), y así se publica: `phoneHref` usa `tel:+34659779466`. La ficha no publica ningún otro número.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la segunda y la tercera conservan la admiración final; la tercera mantiene «alioli» tal como lo escribió quien la firmó). **Las tres son de 5 sobre 5**, así que no hay ninguna crítica que marcar con el estilo `.quote.is-low` que sí usan otras webs del repositorio:

1. «Pedimos ensalada de la casa, variado de croquetas y la paella valenciana.» (5/5)
2. «Venimos de Bilbao y nos acabamos de comer una paella de verduras deliciosa!» (5/5)
3. «Comida casera, y el alioli le hacen con salmón y menta, espectacular!» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-j-manu   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-j-manu
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías distintas** (los diez ficheros tienen MD5 distinto, sin duplicados): tres apaisadas (01, 04 y 10, todas de proporción 4/3) y siete verticales (02, 03, 05, 06, 07, 08 y 09).
- El manifiesto de la descarga trae el campo `author` **vacío**: la ficha **no indica quién hizo las fotos**, así que **no hay a quién citar y las fotos van sin pie**.
- El collage de portada usa la apaisada **01** arriba (4/3, que recorta bien a 16/9) y las verticales **03** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar (lado máximo 1600 px), las diez fotos bajan de **5,8 MB a 2,6 MB** (−54 %); los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630, ≈171 KiB) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-j-manu
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (mediodía y noche de martes a sábado, domingo solo mediodía, lunes cerrado) y el aviso de festivo del 12 de octubre, y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe ni indica autor, así que la web no cita a ninguna fuente. Conviene confirmar con el local que se pueden usar.
4. Si el dominio final no es `restaurante-j-manu.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
