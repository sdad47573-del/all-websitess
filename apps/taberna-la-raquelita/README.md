# Taberna La Raquelita

Web informativa de **Taberna La Raquelita**, taberna en la **Avenida Tablas de Daimiel, 25 · 13004 Ciudad Real**, con teléfono 926 92 02 95.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                         |
| ----------------------- | --------------------------------------- |
| Nombre                  | Taberna La Raquelita                    |
| Dirección               | Av. Tablas de Daimiel, 25 · 13004 Ciudad Real |
| Teléfono                | +34 926 92 02 95                        |
| Categoría de Google     | Taberna                                 |
| Valoración              | 4,5 sobre 5 con 710 reseñas             |
| Horario                 | Publicado (ver abajo)                   |
| Coordenadas             | 38.9781073, -3.9247001                  |
| Plus code               | X3HG+64 Ciudad Real                     |
| Identificador del lugar | `ChIJDdsF6j3Daw0RdOiFMDRi10U`           |
| Identificador de canal  | `/g/11c5b27blc`                         |
| Feature id              | `0xd6bc33dea05db0d:0x45d762343085e874`  |

El número de reseñas se escribe **«710 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. Tablas de Daimiel, N°25»). En la web se desarrolla a **Avenida Tablas de Daimiel, 25**, como el resto de direcciones del repositorio (donde «Av.» pasa a «Avenida» y «C.» a «Calle»); el código postal 13004 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Taberna», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**: como en el resto del repositorio, solo se añade si alguna categoría declara una cocina real. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Distintivo «Brunch».** Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge como dato (`distintivo`) y la portada la menciona **tal cual**, sin ampliarla ni interpretarla: no se afirma que se sirva brunch a ninguna hora concreta. La sección de preguntas frecuentes incluye una respuesta que remite al teléfono para ese detalle.

**Descripción del titular.** La ficha publica una descripción escrita por el propio negocio: «Restaurante La Raquelita con carta, habitualmente sugerencias fuera de carta y menú del día entre semana.» Se reproduce **literal** (`descripcionLocal`), sin corregirla: en ella el local se llama a sí mismo «Restaurante La Raquelita», mientras el nombre de la ficha es «Taberna La Raquelita». Esa diferencia se conserva a propósito.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 9:00 – 17:00 · 19:30 – 24:00   |
| Miércoles | 9:00 – 17:00                   |
| Jueves    | 9:00 – 17:00 · 19:30 – 24:00   |
| Viernes   | 9:00 – 17:00 · 19:30 – 24:00   |
| Sábado    | 9:00 – 17:00 · 19:30 – 24:00   |
| Domingo   | 9:00 – 17:00                   |

Detalles que se trasladan tal cual a la web:

- **Diurno de 9:00 a 17:00** todos los días que abre.
- **Segundo turno de 19:30 a 24:00** de martes a sábado.
- **El miércoles y el domingo cierran por la noche** (solo el turno de 9:00 a 17:00).
- **El lunes cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los días de dos turnos generan dos entradas, el miércoles y el domingo una cada uno y el lunes cerrado ninguna (**10 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### El teléfono

Es un **fijo** (926 92 02 95), y así se publica: `phoneHref` usa `tel:+34926920295`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Pedimos ensalada miel mostaza, chipirones y croquetas.» (5/5)
2. «Buen servicio, profesionalidad, buena cocina y restaurante muy coqueto» (5/5)
3. «Buena atención de Javi y su equipo y buena comida y tapeo» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs taberna-la-raquelita   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 taberna-la-raquelita
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete verticales (01, 03, 05, 06, 07, 08 y 10) y tres apaisadas (02, 04 y 09).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `adrizale`, `la-talega` y `casa-loan` del repositorio.
- El collage de portada usa la apaisada **02** arriba y las verticales **01** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,8 MB a 2,2 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-raquelita-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs taberna-la-raquelita
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da diurno de 9:00 a 17:00 todos los días que abre, cenas de martes a sábado y el lunes cerrado) y ajustar `hours` si procede.
3. **Comprobar el distintivo «Brunch»** y qué se sirve realmente, ya que la ficha lo muestra junto al nombre pero no detalla horario ni carta.
4. Revisar la **descripción del titular**, que llama al local «Restaurante La Raquelita» mientras la ficha lo llama «Taberna»: decidir si se mantiene literal o se ajusta.
5. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
6. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
7. Si el dominio final no es `taberna-la-raquelita.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
