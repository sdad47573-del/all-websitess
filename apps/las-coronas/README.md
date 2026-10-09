# Restaurante Las Coronas

Web informativa de **Restaurante Las Coronas**, bistró mediterráneo en **Carrer Sant Pere, 45, 1 · 03590 Altea (Alicante)**, con teléfono 965 84 38 62.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Bitter** (títulos) y **Outfit** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                         |
| ----------------------- | --------------------------------------- |
| Nombre                  | Restaurante Las Coronas                 |
| Dirección               | Carrer Sant Pere, 45, 1 · 03590 Altea   |
| Teléfono                | +34 965 84 38 62                        |
| Categoría de Google     | Restaurante mediterráneo                |
| Valoración              | 4,7 sobre 5 con 287 reseñas             |
| Horario                 | Publicado (ver abajo)                   |
| Coordenadas             | 38.59296, -0.05484                      |
| Plus code               | HWVW+53 Altea                           |
| Identificador del lugar | `ChIJV1eZABEBYg0RD_a8-JN3_mo`           |
| Identificador de canal  | `/g/11g7nsj9tx`                         |
| Feature id              | `0xd62011100995757:0x6afe7793f8bcf60f`  |

El número de reseñas se escribe **«287 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Tercera web del grupo de Alicante fuera de Benidorm**, después de `mamma-p`: el local está en **Altea** (CP 03590). La provincia sigue siendo Alicante y la comunidad la Comunidad Valenciana, así que `geo.region` mantiene el código **`ES-A`**.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante mediterráneo», que alimenta `servesCuisine: ['Cocina mediterránea']`, como en `restaurante-club-de-mar` o `restaurante-alameda`. El `@type` es `Restaurant`, el del resto de webs del repositorio. Sin `priceRange` (la ficha no publica carta ni precios) y sin `sameAs` (sin web propia ni redes).

**La descripción del titular está en inglés.** Es la primera del grupo en otro idioma y se reproduce **literal**, sin traducirla, conservando su apóstrofo tipográfico («you’re») y su emoji («🍽️»):

```
Welcome to Restaurante Las Coronas, a cosy Mediterranean bistro in the heart of Altea. Enjoy premium steaks, fresh seafood, Mediterranean classics and seasonal specials in a warm and relaxed atmosphere. Whether you’re joining us for lunch, dinner or a special occasion, our friendly team looks forward to welcoming you. Reservations can be made via WhatsApp or by phone and are confirmed once you receive a confirmation from our team. We look forward to welcoming you to Las Coronas! 🍽️
```

**Menciona que se puede reservar por WhatsApp o teléfono**, y la ficha **no publica ningún número de WhatsApp**, solo el teléfono. La web lo recoge así: `acceptsReservations: true` se mantiene (como en el resto de webs del repositorio) y la pregunta frecuente «¿Se puede reservar?» explica el WhatsApp y el teléfono **sin inventar** un número que la ficha no da.

**Sin distintivo.** Google **no muestra ninguna etiqueta junto al nombre**, así que no existe la constante `distintivo` y la web no menciona ninguna.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha      |
| --------- | ----------------------------------- |
| Lunes     | 13:00 – 16:00 y 18:30 – 22:30       |
| Martes    | 13:00 – 16:00 y 18:30 – 22:30       |
| Miércoles | Cerrado                             |
| Jueves    | Cerrado                             |
| Viernes   | 13:00 – 16:00 y 18:30 – 22:30       |
| Sábado    | 13:00 – 16:00 y 18:30 – 22:30       |
| Domingo   | 13:00 – 16:00 y 18:30 – 22:30       |

Detalles que se trasladan tal cual a la web:

- **Dos turnos, de 13:00 a 16:00 y de 18:30 a 22:30**, de domingo a martes y de viernes a sábado. Cierra **miércoles y jueves**: es la segunda ficha del grupo con **dos días de cierre**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera **dos entradas** y los dos cerrados ninguna (**10 especificaciones** en total).
- **Dos marcas de festivo, ambas de aviso.** El **viernes 9** la ficha lo marca como **«Día de la Comunidad Valenciana: el horario podría ser diferente»** y el **lunes 12** como **«Fiesta Nacional de España: el horario podría ser diferente»**. Las dos son avisos de que el horario podría cambiar, así que se recogen igual, atribuidas a su día.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas.

### El teléfono

Es un **fijo de Altea** (965 84 38 62), y así se publica: `phoneHref` usa `tel:+34965843862`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación, **con la nota que publica cada una**:

1. «Excelente y deliciosa carta y menú diario, muy bien atendido.» (5/5)
2. «Muchas gracias lo hemos pasado muy bien.» (5/5)
3. «Pero no se ponen rojos cuando te cobran 1,60€» (**1/5**)

**Primera web del grupo con una reseña destacada de una estrella.** Se muestra con su nota real, sin omitirla ni matizarla, y la portada y las preguntas frecuentes la mencionan. Si el titular pide retirarla, hay que justificarlo aquí antes de hacerlo: no se oculta una reseña de la ficha sin indicación suya.

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs las-coronas   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 las-coronas
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **tres apaisadas** (02, 07 y 09), **seis verticales** (01, 03, 05, 06, 08 y 10) y **una cuadrada** (04, de 543 × 543). **Ninguna es panorámica.**
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `restaurante-podenco`, `gastro-bar-bo`, `daivel`, `pandokum-braseria`, `taberna-la-raquelita`, `restaurante-la-casuca` y `casa-loan`.
- El collage de portada usa la **apaisada 07** arriba (16/9) y las verticales **01** y **05** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,5 MB a 1,5 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-coronas-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **07** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs las-coronas
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Revisar la reseña de 1 sobre 5** que la ficha destaca, citada literal: decidir con el titular si se mantiene, porque no se retira sin su indicación.
3. **Decidir qué hacer con la descripción en inglés**: hoy se reproduce literal, sin traducir, con su emoji y su apóstrofo tipográfico.
4. **Confirmar la reserva por WhatsApp**: la descripción dice que se puede reservar así, pero la ficha no publica ningún número de WhatsApp. Si el titular facilita uno, se puede añadir; hoy la web remite al teléfono.
5. **Confirmar el horario** (dos turnos, miércoles y jueves cerrado) y el tratamiento de los dos festivos del 9 y el 12 de octubre.
6. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
7. Si el dominio final no es `las-coronas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
