# Bar Restaurante Di Mari

Web informativa de **Bar Restaurante Di Mari**, bar restaurante en la **Plaza España, 3 · 13003 Ciudad Real**, con teléfono 926 36 58 95.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Bar Restaurante Di Mari                |
| Dirección               | Pl. España, 3 · 13003 Ciudad Real      |
| Teléfono                | +34 926 36 58 95                       |
| Categorías de Google    | Bar restaurante                        |
| Valoración              | 4,7 sobre 5 con 322 reseñas            |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.9927672, -3.9277879                 |
| Plus code               | X3VC+4V Ciudad Real                    |
| Identificador del lugar | `ChIJC_buwG_Daw0RqvwcR2-CSlo`          |
| Identificador de canal  | `/g/11lcjrmtq_`                        |
| Feature id              | `0xd6bc36fc0eef60b:0x5a4a826f471cfcaa` |
| Distintivo de la ficha  | Brunch                                 |

El número de reseñas se escribe **«322 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Respuesta incompleta en el primer intento.** La primera descarga llegó con la ficha a medias. Se reintentó y la respuesta completa, de unos 29 KB, trajo la descripción del titular, el horario con los siete días y las tres reseñas que se citan abajo. La web usa la respuesta completa.

**Dirección desarrollada.** Google publica la dirección abreviada («Pl. España, 3»). En la web se desarrolla a **Plaza España, 3**, como en el resto del repositorio (`Plaza Batel, 6`, `Plaza Gloria Fuertes, 6`); el código postal 13003 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Bar restaurante», así que no se añade `servesCuisine`: es un tipo de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en la sección «La casa», sin corregirla ni completar la frase, que queda abierta con unos puntos suspensivos:

> Somos un equipo, que todo lo que hacemos, lo hacemos con amor y siempre pensando el agrado del cliente...

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha    |
| --------- | --------------------------------- |
| Lunes     | 11:30 – 16:30 · 20:00 – 24:00     |
| Martes    | Cerrado                           |
| Miércoles | 11:30 – 16:30 · 20:00 – 24:00     |
| Jueves    | 11:30 – 16:30 · 20:00 – 24:00     |
| Viernes   | 11:30 – 16:30 · 20:00 – 24:00     |
| Sábado    | 12:00 – 16:30 · 20:00 – 24:00     |
| Domingo   | 12:00 – 16:00                     |

Detalles que se trasladan tal cual a la web:

- **Dos turnos de lunes a sábado**: mediodía de **11:30 a 16:30** (el sábado desde las 12:00) y noche de **20:00 a 24:00**.
- **El domingo abre solo al mediodía**, de 12:00 a 16:00.
- **El martes cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los días de dos turnos generan dos entradas y el martes cerrado ninguna (**12 especificaciones** en total).
- El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **fijo** (926 36 58 95), y así se publica: `phoneHref` usa `tel:+34926365895`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera lleva un espacio antes de la coma y la segunda encadena «raciones» con «El personal»). Dos son de 5 sobre 5 y una de 3 sobre 5:

1. «Pedimos algún aperitivo , ensalada y tostas de salmón y jamón.» (3/5)
2. «Buen servicio, buenas raciones El personal muy amable trato excelente» (5/5)
3. «Fuimos a comer menú del día la paella exquisita y la atención impecable.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-restaurante-di-mari   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 bar-restaurante-di-mari
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: dos verticales (01 y 04) y ocho apaisadas (03, 05, 06, 07, 08, 09 y 10).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `adrizale`, `la-talega` o `casa-loan`).
- El collage de portada usa la apaisada más ancha, la **07**, arriba y las verticales **01** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,7 MB a 2,1 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **07** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-restaurante-di-mari
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da dos turnos de lunes a sábado con el domingo solo al mediodía y el martes cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `bar-restaurante-di-mari.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
