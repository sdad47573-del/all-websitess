# Bar de Esteban

Web informativa de **Bar de Esteban**, bar de cocina castellana en la **Calle Xauen, 27 · 13004 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Bar de Esteban                           |
| Dirección               | C. Xauen, 27 · 13004 Ciudad Real         |
| Categoría de Google     | Restaurante de cocina castellana         |
| Valoración              | 4,6 sobre 5 con 149 reseñas              |
| Teléfono                | 653 77 45 46 (móvil)                     |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9773179, -3.9265927                   |
| Plus code               | X3GF+W9 Ciudad Real                      |
| Identificador del lugar | `ChIJY56hluDDaw0RhmKCbZiPbBE`            |
| Identificador de canal  | `/g/11gxmv2xmr`                          |
| Feature id              | `0xd6bc3e096a19e63:0x116c8f986d826286`   |

El número de reseñas se escribe **«149 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Xauen, 27»). En la web se desarrolla a **Calle Xauen, 27**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 13004 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante de cocina castellana», así que `servesCuisine` se traduce a `['Castellana']`, como en `los-mena`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **653 77 45 46**, y por su prefijo es un **móvil**: se publica como **+34 653 77 45 46** y el enlace de llamada es `tel:+34653774546`.

**Distintivo.** Google muestra junto al nombre la etiqueta **«Brunch»**, la única de ese tipo en la ficha. Se recoge tal cual, sin interpretarla.

### La descripción del titular

La ficha publica una descripción escrita por el propio negocio, que se reproduce **literal** en seis líneas (se conservan los saltos con `.descripcion` y `white-space: pre-line`). Se copia sin corregir la falta de tilde en «menu» ni cambiar el símbolo «€»:

```text
Bar casa Esteban
comidas caseras manchegas. potajes, cocido
menu semanal 10€
menu fin de semana y fiestas 14€
raciones variadas
comidas de encargo hechas en puchero y a fuego de leña
```

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 8:00 – 24:00                   |
| Martes    | Cerrado                        |
| Miércoles | 8:00 – 24:00                   |
| Jueves    | 8:00 – 24:00                   |
| Viernes   | 8:00 – 24:00                   |
| Sábado    | 8:00 – 24:00                   |
| Domingo   | 8:00 – 24:00                   |

Detalles que se trasladan tal cual a la web:

- **Horario continuo de 8:00 a 24:00** todos los días salvo el **martes**, que cierra.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día abierto genera una entrada y el martes ninguna (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y las dos figuran como disponibles: el **acceso** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Excelente cocido, cerveza muy fría y las empanadillas picantes riquísimas» (5/5)
2. «Tiene un menú variado con producto de la tierra y opciones de pescado.» (5/5)
3. «Está todo buenísimo y los dueños encantadores» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-de-esteban   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 bar-de-esteban
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete verticales (01, 02, 03, 05, 06, 08 y 09), dos apaisadas (04 y 10) y una panorámica (07).
- El manifiesto de la descarga **atribuye las diez al propio negocio** (`author` = «Bar de Esteban»), así que cada foto de la galería lleva su pie «Foto de Bar de Esteban».
- El collage de portada usa la panorámica, la **07**, arriba y las verticales **05** y **06** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **4,0 MB a 1,5 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-bar-esteban-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica, la **07** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-de-esteban
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da servicio continuo de 8:00 a 24:00 y cierra los martes) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `bar-de-esteban.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
