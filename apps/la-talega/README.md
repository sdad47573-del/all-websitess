# La Talega

Web informativa de **La Talega**, restaurante y bar en la **C. Melchor Cobo Medina, 6 · 23001 Jaén**, con teléfono 637 95 75 00.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado              |
| ----------------------- | ---------------------------- |
| Nombre                  | La Talega                    |
| Dirección               | C. Melchor Cobo Medina, 6 · 23001 Jaén |
| Teléfono                | +34 637 95 75 00             |
| Categorías de Google    | Restaurante, Bar             |
| Valoración              | 4,5 sobre 5 con 467 reseñas  |
| Horario                 | Publicado (ver abajo)        |
| Coordenadas             | 37.7671535, -3.7852943       |
| Plus code               | Q687+VV Jaén                 |
| Identificador del lugar | `ChIJH1u5FHXXbQ0RUjic42boQOI` |
| Identificador de canal  | `/g/1vjdrds2`                |
| Distintivo de la ficha  | Se admiten perros            |

El número de reseñas se escribe **«467 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type`, `servesCuisine`, `priceRange` y `sameAs`.** Google clasifica el local como **«Restaurante» y «Bar»**, sin cocina concreta, y la ficha no publica la carta ni ningún rango de precios, así que **no se declara `servesCuisine` ni `priceRange`**. Tampoco hay `sameAs`: la ficha no publica web propia ni perfiles sociales. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual.

### El horario

Es el horario que publica la ficha y se comprobó estable en tres consultas seguidas:

| Día       | Horario                          |
| --------- | -------------------------------- |
| Lunes     | Cerrado                          |
| Martes    | 13:30 – 16:30 · 20:30 – 23:30    |
| Miércoles | 13:30 – 16:30 · 20:30 – 23:30    |
| Jueves    | 13:30 – 17:30                    |
| Viernes   | 13:30 – 17:30 · 20:30 – 24:00    |
| Sábado    | 13:30 – 17:30 · 20:30 – 24:00    |
| Domingo   | 13:30 – 17:30                    |

Dos detalles que se trasladan tal cual a la web:

- **El mediodía cambia de hora de cierre**: acaba a las 16:30 martes y miércoles y a las 17:30 el resto de días. La cena termina a las 23:30 martes y miércoles y a medianoche viernes y sábado; en los datos estructurados el cierre de medianoche se escribe como `00:00`.
- **Jueves y domingo solo hay mediodía**: no aparece ningún turno de noche esos dos días, así que la portada no lo inventa.

La respuesta trae además el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto; se recoge en el texto de la sección de horario. El cierre del lunes es, por lo demás, el habitual (lo confirman las fuentes públicas de la ficha). La tabla se genera desde `hours` con la forma `{ day, service, shifts, dayOfWeek }` y, en paralelo, `openingHoursSpecification` se construye con un `flatMap` sobre los turnos.

### El distintivo «Se admiten perros»

Google muestra la etiqueta **«Se admiten perros»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cinco entradas**, la ficha con más de las vistas en el repositorio:

- Disponibles: **acceso, aseo y asientos adaptados** para sillas de ruedas.
- No disponibles: **aparcamiento adaptado** y **bucle magnético asistencial**.

En la portada se listan las cinco, y las dos marcadas como no disponibles llevan la clase `is-no`.

### Las reseñas

Esta ficha destaca **dos reseñas, no tres** como el resto de webs del repositorio, así que la portada lo dice con el número real (`const numeroResenas = reviews.length`) en vez de con una cifra escrita a mano. Se citan **literales**, sin corregir su redacción ni su puntuación, y las dos son de 5 sobre 5:

1. «Nos pedimos, croquetas, chipirones, berenjena, lagarto, queso y torreznos.»
2. «Exquisitas setas con jamón y huevos.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs la-talega   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 la-talega
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** (cinco apaisadas y cinco verticales) y el manifiesto **no identifica autor** en ninguna, así que no llevan pie (`figcaption`).
- El collage de portada usa la apaisada 02 (16/9, apta para el hueco ancho) arriba y las verticales 03 y 05 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5).
- Tras optimizar, el total bajó de **4,2 MB a 2,0 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 02 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs la-talega
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `la-talega.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
