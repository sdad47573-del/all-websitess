# Restaurante Doña Mare

Web informativa de **Restaurante Doña Mare**, marisquería en el **C. Jerónimo Sosa Castillo, s/n · 21410 Isla Cristina (Huelva)**, con teléfono 959 77 00 00.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante Doña Mare                    |
| Dirección               | C. Jerónimo Sosa Castillo, s/n · 21410 Isla Cristina |
| Teléfono                | +34 959 77 00 00 (fijo)                  |
| Categoría de Google     | Marisquería                              |
| Valoración              | 4,8 sobre 5 con 129 reseñas              |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 37.1962012, -7.3234324                   |
| Plus code               | 5MWG+FJ Isla Cristina                    |
| Identificador del lugar | `ChIJxW86dQAlEA0RH7WJFSDKb-U`            |
| Identificador de canal  | `/g/11z3kn_8yh`                          |
| Feature id              | `0xd102500753a6fc5:0xe56fca201589b51f`   |

El número de reseñas se escribe **«129 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección.** Google publica «C. Jerónimo Sosa Castillo, s/n» (con la abreviatura «C.» y sin número) y así se reproduce, sin desarrollarla.

### Descripción del titular

A diferencia de otras fichas del repositorio, esta **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, sin corregirla ni ampliarla, en la sección «En sus palabras» y se cita en la portada:

> Restaurante Doña Mare, especializado en mariscos y pescados de la costa, platos elaborados y postres. Todo casero y libre de gluten.

Es el propio local quien afirma que la cocina es «casera y libre de gluten»; la web lo atribuye a la ficha.

### Categoría, `servesCuisine` y `priceRange`

La ficha publica **una sola categoría**, «Marisquería», que hace de categoría principal, y el `@type` es `Restaurant`, el del resto de webs del repositorio. Como el titular declara cocina, **sí se añade `servesCuisine: ['Marisco', 'Pescado']`**, siguiendo a las otras marisquerías del repositorio (`restaurante-barrio-alto`). `acceptsReservations: true` se mantiene igual. Sin `sameAs` (la ficha no publica web propia ni redes) y sin `priceRange` (no publica precios y no se inventa uno).

### Sin distintivo

La ficha **no publica ningún distintivo** junto al nombre, así que no hay `distintivo` y la portada no lo menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha         |
| --------- | -------------------------------------- |
| Lunes     | 12:30 – 16:00                          |
| Martes    | Cerrado                                |
| Miércoles | 12:30 – 16:00 · 20:30 – 24:00          |
| Jueves    | 12:30 – 16:00 · 20:30 – 24:00          |
| Viernes   | 12:30 – 16:00 · 20:30 – 24:00          |
| Sábado    | 12:30 – 16:00 · 20:30 – 24:00          |
| Domingo   | 12:30 – 16:00 · 20:30 – 24:00          |

Detalles que se trasladan tal cual a la web:

- **El mediodía se sirve de 12:30 a 16:00 todos los días salvo el martes**, que cierra todo el día.
- **La noche solo de miércoles a domingo**, de 20:30 a 24:00.
- **El lunes y el martes no hay cena**, y el martes cierra también al mediodía.
- El turno de noche cierra a las 24:00, que en los datos estructurados se escribe como `closes: '00:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el martes cerrado no genera ninguna entrada (**12 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **fijo** (959 77 00 00), y así se publica: `phoneHref` usa `tel:+34959770000`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación. La ficha las presenta entrecomilladas, pero esas comillas son de Google y no forman parte del texto, así que no se reproducen. Las tres son de 5 sobre 5:

1. «Super recomendable, muy buena cocina, rico rico el guiso de atún y el bacalao.» (5/5)
2. «Se nota el cariño en cada plato, raciones generosas y todo muy bien elaborado.» (5/5)
3. «Buen restaurante, gran servicio y muy buena comida.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-dona-mare   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-dona-mare
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: tres apaisadas (01, 03 y 04) y siete verticales (02 y 05 a 10).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante Doña Mare»), así que cada foto de la galería lleva su pie «Foto de Restaurante Doña Mare».
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **3,5 MB a 1,8 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-dona-mare
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da mediodía todos los días salvo el martes y cenas de miércoles a domingo) y ajustar `hours` si procede.
3. Confirmar la afirmación «libre de gluten» de la descripción del titular: se reproduce porque la publica el propio local, pero conviene validarla con él.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
6. Si el dominio final no es `restaurante-dona-mare.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
