# Restaurante Casa Muriel

Web informativa de **Restaurante Casa Muriel**, restaurante en la **calle Ana Mariscal, 5 · 10004 Cáceres**, con teléfono 927 05 37 75.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Restaurante Casa Muriel                                            |
| Dirección               | C. Ana Mariscal, 5 · Norte · 10004 Cáceres                         |
| Teléfono                | +34 927 05 37 75                                                   |
| Categoría de Google     | Restaurante                                                        |
| Valoración              | 4,6 sobre 5 con 167 reseñas                                        |
| Horario                 | M–V 9:00–24:00; S 10:00–24:00; D 11:00–17:00; L cerrado            |
| Coordenadas             | 39.4905319, -6.3642308                                             |
| Plus code               | FJRP+68 Cáceres                                                    |
| Identificador del lugar | `ChIJAyrShj3hFQ0ReK9VnXeQAlU`                                      |
| Identificador de canal  | `/g/11sw6nskc1`                                                    |

El número de reseñas se escribe **«167 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Ana Mariscal, 5»). En la web se desarrolla a **Calle Ana Mariscal, 5**, como en el resto del repositorio; el código postal 10004 y la localidad (Cáceres) se publican tal cual.

**Descripción del titular.** La ficha sí publica una y se reproduce **literal** en la portada: «Restaurante Casa Muriel les da la bienvenida.» La ficha no publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha, tal cual:

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | Cerrado       |
| Martes    | 9:00 – 24:00  |
| Miércoles | 9:00 – 24:00  |
| Jueves    | 9:00 – 24:00  |
| Viernes   | 9:00 – 24:00  |
| Sábado    | 10:00 – 24:00 |
| Domingo   | 11:00 – 17:00 |

Detalles que se trasladan tal cual a la web:

- **Jornada continua de martes a viernes**, de 9:00 a 24:00, y **el sábado desde las 10:00** hasta las 24:00.
- **El domingo abre solo al mediodía**, de 11:00 a 17:00, y **el lunes está cerrado**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 6 especificaciones en total (el lunes no genera ninguna).

### Accesibilidad

La ficha **no publica ninguna entrada** de accesibilidad, así que la portada enseña el aviso «La ficha no publica datos de accesibilidad.» en lugar de la lista y `amenityFeature` queda vacío. La pregunta frecuente de accesibilidad lo explica y remite al teléfono.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Buen sitio para tomarse unas cervezas y raciones» (5/5)
2. «Los bocatas enormes, ricos y económicos.» (5/5)
3. «Buen trato de los camareros, abundante y buena comida.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-casa-muriel   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas, cinco verticales y una cuadrada. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la vertical 01 como pieza principal y las apaisadas 04 y 07 en la columna derecha; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 04 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-casa-muriel
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-casa-muriel.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
