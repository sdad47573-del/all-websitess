# Bodega La Fuente

Web informativa de **Bodega La Fuente**, bar de tapas y tienda de vinos en la **C. Jara, 27 · 30201 Cartagena** (Murcia), con teléfono 868 04 73 22.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                    |
| ----------------------- | ---------------------------------- |
| Nombre                  | Bodega La Fuente                   |
| Dirección               | C. Jara, 27 · 30201 Cartagena      |
| Teléfono                | +34 868 04 73 22                   |
| Categorías de Google    | Bar de tapas, Bar, Bar restaurante, Restaurante, Cafetería, Pizzería, Restaurante o cafetería, Tienda de vinos |
| Valoración              | 4,2 sobre 5 con 3.888 reseñas      |
| Horario                 | Publicado (ver abajo)              |
| Coordenadas             | 37.601431, -0.9854151              |
| Plus code               | J227+HR Cartagena                  |
| Identificador del lugar | `ChIJKdsBlihCYw0RM5Dtglx6qUo`      |
| Identificador de canal  | `/g/1pxwbk2tp`                     |
| Feature id              | `0xd6342289601db29:0x4aa97a5c82ed9033` |

El número de reseñas se escribe **«3.888 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección.** Google publica «C. Jara, 27» (con la abreviatura «C.»), el código postal 30201 y el municipio, Cartagena. Se reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas de la ficha.

**Categorías y `servesCuisine`.** La ficha publica **ocho categorías** —«Bar de tapas» (la primera, que hace de categoría principal), «Bar», «Bar restaurante», «Restaurante», «Cafetería», «Pizzería», «Restaurante o cafetería» y «Tienda de vinos»—, así que el `@type` es `Restaurant`, el del resto de webs del repositorio, y **no se añade `servesCuisine`**: son tipos de establecimiento, no una cocina declarada. Se mantiene `acceptsReservations: true`. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin descripción del titular

A diferencia de otras fichas, esta **no publica descripción del titular** (`merchantdescription` viene vacío), así que no hay texto que citar y la sección «La casa» se apoya solo en los campos publicados y en las reseñas.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha    |
| --------- | --------------------------------- |
| Lunes     | 11:00 – 17:00 · 19:30 – 24:00     |
| Martes    | 11:00 – 17:00 · 19:30 – 24:00     |
| Miércoles | 11:00 – 17:00 · 19:30 – 24:00     |
| Jueves    | 11:00 – 17:00 · 19:30 – 24:00     |
| Viernes   | 11:00 – 17:00 · 19:30 – 0:30      |
| Sábado    | 11:00 – 17:00 · 19:30 – 0:30      |
| Domingo   | 11:00 – 17:00 · 19:30 – 24:00     |

Detalles que se trasladan tal cual a la web:

- **El local abre todos los días** y sirve **dos turnos**: mediodía de 11:00 a 17:00 y noche desde las 19:30.
- **Los viernes y sábados la noche se alarga hasta las 0:30**; el resto de días cierra a las 24:00.
- Los cierres de noche se escriben como `00:00` (24:00) y `00:30` en los datos estructurados.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los **14 turnos** (7 días con dos turnos cada uno) generan 14 especificaciones.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**: el **acceso** y el **aseo adaptados para sillas de ruedas** figuran como **disponibles**, y el **aparcamiento** y los **asientos adaptados** como **no disponibles**. Los dos «no» se muestran con el aspa y el color apagado.

### El teléfono

Es un **fijo** (868 04 73 22), y así se publica: `phoneHref` usa `tel:+34868047322`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 4:

1. «Tapas espectaculares, anchoas deliciosas, cerveza fría y trato excelente.» (4/5)
2. «Recomiendo la pizza de atún y el montadito de salmón y queso.» (5/5)
3. «Un buen sitio para empezar la noche o quedar con amigos para tapear y charlar.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bodega-la-fuente   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 bodega-la-fuente
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro verticales (02, 04, 06 y 10), cinco apaisadas (01, 03, 05, 07 y 09) y una cuadrada (08).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Bodega La Fuente»), así que cada foto de la galería lleva su pie «Foto de Bodega La Fuente».
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **5,9 MB a 2,2 MB**; los `bytes` se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bodega-la-fuente
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da apertura todos los días con dos turnos y cierre a las 0:30 los viernes y sábados) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `bodega-la-fuente.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
