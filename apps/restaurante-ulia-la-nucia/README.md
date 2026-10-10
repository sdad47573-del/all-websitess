# Restaurante Ulia La Nucía

Web informativa de **Restaurante Ulia La Nucia**, restaurante de cocina valenciana en la **Calle Caravana, 9 · 03530 La Nucía** (Alicante), con teléfono 865 75 12 20.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Restaurante Ulia La Nucia              |
| Dirección               | Calle Caravana, 9 · 03530 La Nucia     |
| Teléfono                | +34 865 75 12 20                       |
| Categoría de Google     | Restaurante de cocina valenciana       |
| Distintivo              | Brunch                                 |
| Valoración              | 4,4 sobre 5 con 304 reseñas            |
| Horario                 | 13:00 – 22:30 (jueves a lunes)         |
| Coordenadas             | 38.576326, -0.1306691                  |
| Plus code               | HVG9+GP La Nucía                       |
| Identificador del lugar | `ChIJ4-77eVsDYg0Royw2l3uVUF4`          |
| Identificador de canal  | `/g/11n__5zpt4`                        |
| Feature id              | `0xd62035b79fbeee3:0x5e50957b97362ca3` |

El número de reseñas se escribe **«304 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Este local no está en Benidorm**, sino en **La Nucía**: es la primera ficha del lote que sale del municipio de Benidorm (La Nucía está en la misma comarca, la Marina Baixa).

**La Nucía, con tilde.** La dirección de la ficha escribe el municipio **«La Nucia», sin tilde**, pero el **plus code de la propia ficha** («HVG9+GP La Nucía») y la **descripción del titular** lo escriben **«La Nucía»**, que es la forma correcta. En la web se publica con tilde, y la dirección (Calle Caravana, 9), el código postal (03530) y la provincia se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante de cocina valenciana», y es una cocina declarada, así que de ahí sale `servesCuisine: ['Cocina valenciana']` (no de la descripción del titular, como en otras fichas del lote). El `@type` es `Restaurant`, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Brunch»

Google muestra junto al nombre la etiqueta **«Brunch»**. Se recoge como dato, aparece en la franja de la portada y no se amplía ni se interpreta. A diferencia de otras webs del lote, aquí no se le dedica una pregunta frecuente: la ficha ya publica una descripción del titular que explica qué se sirve.

### La descripción del titular

Es la **única ficha del lote con una descripción de varios párrafos**, y se reproduce **literal**: nombre del titular, saltos de párrafo y puntuación original. Se pinta con `white-space: pre-line` para respetar los saltos.

El último párrafo es **«Con todas las medidas Covid-19 en vigor.»** y se reproduce igual que el resto, porque es texto del propio titular. **Es un texto fijo del perfil y puede estar desactualizado**, así que la portada avisa expresamente de que esa línea es del titular y de que aquí no se corrige ni se completa. La descripción también menciona el **comedor interior, la terraza con sombra, el parque infantil y el reservado para celebraciones**, y que **«se recomienda reserva»**; todo eso se refleja en las respuestas de las preguntas frecuentes, siempre citando al titular.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 13:00 – 22:30                  |
| Martes    | Cerrado                        |
| Miércoles | Cerrado                        |
| Jueves    | 13:00 – 22:30                  |
| Viernes   | 13:00 – 22:30                  |
| Sábado    | 13:00 – 22:30                  |
| Domingo   | 13:00 – 22:30                  |

- **Abre de 13:00 a 22:30 de jueves a lunes**, con **horario continuo** (sin cierre de mediodía).
- **Cierra martes y miércoles**: son los dos únicos días cerrados.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: **5 especificaciones** (los dos días cerrados no generan ninguna).
- La respuesta trae el aviso **«Fiesta Nacional de España: el horario podría ser diferente»** junto al lunes (12 de octubre). Se recoge en el texto de la sección de horario (constante `avisoFestivo`) y **no cambia la tabla**.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos adaptados para sillas de ruedas**. Los cuatro servicios coinciden con los de las fichas de Nueva vida y Nepalí, que también publican el aseo y el aparcamiento.

### El teléfono

`phoneHref` usa `tel:+34865751220`. La ficha no publica ningún otro número.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera conserva el espacio antes de la admiración final y la tercera va sin signos de puntuación, como la escribió quien la firmó). Dos son de 5 sobre 5 y una de 4 sobre 5, así que **ninguna es crítica** y no se usa el estilo `.quote.is-low`:

1. «Sepia a la brasa muy fresca con una salsa verde riquísima para mojar el pan !» (5/5)
2. «Destacan las croquetas, muy ricas y cremosas, y sus deliciosos arroces.» (5/5)
3. «Buena comida buen servicio volveré sin duda vale la pena lo recomiendo un saludo» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-ulia-la-nucia   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-ulia-la-nucia
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías distintas** (los diez ficheros tienen MD5 distinto, sin duplicados): seis apaisadas (01, 02, 03, 04, 06 y 09; cinco de ellas en 4/3 y la 02 en 16/9), tres verticales (05, 07 y 08, de proporción 0,75) y una casi cuadrada (la vista 10, 983 × 1003).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Restaurante Ulia La Nucia»), así que cada foto de la galería lleva su pie.
- El collage de portada usa la apaisada **02**, que ya viene en **16/9 nativo** (1920 × 1080) y por tanto no hay que recortarla, y las verticales **05** y **07** en los dos huecos inferiores, que encajan en la proporción 4/5 del repositorio. La galería va en tres columnas.
- Tras optimizar (lado máximo 1600 px), las diez fotos bajan de **3,9 MB a 2,1 MB** (−47 %); los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630, ≈93 KiB) es un recorte de la apaisada **02**, la única de la ficha que ya está en la proporción exacta de la imagen de compartir.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-ulia-la-nucia
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (de jueves a lunes, 13:00–22:30; martes y miércoles cerrado) y el aviso de festivo del 12 de octubre, y ajustar `hours` si procede.
3. **Revisar la descripción del titular**, sobre todo la línea de las medidas Covid-19, y actualizarla solo si el propio local lo pide: es su texto y se reproduce literal.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Si el dominio final no es `restaurante-ulia-la-nucia.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
