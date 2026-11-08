# Restaurante 22

Web informativa de **Restaurante 22**, restaurante de cocina valenciana en **C. de Roldán, 3 · 03501 Benidorm (Alicante)**, con teléfono 625 08 57 29.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Prata** (títulos) y **Karla** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante 22                           |
| Dirección               | C. de Roldán, 3 · 03501 Benidorm         |
| Teléfono                | +34 625 08 57 29                         |
| Categoría de Google     | Restaurante de cocina valenciana         |
| Valoración              | 4,8 sobre 5 con 442 reseñas              |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.5381453, -0.1329551                   |
| Plus code               | GVQ8+7R Benidorm                         |
| Identificador del lugar | `ChIJg1Y9KKcFYg0RO8cY7kaATOE`            |
| Identificador de canal  | `/g/11shwf0rqm`                          |
| Feature id              | `0xd6205a7283d5683:0xe14c8046ee18c73b`   |

El número de reseñas se escribe **«442 reseñas»** y la valoración con coma decimal («4,8»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Primera web del repositorio en Alicante.** Benidorm es la primera localidad fuera de Ciudad Real, Jaén, Córdoba, Granada, Málaga, Almería, Huelva, Sevilla, Cádiz y Toledo que aparece en `apps/*`. La provincia se recoge como `Alicante` y la comunidad como `Comunidad Valenciana`; `geo.region` usa el código de provincia **`ES-A`**, como el resto de webs del repositorio (Jaén usa `ES-JA`, Málaga `ES-MA`, Alicante es `ES-A`).

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante de cocina valenciana». Alimenta `servesCuisine: ['Valenciana']`, traduciéndola como en el resto del repositorio. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** Esta ficha **no publica descripción del titular**, así que no existe `descripcionLocal` y la portada no reproduce ninguna, como en `nuevo-restaurante-el-abuelo`. El menú y los precios tampoco se publican: la única referencia al menú son las reseñas que Google destaca, y así se recoge en las preguntas frecuentes.

**Sin distintivo.** Google **no muestra ninguna etiqueta junto al nombre**, así que no existe la constante `distintivo` y la web no menciona ninguna (el caso mayoritario del repositorio).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha        |
| --------- | ------------------------------------- |
| Lunes     | Cerrado                               |
| Martes    | 12:00 – 17:00 · 20:00 – 23:00         |
| Miércoles | 12:00 – 17:00 · 20:00 – 23:00         |
| Jueves    | 12:00 – 17:00 · 20:00 – 23:00         |
| Viernes   | 12:00 – 17:00 · 20:00 – 23:00         |
| Sábado    | 12:00 – 17:00 · 20:00 – 23:00         |
| Domingo   | 12:00 – 17:00                         |

Detalles que se trasladan tal cual a la web:

- **Dos turnos de martes a sábado**: mediodía de 12:00 a 17:00 y noche de 20:00 a 23:00.
- **El domingo solo abre al mediodía**, de 12:00 a 17:00.
- **El lunes cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los cinco días de dos turnos generan dos entradas cada uno y el domingo una (**11 especificaciones** en total); el lunes no genera ninguna.
- **Dos avisos de horario en la misma respuesta.** La ficha marca el **viernes 9** con «Día de la Comunidad Valenciana» y el **lunes 12** con «Fiesta Nacional de España», ambos con el aviso de que el horario podría ser diferente. Los dos se recogen en el texto de la sección de horario y en las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y los **asientos** adaptados para sillas de ruedas. Esta ficha **no publica la entrada del aseo** que sí traen las webs vecinas, así que no se menciona. No publica ninguna otra.

### El teléfono

Es un **móvil** (625 08 57 29), y así se publica: `phoneHref` usa `tel:+34625085729`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Todo buenísimo, las raciones del menú son generosas y el servicio excelente.» (5/5)
2. «La comida está buenísima y el camarero y la cocinera son geniales.» (5/5)
3. «Además de eso, queso frito con salsa, embutidos, bebida, pan y postre.» (5/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-22   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas (01, 03, 05, 07 y 10) y cinco verticales (02, 04, 06, 08 y 09). **Ninguna es panorámica.**
- El manifiesto de la descarga **sí atribuye autor**: las diez son del propio local («Restaurante 22»), así que **cada foto de la galería lleva su pie** («Foto de Restaurante 22»), como en `restaurante-sur`, `restaurante-el-senor-perez` o `el-anzuelo-restaurante`.
- El collage de portada usa la **apaisada 10** arriba (16/9) y las verticales **04** y **06** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-restaurante-22-post.mjs`.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **10** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-22
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar el horario** (dos turnos de martes a sábado, domingo solo al mediodía y lunes cerrado) y ajustar `hours` si procede, incluidos los dos festivos que la ficha marca (9 y 12 de octubre).
3. **Confirmar con el titular si hay menú del día y su precio**: la ficha no publica carta ni precios y esta web no los inventa.
4. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
5. **Confirmar la dirección**: Google publica «C. de Roldán, 3» con la abreviatura «C.»; decidir si se mantiene literal o se normaliza («Calle de Roldán, 3»).
6. Si el dominio final no es `restaurante-22.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
