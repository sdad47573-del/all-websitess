# Mesón El Polígono

Web informativa de **Mesón El Polígono**, bar restaurante en el **Polígono la Estrella, Calle Segadores, 2 · 13170 Miguelturra** (Ciudad Real).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Mesón El Polígono                        |
| Dirección               | Polígono la Estrella, C. Segadores, 2 · 13170 Miguelturra |
| Categoría de Google     | Bar restaurante                          |
| Valoración              | 4,7 sobre 5 con 255 reseñas              |
| Teléfono                | 926 09 02 23 (fijo)                      |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9699673, -3.8996377                   |
| Plus code               | X492+X4 Miguelturra                      |
| Identificador del lugar | `ChIJRd7TK9Hcaw0RxHJng60yvF0`            |
| Identificador de canal  | `/g/11hbqck1h7`                          |
| Feature id              | `0xd6bdcd12bd3de45:0x5dbc32ad836772c4`   |

El número de reseñas se escribe **«255 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** La ficha publica la dirección en el orden «Polígono la Estrella, C. Segadores, 2, 13170 Miguelturra, Cdad. Real». En la web se desarrolla la abreviatura a **Calle Segadores, 2** y se conserva el nombre del polígono delante, como en las demás webs del repositorio que están en un polígono (por ejemplo `restaurante-asador-los-olivares`); el código postal 13170 y el municipio (Miguelturra) se publican tal cual, sin abreviar «Cdad. Real» a «Ciudad Real» en la dirección, sino como provincia.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Bar restaurante», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **926 09 02 23**, y por su prefijo es un **fijo**: se publica como **+34 926 09 02 23** y el enlace de llamada es `tel:+34926090223`.

**Distintivo.** Google muestra junto al nombre la etiqueta **«Brunch»**, la única de ese tipo en la ficha. Se recoge tal cual, sin interpretarla.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **de martes a sábado, de 6:30 a 16:00**, y cierra lunes y domingo:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 6:30 – 16:00                   |
| Miércoles | 6:30 – 16:00                   |
| Jueves    | 6:30 – 16:00                   |
| Viernes   | 6:30 – 16:00                   |
| Sábado    | 6:30 – 16:00                   |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **Cinco días de apertura con el mismo horario.** Los días cerrados se escriben como «Cerrado» en la tabla y con `shifts: []` en los datos.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: al ser un turno por día y cinco días abiertos, salen **5 especificaciones** (martes a sábado). Los dos días cerrados no generan ninguna.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes, aunque el lunes figure cerrado en la ficha.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y las cuatro figuran como disponibles: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 4 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Un buen sitio, muy agradable la camarera, buenas cervezas y muy buenas tapas.» (4/5)
2. «Las patatas en caldo con almejas estaban deliciosas.» (4/5)
3. «Bien atendidos, rápidos y muy buena cocina.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs meson-el-poligono   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 meson-el-poligono
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis verticales (02, 04, 05, 07, 08 y 09), dos apaisadas (06 y 10), una panorámica (03) y una casi cuadrada (la vista 1). El reparto de `descriptor` lo decide la forma de cada foto.
- El manifiesto de la descarga **atribuye todas las fotos al propio negocio** (`author` = «Mesón El Polígono»), así que **cada una lleva su pie «Foto de Mesón El Polígono»**.
- El collage de portada usa la apaisada ancha, la **10**, arriba y las verticales **04** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **2,9 MB a 1,6 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-meson-el-poligono-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada, la **10** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs meson-el-poligono
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de martes a sábado, de 6:30 a 16:00, con lunes y domingo cerrados) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `meson-el-poligono.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
