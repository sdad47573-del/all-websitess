# Nuevo Restaurante El Abuelo

Web informativa de **Nuevo RESTAURANTE EL ABUELO.**, restaurante y barra de **Ctra. de Carrión, 94 · 13005 Ciudad Real**, con teléfono 664 85 81 90.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Barlow Condensed** (títulos) y **Public Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Nuevo RESTAURANTE EL ABUELO.             |
| Dirección               | Ctra. de Carrión, 94 · 13005 Ciudad Real |
| Teléfono                | +34 664 85 81 90                         |
| Categoría de Google     | Restaurante                              |
| Valoración              | 4,1 sobre 5 con 593 reseñas              |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.9890774, -3.9083095                   |
| Plus code               | X3QR+JM Ciudad Real                      |
| Identificador del lugar | `ChIJ2Yqlc0vDaw0RD-RmuI-DUVM`            |
| Identificador de canal  | `/g/11cmg18qpr`                          |
| Feature id              | `0xd6bc34b73a58ad9:0x5351838fb866e40f`   |

El número de reseñas se escribe **«593 reseñas»** y la valoración con coma decimal («4,1»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**El nombre.** Google lo publica todo en mayúsculas menos la primera palabra y **con un punto final**: **«Nuevo RESTAURANTE EL ABUELO.»**. Se reproduce **literal** en `business.name`, con el mismo criterio que el «A JALAR» de `a-jalar` o el «Restaurante AjoNegro - OPCIONES SIN GLUTEN» de `restaurante-ajonegro`: aparece tal cual en el `<title>`, en `og:site_name`, en los datos estructurados (`Restaurant.name`), en el aviso legal y en el pie. Para el titular visible y la marca se usa la forma corta **«El Abuelo»** (`business.shortName`), porque el punto final no encaja en un encabezado ni en el texto corrido.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante», que no declara ninguna cocina concreta. Por eso la web **omite `servesCuisine`** y no le atribuye ninguna: es el mismo criterio documentado en `bar-restaurante-el-sotano`, `jimenez-restaurante` y `la-tabernilla-de-jose`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual (118 de las 146 fichas del repositorio lo usan). Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** Esta ficha **no publica descripción del titular**, así que no existe `descripcionLocal` y la portada no reproduce ninguna. Es una de las diferencias con las webs vecinas, y se advierte en las preguntas frecuentes.

**Distintivo «Brunch».** Google muestra junto al nombre la etiqueta **«Brunch»**. Se recoge como dato (`distintivo`) y la portada la menciona **tal cual**, sin ampliarla ni interpretarla: no se afirma nada sobre días, franja horaria ni contenido. La sección de preguntas frecuentes incluye una respuesta que remite al teléfono para ese detalle.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 7:30 – 18:00                   |
| Martes    | 7:30 – 18:00                   |
| Miércoles | 7:30 – 18:00                   |
| Jueves    | 7:30 – 18:00                   |
| Viernes   | 7:30 – 18:00                   |
| Sábado    | 9:00 – 16:00                   |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **Tramo continuado de 7:30 a 18:00 de lunes a viernes.**
- **El sábado abre de 9:00 a 16:00.**
- **El domingo cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera una entrada y el domingo ninguna (**6 especificaciones** en total).
- Los horarios se escriben con dos dígitos en los datos estructurados (`07:30`, `09:00`), mientras que el texto visible conserva la forma en que los publica Google (`7:30`, `9:00`).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos** adaptados para sillas de ruedas. La del **aparcamiento** es la primera que aparece en este grupo de webs (las otras fichas publican tres entradas o menos). No publica ninguna otra.

### El teléfono

Es un **móvil** (664 85 81 90), y así se publica: `phoneHref` usa `tel:+34664858190`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Bocadillos muy buenos, grandes, cerveza bien fría.» (5/5)
2. «Arroz con bogavante, boquerones fritos, lenguado empanado, rabas .» (5/5)
3. «Buenos bocatas para desayunar nueva gerencia trato amable y atentos volveré» (5/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona. La segunda **conserva el espacio que Google publica antes del punto** («rabas .»): se cita tal cual.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs nuevo-restaurante-el-abuelo   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 03, 04 y 07), cinco verticales (02, 05, 06, 08 y 10) y una casi cuadrada (`vista-9-09`, de 3024 × 3283). **Ninguna es panorámica.**
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en `restaurante-podenco`, `taberna-la-raquelita` o `casa-loan`.
- El collage de portada usa la **apaisada 04** arriba (16/9) y las verticales **02** y **06** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-abuelo-post.mjs`.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **04** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs nuevo-restaurante-el-abuelo
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el nombre**: Google lo publica en mayúsculas y con punto final («Nuevo RESTAURANTE EL ABUELO.»). Decidir si se mantiene literal o se normaliza («Nuevo Restaurante El Abuelo»).
3. **Confirmar el horario** (7:30 a 18:00 de lunes a viernes, 9:00 a 16:00 el sábado, domingo cerrado) y ajustar `hours` si procede.
4. **Revisar el distintivo «Brunch»**: decidir si se mantiene literal o se retira.
5. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
6. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
7. Si el dominio final no es `nuevo-restaurante-el-abuelo.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
