# RESTAURANTE "EL ZORRO"

Web informativa del **RESTAURANTE "EL ZORRO"**, restaurante en la **Calle Pedregal, 13 · 23170 La Guardia de Jaén (Jaén)**, con teléfono 667 72 28 01.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | RESTAURANTE "EL ZORRO"                   |
| Dirección               | Calle Pedregal, 13 · 23170 La Guardia de Jaén |
| Teléfono                | +34 667 72 28 01                         |
| Categoría de Google     | Restaurante                              |
| Valoración              | 4,6 sobre 5 con 108 reseñas              |
| Horario                 | Viernes y sábado: 21:00 – 2:00; el resto, cerrado |
| Coordenadas             | 37.7409338, -3.6940858                   |
| Plus code               | P8R4+99 La Guardia de Jaén               |
| Identificador del lugar | `ChIJO-__mHp3bg0RcrlbT-7yqL4`            |
| Identificador de canal  | `/g/11g7ktvlmm`                          |
| Feature id              | `0xd6e777a98ffef3b:0xbea8f2ee4f5bb972`   |

El número de reseñas y la valoración se escriben con `toLocaleString('es-ES')` en el código, sin escribirlos a mano en la plantilla.

**El nombre se publica tal cual.** La ficha lo escribe **en mayúsculas y con comillas** («RESTAURANTE "EL ZORRO"»), así que se reproduce así en `business.name`, en el pie y en los datos estructurados. Para el logotipo y la etiqueta del mapa se usa `shortName` («El Zorro»), que solo es una abreviatura de diseño.

**La dirección abrevia.** Google publica «C. Pedregal, 13». Aquí se desarrolla a **Calle Pedregal, 13**, como en la mayoría de las webs del repositorio. El código postal 23170 y el municipio se publican tal cual.

**Sin descripción del titular, sin web y sin precios.** La ficha no publica descripción del local, ni web propia, ni perfiles sociales, ni carta, ni rango de precios, así que no se reproduce ninguno: no hay `descripcionLocal`, ni `sameAs`, ni `priceRange`, y ninguna respuesta de las preguntas frecuentes los menciona.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que es un tipo de establecimiento y no una cocina declarada, así que no se añade `servesCuisine`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual.

### El horario

Es el dato menos habitual de esta ficha y se comprobó **repitiendo la consulta**: las dos descargas devolvieron exactamente el mismo horario. La consulta cubre del **viernes 9 al jueves 15 de octubre de 2026**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | Cerrado                        |
| Miércoles | Cerrado                        |
| Jueves    | Cerrado                        |
| Viernes   | 21:00 – 2:00                   |
| Sábado    | 21:00 – 2:00                   |
| Domingo   | Cerrado                        |

- El local **solo aparece abierto el viernes y el sábado**, y **de noche**: de 21:00 a 2:00 de la madrugada del día siguiente. Es el horario que publica la ficha, no una interpretación.
- El cierre a las **2:00** se traslada a los datos estructurados como `closes: '02:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los cinco días cerrados no generan ninguna entrada (**2 especificaciones**, una por cada día abierto).
- El lunes 12 trae el aviso de Google de que «el horario podría ser diferente» por ser la **Fiesta Nacional de España**, pero ese día la ficha ya lo da cerrado, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.
- El horario se comprobó dos veces (9 de octubre de 2026) porque un restaurante abierto solo dos noches a la semana es raro; ambas respuestas coinciden.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una sola entrada**: el **aseo adaptado para sillas de ruedas**, marcado como disponible. No publica ninguna otra, así que la web solo declara esa.

### El teléfono

Es un **móvil** (667 72 28 01), y así se publica: `phoneHref` usa `tel:+34667722801`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación, y con los emojis que incluyen. Dos son de 5 sobre 5 y una de 4 sobre 5. Google devuelve cada reseña envuelta en comillas rectas; aquí se quitan porque son el delimitador del propio campo, pero las comillas que van **dentro** del texto (alrededor del apodo «Rodri») se conservan tal cual:

1. «Dar la enhorabuena al chef Manolo y al camarero que nos ha atendido, "Rodri".» (5/5)
2. «Cerveza fría y buenas tapas» (4/5)
3. «Muy familiar y muy buena comida y el servicio excelente lo aconsejo 100% ☺️» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-zorro   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-el-zorro
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete apaisadas (01, 02, 04, 05, 06, 08 y 10) y tres verticales (03, 07 y 09). Como se mezclan las dos orientaciones, la galería va en tres columnas con el ancho natural de cada foto.
- El manifiesto de la descarga deja el campo `author` **vacío** en las diez, así que no hay a quién atribuirlas y el pie de cada foto dice solo de dónde salen: «Foto de la ficha de Google Maps».
- El collage de portada usa la apaisada **08** arriba (hueco ancho, 16/9) y las verticales **03** y **07** en los dos huecos estrechos (4/5); las tres están también en la galería.
- Tras optimizar, el total de la galería baja de **1,05 MB a 0,76 MB** (el resumen del script solo contaba las tres fotos que encogió, no las diez). Los `bytes` del manifiesto se actualizaron con el tamaño real de cada fichero, que no reescribe el optimizador, y ahora coinciden uno a uno con el disco.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **05** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-zorro
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar el horario con el titular.** La ficha solo lo da abierto los viernes y sábados de 21:00 a 2:00; si el horario real es más amplio, hay que corregir `hours` y `hoursSummary`.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe y el manifiesto no atribuye autoría.
4. Si el dominio final no es `restaurante-el-zorro.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
