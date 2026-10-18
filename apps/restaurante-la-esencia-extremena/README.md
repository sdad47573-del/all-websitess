# La Esencia Extremeña

Web informativa de **La Esencia Extremeña**, restaurante y taberna de cocina extremeña en la **calle Alzapiernas · 10004 Cáceres**, con teléfono 622 52 08 67.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | La Esencia Extremeña                                               |
| Dirección               | C. Alzapiernas · Centro-Casco Antiguo · 10004 Cáceres              |
| Teléfono                | +34 622 52 08 67                                                   |
| Categorías de Google    | Restaurante · Taberna                                              |
| Valoración              | 4,3 sobre 5 con 1006 reseñas                                       |
| Horario                 | X–D 12:00–16:00 y 19:30/20:00–23:30; L–M cerrado                   |
| Coordenadas             | 39.4749813, -6.3734038                                             |
| Plus code               | FJFG+XJ Cáceres                                                    |
| Identificador del lugar | `ChIJ4V_eq9ffFQ0R6RG5afeTxP0`                                      |
| Identificador de canal  | `/g/11bc95wtdg`                                                    |

El número de reseñas se escribe **«1006 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano (el entorno no agrupa los millares).

**Dirección desarrollada.** Google publica la dirección abreviada («C. Alzapiernas»). En la web se desarrolla a **Calle Alzapiernas**, como en el resto del repositorio; el código postal 10004 y la localidad (Cáceres) se publican tal cual.

**Descripción del titular.** La ficha sí publica una y se reproduce **literal** en la portada, con sus minúsculas y su puntuación originales: «local familiar típico extremeño desde 1974. cocina extremeña y productos ibéricos de bellota. menú del día. se recomienda reservar pues suele estar muy concurrido. terraza . buen trato y calidad de sus productos.» La ficha no publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha, con turno doble de miércoles a domingo:

| Día       | Horario                       |
| --------- | ----------------------------- |
| Lunes     | Cerrado                       |
| Martes    | Cerrado                       |
| Miércoles | 12:00 – 16:00 · 19:30 – 23:30 |
| Jueves    | 12:00 – 16:00 · 20:00 – 23:30 |
| Viernes   | 12:00 – 16:00 · 20:00 – 23:30 |
| Sábado    | 12:00 – 16:30 · 20:00 – 23:30 |
| Domingo   | 12:00 – 16:00 · 20:00 – 23:30 |

Detalles que se trasladan tal cual a la web:

- **Mediodía de 12:00 a 16:00** (hasta las 16:30 el sábado) y **noche hasta las 23:30** (desde las 19:30 el miércoles y desde las 20:00 el resto).
- **Lunes y martes cerrado.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 10 especificaciones en total (el lunes y el martes no generan ninguna).

### Accesibilidad

La ficha publica **cinco entradas** y las cinco figuran como no disponibles: acceso, aparcamiento adaptado, aseo adaptado y asientos adaptados para sillas de ruedas, además del bucle magnético asistencial. La web enseña las cinco etiquetas marcadas como no disponibles y las repite en `amenityFeature`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su ortografía. Hay una de 3 y dos de 5 sobre 5:

1. «Las migas llevan pimientos y jamón, nunca las habia probado así.» (3/5)
2. «Pedimos surtido de embutidos, tabla de quesos y cachopo.» (5/5)
3. «Las patatas muy bien hechas y el flan es muy parecido al quesillo venezolano.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-esencia-extremena   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: dos apaisadas, siete verticales y una vista. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la vertical 01 como pieza principal y las apaisadas 07 y 10 en la columna derecha; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 07 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-esencia-extremena
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-la-esencia-extremena.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
