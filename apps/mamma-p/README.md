# Restaurante Mamma P

Web informativa de **Restaurante Mamma P**, restaurante italiano en **Carrer Pau Casals, 10 · 03581 L'Alfàs del Pi (Alicante)**, con teléfono 865 88 54 27.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Bitter** (títulos) y **Outfit** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante Mamma P                      |
| Dirección               | Carrer Pau Casals, 10 · 03581 L'Alfàs del Pi |
| Teléfono                | +34 865 88 54 27                         |
| Categoría de Google     | Restaurante italiano                     |
| Valoración              | 4,7 sobre 5 con 753 reseñas              |
| Horario                 | Publicado (ver abajo)                    |
| Coordenadas             | 38.5758798, -0.0675672                   |
| Plus code               | HWGJ+9X Alfaz del Pi                     |
| Identificador del lugar | `ChIJbWIiSxMBYg0RDxpxcQlfLvM`            |
| Identificador de canal  | `/g/11t4_msb26`                          |
| Feature id              | `0xd6201134b22626d:0xf32e5f0971711a0f`   |

El número de reseñas se escribe **«753 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Es la primera web del grupo de Alicante que no está en Benidorm**: el local está en **L'Alfàs del Pi**, a unos kilómetros al norte. La provincia sigue siendo Alicante y la comunidad la Comunidad Valenciana, así que `geo.region` mantiene el código **`ES-A`** (el código postal sí cambia: 03581).

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante italiano», que alimenta `servesCuisine: ['Italiana']`, como en `restaurante-atracon-jaen`. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica carta ni precios) y sin `sameAs` (sin web propia ni redes).

**La descripción del titular es la más corta del grupo.** Es una sola frase en italiano y se reproduce **literal**, sin traducirla:

```
Un italiano vero
```

**Sin distintivo.** Google **no muestra ninguna etiqueta junto al nombre**, así que no existe la constante `distintivo` y la web no menciona ninguna.

**El plus code lleva «Alfaz del Pi», sin apóstrofo.** Google lo publica así (`HWGJ+9X Alfaz del Pi`) mientras que el nombre del municipio en la dirección es «L'Alfàs del Pi». Se recogen **las dos grafías tal cual las publica la ficha**, cada una en su sitio.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 13:00 – 23:00                  |
| Martes    | 13:00 – 23:00                  |
| Miércoles | Cerrado                        |
| Jueves    | 13:00 – 23:00                  |
| Viernes   | 13:00 – 23:00                  |
| Sábado    | 13:00 – 23:00                  |
| Domingo   | 13:00 – 23:00                  |

Detalles que se trasladan tal cual a la web:

- **Tramo continuo de 13:00 a 23:00** todos los días menos el **miércoles**, que cierra.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera una entrada y el miércoles ninguna (**6 especificaciones** en total).
- **Dos marcas de festivo, ambas de aviso.** El **viernes 9** la ficha lo marca como **«Día de la Comunidad Valenciana: el horario podría ser diferente»** y el **lunes 12** como **«Fiesta Nacional de España: el horario podría ser diferente»**. Las dos son avisos de que el horario podría cambiar, así que se recogen igual, atribuidas a su día.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas.

### El teléfono

Es el 865 88 54 27, y así se publica: `phoneHref` usa `tel:+34865885427`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación, **con la nota que publica cada una**:

1. «Pizzas y pasta estupendas y un servicio excelente.» (5/5)
2. «Pedimos una pizza con trufa y habia tomate en la pizza y no saboreaba bien.» (**3/5**)
3. «Las pizzas increíbles, la pasta impresionante, la carne buenísima.» (5/5)

**Primera web del grupo con una reseña destacada de tres estrellas.** Se muestra con su nota real, sin omitirla ni redondearla, y la portada y las preguntas frecuentes la mencionan. Si el titular pide retirarla, hay que justificarlo aquí antes de hacerlo: no se oculta una reseña de la ficha sin indicación suya.

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona. Se conserva la falta de tilde original («habia»).

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs mamma-p   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 mamma-p
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **cuatro apaisadas** (01, 03, 06 y 10) y **seis verticales** (02, 04, 05, 07, 08 y 09). **Ninguna es panorámica ni cuadrada.**
- El manifiesto de la descarga **sí atribuye autor**: las diez son del propio local («Restaurante Mamma P»), así que **cada foto de la galería lleva su pie** («Foto de Restaurante Mamma P»).
- El collage de portada usa la **apaisada 01** arriba (16/9) y las verticales **04** y **09** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **7,1 MB a 2,3 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-mammap-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs mamma-p
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Revisar la reseña de 3 sobre 5** que la ficha destaca, citada literal: decidir con el titular si se mantiene, porque no se retira sin su indicación.
3. **Confirmar la descripción del titular** («Un italiano vero»): es una sola frase en italiano. Si el titular publica otra más larga, actualizarla aquí.
4. **Revisar las dos grafías del municipio**: la dirección usa «L'Alfàs del Pi» y el plus code «Alfaz del Pi», tal como los publica la ficha.
5. **Confirmar el horario** (13:00 a 23:00, miércoles cerrado) y el tratamiento de los dos festivos del 9 y el 12 de octubre.
6. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
7. Si el dominio final no es `mamma-p.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
