# Restaurante Peter

Web informativa de **Restaurante Peter**, restaurante mediterráneo en la **Avenida de la Marina Baixa, 6 · 03509 Benidorm (Alicante)**, con teléfono 680 42 15 03.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante Peter                      |
| Dirección               | Av. de la Marina Baixa, 6 · 03509 Cala De |
| Teléfono                | +34 680 42 15 03 (móvil)               |
| Categoría de Google     | Restaurante mediterráneo               |
| Valoración              | 4,5 sobre 5 con 2.428 reseñas          |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.5248127, -0.1657927                 |
| Plus code               | GRFM+WM Benidorm                       |
| Identificador del lugar | `ChIJ7XYHB98aYg0RMy2TOHnFmEM`          |
| Identificador de canal  | `/g/11bw673j76`                        |
| Feature id              | `0xd621adf070776ed:0x4398c57938932d33` |

El número de reseñas se escribe **«2.428 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. La portada, eso sí, lleva su `meta description` escrita a mano para poder medir su longitud; es el único sitio donde «4,5» y «2.428» aparecen literalmente.

**Respuesta incompleta en el primer intento.** La primera descarga llegó con la ficha a medias (solo el horario del día en curso y sin reseñas). Se reintentó hasta obtener una respuesta completa, de unos 30 KB, con la descripción del titular, el horario con los siete días y las tres reseñas que se citan abajo. La web usa la respuesta completa.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. de la Marina Baixa, 6»). En la web se desarrolla a **Avenida de la Marina Baixa, 6**, como en el resto del repositorio; el código postal 03509 se publica tal cual.

**La localidad truncada («Cala De»).** Google guarda el municipio como **«Cala De»**, un componente truncado del barrio de **La Cala** (en el límite entre Benidorm y Finestrat). El plus code que publica la misma ficha se resuelve como **GRFM+WM Benidorm**, así que la web publica **Benidorm** y deja anotado el componente truncado. El caso es el mismo que el de `gastro-bar-bo`, que está en la misma avenida unos números más abajo y también documenta ese «Cala de». Conviene confirmarlo con el titular (ver «Pendiente antes de publicar»).

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante mediterráneo», que ya declara una cocina, así que `servesCuisine` se rellena como **`['Cocina mediterránea']`** (igual que en `bar-restaurante-grand-pere`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin distintivo

La ficha **no muestra ninguna etiqueta junto al nombre**, así que no hay constante `distintivo` y la portada no menciona ninguna (el caso mayoritario del repositorio).

### Descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en la sección «La casa», sin corregir su redacción ni su puntuación (conserva «10.00», «13,00» y «domigo»):

> Horario de reservas de 10.00 a 13,00 de miércoles a domigo preferiblemente por WhatsApp

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | Cerrado                        |
| Miércoles | 13:00 – 16:00                  |
| Jueves    | 13:00 – 16:00                  |
| Viernes   | 13:00 – 16:00                  |
| Sábado    | 13:00 – 16:00                  |
| Domingo   | 13:00 – 16:00                  |

Detalles que se trasladan tal cual a la web:

- Sirve **comidas de 13:00 a 16:00 de miércoles a domingo** y **cierra los lunes y los martes**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los dos días cerrados no generan ninguna entrada (**5 especificaciones** en total).
- La **descripción del titular** añade un horario de reservas (10:00 a 13:00 de miércoles a domingo, preferiblemente por WhatsApp) que **no es el de apertura**: se recoge en la nota de la sección de horario y en su pregunta frecuente, sin mezclarlo con la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas** figuran como disponibles, y el **aparcamiento adaptado para sillas de ruedas**, como **no disponible** (es la única que Google marca en negativo, y así se enseña, con su aspa). No publica ninguna otra.

### El teléfono

Es un **móvil** (680 42 15 03), y así se publica: `phoneHref` usa `tel:+34680421503`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la tercera repite «y y»). Dos son de 5 sobre 5 y una de 2 sobre 5:

1. «El arroz estaba buenísimo, el marisco muy bueno, las frituras muy ricas.» (5/5)
2. «Tres entrantes exquisitos: croquetas, pescadito frito y ensalada con frutas.» (5/5)
3. «Los camareros trabajan a toda pastilla y y son educados y eficaces.» (2/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-peter   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-peter
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas (01, 04, 05, 07 y 08), dos verticales (02 y 09), una cuadrada (06) y dos de proporción casi cuadrada que el script nombra `vista` (03 y 10).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante Peter»), así que cada foto de la galería lleva su pie «Foto de Restaurante Peter».
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **09** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **5,4 MB a 2,8 MB**; los `bytes` se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-peter
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular la localidad**: Google guarda «Cala De» (barrio de La Cala, entre Benidorm y Finestrat) y el plus code dice Benidorm; aquí se publica Benidorm y se deja anotado el componente truncado.
3. **Confirmar con el titular el horario** (la ficha da comidas de 13:00 a 16:00 de miércoles a domingo) y ajustar `hours` si procede.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos, que la ficha no detalla.
6. Si el dominio final no es `restaurante-peter.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
