# Restaurante Baviera

Web informativa del **Restaurante Baviera**, restaurante mediterráneo en la **Avenida Paz, 1 · 23600 Martos (Jaén)**, con teléfono 953 55 40 41.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante Baviera                      |
| Dirección               | Av. Paz, 1 · 23600 Martos                |
| Teléfono                | +34 953 55 40 41                         |
| Categoría de Google     | Restaurante mediterráneo                 |
| Valoración              | 4,4 sobre 5 con 1.103 reseñas            |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 37.7214794, -3.9745288                   |
| Plus code               | P2CG+H5 Martos                           |
| Identificador del lugar | `ChIJxRnCz-nFbQ0RQgAp1vSAy-c`            |
| Identificador de canal  | `/g/11c57jm1mf`                          |
| Distintivo de la ficha  | Brunch                                   |

El número de reseñas se escribe **«1.103 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. Paz, 1»). En la web se desarrolla a **Avenida Paz, 1** (forma que también usan varios directorios del municipio). El código postal 23600 y el municipio (Martos, provincia de Jaén) se publican tal cual.

**`servesCuisine`.** La única categoría que publica Google es «Restaurante mediterráneo», así que `category` y `categories` llevan ese texto y `servesCuisine` lo traduce a `['Cocina mediterránea']`, como en `bar-restaurante-grand-pere`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### La descripción del titular

A diferencia de otras fichas del repositorio, esta **sí publica una descripción** escrita por el propio negocio. Se reproduce **literal**, con su espaciado («Martos ,con»), atribuida a la ficha:

> Restaurante ubicado en el centro de Martos ,con una solera de 35 años, el cual tiene menú de lunes a sábados y una carta de comida mediterránea

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | 10:30 – 17:00 |
| Martes    | 10:30 – 17:00 |
| Miércoles | 10:30 – 17:00 |
| Jueves    | 10:30 – 17:00 |
| Viernes   | 10:30 – 17:00 |
| Sábado    | 10:30 – 17:00 |
| Domingo   | 10:30 – 17:00 |

Detalles que se trasladan tal cual a la web:

- **Abre los siete días**, con un único turno de mediodía; no hay cena ningún día.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Aquí el lunes **sí abre**, así que se publica abierto **con la advertencia** (como en `el-chuleton`), y no se oculta la fila. `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 7 especificaciones en total.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**: el **aseo** y los **asientos** adaptados están disponibles y el **aparcamiento adaptado** aparece marcado como «no hay». Es la primera ficha del repositorio con una entrada de accesibilidad **no disponible**, así que la web la muestra con su marca de negación (`.is-no`) en lugar de ocultarla. No publica el acceso ni ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5; la tercera va sin espacio detrás de la coma («atención,quien») y se reproduce igual:

1. «Cerveza súper fresquita y tapitas muy ricas.»
2. «Entre semana ponen menús económicos y de muy buena calidad.»
3. «Muy buena cocina buen trato y buena atención,quien lo prueba repite»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-baviera   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-baviera
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `adrizale`).
- Son formatos mezclados: tres apaisadas y siete verticales. El collage de portada usa la apaisada 01 (4608×3456) arriba y las verticales 03 y 05 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas porque con retratos estrechos el mosaico se lee mejor que en una rejilla de recortes.
- Tras optimizar, el total bajó de **4,5 MB a 2,2 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-baviera
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-baviera.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
