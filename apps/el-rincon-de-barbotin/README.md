# El Rincón De Barbotin

Web informativa de **El Rincón De Barbotin**, taberna en la **C. de Pedro del Alcalde, 18 · 23002 Jaén**, con teléfono 665 42 79 91.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | El Rincón De Barbotin                      |
| Dirección               | C. de Pedro del Alcalde, 18 · 23002 Jaén   |
| Teléfono                | +34 665 42 79 91                           |
| Categoría de Google     | Taberna                                    |
| Valoración              | 4,6 sobre 5 con 298 reseñas                |
| Horario                 | Lunes a viernes: 6:00 – 0:30; sábado: 6:00 – 1:00; domingo cerrado |
| Coordenadas             | 37.7583452, -3.7947964                     |
| Plus code               | Q654+83 Jaén                               |
| Identificador del lugar | `ChIJwaOsV2XXbQ0RtT2DEnSw3eA`              |
| Identificador de canal  | `/g/11c58sjvp2`                            |

El número de reseñas se escribe **«298 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type`, `servesCuisine` y `acceptsReservations`.** La ficha clasifica el local **solo como «Taberna»**, sin tipo de cocina, así que los datos estructurados usan `@type: Restaurant` (el tipo del resto de webs del repositorio) y **omiten `servesCuisine`**: no hay ninguna cocina publicada que declarar. `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. No hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y publica un tramo que cruza la medianoche:

| Días                | Horario publicado |
| ------------------- | ----------------- |
| Lunes a viernes     | 6:00 – 0:30       |
| Sábado              | 6:00 – 1:00       |
| Domingo             | Cerrado           |

El cierre de la 0:30 (y la 1:00 del sábado) es de la **madrugada siguiente**; en los datos estructurados se escribe como `closes: '00:30'` y `closes: '01:00'`, que es la forma estándar de expresar un cierre nocturno. El lunes 12, Fiesta Nacional de España, aparece abierto con el mismo tramo y el aviso de que «el horario podría ser diferente».

### Accesibilidad

La ficha publica el grupo «Accesibilidad»: el **acceso, el aseo y los asientos adaptados** para sillas de ruedas están disponibles. No publica ningún dato de aparcamiento adaptado.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación:

1. «Buen sitio, yo desayuno alli, buen cafe y tostadas de Jamón de pata» (5 sobre 5)
2. «Rápidos atentos cerveza fresquita y buen ambiente» (3 sobre 5)
3. «Hay cervezas a elegir, las raciones son abundantes y están muy buenas.» (5 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs el-rincon-de-barbotin   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 el-rincon-de-barbotin
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto identifica como autora a la propia ficha («El Rincón De Barbotin»), así que cada foto lleva el pie **«Foto de El Rincón De Barbotin»**.
- Hay ocho apaisadas y dos verticales: el collage de portada usa la apaisada arriba y las dos verticales en el hueco inferior, con las proporciones por defecto del repositorio (16/9 y 4/5).
- Tras optimizar, el total bajó de **5,1 MB a 2,6 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs el-rincon-de-barbotin
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (apertura a las 6:00, cierre pasada la medianoche y el cierre del domingo) antes de darlo por definitivo.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `el-rincon-de-barbotin.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
