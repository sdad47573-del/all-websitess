# Restaurante Sur

Web informativa de **Restaurante Sur**, restaurante y lounge en la **Avenida de Andalucía, 35 · 23005 Jaén**, con teléfono 953 25 36 31.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Restaurante Sur            |
| Dirección               | Av. de Andalucía, 35 · 23005 Jaén |
| Teléfono                | +34 953 25 36 31           |
| Categorías de Google    | Restaurante, Lounge        |
| Valoración              | 4,3 sobre 5 con 236 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7772871, -3.7949709     |
| Plus code               | Q6G4+W2 Jaén               |
| Identificador del lugar | `ChIJnXxkMRDXbQ0R4SpEn2FeduM` |
| Identificador de canal  | `/g/1tfv_hmr`              |
| Feature id              | `0xd6dd71031647c9d:0xe3765e619f442ae1` |

El número de reseñas se escribe **«236 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. de Andalucía, 35»). En la web se desarrolla a **Avenida de Andalucía, 35**, como en el resto del repositorio; el código postal 23005 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías** —«Restaurante» (la primera, que hace de categoría principal) y «Lounge»— y **no se añade `servesCuisine`**: son tipos de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin distintivo

A diferencia de otras fichas del repositorio, esta **no publica ningún distintivo** junto al nombre (ni «Brunch» ni otro), así que no hay `distintivo` y la portada no lo menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 12:30 – 16:30 · 20:30 – 23:30   |
| Martes    | 12:30 – 16:30                   |
| Miércoles | Cerrado                         |
| Jueves    | 12:30 – 16:30 · 20:30 – 23:30   |
| Viernes   | 12:30 – 16:30 · 20:30 – 24:00   |
| Sábado    | 12:30 – 16:30 · 20:30 – 24:00   |
| Domingo   | 12:30 – 16:30                   |

Detalles que se trasladan tal cual a la web:

- **El mediodía se sirve de lunes a domingo**, de 12:30 a 16:30, **salvo el miércoles**, que cierra.
- **La noche solo los lunes, jueves, viernes y sábados**, de 20:30 a 23:30; **viernes y sábado alargan hasta las 24:00**, que en los datos estructurados se escribe como `closes: '00:00'`.
- Los **martes y domingos** no hay cena, y el **miércoles cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el miércoles cerrado no genera ninguna entrada (**10 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y los **asientos adaptados para sillas de ruedas**. No publica ni el aseo ni el aparcamiento.

### El teléfono

Es un **fijo** (953 25 36 31), y así se publica: `phoneHref` usa `tel:+34953253631`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (incluidas las comillas de la primera y el espacio antes de la coma del precio de la segunda). Dos son de 5 sobre 5 y una, muy crítica, de 1 sobre 5:

1. «Buena cocina y buenísima atención, ambiente bueno con "Nono" a la cabeza.» (5/5)
2. «Pedimos una ración de solomillo y trajo 4 trozos, 14€ , calidad baja en sabor» (1/5)
3. «Raciones abundantes, muy buena calidad y precio económico.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-sur   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-sur
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 04, 06 y 09), una panorámica (07) y cinco verticales (02, 03, 05, 08 y 10).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante Sur»), así que cada foto de la galería lleva su pie «Foto de Restaurante Sur».
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,4 MB a 2,4 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-sur
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da mediodía casi todos los días —cierra el miércoles— y cenas solo lunes, jueves, viernes y sábados) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-sur.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
