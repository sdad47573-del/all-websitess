# Restaurante Los Jardines de la Playa

Web informativa de **Restaurante Los Jardines de la Playa**, restaurante andaluz en la **Av. de la Playa · 21410 Isla Cristina (Huelva)**, frente a la playa Central, con teléfono 651 60 75 84.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                  |
| ----------------------- | ------------------------------------------------ |
| Nombre                  | Restaurante Los Jardines de la Playa             |
| Dirección               | Av. de la Playa · 21410 Isla Cristina            |
| Teléfono                | +34 651 60 75 84 (móvil)                         |
| Categoría de Google     | Restaurante andaluz                              |
| Valoración              | 4,6 sobre 5 con 400 reseñas                      |
| Horario                 | Publicado (ver abajo)                            |
| Coordenadas             | 37.1961926, -7.3057513                           |
| Plus code               | 5MWV+FM Isla Cristina                            |
| Identificador del lugar | `ChIJGQm3i9klEA0RLD7oCirWI1M`                    |
| Identificador de canal  | `/g/11t4hg8rl8`                                  |
| Feature id              | `0xd1025d98bb70919:0x5323d62a0ae83e2c`          |

El número de reseñas se escribe **«400 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección.** Google publica «Av. de la Playa» **sin número** y así se reproduce, sin inventar un portal.

### Descripción del titular

La ficha **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, con sus tres líneas y **sin corregir la falta de tilde de «dias»**, en la sección «En sus palabras»:

> Restaurante Los Jardines de la Playa. Frente a la playa Central de Isla Cristina.
> Un lugar acogedor y agradable.
> Servicio todos los dias de almuerzo y cena.

La sección respeta los saltos de línea con `white-space: pre-line`. Es el propio local quien se sitúa frente a la playa Central y anuncia almuerzo y cena a diario; la web lo atribuye a la ficha.

### Categoría y `servesCuisine`

La ficha publica **una sola categoría**, «Restaurante andaluz», que hace de categoría principal, y el `@type` es `Restaurant`, el del resto de webs del repositorio. Como la propia categoría declara cocina, **sí se añade `servesCuisine: ['Cocina andaluza']`**, siguiendo a los otros «Restaurante andaluz» del repositorio (`restaurante-las-cordobesas`). `acceptsReservations: true` se mantiene igual. Sin `sameAs` (la ficha no publica web propia ni redes) y sin `priceRange` (no publica precios y no se inventa uno).

### Sin distintivo

La ficha **no publica ningún distintivo** junto al nombre, así que no hay `distintivo` y la portada no lo menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 11:00 – 18:00                  |
| Martes    | 11:00 – 18:00                  |
| Miércoles | 11:00 – 18:00                  |
| Jueves    | 11:00 – 18:00                  |
| Viernes   | 11:00 – 18:00 · 20:30 – 24:00  |
| Sábado    | 11:00 – 18:00 · 20:30 – 24:00  |
| Domingo   | 11:00 – 18:00 · 20:30 – 24:00  |

Detalles que se trasladan tal cual a la web:

- **Abre de 11:00 a 18:00 todos los días**, sin cierre semanal.
- **La cena solo viernes, sábados y domingos**, de 20:30 a 24:00; de lunes a jueves no hay cena.
- El turno de noche cierra a las 24:00, que en los datos estructurados se escribe como `closes: '00:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts` (**10 especificaciones** en total: cuatro días con un turno y tres con dos).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas** —una más que las otras fichas del repositorio—, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (651 60 75 84), y así se publica: `phoneHref` usa `tel:+34651607584`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación (incluidos los tres puntos suspensivos con los que termina la segunda). La ficha las presenta entrecomilladas, pero esas comillas son de Google y no forman parte del texto, así que no se reproducen. Las puntuaciones son 5, 5 y 4 sobre 5:

1. «Recomiendo los chocos fritos, milhojas de berenjena y la tarta de queso» (5/5)
2. «Las coquinas al ajillo y la presa con salsa de boletus deliciosos...» (5/5)
3. «Mucha variedad, la camarera nos recomendó cantidades y fue muy atenta» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-los-jardines-de-la-playa   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-los-jardines-de-la-playa
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 05, 08 y 10) y seis verticales (02, 03, 04, 06, 07 y 09).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante Los Jardines de la Playa»), así que cada foto de la galería lleva su pie.
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **6,2 MB a 2,6 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-los-jardines-de-la-playa
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de 11:00 a 18:00 todos los días y cena de viernes a domingo) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-los-jardines-de-la-playa.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
