# Restaurante Quinto Toro

Web informativa de **Restaurante Quinto Toro**, restaurante en la **Alameda de Adolfo Suárez · 23003 Jaén**, con teléfono 655 29 45 81.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Restaurante Quinto Toro    |
| Dirección               | Alameda de Adolfo Suarez · 23003 Jaén |
| Teléfono                | +34 655 29 45 81           |
| Categorías de Google    | Restaurante                |
| Valoración              | 4,1 sobre 5 con 1.123 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7669465, -3.7826634     |
| Plus code               | Q688+QW Jaén               |
| Identificador del lugar | `ChIJi_qftZ_XbQ0RDlqWrSFmKxI` |
| Identificador de canal  | `/g/1q5bmn6dn`             |
| Feature id              | `0xd6dd79fb59ffa8b:0x122b6621ad965a0e` |
| Distintivo de la ficha  | Brunch                     |

El número de reseñas se escribe **«1.123 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección sin número.** Google publica la dirección como «Alameda de Adolfo Suarez», **sin número de portal**, así que no se inventa uno. Solo se restituye la tilde de «Suárez», como hace el resto del repositorio con las direcciones abreviadas; el código postal 23003 y el municipio (Jaén) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que no declara ningún tipo de cocina. `category` y `categories` llevan ese texto y **no se añade `servesCuisine`** a los datos estructurados (igual que en `restaurante-meson-seneca` y `restaurante-caseria-de-cristobal`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Descripción del titular.** La ficha publica una «descripción del titular» que se reproduce **literal** en `descripcionLocal` y en la sección «La casa»:

> Restaurante situado en la plaza de toros de la capital jiennense con una carta espectacular en un espacio con solera

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | Cerrado                         |
| Martes    | 12:00 – 17:30 · 20:00 – 2:00    |
| Miércoles | 12:00 – 17:30 · 20:00 – 2:00    |
| Jueves    | 12:00 – 17:30 · 20:00 – 2:00    |
| Viernes   | 12:00 – 17:30 · 20:00 – 2:00    |
| Sábado    | 12:00 – 17:30 · 20:00 – 2:00    |
| Domingo   | 12:00 – 17:30                   |

Detalles que se trasladan tal cual a la web:

- **De martes a sábado hay dos turnos**, mediodía y noche, y el de noche termina a las **2:00** de la madrugada, que en los datos estructurados se escribe como `closes: '02:00'`.
- **El domingo abre un solo turno**, de 12:00 a 17:30, y **el lunes cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada (**11 especificaciones** en total: dos por cada día de martes a sábado y una del domingo).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (655 29 45 81), y así se publica: `phoneHref` usa `tel:+34655294581`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (incluidos los espacios antes de las comas de las dos primeras). Las tres son de 5 sobre 5:

1. «Las raciones son abundantes y todo muy rico ,hay que venir a probar» (5/5)
2. «Ambiente familiar ,las camareras estupendas ,trato inigualable 10/10» (5/5)
3. «Buen lugar para tomar una cerveza fresquita, servicio exquisito» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-quinto-toro   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-quinto-toro
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: tres apaisadas (06, 07 y 09), seis verticales (02, 03, 04, 05, 08 y 10) y una de formato casi cuadrado (1440 × 1439) que el script nombra `vista-1-01`.
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante Quinto Toro»), así que cada foto de la galería lleva su pie «Foto de Restaurante Quinto Toro».
- El collage de portada usa la apaisada **06** arriba y las verticales **02** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- El optimizador redujo ocho de las diez fotos (71 %); los `bytes` del manifiesto se actualizaron a mano con el tamaño real, que suma **1,8 MB** (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **06** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-quinto-toro
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da dos turnos de martes a sábado, con cierre a las 2:00, y mediodía el domingo) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-quinto-toro.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
