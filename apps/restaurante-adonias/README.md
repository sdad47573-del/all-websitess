# Restaurante Adonias

Web informativa de **Restaurante Adonias**, cocina mediterránea y española en la **Calle Santa Nonia, 16 · 24003 León**, con teléfono 987 20 67 68.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Restaurante Adonias                                                |
| Dirección               | C. Sta. Nonia, 16 · 24003 León                                     |
| Teléfono                | +34 987 20 67 68                                                   |
| Categorías de Google    | Restaurante · Restaurante mediterráneo · Restaurante de cocina española |
| Valoración              | 4,6 sobre 5 con 320 reseñas                                        |
| Horario                 | L 12:30–16:00; M–J 13:00–16:00; V–S 13:00–16:00 y 20:00–23:30; D 13:00–16:00 |
| Coordenadas             | 42.5953681, -5.5720492                                             |
| Plus code               | HCWH+45 León                                                       |
| Identificador del lugar | `ChIJv46_3pmaNw0RRmwr11Cv0nY`                                      |
| Identificador de canal  | `/g/1tp30p2n`                                                      |

El número de reseñas se escribe **«320 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Sta. Nonia, 16»). En la web se desarrolla a **Calle Santa Nonia, 16**, como en el resto del repositorio; el código postal 24003 y el municipio (León) se publican tal cual.

**Categorías y cocina.** La ficha publica tres categorías: «Restaurante» (la principal), «Restaurante mediterráneo» y «Restaurante de cocina española». `category` y `categories` las recogen tal cual, y `servesCuisine` traduce las dos que nombran una cocina: `['Mediterránea', 'Española']`. No se añade ninguna otra.

**Sin descripción del titular.** La ficha no publica descripción, así que la web no reproduce ninguna y no atribuye al local frases que no haya escrito. Tampoco publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha:

| Día       | Horario                       |
| --------- | ----------------------------- |
| Lunes     | 12:30 – 16:00                 |
| Martes    | 13:00 – 16:00                 |
| Miércoles | 13:00 – 16:00                 |
| Jueves    | 13:00 – 16:00                 |
| Viernes   | 13:00 – 16:00 · 20:00 – 23:30 |
| Sábado    | 13:00 – 16:00 · 20:00 – 23:30 |
| Domingo   | 13:00 – 16:00                 |

Detalles que se trasladan tal cual a la web:

- **Comidas todos los días.** El lunes empieza media hora antes (12:30) y el resto de días a las 13:00; todas terminan a las 16:00.
- **Cenas solo viernes y sábado**, de 20:00 a 23:30. Ningún otro día tiene turno de noche.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 9 especificaciones en total (7 comidas y 2 cenas).

### Accesibilidad

La ficha publica **dos entradas**: los asientos adaptados para sillas de ruedas figuran como disponibles y el aparcamiento adaptado para sillas de ruedas como no disponible. No publica acceso ni aseo adaptados, así que no se añaden. La web enseña ambas etiquetas (la segunda marcada como no disponible) y las repite en `amenityFeature`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción, sus espacios antes de la puntuación ni su ortografía. Hay una de 4 sobre 5 y dos de 5 sobre 5:

1. «Buen restaurante , me encantó la cecina y el lechazo , buen trato .» (4/5)
2. «Me pusieron un pequeño aperitivo (chorizo) lo que se agradece.» (5/5)
3. «Hemos ido por casualidad pero nos llevamos una grata sorpresa.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-adonias   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-adonias
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis apaisadas y cuatro verticales. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- Tras optimizar a un lado largo máximo de 1600 px, el total bajó de **4,4 MB a 2,1 MB**; los `bytes` y las dimensiones del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- El collage de portada usa la vertical 02 como pieza principal y las apaisadas 10 y 01 en la columna derecha; la galería va en tres columnas con marco de papel.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 09 de la galería, la única con proporción 16:9.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-adonias
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-adonias.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
