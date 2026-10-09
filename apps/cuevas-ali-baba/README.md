# Cuevas Alí Babá

Web informativa de **Cuevas Alí Babá**, restaurante marroquí en la **Calle del Espino, 17 · 13003 Ciudad Real**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | CUEVAS ALÍ BABÁ (Google lo pone en mayúsculas) |
| Dirección               | C. del Espino, 17 · 13003 Ciudad Real    |
| Categoría de Google     | Restaurante marroquí                     |
| Valoración              | 4,7 sobre 5 con 303 reseñas              |
| Teléfono                | 632 54 50 75 (móvil)                     |
| Horario                 | **No publicado por la ficha**            |
| Coordenadas             | 38.9915168, -3.9309657                   |
| Plus code               | X3R9+JJ Ciudad Real                      |
| Identificador del lugar | `ChIJPwaA4DS7aw0RD-I7HKhsta0`            |
| Identificador de canal  | `/g/11rk8b2pp8`                          |
| Feature id              | `0xd6bbb34e080063f:0xadb56ca81c3be20f`   |

El número de reseñas se escribe **«303 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Nombre.** La ficha de Google publica el nombre en mayúsculas («CUEVAS ALÍ BABÁ»). En la web se escribe **Cuevas Alí Babá**, con capitalización normal y sin cambiar ninguna palabra, igual que las direcciones abreviadas del repositorio se desarrollan.

**Dirección desarrollada.** Google publica la dirección abreviada («C. del Espino, 17»). En la web se desarrolla a **Calle del Espino, 17**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 13003 y el municipio (Ciudad Real) se publican tal cual.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante marroquí», así que `servesCuisine` se traduce a `['Marroquí']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **632 54 50 75**, y por su prefijo es un **móvil**: se publica como **+34 632 54 50 75** y el enlace de llamada es `tel:+34632545075`.

**Distintivo.** Google muestra junto al nombre la etiqueta **«Brunch»**, la única de ese tipo en la ficha. Se recoge tal cual, sin interpretarla.

### La descripción del titular

La ficha publica una descripción escrita por el propio negocio, que se reproduce **literal**, sin corregir sus faltas de tilde ni sus erratas («arabe», «marroqui», «cuidad», «retaurantes»). Menciona a los propios cocineros tal como lo escribió el local:

```text
restaurante arabe marroqui unico en toda cuidad real y sus pueblos todo casero hecho por los propios Jefes samir y bouchra cocineros con titulo tecnicos de cocina y 20 años de experiencia en hoteles retaurantes y fincas
```

## Sin horario y sin accesibilidad publicados

Es la primera web del repositorio que **no muestra horario**, y también la primera sin lista de accesibilidad:

- **Horario.** Google devuelve el bloque de horario vacío (`info[203]` = `null`), así que `src/data/site.ts` **no tiene `hours` ni `hoursSummary`**, la portada no pinta ninguna tabla y los datos estructurados **no llevan `openingHoursSpecification`**. En su lugar, la sección «Ubicación» y una de las preguntas frecuentes explican que la ficha no publica horario y remiten al teléfono.
- **Accesibilidad.** El bloque de atributos viene vacío (`info[100]` = `[]`), así que **no hay `accesibilidad`**, no se pinta ninguna lista de servicios y el JSON-LD **no lleva `amenityFeature`**. La sección «Ubicación» y una de las preguntas frecuentes lo dicen expresamente.

En los dos casos se ha preferido no inventar el dato, como en las webs sin teléfono del repositorio.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación, y **conservando los emojis** que escribió la persona. Las tres son de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « »:

1. «El té y las pastas no pueden faltar 🥳 Sin ninguna duda, volveremos!» (5/5)
2. «Todo estaba buenísimo, el camarero es maravilloso, te tratan genial.» (5/5)
3. «Es una visita obligada en la comarca, ya que la comida es exquisita.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs cuevas-ali-baba   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 cuevas-ali-baba
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis verticales (02, 05, 06, 07, 09 y 10) y cuatro apaisadas (01, 03, 04 y 08).
- El manifiesto de la descarga **atribuye las diez al propio negocio** (`author` = «CUEVAS ALÍ BABÁ», el nombre tal como lo publica Google), así que cada foto de la galería lleva su pie «Foto de Cuevas Alí Babá».
- El collage de portada usa la apaisada 16/9, la **08**, arriba —encaja exacta en el hueco ancho— y las verticales **05** y **09** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **5,7 MB a 2,3 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-cuevas-ali-baba-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada 16/9, la **08** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs cuevas-ali-baba
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Conseguir el horario del titular.** La ficha no lo publica: si el local lo facilita, hay que añadir `hours` y `hoursSummary` a `src/data/site.ts`, reponer la tabla de horario en la portada y reactivar `openingHoursSpecification` en el JSON-LD.
3. **Conseguir los servicios de accesibilidad** si el titular los facilita, y reponer la lista y `amenityFeature`.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Si el dominio final no es `cuevas-ali-baba.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
