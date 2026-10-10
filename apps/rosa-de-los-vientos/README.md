# Rosa de los vientos

Web informativa de **Rosa de los vientos**, restaurante mediterráneo en la **Av. Rosa dels Vents, 17 · 03570 Benidorm** (Alicante), con teléfono 648 88 75 46.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Rosa de los vientos                    |
| Dirección               | Av. Rosa dels Vents, 17 · 03570 Benidorm |
| Teléfono                | +34 648 88 75 46                       |
| Categorías de Google    | Restaurante mediterráneo               |
| Valoración              | 4,3 sobre 5 con 408 reseñas            |
| Horario                 | 10:00 – 24:00; el jueves cierra        |
| Coordenadas             | 38.525247, -0.16909                    |
| Plus code               | GRGJ+39 Benidorm                       |
| Identificador del lugar | `ChIJxUgMPJ4bYg0RzgWTONAG-y0`          |
| Identificador de canal  | `/g/11h6ycycq3`                        |
| Feature id              | `0xd621b9e3c0c48c5:0x2dfb06d0389305ce` |
| Distintivo de la ficha  | Brunch                                 |

El número de reseñas se escribe **«408 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Respuesta incompleta en el primer intento.** La primera descarga llegó con la ficha a medias (17 KB, sin horario). La segunda, de unos 30 KB, trajo el horario con los siete días y las tres reseñas que se citan abajo. La web usa la respuesta completa.

**Provincia y comunidad.** El código postal es **03570**, el de la zona de la Cala y Poniente de Benidorm: la provincia se recoge como `Alicante` y la comunidad como `Comunidad Valenciana`, con `geo.region` en el código de provincia **`ES-A`**, como el resto de webs alicantinas del repositorio (`bistrot-senseo`, `restaurante-22`).

**Dirección abreviada.** Google publica «Av. Rosa dels Vents, 17»: se reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas y el topónimo en valenciano de la ficha.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante mediterráneo», que **sí nombra una cocina**, así que se declara `servesCuisine: ['Cocina mediterránea']`, el mismo valor que usan las otras webs del repositorio con esa categoría (`las-coronas`, `restaurante-baviera`, `restaurante-club-de-mar`). El `@type` es `Restaurant`, el del resto de webs, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin texto descriptivo que citar

La ficha **no publica descripción del titular** (`merchantdescription` viene vacío) y **tampoco publica el resumen del lugar** que Google sí añade en otras fichas (`info[32]` viene `null`, como se comprobó al parsear la respuesta). Así que aquí no hay ningún bloque de texto que citar y la sección «La casa» se apoya solo en los campos publicados y en las reseñas, como en `restaurante-el-gato`.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la sección «La casa» y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

**Nombre corto.** La ficha no publica ninguna forma abreviada del nombre, así que `shortName` repite el nombre completo en vez de inventar un diminutivo.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 10:00 – 24:00                  |
| Martes    | 10:00 – 24:00                  |
| Miércoles | 10:00 – 24:00                  |
| Jueves    | Cerrado                        |
| Viernes   | 10:00 – 24:00                  |
| Sábado    | 10:00 – 24:00                  |
| Domingo   | 10:00 – 24:00                  |

Detalles que se trasladan tal cual a la web:

- **Un solo tramo continuado**, de **10:00 a 24:00**, de sábado a miércoles y el viernes.
- **El jueves cierra**, y así se marca en la tabla (`is-closed`) y en el resumen de la cabecera.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los seis días abiertos generan **seis especificaciones** y el jueves cerrado ninguna.
- El cierre a las 24:00 se escribe como **00:00** en los datos estructurados.
- El **lunes 12** lleva una **marca de festivo de tipo 1**, «Horario de Fiesta Nacional de España»: no es el aviso de que el horario podría cambiar, sino el horario propio de ese día, que aquí coincide con el tramo habitual. Se recoge con esa distinción en el texto de la sección de horario, como documenta `bistrot-senseo` (que es el precedente que separa los avisos de tipo 1 y de tipo 2).

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (648 88 75 46), y así se publica: `phoneHref` usa `tel:+34648887546`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación: la primera mantiene las tildes que le faltan a «tenia» y «menu», y la segunda termina con un **emoji**, que se conserva (como en `las-coronas` o `comidas-casa-garrido`, que también citan reseñas con emoji). **Las tres son de 5 sobre 5**:

1. «El menu de paella tenia mejillones, ensalada, plato de pescado y paella!» (5/5)
2. «Excelente trato, deliciosas y generosas raciones 👌🏻» (5/5)
3. «Las cantidades son abundantes, mejillones y arroz muy ricos.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs rosa-de-los-vientos   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 rosa-de-los-vientos
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **ocho verticales** (02, 04, 05, 06, 07, 08, 09 y 10) y **dos apaisadas** (01 y 03). Ninguna llega a panorámica.
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar, como en `restaurante-el-gato` o `restaurante-rays`.
- El collage de portada usa la apaisada **03** (4000 × 2690, la más ancha) arriba y las verticales **04** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total de las diez fotos baja de **6,6 MB a 2,5 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe, así que el manifiesto conserva las dimensiones originales).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **03** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs rosa-de-los-vientos
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da un tramo de 10:00 a 24:00 con el jueves cerrado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos: la ficha marca el lunes 12 con horario propio de Fiesta Nacional, y conviene confirmarlo por teléfono.
5. Si el dominio final no es `rosa-de-los-vientos.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
