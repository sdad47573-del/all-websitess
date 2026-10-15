# Restaurante Casa Conde

Web informativa del **Restaurante Casa Conde**, restaurante en la **Calle Millán de Priego · 23004 Jaén**, con teléfono 650 18 41 44.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, distintivo, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                |
| ----------------------- | ------------------------------ |
| Nombre                  | Restaurante Casa Conde         |
| Dirección               | Calle Millán de Priego · 23004 Jaén (sin número de portal) |
| Teléfono                | +34 650 18 41 44               |
| Categoría de Google     | Restaurante                    |
| Distintivo de la ficha  | Brunch                         |
| Valoración              | 4,3 sobre 5 con 168 reseñas    |
| Horario                 | **No publicado** (ver abajo)   |
| Coordenadas             | 37.7722211, -3.7922867         |
| Plus code               | Q6C5+V3 Jaén                   |
| Identificador del lugar | `ChIJzbgkrw3XbQ0R4gc48FYhKZw`  |
| Identificador de canal  | `/g/11c5zr57rz`                |
| Feature id              | `0xd6dd70daf24b8cd:0x9c292156f03807e2` |

El número de reseñas y la valoración se escriben con `toLocaleString('es-ES')` en el código, sin escribirlos a mano en la plantilla.

**Sin número de portal.** La ficha publica la calle sin número («C. Millán de Priego»), así que la web escribe **Calle Millán de Priego** y ningún número: no se inventa un portal que Google no publica.

**La dirección abrevia.** Google publica «C. Millán de Priego»; aquí se desarrolla a **Calle Millán de Priego**, como en la mayoría de las webs del repositorio. El código postal 23004 y el municipio se publican tal cual.

**Sin descripción del titular, sin web y sin precios.** La ficha no publica descripción del local, ni web propia, ni perfiles sociales, ni carta, ni rango de precios, así que no se reproduce ninguno: no hay `descripcionLocal`, ni `sameAs`, ni `priceRange`, y ninguna respuesta de las preguntas frecuentes los menciona.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que es un tipo de establecimiento y no una cocina declarada, así que no se añade `servesCuisine`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual.

### El horario: la ficha no lo publica

Esto es lo que diferencia esta web del resto del repositorio y por eso **no hay tabla de horario**.

Al pedir la ficha, la respuesta llega **sin el bloque de días** (el campo donde otras fichas traen el horario viene a `null`). Se repitió la consulta **14 veces** y en ninguna respuesta apareció: ni un solo nombre de día, ninguna hora, ninguna fecha. La prueba de que no es una respuesta incompleta está en la propia respuesta, que ofrece la acción **«Añadir horario»** (lo que Google muestra cuando el negocio no tiene horario cargado) en lugar de «Editar horario», que es lo que devuelven las fichas que sí lo tienen.

Por coherencia con eso:

- **No hay tabla de horario en la portada.** En su lugar la sección «Dónde está» explica que la ficha no lo publica y remite al teléfono.
- **No se emite `openingHoursSpecification`** en los datos estructurados. Es la única web del repositorio, junto con la comprobación de datos, donde ese bloque está ausente a propósito: rellenarlo con un horario inventado sería peor que no tenerlo.
- La franja de datos de la portada y la cabecera dicen «Horario: la ficha no lo publica · llama y pregunta» en lugar de un resumen de apertura.
- El aviso legal lo repite, para que no parezca un olvido.

Si algún día el titular carga el horario en su ficha, hay que añadir el array `hours` y el `openingHoursSpecification` como en las webs hermanas.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra. (A diferencia de otras fichas del repositorio, aquí no hay entrada de aparcamiento, así que no se declara ninguna.)

### El teléfono

Es un **móvil** (650 18 41 44), y así se publica: `phoneHref` usa `tel:+34650184144`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación: **una de 5, una de 4 y una de 1**. Google devuelve cada reseña envuelta en comillas rectas; aquí se quitan porque son el delimitador del propio campo y no forman parte del texto.

1. «Cerveza fría y bien tirada.» (4/5)
2. «Camareros mal educados, se ponen agresivos delante de los comensales.» (1/5)
3. «Comida muy rica, buenos postres caseros y buen trato a los clientes» (5/5)

La de 1 sobre 5 se publica **igual que las demás**: es una de las tres que la propia ficha destaca y el criterio del repositorio es citarlas todas tal como aparecen, sin quedarse solo con las favorables.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-casa-conde   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-casa-conde
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis apaisadas (03, 04, 05, 06, 07 y 09) y cuatro verticales (01, 02, 08 y 10). Como se mezclan las dos orientaciones, la galería va en tres columnas con el ancho natural de cada foto.
- El manifiesto atribuye **las diez al propio local** (`author` = «Restaurante Casa Conde»), así que cada foto de la galería lleva su pie «Foto de Restaurante Casa Conde».
- El collage de portada usa la apaisada **07** arriba, que es la única panorámica (16:9 nativo, sin recorte), y las verticales **01** y **08** en los dos huecos estrechos (4/5); las tres están también en la galería.
- Tras optimizar, el total baja de **4,2 MB a 1,67 MB**; los `bytes` se actualizaron con el tamaño real de cada fichero (el optimizador no los reescribe).
- El manifiesto guarda las **medidas que publica Google** (hasta 16320 × 12240 en la apaisada 05), no las del fichero ya reducido, que como máximo tiene 1600 px de ancho. Es el mismo criterio que el resto del repositorio.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **07** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-casa-conde
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Preguntar el horario al titular.** Es el hueco más grande de la web: la ficha no lo publica y la portada solo puede remitir al teléfono. Si se confirma, añadir `hours`, el `openingHoursSpecification` y el resumen en la franja de datos.
3. Confirmar el **número de portal** de la Calle Millán de Priego, que la ficha no publica, y el alcance real del distintivo «Brunch».
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Si el dominio final no es `restaurante-casa-conde.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
