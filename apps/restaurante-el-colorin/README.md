# Restaurante el Colorín

Web informativa de **Restaurante el Colorín**, restaurante en **Extrarradio Diseminados, 195 · 23640 Jaén**, con teléfono 665 35 32 33.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante el Colorín                 |
| Dirección               | Extrarradio Diseminados, 195 · 23640 Jaén |
| Teléfono                | +34 665 35 32 33                       |
| Categorías de Google    | Restaurante                            |
| Valoración              | 4,4 sobre 5 con 140 reseñas            |
| Horario                 | Sábado y domingo 9:00–17:00 (ver abajo) |
| Coordenadas             | 37.7595489, -3.9011452                 |
| Plus code               | Q35X+RG Jaén                           |
| Identificador del lugar | `ChIJNeaeBxzQbQ0R37pe-xndGcE`          |
| Identificador de canal  | `/g/11bzp_yc2y`                        |
| Feature id              | `0xd6dd01c079ee635:0xc119dd19fb5ebadf` |
| Distintivo de la ficha  | Ninguno                                |

El número de reseñas se escribe **«140 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección tal cual.** La ficha publica **«Extrarradio Diseminados, 195»**, sin abreviaturas, así que no hay nada que desarrollar y se reproduce igual. El código postal 23640 y el municipio se publican tal cual los da la ficha.

**Municipio.** La ficha incluye el local en «23640 Jaén» y así se recoge (`city: 'Jaén'`, `province: 'Jaén'`). El código postal 23640 corresponde al término de Torredelcampo, pero la ficha no publica ese municipio y aquí no se deduce: se usa el que publica, como en `restaurante-montserrah-los-llanos`.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que no declara ningún tipo de cocina. `category` y `categories` llevan ese texto y **no se añade `servesCuisine`** a los datos estructurados (igual que en `restaurante-caseria-de-cristobal` y `jimenez-restaurante`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin distintivo

A diferencia de otras fichas, aquí Google **no muestra ninguna etiqueta** junto al nombre: se buscaron los distintivos habituales (`Brunch`, `Terraza`, `Para llevar`, `Se admiten perros`…) y ninguno aparece en la respuesta, así que la web no recoge ningún distintivo (como en `abaceria-tinta-de-toro` o `chiringuito-manolo-poligono-jaen`).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | Cerrado                        |
| Miércoles | Cerrado                        |
| Jueves    | Cerrado                        |
| Viernes   | Cerrado                        |
| Sábado    | 9:00 – 17:00                   |
| Domingo   | 9:00 – 17:00                   |

Detalles que se trasladan tal cual a la web:

- **Solo abre sábado y domingo, de 9:00 a 17:00.** Es un horario poco habitual y la web lo repite en la portada, la sección de horario y las preguntas frecuentes para que nadie lo lea mal.
- **De lunes a viernes cierra.** Los cinco días aparecen como «Cerrado»; `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los días cerrados no generan ninguna entrada (**2 especificaciones** en total: una del sábado y otra del domingo).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas** y las **cuatro están marcadas como disponibles**: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.

### El teléfono

Es un **móvil** (665 35 32 33), no un fijo, y así se publica: `phoneHref` usa `tel:+34665353233`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (incluidas la falta de ortografía «escelente» y los espacios antes de las comas de la tercera). Las tres son de 5 sobre 5:

1. «Estaba exquisita en sabores y texturas.»
2. «Buen sitio, buen precio, buena calidad y buena gente ;)»
3. «Un lugar magnífico , buenas vistas , escelente comida y gran vinoteca ...»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-colorin   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-el-colorin
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga **no atribuye ninguna a un autor con nombre** (`author` vacío), así que las fotos **no llevan pie** en la galería (a diferencia de las fichas en las que sí hay a quién citar).
- Son formatos mezclados: cinco verticales, tres apaisadas y dos panorámicas. El collage de portada usa la apaisada 01 arriba y las verticales 04 y 07 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total bajó de **5,1 MB a 2,2 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-colorin
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha lo limita a sábado y domingo de 9:00 a 17:00) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe ni las atribuye.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-el-colorin.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
