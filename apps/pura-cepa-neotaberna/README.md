# Pura Cepa Neotaberna

Web informativa de **Pura Cepa Neotaberna**, restaurante en la **Avenida Torreón del Alcázar, 9 · 13004 Ciudad Real**, con teléfono 926 00 21 03.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Pura Cepa Neotaberna                     |
| Dirección               | Av. Torreón del Alcázar, 9 · 13004 Ciudad Real |
| Teléfono                | +34 926 00 21 03                         |
| Categorías de Google    | Restaurante · Restaurante mediterráneo   |
| Valoración              | 4,2 sobre 5 con 2.070 reseñas            |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9846424, -3.9224299                   |
| Plus code               | X3MH+V2 Ciudad Real                      |
| Identificador del lugar | `ChIJL6nyoEDDaw0RYgXn-fH9awU`            |
| Identificador de canal  | `/g/11cjk57fkx`                          |
| Feature id              | `0xd6bc340a0f2a92f:0x56bfdf1f9e70562`    |

El número de reseñas se escribe **«2.070 reseñas»** y la valoración con coma decimal («4,2»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. Torreón del Alcázar, 9»). En la web se desarrolla a **Avenida Torreón del Alcázar, 9**, como el resto de direcciones del repositorio (donde «Av.» pasa a «Avenida»); el código postal 13004 y el municipio (Ciudad Real) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías**: «Restaurante» y «Restaurante mediterráneo». `category` recoge la primera y `categories` las dos, como en `restaurante-alameda` y `restaurante-casa-daoiz`, que tienen exactamente el mismo par. `servesCuisine` traduce solo la que declara una cocina real: `['Mediterránea']`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Descripción del titular.** La ficha publica una descripción escrita por el propio negocio: «Pura Cepa Neotaberna está situado en una de las mejores zonas de ambiente de Ciudad Real. Entre nuestras especialidades jamones carnes, mariscos, chafinas. Disponemos de una amplia terraza, un reservado, comedor para 40 personas y una barra donde poder degustar nuestras especialidades. Esperamos verlos pronto.!!!». Se reproduce **literal** (`descripcionLocal`), sin corregirla: conserva la enumeración «jamones carnes, mariscos, chafinas» y los tres signos de cierre finales.

**Distintivo «Brunch».** Google muestra junto al nombre la etiqueta **«Brunch»**. Se recoge como dato (`distintivo`) y la portada la menciona **tal cual**, sin ampliarla ni interpretarla: no se afirma que se sirva brunch a ninguna hora concreta. La sección de preguntas frecuentes incluye una respuesta que remite al teléfono para ese detalle.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 8:00 – 24:00                   |
| Martes    | 8:00 – 24:00                   |
| Miércoles | 8:00 – 24:00                   |
| Jueves    | 8:00 – 24:00                   |
| Viernes   | 8:00 – 24:00                   |
| Sábado    | 8:00 – 24:00                   |
| Domingo   | 8:00 – 24:00                   |

Detalles que se trasladan tal cual a la web:

- **El mismo tramo los siete días: de 8:00 a 24:00**, sin día de cierre.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día genera una entrada (**7 especificaciones** en total).
- El cierre a las 24:00 se escribe como **00:00** en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**. Tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. La cuarta, el **aparcamiento adaptado para sillas de ruedas**, figura como **no disponible**. Es la primera web del repositorio con una entrada de accesibilidad negativa, así que `accesibilidad` incluye `disponible: false` y la lista la marca con una ✕ en gris en vez del ✓ de color vino.

### El teléfono

Es un **fijo** (926 00 21 03), y así se publica: `phoneHref` usa `tel:+34926002103`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 4 sobre 5 y una de 5 sobre 5:

1. «Buena comida, cerveza fría, camareros amables y sol... ¿qué más puedes pedir?» (4/5)
2. «Platos elaborados, buena atención y raciones generosas» (4/5)
3. «Fuimos 4 amigos y pedimos chuletón, tomatada, pulpo y cococha de merluza.» (5/5)

**Comillas quitadas.** Google guarda aquí cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs pura-cepa-neotaberna   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 pura-cepa-neotaberna
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis verticales (01, 02, 03, 04, 06 y 07) y cuatro apaisadas (05, 08, 09 y 10), una de ellas panorámica.
- **Las diez van atribuidas al propio local** (`author` = «Pura Cepa Neotaberna»), así que cada foto de la galería lleva su pie «Foto de Pura Cepa Neotaberna», como en `asador-de-camilo`. La ficha no describe el contenido de las fotos, así que no se inventa ninguna descripción y los `alt` solo avisan de dónde salen.
- El collage de portada usa la apaisada **09** arriba (16/9) y las verticales **01** y **03** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **5,4 MB a 2,4 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-puracepa-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **09** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs pura-cepa-neotaberna
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (8:00 a 24:00 los siete días, sin cierre semanal) y ajustar `hours` si procede.
3. **Comprobar el distintivo «Brunch»** y qué se sirve realmente, ya que la ficha lo muestra junto al nombre pero no detalla horario ni carta.
4. Revisar la **descripción del titular** («jamones carnes, mariscos, chafinas» y los tres signos de cierre): decidir si se mantiene literal o se ajusta.
5. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
6. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
7. Si el dominio final no es `pura-cepa-neotaberna.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
