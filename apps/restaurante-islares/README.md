# Restaurante Islares

Web informativa de **Restaurante Islares**, arrocería y restaurante de cocina mediterránea en la **Calle del Actor Luis Prendes, 15 · 03502 Benidorm (Alicante)**, con teléfono 965 85 89 88.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                         |
| ----------------------- | --------------------------------------- |
| Nombre                  | Restaurante Islares                     |
| Dirección               | C. del Actor Luis Prendes, 15 · 03502 Benidorm |
| Teléfono                | +34 965 85 89 88                        |
| Categorías de Google    | Restaurante, Salón para eventos, Restaurante de comida para llevar, Arrocería |
| Valoración              | 4,4 sobre 5 con 1.778 reseñas           |
| Horario                 | Publicado (ver abajo)                   |
| Coordenadas             | 38.531732, -0.1647354                   |
| Plus code               | GRJP+M4 Benidorm                        |
| Identificador del lugar | `ChIJeVsCzCYbYg0RgVxGhJBKPWo`           |
| Identificador de canal  | `/g/11cp7rxc63`                         |
| Feature id              | `0xd621b26cc025b79:0x6a3d4a9084465c81`  |
| Distintivo de la ficha  | Brunch                                  |

El número de reseñas se escribe **«1.778 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. La portada, eso sí, lleva su `meta description` escrita a mano para poder medir su longitud; es el único sitio donde «4,4» y «1.778» aparecen literalmente.

**Respuesta incompleta en el primer intento.** La primera descarga llegó con la ficha a medias: solo traía el horario del sábado y ninguna reseña. Se reintentó hasta obtener una respuesta completa, de unos 41 KB, con la descripción del titular, el horario con los siete días y las tres reseñas que se citan abajo. La web usa la respuesta completa.

**Dirección desarrollada.** Google publica la dirección abreviada («C. del Actor Luis Prendes, 15»). En la web se desarrolla a **Calle del Actor Luis Prendes, 15**, como en el resto del repositorio; el código postal 03502 y el municipio (Benidorm) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **cuatro categorías** —«Restaurante» (la primera, que hace de categoría principal), «Salón para eventos», «Restaurante de comida para llevar» y «Arrocería»—, que son tipos de establecimiento y no se trasladan a `servesCuisine`. Sí se añade **`servesCuisine: ['Cocina mediterránea']`**, porque la propia **descripción del titular** declara esa cocina. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en la sección «La casa», sin corregirla ni recortarla. Habla de la zona de La Cala, de cocina mediterránea con arroces, paellas, carnes, pescados frescos y tapas, de menú del día y comida para llevar, y de comidas de grupo, celebraciones y eventos.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 10:00 – 23:00                  |
| Martes    | 10:00 – 19:00                  |
| Miércoles | 9:00 – 17:00                   |
| Jueves    | 10:00 – 19:00                  |
| Viernes   | 10:00 – 23:00                  |
| Sábado    | 10:00 – 23:00                  |
| Domingo   | 10:00 – 23:00                  |

Detalles que se trasladan tal cual a la web:

- **Abre todos los días y sin cerrar a mediodía**: cada día publica un único tramo continuo, así que no hay turnos partidos ni días cerrados.
- Cierra a las **23:00** los lunes, viernes, sábados y domingos; los **martes y jueves a las 19:00**, y el **miércoles a las 17:00** (el día que abre antes, a las 9:00).
- Como no hay turnos partidos, `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts` y sale una entrada por día (**7 especificaciones** en total).

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas** figuran como disponibles, y el **aparcamiento adaptado para sillas de ruedas**, como **no disponible** (es la única que Google marca en negativo, y así se enseña, con su aspa). No publica ninguna otra.

### El teléfono

Es un **fijo** (965 85 89 88), y así se publica: `phoneHref` usa `tel:+34965858988`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la tercera escribe «guarnicion» y «pientos» sin tilde). Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Estupendas raciones, buena cocina excelente servicio» (4/5)
2. «El arroz buenísimo y la merluza a baja temperatura con salsa está espectacular.» (5/5)
3. «El entrecot con guarnicion de patatas y pientos, pedimos la salsa de boletus.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-islares   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-islares
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 05, 06 y 09) y seis verticales (02, 03, 04, 07, 08 y 10).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `bar-restaurante-di-mari`, `adrizale` o `la-talega`).
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **5,2 MB a 2,6 MB**; los `bytes` se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-islares
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da horario continuo todos los días, con el miércoles abriendo a las 9:00 y cerrando a las 17:00) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos, que la ficha no detalla.
5. Si el dominio final no es `restaurante-islares.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
