# Taberna 4 Esquinas

Web informativa de la **Taberna 4 Esquinas**, taberna y bar de tapas en la **calle Teodoro Calvache, 12 · 23001 Jaén**, con teléfono 953 88 80 17.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                  |
| ----------------------- | ------------------------------------------------ |
| Nombre                  | Taberna 4 Esquinas                                |
| Dirección               | C. Teodoro Calvache, 12 · 23001 Jaén             |
| Teléfono                | +34 953 88 80 17                                  |
| Categorías de Google    | Taberna · Bar de tapas                            |
| Valoración              | 4,3 sobre 5 con 1.280 reseñas                     |
| Horario                 | Publicado (ver abajo)                             |
| Coordenadas             | 37.7675146, -3.7858338                            |
| Plus code               | Q697+2M Jaén                                      |
| Identificador del lugar | `ChIJL3t1EXXXbQ0RmHrpJOkaYYA`                     |
| Identificador de canal  | `/g/11f3r1r4r6`                                   |

El número de reseñas se escribe **«1.280 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección depurada.** Google publica la vía como «C. Teodoro Calvache, 12», con la abreviatura **«C.»**. En la web se desarrolla a **Calle Teodoro Calvache, 12**, como en el resto del repositorio, y el municipio va en su campo (23001 Jaén).

**`categories` y sin `servesCuisine`.** La ficha publica **dos categorías**: «Taberna» (la principal, que se usa como `category`) y «Bar de tapas». Se recogen las dos en `categories`. Aquí **no se añade `servesCuisine`**: ninguna de las dos categorías declara una cocina, así que traducirlas a `servesCuisine` sería inventar. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y **sin `sameAs`** (sin web propia ni redes).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | 12:00 – 24:00 |
| Martes    | 12:00 – 24:00 |
| Miércoles | 12:00 – 24:00 |
| Jueves    | 12:00 – 24:00 |
| Viernes   | 12:00 – 1:00  |
| Sábado    | 12:00 – 1:00  |
| Domingo   | 12:00 – 24:00 |

Detalles que se trasladan tal cual a la web:

- **Abre todos los días a las 12:00.** De domingo a jueves cierra a medianoche; los viernes y sábados alarga hasta la 1:00. Google escribe la medianoche como **24:00**, que es lo que se muestra en pantalla; en los datos estructurados se escribe como cierre a las **00:00** (`openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, que genera **7 especificaciones**, una por día, porque ninguna entrada se queda vacía).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Aquí el lunes **sí abre**, así que se publica abierto **con la advertencia** en el texto de la sección de horario, sin añadir una fila extra a la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas** y las dos están **marcadas como no disponibles**: dice que **no hay aparcamiento adaptado** ni **asientos adaptados para sillas de ruedas**. La ficha no publica el acceso ni el aseo, así que no se declaran. Es la **primera ficha del repositorio con todas sus entradas de accesibilidad en negativo**, y se muestran igual, con su marca de negación (`is-no`).

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. **No todas son de 5** y se reproducen igual, sin esconderlas:

1. «Tapas generosas, raciones de gran calidad-precio y cerveza bien tirada y fría.» (**4** sobre 5)
2. «Carrillada en salsa o "alpargata" (pan tostado) lomo, pimiento y tomate...» (**5** sobre 5)
3. «Buen lugar para tapear, en especial sus migas, buen trato» (**5** sobre 5)

### Sin distintivo, sin descripción del local

La ficha **no muestra ningún distintivo** junto al nombre (ni «Brunch» ni ninguno de los que sí publican otras fichas del repositorio), así que no se enseña ninguno ni tiene pregunta frecuente. Tampoco publica una **descripción del titular**, carta ni precios, así que no se reproduce ninguna de las tres cosas.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs taberna-4-esquinas          # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 taberna-4-esquinas
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `adrizale`).
- Son formatos mezclados: **tres apaisadas** (la 01 de 2775×2189, la 04 de 4032×3024 y la 06 de 5712×4284) y **siete verticales** (entre ellas una estrecha de 720×1280 y dos de 3213×5712). El collage de portada usa la **apaisada 01** arriba y las **verticales 03 y 05** en los dos huecos inferiores. La galería va en tres columnas por el mismo motivo que en el resto del repositorio: con formatos mezclados el mosaico se lee mejor que una rejilla de recortes.
- Tras optimizar, el total bajó de **4,5 MB a 1,9 MB** (2,04 MB reales); los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630, 120.845 bytes) es un recorte centrado de la **apaisada 06** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs taberna-4-esquinas
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente) y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `taberna-4-esquinas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
