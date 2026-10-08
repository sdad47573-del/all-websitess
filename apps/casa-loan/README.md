# Casa Loan

Web informativa de **Casa Loan**, bar restaurante en la **Calle de Ben Saprut, 2 · 23009 Jaén**, con teléfono 953 28 14 03.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Casa Loan                  |
| Dirección               | C. de Ben Saprut, 2 · 23009 Jaén |
| Teléfono                | +34 953 28 14 03           |
| Categorías de Google    | Bar restaurante, Bar, Cafetería, Restaurante |
| Valoración              | 4,6 sobre 5 con 586 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7859035, -3.776339      |
| Plus code               | Q6PF+9F Jaén               |
| Identificador del lugar | `ChIJSUEv1K3XbQ0RQWa5xxRt1O0` |
| Identificador de canal  | `/g/1hc23bqs9`             |
| Feature id              | `0xd6dd7add42f4149:0xedd46d14c7b96641` |
| Distintivo de la ficha  | Brunch                     |

El número de reseñas se escribe **«586 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. de Ben Saprut, 2»). En la web se desarrolla a **Calle de Ben Saprut, 2**, como en el resto del repositorio; el código postal 23009 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **cuatro categorías** —«Bar restaurante», «Bar», «Cafetería» y «Restaurante»— y ninguna declara un tipo de cocina concreto. `category` y `categories` recogen las cuatro en su orden, y **no se añade `servesCuisine`** a los datos estructurados porque ninguna de ellas es una cocina (a diferencia de `restaurante-ajonegro`, cuyo «Restaurante mediterráneo» sí lo era). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 9:00 – 16:30                    |
| Martes    | 9:00 – 16:30 · 20:00 – 24:00    |
| Miércoles | 9:00 – 16:30 · 20:00 – 24:00    |
| Jueves    | 9:00 – 16:30 · 20:00 – 24:00    |
| Viernes   | 9:00 – 16:30 · 20:30 – 24:00    |
| Sábado    | 13:00 – 16:30 · 20:30 – 24:00   |
| Domingo   | Cerrado                         |

Detalles que se trasladan tal cual a la web:

- **De lunes a sábado hay dos turnos**, mediodía y noche, **salvo el lunes**, que solo abre al mediodía (9:00 – 16:30).
- La **noche varía según el día**: de martes a jueves empieza a las 20:00 y el **viernes y el sábado a las 20:30**; el sábado, además, el mediodía empieza a las **13:00**.
- El turno de noche termina a las **24:00**, que en los datos estructurados se escribe como `closes: '00:00'`.
- **El domingo cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el domingo cerrado no genera ninguna entrada (**11 especificaciones** en total: una del lunes, dos por cada día de martes a sábado).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto al mediodía igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **fijo** (953 28 14 03), y así se publica: `phoneHref` usa `tel:+34953281403`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Una es de 4 sobre 5 y las otras dos de 5 sobre 5:

1. «Muy buena cocina y buen servicio os recomiendo las tostas están estupendas.» (4/5)
2. «Pedimos ensalada y tosta de solomillo con queso de cabra.» (5/5)
3. «Muy buena comida, los bocadillos y hamburguesas son deliciosos.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs casa-loan   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 casa-loan
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: tres apaisadas (01, 05 y 06), dos cuadradas (07 y 09) y cinco verticales (02, 03, 04, 08 y 10).
- El manifiesto de la descarga **no atribuye ninguna a un autor con nombre** (`author` vacío), así que las fotos **no llevan pie**.
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **5,0 MB a 2,2 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs casa-loan
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da dos turnos de lunes a sábado, con la noche a las 20:00 o 20:30 según el día, y cierra los domingos) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe ni las atribuye.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `casa-loan.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
