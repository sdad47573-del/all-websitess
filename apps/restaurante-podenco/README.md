# Restaurante Podenco

Web informativa de **Restaurante Podenco**, restaurante de **Calle Tomillo, 1 (esquina con la Carretera de Piedrabuena) · 13005 Ciudad Real**, con teléfono 603 79 84 25.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, distintivo, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante Podenco                    |
| Dirección               | Calle Tomillo, 1 · 13005 Ciudad Real   |
| Teléfono                | +34 603 79 84 25                       |
| Categoría de Google     | Restaurante de cocina española         |
| Valoración              | 4,6 sobre 5 con 101 reseñas            |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.9762405, -3.9455638                 |
| Plus code               | X3G3+FQ Ciudad Real                    |
| Identificador del lugar | `ChIJF2PtgXXDaw0R5D8UnAl59Qk`          |
| Identificador de canal  | `/g/11tflr8k_l`                        |
| Feature id              | `0xd6bc37581ed6317:0x9f579099c143fe4`  |

El número de reseñas se escribe **«101 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**La dirección.** Google la guarda como **«en, Calle Tomillo, Carr. de Piedrabuena, 1, Local»**, con un «en» que es un artefacto de su propio campo y sin espacio para el número de la calle. El local está en **Calle Tomillo, 1**, en la esquina con la Carretera de Piedrabuena (así consta también en su perfil público y en la prensa local, que lo sitúan en «Calle Tomillo número 1, de Ciudad Real (Carretera de Piedrabuena)»). En la web se publica **Calle Tomillo, 1** y la esquina se menciona en el bloque de dirección y en las preguntas frecuentes; el código postal 13005 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante de cocina española». Alimenta `servesCuisine: ['Española']`, traduciéndola como en el resto del repositorio (por ejemplo `restaurante-parritas` traduce «cocina española» y «mediterráneo»). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Descripción del titular.** La ficha publica una descripción larga escrita por el propio negocio, de 705 caracteres, que empieza «En Restaurante Podenco creemos en la cocina hecha con tiempo, sabor y tradición…» y termina «…Restaurante Podenco es tu mesa.». Se reproduce **literal** (`descripcionLocal`), sin recortarla ni corregirla.

**Distintivo «Se admiten perros».** Google muestra junto al nombre la etiqueta **«Se admiten perros»**. Se recoge como dato (`distintivo`) y la portada la menciona **tal cual**, sin ampliarla ni interpretarla: no se afirma nada sobre condiciones o zonas. La sección de preguntas frecuentes incluye una respuesta que remite al teléfono para ese detalle.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 13:00 – 16:30                  |
| Martes    | Cerrado                        |
| Miércoles | 13:00 – 16:30                  |
| Jueves    | 13:00 – 16:30                  |
| Viernes   | 13:00 – 16:30 · 20:00 – 24:00  |
| Sábado    | 13:00 – 16:30 · 20:00 – 24:00  |
| Domingo   | 13:00 – 16:30                  |

Detalles que se trasladan tal cual a la web:

- **Comidas de 13:00 a 16:30** todos los días que abre.
- **Segundo turno de 20:00 a 24:00 el viernes y el sábado.**
- **El martes cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el viernes y el sábado generan dos entradas, el resto de días que abren una y el martes ninguna (**8 especificaciones** en total).
- El cierre a las 24:00 se escribe como **00:00** en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### El teléfono

Es un **móvil** (603 79 84 25), y así se publica: `phoneHref` usa `tel:+34603798425`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Lo único que no tenían pan sin gluten y cerveza 😢 Volveremos seguro.» (5/5)
2. «Lo sorprendente, es que es mitad solomillo y mitad entrecot.» (5/5)
3. «Primera visita y de 10 ✨🫶🏻 El camarero muy detallista con nosotros.» (5/5)

**Comillas quitadas.** A diferencia de otras fichas del repositorio, Google guarda aquí cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona. El emoji de cada reseña se conserva tal cual.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-podenco   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-podenco
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (03, 04, 06 y 08), cinco verticales (01, 02, 05, 07 y 09) y una **panorámica** (10, de 4080 × 1840).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `taberna-la-raquelita`, `restaurante-la-casuca` y `casa-loan` del repositorio.
- El collage de portada usa la **panorámica 10** arriba (16/9) y las verticales **01** y **02** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,5 MB a 2,0 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-podenco-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica **10** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-podenco
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular la dirección exacta** y el número (Google publica «en, Calle Tomillo, Carr. de Piedrabuena, 1, Local», con el «en» y sin el número de la calle) para dejarla como quiera publicarla.
3. **Confirmar con el titular el horario** (comidas de 13:00 a 16:30, cenas el viernes y el sábado, martes cerrado) y ajustar `hours` si procede. El teléfono que publica la ficha (603 79 84 25) difiere del que aparece en algunas reseñas de prensa: conviene confirmarlo.
4. Revisar la **descripción del titular** (705 caracteres) y el **distintivo «Se admiten perros»**: decidir si se mantienen literales o se ajustan.
5. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
6. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
7. Si el dominio final no es `restaurante-podenco.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
