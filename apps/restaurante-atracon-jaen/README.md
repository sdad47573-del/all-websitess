# Restaurante Atracón Jaén

Web informativa del **Restaurante Atracón Jaén**, restaurante de cocina italiana y europea en la **C. de Castilla-la Mancha, 3 · 23009 Jaén**, con teléfono 953 26 74 94.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Restaurante Atracón Jaén                   |
| Dirección               | C. de Castilla-la Mancha, 3 · 23009 Jaén   |
| Teléfono                | +34 953 26 74 94                           |
| Categoría de Google     | Restaurante                                |
| Valoración              | 4,2 sobre 5 con 1.865 reseñas              |
| Horario                 | Miércoles a jueves: 13:30 – 16:00 y 20:00 – 24:00; viernes a lunes: 13:30 – 16:30 y 20:00 – 24:00; martes cerrado |
| Coordenadas             | 37.7817769, -3.7911502                     |
| Plus code               | Q6J5+PG Jaén                               |
| Identificador del lugar | `ChIJZ4-7rwXXbQ0RsMvx5S8UTu8`              |
| Identificador de canal  | `/g/11f00hy0mv`                            |
| Distintivo de la ficha  | Se admiten perros                          |

El número de reseñas se escribe **«1.865 reseñas»** y la valoración con coma decimal («4,2»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type`, `servesCuisine` y `acceptsReservations`.** Google clasifica el local **solo como «Restaurante»**, sin tipo de cocina, pero el propio local se describe en su ficha como «Restaurante Cocina Italiana y Europea en la capital mundial del aceite de Oliva, Jaén»; de esa descripción salen los `servesCuisine: ['Italiana', 'Europea']` de los datos estructurados, sin añadir ninguna cocina que no aparezca. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. No hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y el local cierra el **martes**. El resto de días abre en dos turnos:

| Días              | Horario publicado          |
| ----------------- | -------------------------- |
| Miércoles y jueves | 13:30 – 16:00 · 20:00 – 24:00 |
| Viernes a lunes   | 13:30 – 16:30 · 20:00 – 24:00 |
| Martes            | Cerrado                    |

El cierre a las 24:00 es la **medianoche del día siguiente**; en los datos estructurados se escribe como `closes: '00:00'`, que es la forma estándar de expresar un cierre nocturno. El lunes 12, Fiesta Nacional de España, aparece abierto con el horario habitual y el aviso de que «el horario podría ser diferente».

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con cuatro entradas: el **acceso, el aseo y los asientos adaptados** para sillas de ruedas están disponibles, y el **aparcamiento adaptado** está marcado como no disponible.

### El distintivo «Se admiten perros»

Google muestra **«Se admiten perros»** junto al nombre en la ficha. Se recoge tal cual en `distintivo` y se enseña en la portada, sin ampliarlo ni interpretarlo.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. No todas son positivas: la ficha destaca una de **1 sobre 5** y se reproduce igual, sin esconderla:

1. «Comida buena, hay sándwich pizzas enrollados hamburguesas un par de risottos...» (4 sobre 5)
2. «El risotto y la pasta con salsa de pera están para repetir muchas veces.» (5 sobre 5)
3. «Más bien era arroz cocido con la salsa y en medio de esa masa dos champiñones.» (1 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-atracon-jaen   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-atracon-jaen
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto **no identifica autor** en ninguna, así que no llevan pie (`figcaption`).
- Hay dos apaisadas, siete verticales y una cuadrada: el collage de portada usa la apaisada arriba y las dos verticales en el hueco inferior, con las proporciones por defecto del repositorio (16/9 y 4/5).
- Tras optimizar, el total bajó de **8,1 MB a 2,4 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-atracon-jaen
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (los dos turnos, el cierre a medianoche y el cierre del martes) antes de darlo por definitivo.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-atracon-jaen.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
