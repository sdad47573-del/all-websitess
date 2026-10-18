# Jardín de los Golfines SlowBar

Web informativa de **Jardín de los Golfines SlowBar**, restaurante en la **calle Adarve del Padre Rosalío, 2 · 10003 Cáceres**, con teléfono 676 83 53 34.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Jardín de los Golfines SlowBar                                     |
| Dirección               | C. Adarve del Padre Rosalío, 2 · Centro-Casco Antiguo · 10003 Cáceres |
| Teléfono                | +34 676 83 53 34                                                   |
| Categoría de Google     | Restaurante                                                        |
| Valoración              | 4,1 sobre 5 con 1428 reseñas                                       |
| Horario                 | V–S 13:00–16:30 y 20:00–1:30; D 13:00–16:30 y 20:00–0:30; L 13:00–17:00; M–J cerrado |
| Coordenadas             | 39.4732572, -6.3721614                                             |
| Plus code               | FJFH+84 Cáceres                                                    |
| Identificador del lugar | `ChIJn4OZ7OLfFQ0RLtYN1Xyueuo`                                      |
| Identificador de canal  | `/g/11jcjprx5d`                                                    |

El número de reseñas se escribe **«1428 reseñas»** y la valoración con coma decimal («4,1»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano (el entorno no agrupa los millares).

**Dirección desarrollada.** Google publica la dirección abreviada («C. Adarve del Padre Rosalío, 2»). En la web se desarrolla a **Calle Adarve del Padre Rosalío, 2**, como en el resto del repositorio; el código postal 10003 y la localidad (Cáceres) se publican tal cual.

**Descripción del titular.** La ficha sí publica una y se reproduce **literal** en la portada: «El restaurante Jardín de los Golfines, enclavado en el corazón del Casco Antiguo de la ciudad de Cáceres, ofrece un nuevo concepto gastronómico fusionado con la cocina Mediterránea y acompañado de una estética impecable. Además, cuenta con una extensa terraza ajardinada, en la que podrás disfrutar de una amplia selección de vinos, cervezas y cócteles, dando lugar a un ambiente formidable.» La ficha no publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha, tal cual, con sus noches largas:

| Día       | Horario                       |
| --------- | ----------------------------- |
| Lunes     | 13:00 – 17:00                 |
| Martes    | Cerrado                       |
| Miércoles | Cerrado                       |
| Jueves    | Cerrado                       |
| Viernes   | 13:00 – 16:30 · 20:00 – 1:30  |
| Sábado    | 13:00 – 16:30 · 20:00 – 1:30  |
| Domingo   | 13:00 – 16:30 · 20:00 – 0:30  |

Detalles que se trasladan tal cual a la web:

- **Viernes y sábado con noche hasta la 1:30** y **domingo hasta las 0:30**; son las horas que publica la ficha y así se reproducen.
- **El lunes abre solo al mediodía**, de 13:00 a 17:00.
- **Martes, miércoles y jueves cerrado.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 7 especificaciones en total (los tres días cerrados no generan ninguna).

### Accesibilidad

La ficha publica **cuatro entradas**: el acceso, el aseo adaptado y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado como no disponible. La web enseña las cuatro etiquetas (la última marcada como no disponible) y las repite en `amenityFeature`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Hay dos de 4 y una de 5 sobre 5:

1. «Hemos probado: gyozas, wok, hamburguesa extremeña y tarta de queso.» (4/5)
2. «La calidad de la ración de jamón mejorable, las croquetas muy ricas.» (4/5)
3. «Muy buena cocina y amabilidad y buen trato de los camareros, lugar muy agradable» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs jardin-de-los-golfines-slowbar   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: tres apaisadas, tres panorámicas, tres verticales y una cuadrada. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la vertical 04 como pieza principal, la panorámica 03 arriba y la apaisada 01 abajo; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la panorámica 03 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs jardin-de-los-golfines-slowbar
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `jardin-de-los-golfines-slowbar.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
