# Restaurante Casería de Cristóbal

Web informativa del **Restaurante Casería de Cristóbal**, restaurante en la **JA-3210, 88 · 23002 Jaén**, con teléfono 953 19 03 00.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante Casería de Cristóbal         |
| Dirección               | JA-3210, 88 · 23002 Jaén                 |
| Teléfono                | +34 953 19 03 00                         |
| Categoría de Google     | Restaurante                              |
| Valoración              | 4,6 sobre 5 con 184 reseñas              |
| Horario                 | **No publicado en la ficha**             |
| Coordenadas             | 37.7459689, -3.7907469                   |
| Plus code               | P6W5+9P Jaén                             |
| Identificador del lugar | `ChIJ8UG4XNbZbQ0R1clp_hmvABc`            |
| Identificador de canal  | `/g/11c1p949h6`                          |
| Distintivo de la ficha  | Brunch                                   |

El número de reseñas se escribe **«184 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type`, `servesCuisine`, `acceptsReservations` y `openingHoursSpecification`.** Google clasifica el local **solo como «Restaurante»**, sin tipo de cocina, y la ficha no publica ninguna descripción del propio local, así que **no se declara `servesCuisine`**. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. No hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes), **ni `openingHoursSpecification`**: la ficha no publica horario.

### El horario: no publicado

La ficha de Google Maps de este restaurante **no publica ningún horario**. En la respuesta del endpoint, el bloque de horario (`info[203]`) viene a `null` y **no aparece ninguna hora `HH:MM` en todo el payload**; se comprobó en seis consultas seguidas y siempre igual.

Por eso `hours` es una lista **vacía a propósito** (con tipo explícito `readonly DiaHorario[]`, porque sin él TypeScript inferiría `never[]` y el `flatMap` no compilaría) y la web:

- no muestra ninguna tabla de horarios: en su lugar enseña un aviso `.hours-missing` que explica que la ficha no lo publica y remite al teléfono,
- no declara `openingHoursSpecification` en los datos estructurados (solo se añade si `hours` no está vacía),
- y en la cabecera y la franja de datos escribe «Horario no publicado en la ficha · confírmalo por teléfono».

Inventar un horario sería publicar un dato falso, así que no se hace.

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo` y se enseña en la portada, sin ampliarla ni interpretarla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**: el **acceso, el aseo y los asientos adaptados** para sillas de ruedas, los tres disponibles. No publica ningún dato de aparcamiento adaptado, así que no se declara.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. **No todas son de 5**: se reproduce igual una de 4, sin esconderla:

1. «Un sitio agradable, buenos profesionales y atención exquisita.» (4 sobre 5)
2. «Gema la Camarera que nos atendio, atenta, simpática y súper amable!» (5 sobre 5)
3. «Buena cocina, en concreto el bacalao es suave, delicioso y muy recomendable.» (5 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-caseria-de-cristobal   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-caseria-de-cristobal
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto **no identifica autor** en ninguna, así que no llevan pie (`figcaption`).
- Esta ficha es la más apaisada de las vistas hasta ahora: siete apaisadas, dos verticales y una casi cuadrada. El collage de portada usa la apaisada 04 (16/9 exacto y de mayor resolución) arriba y la vertical 08 y la cuadrada 09 en el hueco inferior, con las proporciones por defecto del repositorio (16/9 y 4/5).
- Tras optimizar, el total bajó de **4,6 MB a 1,5 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 04 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-caseria-de-cristobal
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Preguntar al titular por su horario y, si lo facilita, rellenar `hours` en `src/data/site.ts` siguiendo la forma `{ day, service, shifts, dayOfWeek }`: la tabla y el `openingHoursSpecification` se generan solos.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-caseria-de-cristobal.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
