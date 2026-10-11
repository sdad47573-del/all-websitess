# Restaurante Guria

Web informativa de **Restaurante Guria**, bar restaurante en **Udiarraga Kalea, 26 · 48490 Ugao-Miraballes (Bizkaia)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`, copiada de la de `restaurante-alejandro` con la paleta cambiada a rojo vino de sidrería. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, aviso del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| ---- | --------------- |
| Nombre | Restaurante Guria |
| Dirección | Udiarraga Kalea, 26 · 48490 Ugao-Miraballes |
| Categorías de Google | Bar restaurante, Restaurante |
| Valoración | 4,5 sobre 5 con 637 reseñas |
| Teléfono | 946 48 00 34 (fijo) |
| Horario | Publicado (ver abajo) |
| Coordenadas | 43.180935, -2.901603 |
| Plus code | 8CMV53JX+99 |
| Identificador del lugar | `ChIJX0CM7atNTg0Rg6XT50Bw7jY` |
| Identificador de canal | `/g/1yg4m0ybr` |
| Feature id | `0xd4e4dabed8c405f:0x36ee7040e7d3a583` |

El número de reseñas se escribe **«637 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección en euskera.** Google publica la dirección como «Udiarraga Kalea, 26» («kalea» es «calle»): aquí se reproduce tal cual, sin traducir la voz del titular. La provincia se publica como «Biscay»: aquí se escribe **Bizkaia**.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías**, en este orden: «Bar restaurante» y «Restaurante». Ninguna nombra un tipo de cocina concreto, así que **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **946 48 00 34**, y por su prefijo es un **fijo**: se publica como **+34 946 48 00 34** y el enlace de llamada es `tel:+34946480034`.

**Distintivo.** Google muestra junto al nombre la etiqueta **«Brunch»**, la única de ese tipo en la ficha. Se recoge tal cual en `distingo`, sin interpretarla.

**Aviso del titular.** La ficha publica como descripción del local «Cerrado Agosto por vacaciones». Se reproduce tal cual en `descripcionLocal` y la portada la muestra en el bloque de cita, marcada como voz del titular; además se destaca en el horario y en las preguntas frecuentes.

### El horario

Es el horario que publica la ficha. El local **abre los siete días de la semana**:

| Día | Horario publicado por la ficha |
| --- | ------------------------------ |
| Lunes | 8:00 – 22:30 |
| Martes | 8:00 – 22:30 |
| Miércoles | 8:00 – 22:30 |
| Jueves | 8:00 – 22:30 |
| Viernes | Abierto 24 horas |
| Sábado | Abierto 24 horas |
| Domingo | 10:30 – 22:30 |

Detalles que se trasladan tal cual a la web:

- De lunes a jueves abre **de 8:00 a 22:30** y el domingo **de 10:30 a 22:30**; el viernes y el sábado figura como **«Abierto 24 horas»**.
- El tramo de 24 horas se representa como 00:00 – 23:59 en `shifts` para que el `openingHoursSpecification` siga siendo válido; el texto visible dice «Abierto 24 horas», como la ficha (**7 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.
- **En agosto cierra por vacaciones**, como avisa el propio local: tiene pregunta frecuente propia.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas, y las dos figuran como disponibles**: el **acceso** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La ficha destaca **tres reseñas con texto** (dos de 5 sobre 5 y una de 4 sobre 5) y se citan **literales**, sin corregir su redacción (la primera deja un espacio antes de la coma y la segunda no deja espacios tras las comas). La respuesta no trae los nombres de quienes las firman, así que se citan sin autor:

1. «Croquetas de tres sabores, pulpo, zamburiñas y el plato fuerte ,bacalao pil-pil.» (5/5)
2. «Buena comida y pinchos,buen trato,ritmo caribeño...» (4/5)
3. «El menú del día tiene un precio contenido y las raciones son generosas.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-guria   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-guria
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas (01, 03, 05, 07 y 10) y cinco verticales (02, 04, 06, 08 y 09).
- El manifiesto de la descarga **atribuye las diez al propio local**, así que **cada foto lleva su pie** («Foto de Restaurante Guria»), como en las webs `comidas-casa-garrido` o `restaurante-podenco`.
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **4,8 MB a 1,6 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-guria
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (24 horas el viernes y el sábado, resto hasta las 22:30) y el **cierre de agosto**, y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-guria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
