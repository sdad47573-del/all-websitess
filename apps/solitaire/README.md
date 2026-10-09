# Solitaire

Web informativa de **Solitaire**, restaurante de **Calle Palma, 16 · 13001 Ciudad Real**, con teléfono 617 47 60 35.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio. Las palabras en árabe de la descripción del titular se dejan caer a la fuente de sistema.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Solitaire                                |
| Dirección               | C. Palma, 16 · 13001 Ciudad Real         |
| Teléfono                | +34 617 47 60 35                         |
| Categoría de Google     | Restaurante especializado en barbacoa    |
| Valoración              | 4,9 sobre 5 con 88 reseñas               |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9832211, -3.9256744                   |
| Plus code               | X3MF+7P Ciudad Real                      |
| Identificador del lugar | `ChIJrZXEKQDDaw0RHTj41yNBGMQ`            |
| Identificador de canal  | `/g/11xd8vf628`                          |
| Feature id              | `0xd6bc30029c495ad:0xc4184123d7f8381d`   |

El número de reseñas se escribe **«88 reseñas»** y la valoración con coma decimal («4,9»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Palma, 16»). En la web se desarrolla a **Calle Palma, 16**, como el resto de direcciones del repositorio; el código postal 13001 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante especializado en barbacoa». Como «barbacoa» ya está en español, se publica tal cual y alimenta `servesCuisine: ['Barbacoa']`, del mismo modo que `asador-de-camilo` traduce su categoría «Parrilla». El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Descripción del titular.** La ficha publica una descripción escrita por el propio negocio: «Restaurante árabe con comida al carbón y Cafeteria. Halal», este último término escrito también en árabe. Se reproduce **literal** (`descripcionLocal`), sin corregirla: en ella el local escribe «Cafeteria» sin tilde. Esa redacción se conserva a propósito.

**Sin distintivo.** A diferencia de otras fichas del repositorio, aquí Google **no muestra ninguna etiqueta** junto al nombre, así que no hay `distintivo` y la portada no menciona ninguno.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 7:30 – 16:30 · 18:00 – 23:30   |
| Martes    | 7:30 – 23:30                   |
| Miércoles | 7:30 – 23:30                   |
| Jueves    | 7:30 – 23:30                   |
| Viernes   | 7:30 – 23:30                   |
| Sábado    | 7:30 – 24:00                   |
| Domingo   | 7:30 – 24:00                   |

Detalles que se trasladan tal cual a la web:

- **Abre todos los días a las 7:30.**
- **De martes a viernes cierra a las 23:30.**
- **El sábado y el domingo cierra a las 24:00.**
- **El lunes hace una pausa de 16:30 a 18:00** y vuelve hasta las 23:30.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que solo el lunes genera dos entradas y el resto una (**8 especificaciones** en total).
- El cierre a las 24:00 se escribe como **00:00** en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una sola entrada**, y figura como disponible: el **acceso** para sillas de ruedas. No publica ninguna otra.

### El teléfono

Es un **móvil** (617 47 60 35), y así se publica: `phoneHref` usa `tel:+34617476035`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Hay que esperar un poco: te pides un aperitivo exótico y esperas tan a gusto.» (5/5)
2. «Comida muy rica de calidad, no es el típico kebab.» (5/5)
3. «La comida estaba absolutamente deliciosa, fresca y llena de sabor.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs solitaire           # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 solitaire
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 03, 06 y 08), cinco verticales (02, 04, 07, 09 y 10) y una **casi cuadrada** (05, de 1179 × 1367).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `taberna-la-raquelita`, `la-talega` y `casa-loan` del repositorio.
- El collage de portada usa la apaisada **01** arriba (16/9) y las verticales **02** y **04** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **5,1 MB a 1,8 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-solitaire-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs solitaire
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da apertura a las 7:30 todos los días, cierre a las 23:30 de martes a viernes, a las 24:00 el fin de semana y la pausa del lunes de 16:30 a 18:00) y ajustar `hours` si procede.
3. Revisar la **descripción del titular**, que escribe «Cafeteria» sin tilde y cierra con «Halal» en árabe: decidir si se mantiene literal (`descripcionLocal`) o se ajusta.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
6. Si el dominio final no es `solitaire.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
