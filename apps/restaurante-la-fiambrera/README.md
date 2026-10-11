# Restaurante La Fiambrera

Web informativa de **Restaurante La Fiambrera**, restaurante de desayunos en **Avenida Basagoiti, 44 · 48991 Algorta (Bizkaia)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`, copiada de la de `restaurante-guria` con la paleta cambiada a tostado de cafetería. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| ---- | --------------- |
| Nombre | Restaurante La Fiambrera |
| Dirección | Av. Basagoiti, 44 · 48991 Algorta |
| Categorías de Google | Restaurante de desayunos, Bar restaurante, Restaurante de comida para llevar |
| Valoración | 4,7 sobre 5 con 204 reseñas |
| Teléfono | 622 35 59 80 (móvil) |
| Horario | Publicado (ver abajo) |
| Coordenadas | 43.3479105, -3.0105739 |
| Plus code | 8CMR8XXQ+5Q |
| Identificador del lugar | `ChIJqcnnH_NbTg0RgjCgX0cNrt8` |
| Identificador de canal | `/g/11nxrrglwt` |
| Feature id | `0xd4e5bf31fe7c9a9:0xdfae0d475fa03082` |

El número de reseñas se escribe **«204 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Av. Basagoiti, 44»). En la web se desarrolla a **Avenida Basagoiti, 44**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»). La localidad se publica como «Algorta» (localidad del municipio de Getxo): aquí se reproduce tal cual. La provincia se publica como «Biscay»: aquí se escribe **Bizkaia**.

**Categorías y `servesCuisine`.** La ficha publica **tres categorías**, en este orden: «Restaurante de desayunos», «Bar restaurante» y «Restaurante de comida para llevar». Ninguna nombra un tipo de cocina concreto, así que **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **622 35 59 80**, y por su prefijo es un **móvil**: se publica como **+34 622 35 59 80** y el enlace de llamada es `tel:+34622355980`.

**Sin distintivo.** La ficha no muestra ninguna etiqueta junto al nombre, así que no se recoge ninguna.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha. El local **solo abre de martes a jueves**:

| Día | Horario publicado por la ficha |
| --- | ------------------------------ |
| Lunes | Cerrado |
| Martes | 9:00 – 17:00 |
| Miércoles | 9:00 – 17:00 |
| Jueves | 12:00 – 17:00 |
| Viernes | Cerrado |
| Sábado | Cerrado |
| Domingo | Cerrado |

Detalles que se trasladan tal cual a la web:

- Martes y miércoles abre **de 9:00 a 17:00** y el jueves **de 12:00 a 17:00**; viernes, sábado, domingo y lunes, **cerrado** (cuatro días de cierre).
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: los días cerrados no generan entrada (**3 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cinco entradas, y las cinco figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos** adaptados para sillas de ruedas, y el **bucle magnético** asistencial. Es la primera ficha del repositorio con toda la accesibilidad en positivo.

### Las reseñas

La ficha destaca **tres reseñas con texto**, las tres de 5 sobre 5, y se citan **literales**, sin corregir su redacción (la tercera deja un espacio antes de la coma). La respuesta no trae los nombres de quienes las firman, así que se citan sin autor:

1. «Pad thai, lasaña de verduras bocadillos y sandwiches buenísimos.» (5/5)
2. «Tortilla melosa, sándwich de Pastrami y el Vietnamita vegano o tradicional.» (5/5)
3. «Lasagna, croquetas melosas , exquisitas albóndigas de bacalao...» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-fiambrera   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-fiambrera
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: una apaisada (01), siete verticales (03, 04, 05, 06, 08, 09 y 10) y dos casi cuadradas (vista-2-02 y vista-7-07).
- El manifiesto de la descarga **atribuye las diez al propio local**, así que **cada foto lleva su pie** («Foto de Restaurante La Fiambrera»).
- El collage de portada usa la apaisada **01** arriba y las verticales **03** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **5,9 MB a 2,0 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-fiambrera
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (solo martes a jueves, jueves desde las 12:00) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-la-fiambrera.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
