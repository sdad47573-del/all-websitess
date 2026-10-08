# Chiringuito Manolo polígono Jaén

Web informativa del **Chiringuito Manolo polígono Jaén**, bar y restaurante en la **Calle Mancha Real, 44 · 23009 Jaén**, con teléfono 953 28 18 08.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                             |
| ----------------------- | ------------------------------------------- |
| Nombre                  | Chiringuito Manolo polígono Jaén            |
| Dirección               | C. Mancha Real, 44 · 23009 Jaén             |
| Teléfono                | +34 953 28 18 08                            |
| Categorías de Google    | Bar · Restaurante                           |
| Valoración              | 4,4 sobre 5 con 480 reseñas                 |
| Horario                 | Publicado (ver abajo)                       |
| Coordenadas             | 37.80219, -3.78645                          |
| Plus code               | R627+VC Jaén                                |
| Identificador del lugar | `ChIJMxYJFYF4bg0ROmZ2sIAdc4E`               |
| Identificador de canal  | `/g/1tdqcy5w`                               |
| Distintivo de la ficha  | Ninguno                                     |

El número de reseñas se escribe **«480 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Mancha Real, 44»). En la web se desarrolla a **Calle Mancha Real, 44**, como en el resto del repositorio; el código postal 23009 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías** en su orden: «Bar» (la principal, que se usa como `category`) y «Restaurante». Se recogen las dos en `categories` sin añadir ninguna otra. Ninguna declara un tipo de cocina, así que **no se añade `servesCuisine`** a los datos estructurados (como en `la-talega`, con «Restaurante» y «Bar»). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin distintivo

A diferencia de otras fichas, aquí Google **no muestra ninguna etiqueta** junto al nombre, así que la web no recoge ningún distintivo (como en `abaceria-tinta-de-toro`).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario      |
| --------- | ------------ |
| Lunes     | 7:00 – 18:00 |
| Martes    | 7:00 – 18:00 |
| Miércoles | 7:00 – 18:00 |
| Jueves    | 7:00 – 18:00 |
| Viernes   | 7:00 – 18:00 |
| Sábado    | Cerrado      |
| Domingo   | Cerrado      |

Detalles que se trasladan tal cual a la web:

- **Un solo turno**, de 7:00 a 18:00, sin cena. En los datos estructurados se escribe como `opens: '07:00'` y `closes: '18:00'`.
- **Cierra sábado y domingo.** `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los dos días cerrados no generan ninguna entrada (5 especificaciones en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día el local abre con su horario habitual, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas** y las dos están **disponibles**: el acceso y el aseo adaptados para sillas de ruedas. La ficha no publica ni los asientos ni el aparcamiento adaptados, así que no se declaran.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y la segunda de 4 sobre 5:

1. «Buena gente, buen servicio, buena comida, buen precio, recomendable 100x100.»
2. «La ternera a la brasa un poco pasada pero el pollo y el falso risotto muy ricos.»
3. «Muy buen café, tostadas magníficas y Gabi, un camarero 10»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs chiringuito-manolo-poligono-jaen   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 chiringuito-manolo-poligono-jaen
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga atribuye las diez al **propio local** (`author`: «Chiringuito Manolo polígono Jaén»). Como sí hay a quién citar, cada foto de la galería lleva su pie («Foto de Chiringuito Manolo polígono Jaén»), siguiendo el criterio de `asador-de-camilo`.
- Son formatos mezclados: siete verticales y tres apaisadas. El collage de portada usa la apaisada 05 arriba (la única apaisada de la primera mitad de la galería) y las verticales 01 y 02 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total bajó de **7,2 MB a 2,2 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 05 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs chiringuito-manolo-poligono-jaen
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `chiringuito-manolo-poligono-jaen.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
