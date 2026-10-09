# Taberna Napoletana

Web informativa de **Taberna Napoletana**, pizzería y restaurante napolitano en la **Calle Lanza, 9 · 13004 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Taberna Napoletana                       |
| Dirección               | C. Lanza, 9 · 13004 Ciudad Real          |
| Categorías de Google    | Napolitano, italiano, mediterráneo, pizzería |
| Valoración              | 4,3 sobre 5 con 1196 reseñas             |
| Teléfono                | 926 70 98 62 (fijo)                      |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9849367, -3.9256736                   |
| Plus code               | X3MF+XP Ciudad Real                      |
| Identificador del lugar | `ChIJsSXnDUDDaw0R02P9Wdhk9Zc`            |
| Identificador de canal  | `/g/11c3ww9ljt`                          |
| Feature id              | `0xd6bc3400de725b1:0x97f564d859fd63d3`   |

El número de reseñas se escribe **«1196 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Lanza, 9»). En la web se desarrolla a **Calle Lanza, 9**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 13004 y el municipio (Ciudad Real) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **cuatro categorías**: «Restaurante napolitano», «Restaurante italiano», «Restaurante mediterráneo» y «Pizzería». Las tres primeras nombran una cocina real y se traducen en `servesCuisine: ['Napolitana', 'Italiana', 'Mediterránea']`; «Pizzería» es un tipo de local, no una cocina, así que no se añade. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **926 70 98 62**, y por su prefijo es un **fijo**: se publica como **+34 926 70 98 62** y el enlace de llamada es `tel:+34926709862`.

**Distintivo.** Google no muestra ninguna etiqueta junto al nombre en esta ficha, así que no hay `distintivo` y la portada no lo menciona.

### La descripción del titular

La ficha publica una descripción escrita por el propio negocio, que se reproduce **literal**. Aquí es una sola línea:

```text
Restaurante italiano y pizzería
```

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha    |
| --------- | --------------------------------- |
| Lunes     | Cerrado                           |
| Martes    | Cerrado                           |
| Miércoles | 12:30 – 16:30 · 20:00 – 24:00     |
| Jueves    | 12:30 – 16:30 · 20:00 – 24:00     |
| Viernes   | 12:30 – 16:30 · 20:00 – 24:00     |
| Sábado    | 12:30 – 16:30 · 20:00 – 24:00     |
| Domingo   | 12:30 – 16:30 · 20:00 – 24:00     |

Detalles que se trasladan tal cual a la web:

- **Dos turnos de miércoles a domingo**: comidas de **12:30 a 16:30** y cenas de **20:00 a 24:00**.
- **El lunes y el martes cierra.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada turno genera una entrada: cinco días abiertos por dos turnos dan **10 especificaciones** en total.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**: el **acceso** y el **aseo** adaptados figuran como disponibles, y el **aparcamiento** adaptado para sillas de ruedas como **no disponible** (se muestra con el icono ✕). No publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera escribe «economico» sin tilde). Dos son de 4 sobre 5 y una de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Un buen sitio para comer comida italiana pizzas y pastas y precio economico.» (4/5)
2. «Las pizzas ricas de masa, hechas al horno, quizá algo escasos los ingredientes.» (4/5)
3. «Precios asequibles salvo las cervezas que me han parecido caras.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs taberna-napoletana   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 taberna-napoletana
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis verticales (01, 02, 04, 05, 07 y 10), tres apaisadas (03, 06 y 08) y una panorámica (09).
- El manifiesto de la descarga **atribuye las diez al propio negocio** (`author` = «Taberna Napoletana»), así que cada foto de la galería lleva su pie «Foto de Taberna Napoletana».
- El collage de portada usa la panorámica, la **09**, arriba y las verticales **01** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **6,9 MB a 2,0 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-taberna-napoletana-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica, la **09** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs taberna-napoletana
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da dos turnos de miércoles a domingo y cierra lunes y martes) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `taberna-napoletana.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
