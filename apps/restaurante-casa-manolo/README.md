# Restaurante Casa Manolo

Web informativa de **Restaurante Casa Manolo**, restaurante en la **Calle José de Ribera, 11 · 13005 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante Casa Manolo                  |
| Dirección               | C. José de Ribera, 11 · 13005 Ciudad Real |
| Categoría de Google     | Restaurante                              |
| Valoración              | 4,5 sobre 5 con 261 reseñas              |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9828453, -3.9389657                   |
| Plus code               | X3M6+4C Ciudad Real                      |
| Identificador del lugar | `ChIJxcioIw3Daw0RxTERA-sSMfI`            |
| Identificador de canal  | `/g/11cnsf2ykc`                          |
| Feature id              | `0xd6bc30d23a8c8c5:0xf23112eb031131c5`   |

El número de reseñas se escribe **«261 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. José de Ribera, 11»). En la web se desarrolla a **Calle José de Ribera, 11**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 13005 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**: como en el resto del repositorio, solo se añade si alguna categoría declara una cocina real. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

## Sin teléfono en toda la web

**La ficha de Google Maps de este local no publica teléfono**: Google muestra la sugerencia «Añadir teléfono» (lo mismo con «Añadir sitio web»), que confirma que el negocio no lo ha facilitado. Como la norma del repositorio es no inventar datos, **esta web no muestra ningún teléfono** en ninguna parte:

- No hay `phone` ni `phoneHref` en `src/data/site.ts`.
- El **CTA principal del hero** y el botón fijo de móvil (`.mobile-cta`, antes `.mobile-call`) abren **Cómo llegar** en Google Maps en lugar de llamar.
- El **JSON-LD** no incluye `telephone`, y el `og:phone_number` de Open Graph se ha omitido.
- El **aviso legal** no tiene la línea «Teléfono», y una de las preguntas frecuentes explica que la ficha no lo publica.

Es la primera web de este repositorio que se hace sin teléfono porque la ficha no lo trae.

**Distintivo y descripción.** Google no muestra ninguna etiqueta junto al nombre en esta ficha y la descripción del titular viene vacía, así que no hay `distintivo` ni `descripcionLocal`, y la portada no los menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 7:30 – 24:00                   |
| Martes    | 7:30 – 24:00                   |
| Miércoles | 7:30 – 24:00                   |
| Jueves    | 7:30 – 24:00                   |
| Viernes   | 7:30 – 24:00                   |
| Sábado    | 8:00 – 24:00                   |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **Horario continuo de 7:30 a 24:00** de lunes a viernes.
- **El sábado abre desde las 8:00.**
- **El domingo cierra.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día abierto genera una entrada y el domingo ninguna (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una sola entrada**, y figura como disponible: los **asientos** adaptados para sillas de ruedas. No publica ninguna otra (esta ficha **no** incluye el acceso ni el aseo adaptados, que sí aparecen en otras del repositorio).

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la tercera escribe «frias» sin tilde). Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Pedimos sus famosas tapas de oreja y callos y quedamos encantados!!!» (5/5)
2. «Cerveza fresquita, tapas correctas» (4/5)
3. «Para cenar unas cervezas frias y unas raciones.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-casa-manolo   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-casa-manolo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: nueve verticales (01, 02, 03, 04, 06, 07, 08, 09 y 10) y una sola apaisada (05).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `adrizale`, `la-talega`, `casa-loan` y `taberna-la-raquelita` del repositorio.
- El collage de portada usa la única apaisada, la **05**, arriba y las verticales **01** y **02** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **4,0 MB a 1,3 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-casa-manolo-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la única foto apaisada, la **05** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-casa-manolo
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da servicio continuo de 7:30 a 24:00, el sábado desde las 8:00 y el domingo cerrado) y ajustar `hours` si procede.
3. **Decidir un teléfono de contacto.** La ficha no publica ninguno, así que la web va sin teléfono. Si el titular quiere uno, hay que añadirlo a `src/data/site.ts` (`phone` y `phoneHref`), al CTA del hero, al aviso legal y al JSON-LD, además de reactivar el `og:phone_number`.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
6. Si el dominio final no es `restaurante-casa-manolo.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
