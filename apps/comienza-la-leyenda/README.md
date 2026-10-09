# Comienza la Leyenda

Web informativa de **Restaurante-cafetería Comienza la Leyenda**, restaurante mediterráneo con amplia terraza en la **C. del Sauce, 42 · 30320 Fuente Alamo** (Murcia), con teléfono 968 59 66 98.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                    |
| ----------------------- | ---------------------------------- |
| Nombre                  | Restaurante-cafetería Comienza la Leyenda |
| Dirección               | C. del Sauce, 42 · 30320 Fuente Alamo |
| Teléfono                | +34 968 59 66 98                   |
| Categorías de Google    | Restaurante, Restaurante mediterráneo |
| Valoración              | 4,7 sobre 5 con 703 reseñas        |
| Distintivo              | Brunch                             |
| Horario                 | Publicado (ver abajo)              |
| Coordenadas             | 37.7137442, -1.1744465             |
| Plus code               | PR7G+F6 Fuente Alamo               |
| Identificador del lugar | `ChIJwbvi6IFhYw0RZ8NsmsI5yq8`      |
| Identificador de canal  | `/g/11f3xnnw1_`                    |
| Feature id              | `0xd636181e8e2bbc1:0xafca39c29a6cc367` |

El número de reseñas se escribe **«703 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Nombre.** Google publica el nombre compuesto «Restaurante-cafetería Comienza la Leyenda», y se reproduce entero; el rótulo corto de la cabecera es «Comienza la Leyenda».

**Dirección y municipio.** Google publica «C. del Sauce, 42» y el municipio **«Fuente Alamo», sin la tilde** que lleva el topónimo oficial (Fuente Álamo de Murcia). Se reproduce literal, como el resto de datos de la ficha, y no se corrige.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías** —«Restaurante» (la primera, que hace de categoría principal) y «Restaurante mediterráneo»—, así que el `@type` es `Restaurant`, con `servesCuisine` **Mediterránea**, que sí está declarada. Se mantiene `acceptsReservations: true` como en el resto de webs del repositorio. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### La descripción del titular

La ficha publica una **descripción firmada por el propio local**, y se cita literal (sin corregir su puntuación ni el «purificar» por «purificador»):

> El restaurante dispone de un purificar del aire que limpia el ambiente al 99% los sábados hacemos menú especial, y en la semana tenemos menú del día y aparte hacemos puntas de bocadillo de todo tipo, el local dispone de una amplia terraza.

Es el texto que el titular escribe en su perfil, así que la sección «La casa» lo muestra en un bloque propio rotulado «Descripción de la ficha».

### El distintivo

Google muestra junto al nombre el distintivo **«Brunch»**, el único de ese tipo que publica la ficha. Se recoge tal cual, sin ampliarlo ni interpretarlo, y tiene su propia pregunta en las FAQ.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 7:00 – 16:30                   |
| Martes    | 7:00 – 16:30                   |
| Miércoles | 7:00 – 16:30                   |
| Jueves    | 7:00 – 16:30                   |
| Viernes   | 7:00 – 16:30                   |
| Sábado    | 7:30 – 16:00                   |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **De lunes a viernes abre de 7:00 a 16:30**, con **horario continuado**.
- Los **sábados** abre algo más tarde y cierra antes: **7:30 – 16:00**.
- **Los domingos cierra**; es el único día de cierre.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el domingo cerrado no genera ninguna entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos adaptados para sillas de ruedas**.

### El teléfono

Es un **fijo** (968 59 66 98), y así se publica: `phoneHref` usa `tel:+34968596698`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera termina sin punto). Una es de 5 sobre 5, otra de 4 y otra de 3:

1. «Bocadillos muy ricos y con opción sin gluten que agradecemos mucho los celíacos» (5/5)
2. «Unos bocatas deliciosos para almorzar, recomiendo el de buey» (3/5)
3. «También puso unas empanadillas fritas que estaban muy ricas.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs comienza-la-leyenda   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 comienza-la-leyenda
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 02, 03 y 04) y seis verticales (05 a 10).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante-cafetería Comienza la Leyenda»), así que cada foto de la galería lleva su pie «Foto de Restaurante-cafetería Comienza la Leyenda».
- El collage de portada usa la apaisada **01** arriba y las verticales **05** y **06** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **3,2 MB a 1,9 MB**; los `bytes` se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs comienza-la-leyenda
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da apertura de lunes a sábado, con cierre los domingos) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `comienza-la-leyenda.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
