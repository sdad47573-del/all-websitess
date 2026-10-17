# El Rincón de Castre

Web informativa de **Restaurante El Rincón de Castre**, parrilla en la **Calle Burgo Nuevo, 8 · 24001 León**, con teléfono 987 44 00 61.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante El Rincón de Castre          |
| Dirección               | Calle Burgo Nuevo, 8 · 24001 León        |
| Teléfono                | +34 987 44 00 61                         |
| Categoría de Google     | Restaurante                              |
| Descripción del titular | «Especialidad en carnes a la parrilla.»  |
| Valoración              | 4,8 sobre 5 con 322 reseñas              |
| Horario                 | L–S 13:00–17:00; domingo cerrado         |
| Coordenadas             | 42.5972295, -5.572438                    |
| Plus code               | HCWH+V2 León                             |
| Identificador del lugar | `ChIJGVqGGEKbNw0RD6rtKwnNes8`             |
| Identificador de canal  | `/g/11sbc6g_r7`                          |

El número de reseñas se escribe **«322 reseñas»** y la valoración con coma decimal («4,8»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección.** Google publica «Calle Burgo Nuevo, 8», sin abreviaturas, así que se reproduce tal cual; el código postal 24001 y el municipio (León) se publican igual.

**`servesCuisine`.** La ficha solo publica la categoría «Restaurante». La especialidad en carnes a la parrilla es la descripción del titular, no una categoría de cocina de Google, así que no se añade `servesCuisine` ni se traduce nada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual.

### El horario

Es el horario que publica la ficha:

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | 13:00 – 17:00 |
| Martes    | 13:00 – 17:00 |
| Miércoles | 13:00 – 17:00 |
| Jueves    | 13:00 – 17:00 |
| Viernes   | 13:00 – 17:00 |
| Sábado    | 13:00 – 17:00 |
| Domingo   | Cerrado       |

Detalles que se trasladan tal cual a la web:

- **Un único turno de mediodía.** No hay cena ningún día, así que la portada no la inventa.
- El domingo cierra, y `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que ese día no genera ninguna entrada (6 especificaciones en total).

### Accesibilidad

La ficha publica **dos servicios**, ambos como disponibles: acceso para sillas de ruedas y asientos adaptados. No publica aseo adaptado, aparcamiento adaptado ni otros atributos del local, así que no se añaden. La web los enseña como etiquetas y los repite en `amenityFeature`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Pedimos jamón, ensalada mixta, entrecot, solomillo, pulpo… y muy muy bueno!»
2. «No os perdáis la cecina premium, la lengua y la carne a la brasa.»
3. «Excelente servicio unas carnes deliciosas muy buena atención»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs el-rincon-de-castre   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 el-rincon-de-castre
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: dos apaisadas (1080×810 y 1600×1200) y ocho verticales. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- Tras optimizar a un lado largo máximo de 1600 px, el total bajó de **6,9 MB a 1,9 MB**; los `bytes` y las dimensiones del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- El collage de portada usa la apaisada 10 arriba (recorte 16/9) y las verticales 02 y 04 en los dos huecos inferiores (recorte 4/5).
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 10 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs el-rincon-de-castre
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `el-rincon-de-castre.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
