# Abaceria Tinta De Toro

Web informativa de **Abaceria Tinta De Toro**, abacería y bar restaurante en el **P.º de la Estación, 23 · 23007 Jaén**, con teléfono 681 03 31 55.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                    |
| ----------------------- | ---------------------------------- |
| Nombre                  | Abaceria Tinta De Toro             |
| Dirección               | P.º de la Estación, 23 · 23007 Jaén |
| Teléfono                | +34 681 03 31 55                   |
| Categoría de Google     | Bar restaurante                    |
| Valoración              | 4,5 sobre 5 con 144 reseñas        |
| Horario                 | Publicado (ver abajo)              |
| Coordenadas             | 37.7734672, -3.7891136             |
| Plus code               | Q6F6+99 Jaén                       |
| Identificador del lugar | `ChIJhUNyZ27XbQ0RonYBB6M4uP8`      |
| Identificador de canal  | `/g/11k47_z2tf`                    |

El número de reseñas se escribe **«144 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Sin `servesCuisine`.** La única categoría que publica Google es «Bar restaurante», que no declara un tipo de cocina, así que `category` y `categories` llevan ese texto y **no se añade `servesCuisine`** (como en `adrizale` o `la-talega`). El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` y **sin `sameAs`** (la ficha no publica web propia ni perfiles sociales).

**Sin distintivo.** A diferencia de otras fichas, aquí Google **no muestra ninguna etiqueta** junto al nombre, así que la web no recoge ningún distintivo.

### La descripción del titular

La ficha **sí publica una descripción** escrita por el propio negocio. Se reproduce **literal** —con sus saltos de línea, sus emojis, sus almohadillas y su mención a `@tintadeto`— en la sección «En sus palabras» (`white-space: pre-line` en `.descripcion-local`), y va atribuida a la ficha:

> | Tinta de toro 🩸es el nuevo espacio gastronómico en la capital de #Jaén… Cocina tradicional, tapas y raciones generosas de temporada… ➕ info y reservas en @tintadeto

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario                     |
| --------- | --------------------------- |
| Lunes     | 8:00 – 18:00 · 19:45 – 2:00 |
| Martes    | 8:00 – 18:00 · 19:45 – 2:00 |
| Miércoles | 8:00 – 18:00 · 19:45 – 2:00 |
| Jueves    | 8:00 – 18:00 · 19:45 – 2:00 |
| Viernes   | 8:00 – 2:00                 |
| Sábado    | 12:00 – 2:00                |
| Domingo   | Cerrado                     |

Detalles que se trasladan tal cual a la web:

- **El domingo cierra.** Es el único día de descanso.
- **El viernes encadena un turno continuo** de 8:00 a 2:00 (18 horas) y el **sábado** abre a las 12:00 y cierra a las 2:00, también de un tirón: en los datos estructurados se escriben como una sola especificación por día.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Aquí el lunes **sí abre**, así que se publica abierto **con la advertencia**, sin ocultar la fila. `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 10 especificaciones en total (dos por cada día de lunes a jueves, una el viernes y otra el sábado).

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una sola entrada**, y está **disponible**: el **acceso para sillas de ruedas**. No publica aseo, asientos ni aparcamiento adaptados, así que la web no los declara.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5; la tercera termina con un signo de exclamación sin abrir («es exquisito!») y se reproduce igual:

1. «Local muy acogedor y un trato exquisito de los camareros y del chef.»
2. «La cecina buenísima, muy recomendable, y el servicio excelente.»
3. «Totalmente recomendable el bocata de calamares, es exquisito!»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs abaceria-tinta-de-toro   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 abaceria-tinta-de-toro
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `adrizale`).
- Son formatos mezclados: dos apaisadas y ocho verticales. El collage de portada usa la apaisada 01 (2048×1153, 16/9 exacto) arriba y las verticales 03 y 05 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas porque con retratos estrechos el mosaico se lee mejor que en una rejilla de recortes.
- Tras optimizar, el total bajó de **4,8 MB a 1,8 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs abaceria-tinta-de-toro
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `abaceria-tinta-de-toro.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
