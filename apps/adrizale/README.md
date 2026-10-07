# Adrizale

Web informativa de **Adrizale**, taberna en la **C. Arco del Consuelo, 12 · 23004 Jaén**, con teléfono 673 63 64 09.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Adrizale                                 |
| Dirección               | C. Arco del Consuelo, 12 · 23004 Jaén    |
| Teléfono                | +34 673 63 64 09                         |
| Categoría de Google     | Taberna                                  |
| Valoración              | 4,6 sobre 5 con 194 reseñas              |
| Horario                 | Martes a jueves y domingo: 12:00 – 17:00; viernes y sábado: 12:00 – 2:00; lunes cerrado |
| Coordenadas             | 37.7659635, -3.7905786                   |
| Plus code               | Q685+9Q Jaén                             |
| Identificador del lugar | `ChIJg25AWnrXbQ0Rh5V_jeyzSZQ`            |
| Identificador de canal  | `/g/11kqbwgr78`                          |

El número de reseñas se escribe **«194 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type`, `servesCuisine` y `acceptsReservations`.** Google clasifica el local **solo como «Taberna»** y la ficha no publica ningún tipo de cocina ni una descripción del propio local, así que **no se declara `servesCuisine`** (igual que en `el-rincon-de-barbotin`, otra taberna del repositorio). El `@type` es `Restaurant`, el del resto de webs, y `acceptsReservations: true` se mantiene igual. No hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y el local cierra el **lunes**:

| Días                  | Horario publicado |
| --------------------- | ----------------- |
| Martes a jueves y domingo | 12:00 – 17:00 |
| Viernes y sábado      | 12:00 – 2:00      |
| Lunes                 | Cerrado           |

El cierre a las 2:00 es la **madrugada del día siguiente**; en los datos estructurados se escribe como `closes: '02:00'`.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una sola entrada**: el **acceso para sillas de ruedas**, marcado como disponible. No publica aseo, asientos ni aparcamiento adaptados, así que no se listan.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de **5 sobre 5**:

1. «Buena cocina, buen servicio y cerveza fria, muy recomendable»
2. «Muy bien atendidos y buenas raciones, muy ricas y generosas.»
3. «Pedimos un par de cañas, y nos pusieron una tapa de jamón muy rica.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs adrizale   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 adrizale
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto **no identifica autor** en ninguna, así que no llevan pie (`figcaption`).
- Hay dos apaisadas y ocho verticales: el collage de portada usa la más ancha (la 09) arriba y dos verticales en el hueco inferior, con las proporciones por defecto del repositorio (16/9 y 4/5).
- Tras optimizar, el total bajó de **5,3 MB a 2,0 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 09 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs adrizale
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (la apertura a mediodía, el cierre de madrugada del fin de semana y el cierre del lunes) antes de darlo por definitivo.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `adrizale.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
