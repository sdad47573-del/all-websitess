# Floristerías La Abadia

Web informativa de **Floristerías La Abadia**, floristería en la **Calle Amadeo Vives, 9 · 29002 Málaga** (barrio de Carretera de Cádiz), con teléfono 619 95 12 52.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Floristerías La Abadia                     |
| Dirección               | C. Amadeo Vives, 9 · 29002 Málaga          |
| Barrio                  | Carretera de Cádiz                         |
| Teléfono                | +34 619 95 12 52                           |
| Categorías de Google    | Floristería                                |
| Valoración              | 4,8 sobre 5 con 81 reseñas                 |
| Horario                 | Publicado (ver abajo)                      |
| Coordenadas             | 36.7064268, -4.4368917                     |
| Plus code               | PH47+H6 Málaga                             |
| Identificador del lugar | `ChIJO7XbNIL3cg0RWN9VxJn8zzI`              |
| Identificador de canal  | `/g/11bbx0kqn4`                            |
| Feature id              | `0xd72f78234dbb53b:0x32cffc99c455df58`     |

El número de reseñas se escribe **«81 reseñas»** y la valoración con coma decimal («4,8»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**El nombre de la ficha.** Google lo publica como **«Floristerías La Abadia»**, con «Abadia» sin tilde. Se reproduce tal cual en `business.name` (como en el resto de webs del repositorio) y `shortName` usa «La Abadia» en la etiqueta del mapa.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Amadeo Vives, 9»). En la web se desarrolla a **Calle Amadeo Vives, 9**, como en el resto del repositorio; el código postal 29002 y el municipio (Málaga) se publican tal cual, y «Carretera de Cádiz» se conserva como barrio.

**Categoría y `@type`.** La ficha publica **una única categoría**: «Floristería». `category` y `categories` la recogen, y el `@type` de los datos estructurados es `Florist`. Sin `priceRange` (la ficha no publica precios), sin `sameAs` (sin web propia ni redes) y sin `acceptsReservations` (no es un restaurante).

**Sin descripción del titular.** La ficha **no publica descripción**, así que no hay `descripcionLocal` y la web no inventa ninguna: lo único que dice de la tienda son sus datos y las reseñas que destaca.

**Sin distintivo.** Google no muestra ninguna etiqueta junto al nombre en esta ficha, así que no hay `distintivo` ni una pregunta frecuente sobre él.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha    |
| --------- | --------------------------------- |
| Lunes     | 10:30 – 14:00 · 17:30 – 20:30     |
| Martes    | 10:30 – 14:00 · 17:30 – 20:30     |
| Miércoles | 10:30 – 14:00 · 17:30 – 20:30     |
| Jueves    | 10:30 – 14:00 · 17:30 – 20:30     |
| Viernes   | 10:30 – 14:00 · 17:30 – 20:30     |
| Sábado    | 10:30 – 14:00                     |
| Domingo   | Cerrado                           |

Detalles que se trasladan tal cual a la web:

- **Dos turnos de lunes a viernes**: mañana de **10:30 a 14:00** y tarde de **17:30 a 20:30**.
- **El sábado abre solo por la mañana**, de 10:30 a 14:00.
- **El domingo cierra**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los días de dos turnos generan dos entradas y el domingo cerrado ninguna (**11 especificaciones** en total).

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una única entrada**, y figura como disponible: el **acceso para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (619 95 12 52), y así se publica: `phoneHref` usa `tel:+34619951252`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Muy buen servicio, flores muy bonitas y propietaria muy agradable 10/10» (5/5)
2. «Excelente trato y flores preciosas, volveremos 💘» (5/5)
3. «La dueña es muy apañada, da gusto ser atendido por ella.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs floristeria-la-abadia   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 floristeria-la-abadia
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: nueve verticales (01, 02, 03, 04, 05, 07, 08, 09 y 10) y una casi cuadrada (`vista-6-06`, 1080 × 1079).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `adrizale`, `la-talega` o `casa-loan`).
- El collage de portada usa la casi cuadrada **06** arriba —la que mejor resiste el recorte 16/9 del hueco superior— y las dos verticales de mayor resolución, **01** y **03**, en los dos huecos inferiores (4/5). La galería va en tres columnas con maquetación tipo mosaico.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs floristeria-la-abadia
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** y los datos de la ficha antes de publicar.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `floristeria-la-abadia.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
