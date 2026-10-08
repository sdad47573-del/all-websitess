# Bar Restaurante Ya Lo Sabes

Web informativa de **Bar Restaurante Ya Lo Sabes**, bar restaurante en el **Paseo de España, 2 · 23009 Jaén**, con teléfono 692 26 67 32.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Bar Restaurante Ya Lo Sabes |
| Dirección               | P.º de España, 2 · 23009 Jaén |
| Teléfono                | +34 692 26 67 32           |
| Categorías de Google    | Bar restaurante            |
| Valoración              | 4,4 sobre 5 con 729 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.781195, -3.78909        |
| Plus code               | Q6J6+F9 Jaén               |
| Identificador del lugar | `ChIJBYJ3uw7XbQ0R5bfS5Qecwfw` |
| Identificador de canal  | `/g/11f5h799sh`            |
| Feature id              | `0xd6dd70ebb778205:0xfcc19c07e5d2b7e5` |
| Distintivo de la ficha  | Ninguno                    |

El número de reseñas se escribe **«729 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («P.º de España, 2»). En la web se desarrolla a **Paseo de España, 2**, como en el resto del repositorio; el código postal 23009 y el municipio (Jaén) se publican tal cual.

**Orden de los campos en la respuesta.** En esta ficha el endpoint devuelve la ciudad antes que la calle (`info[2]` = `["Jaén", "P.º de España", "23009"]`), al contrario de lo habitual. La dirección se ha confirmado con la dirección estructurada del plus code, que publica **«P.º de España, 2, 23009 Jaén»**.

**Categorías y `servesCuisine`.** La ficha publica **una sola categoría**, «Bar restaurante», así que no se añade `servesCuisine`: es un tipo de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin distintivo ni descripción del titular.** La ficha no muestra ninguna etiqueta junto al nombre y su descripción del titular viene vacía, así que no hay `distintivo` ni `descripcionLocal`, y la portada no los menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 11:30 – 16:30 · 20:00 – 24:00   |
| Martes    | 11:30 – 16:30 · 20:00 – 24:00   |
| Miércoles | 11:30 – 16:30 · 20:00 – 0:30    |
| Jueves    | 11:30 – 16:30 · 20:00 – 0:30    |
| Viernes   | 11:30 – 16:30 · 20:00 – 0:30    |
| Sábado    | 11:30 – 16:30 · 20:00 – 0:30    |
| Domingo   | 11:30 – 16:30 · 20:00 – 0:30    |

Detalles que se trasladan tal cual a la web:

- **Abre todos los días en dos turnos**, mediodía de 11:30 a 16:30 y noche a partir de las 20:00.
- La noche cierra a las **0:30** de la madrugada de miércoles a domingo, y a las **24:00** los lunes y los martes, tal como lo publica la ficha.
- Por eso `openingHoursSpecification` tiene **14 especificaciones** (dos por cada uno de los siete días), construidas con un `flatMap` sobre `item.shifts`.
- El cierre a las 24:00 se escribe como `closes: '00:00'` en los datos estructurados, y el de las 0:30 como `closes: '00:30'`.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**: marca como **disponible** el **acceso para sillas de ruedas** y señala que **no hay aparcamiento adaptado**. La web lista las dos y marca la última con el estilo de «no disponible». No publica ninguna otra.

### El teléfono

Es un **móvil** (692 26 67 32), y así se publica: `phoneHref` usa `tel:+34692266732`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la segunda va sin mayúscula inicial y sin punto final). Dos son de 5 sobre 5 y una de 3 sobre 5:

1. «Son cercanos, amables, cuidados y buena cocina, rápidos y eficaces.» (5/5)
2. «Mucho frio en la terraza. las raciones son más patata frita que otra cosa» (3/5)
3. «Sitio perfecto para picoteo y echar unas cervezas con los amigos» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-restaurante-ya-lo-sabes   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 bar-restaurante-ya-lo-sabes
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis apaisadas (01, 02, 03, 05, 08 y 10), una vista (06) y tres verticales (04, 07 y 09).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Bar Restaurante Ya Lo Sabes»), así que cada foto de la galería lleva su pie «Foto de Bar Restaurante Ya Lo Sabes».
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **07** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **3,9 MB a 2,1 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-restaurante-ya-lo-sabes
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da dos turnos todos los días, con la noche hasta las 24:00 los lunes y martes y hasta las 0:30 el resto) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `bar-restaurante-ya-lo-sabes.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
