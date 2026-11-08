# Nueva vida

Web informativa de **Nueva vida** (también «New Life»), restaurante italiano de cocina casera en la **Avenida de la Armada Española, 5 · 03502 Benidorm** (Alicante), con teléfono 611 49 92 20.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Nueva vida                             |
| Dirección               | Av. de la Armada Española, 5 · 03502 Benidorm |
| Teléfono                | +34 611 49 92 20                       |
| Categoría de Google     | Restaurante                            |
| Distintivo              | Se admiten perros                      |
| Valoración              | 5 sobre 5 con 5 reseñas                |
| Horario                 | 9:00 – 24:00 (ver abajo)               |
| Coordenadas             | 38.5373412, -0.1402495                 |
| Plus code               | GVP5+WW Benidorm                       |
| Identificador del lugar | `ChIJG3lPokMFYg0Rw9D3GFXfOw0`          |
| Identificador de canal  | `/g/11nvygdb47`                        |
| Feature id              | `0xd620543a24f791b:0xd3bdf5518f7d0c3`  |

La valoración se escribe con coma decimal y el número de reseñas con separador de miles; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. de la Armada Española, 5»). En la web se desarrolla a **Avenida de la Armada Española, 5**, como en el resto del repositorio; el código postal 03502 y el municipio (Benidorm) se publican tal cual.

**Categoría y `servesCuisine`.** Google solo publica **una categoría genérica**, «Restaurante», sin cocina declarada. La cocina italiana sale de la **descripción del titular** («restaurante italiano con cocina casera, pasta fresca, pizzas artesanales al horno…»), y de ahí sale `servesCuisine: ['Cocina italiana']`. Es el mismo criterio que en otras fichas del repositorio donde la cocina solo consta en el texto del titular: no se inventa ninguna categoría que Google no publique. El `@type` es `Restaurant`, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Se admiten perros»

Google muestra junto al nombre la etiqueta **«Se admiten perros»**, el distintivo que publica esta ficha. Se recoge como dato, se menciona en la franja de datos de la portada y tiene su propia pregunta frecuente, sin ampliarlo ni interpretarlo.

### La descripción del titular

La ficha trae un texto escrito por el propio negocio y se reproduce **literal**, con sus minúsculas iniciales y su puntuación original (escribe «italia» en minúscula y alterna el nombre del local: «Nueva Vida- New Life»). Se pinta con `white-space: pre-line`, así que se ve como lo escribió el titular.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 9:00 – 24:00                   |
| Miércoles | 9:00 – 24:00                   |
| Jueves    | 9:00 – 24:00                   |
| Viernes   | 9:00 – 1:00                    |
| Sábado    | 9:00 – 1:30                    |
| Domingo   | 9:00 – 24:00                   |

Detalles que se trasladan tal cual a la web:

- **Abre de 9:00 a 24:00 de martes a domingo**, con **horario continuo** (sin cierre de mediodía).
- **El viernes cierra a la 1:00 y el sábado a la 1:30**, es decir, de madrugada.
- **El lunes cierra** todo el día.
- El cierre a las 24:00 se escribe como `closes: '00:00'` en los datos estructurados, como en el resto del repositorio; los cierres de madrugada, como `'01:00'` y `'01:30'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: **6 especificaciones** (el lunes cerrado no genera ninguna).
- La respuesta trae el aviso **«Fiesta Nacional de España: el horario podría ser diferente»** junto al lunes (12 de octubre). Se recoge en el texto de la sección de horario (constante `avisoFestivo`) y **no cambia la tabla**.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos adaptados para sillas de ruedas**. Es la ficha del repositorio con más servicios de este grupo.

### El teléfono

Es un **móvil** (611 49 92 20), y así se publica: `phoneHref` usa `tel:+34611499220`. La ficha no publica ningún otro número.

### Las reseñas: ninguna destacada

Aquí está la particularidad de esta ficha: **Google publica la nota media pero no destaca el texto de ninguna reseña** (el bloque de reseñas destacadas llegó vacío en la consulta), así que:

- `reviews` está **vacío** en `src/data/site.ts` y la portada **no cita ninguna reseña**.
- En su lugar, la columna de reseñas muestra una nota que explica de dónde sale la valoración y enlaza al **listado público de reseñas** de la ficha.
- La valoración agregada (**5 sobre 5**) sí se publica en los datos estructurados, con su número de reseñas (**5**).
- La web advierte expresamente de que **son muy pocas reseñas**, así que la nota hay que leerla con cautela. Es un caso distinto al de las demás webs del repositorio, donde la ficha siempre destacaba dos o tres reseñas literales.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs nueva-vida   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 nueva-vida
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías distintas** (los diez ficheros tienen MD5 distinto): verticales 01, 02, 03, 06, 07 y 09, y vistas 04, 05, 08 y 10.
- **Ninguna es apaisada**: todas son verticales (proporción 0,75) o casi cuadradas. Es la primera ficha así en el repositorio.
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Nueva vida»), así que cada foto de la galería lleva su pie «Foto de Nueva vida».
- El collage de portada no puede usar una apaisada real: el hueco de arriba (16/9) va con la **vista 10**, la más cuadrada de todas (2509 × 2456), y los dos huecos inferiores con las verticales **01** y **06**, que ya encajan en la proporción 4/5 del repositorio. La galería va en tres columnas.
- Tras optimizar (lado máximo 1600 px), las diez fotos bajan de **5,7 MB a 2,6 MB** (−55 %); los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630, ≈153 KB) es un recorte centrado de la **vista 10**, la foto más cuadrada, porque no hay ninguna apaisada que recortar a 16/9 sin perder mucho encuadre.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs nueva-vida
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (abre de 9:00 a 24:00, viernes hasta la 1:00 y sábado hasta la 1:30, lunes cerrado) y el aviso de festivo del 12 de octubre, y ajustar `hours` si procede.
3. **Confirmar la cocina**: la ficha de Google solo dice «Restaurante»; la italiana es lo que cuenta el propio titular en su descripción. Conviene validarlo con el local antes de publicar.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Si el dominio final no es `nueva-vida.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
