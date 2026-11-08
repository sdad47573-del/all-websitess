# Que no falte de na

Web informativa de **Que no falte de na**, bar restaurante en la **Calle Libertad, 45 · 13004 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Que no falte de na                       |
| Dirección               | C. Libertad, 45 · 13004 Ciudad Real      |
| Categoría de Google     | Bar restaurante                          |
| Valoración              | 5 sobre 5 con 4 reseñas                  |
| Teléfono                | 604 17 09 35 (móvil)                     |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.98694, -3.92113                       |
| Plus code               | X3PH+QG Ciudad Real                      |
| Identificador del lugar | `ChIJP7ha8VnDaw0RkInOx_UD50w`            |
| Identificador de canal  | `/g/11ynz5tvsh`                          |
| Feature id              | `0xd6bc359f15ab83f:0x4ce703f5c7ce8990`   |

El número de reseñas se escribe **«4 reseñas»** y la valoración con coma decimal cuando procede: ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. Aquí la ficha da un 5 exacto.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Libertad, 45»). En la web se desarrolla a **Calle Libertad, 45**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 13004 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Bar restaurante», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**: solo se añade si alguna categoría declara una cocina real. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **604 17 09 35**, y por su prefijo es un **móvil**: se publica como **+34 604 17 09 35** y el enlace de llamada es `tel:+34604170935`.

**Sin descripción del titular ni distintivo.** La ficha no publica descripción del titular (Google devuelve el campo vacío) ni muestra ninguna etiqueta junto al nombre. Por eso `src/data/site.ts` **no tiene `descripcionLocal` ni `distintivo`**, la portada no los menciona y el bloque `.descripcion` no existe en la hoja de estilos.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 7:00 – 22:00                   |
| Martes    | 7:00 – 22:00                   |
| Miércoles | 7:00 – 22:00                   |
| Jueves    | 7:00 – 22:00                   |
| Viernes   | 7:00 – 22:00                   |
| Sábado    | 9:00 – 23:00                   |
| Domingo   | 9:00 – 16:00                   |

Detalles que se trasladan tal cual a la web:

- **Abre todos los días**: no hay ningún día cerrado.
- De lunes a viernes, **de 7:00 a 22:00**; el sábado, **de 9:00 a 23:00**; y el domingo, **de 9:00 a 16:00**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: al no cerrar ningún día, los siete generan su propia entrada (**7 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una sola entrada**, y figura como disponible: el **acceso** para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La ficha destaca **dos reseñas** (y en total solo tiene cuatro) y se citan **literales**, sin corregir su redacción ni su puntuación. Las dos son de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «Menús baratos y estupendos» (5/5)
2. «La atención es excelente y buen ambiente.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs que-no-falte-de-na   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 que-no-falte-de-na
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **solo tres fotografías**: es la ficha con menos fotos de todas las webs del repositorio. Una es casi cuadrada (`vista-1-01`) y las otras dos son verticales (02 y 03).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie**, como en las webs `solitaire` y `restaurante-podenco`.
- El collage de portada usa la casi cuadrada, la **01**, arriba —es la que menos se recorta al ancho del hueco— y las verticales **02** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas, una por foto.
- Tras optimizar, las imágenes bajan de **1,1 MB a 0,4 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-que-no-falte-de-na-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto casi cuadrada, la **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs que-no-falte-de-na
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da los siete días abiertos con tres tramos distintos) y ajustar `hours` si procede.
3. Revisar las tres fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `que-no-falte-de-na.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
