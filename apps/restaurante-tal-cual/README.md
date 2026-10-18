# Restaurante Tal cual

Web informativa de **Restaurante Tal cual**, restaurante en la **Plaza Mayor, 16 · 10003 Cáceres**, con teléfono 619 93 53 71.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Restaurante Tal cual                                               |
| Dirección               | Pl. Mayor, 16 · Centro-Casco Antiguo · 10003 Cáceres               |
| Teléfono                | +34 619 93 53 71                                                   |
| Categoría de Google     | Restaurante                                                        |
| Valoración              | 4,3 sobre 5 con 548 reseñas                                        |
| Horario                 | L 12:00–24:00; J 12:00–4:00; V–D con noche; M–X cerrado            |
| Coordenadas             | 39.4753331, -6.3707404                                             |
| Plus code               | FJGH+4P Cáceres                                                    |
| Identificador del lugar | `ChIJ7xiEZtbfFQ0RgX7RLJXPytY`                                      |
| Identificador de canal  | `/g/11df0mwp9x`                                                    |

El número de reseñas se escribe **«548 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Pl. Mayor, 16»). En la web se desarrolla a **Plaza Mayor, 16**, como en el resto del repositorio; el código postal 10003 y la localidad (Cáceres) se publican tal cual.

**Sin descripción del titular.** La ficha no publica descripción, así que la web no reproduce ninguna y no atribuye al local frases que no haya escrito. Tampoco publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha, tal cual, con sus noches largas:

| Día       | Horario                       |
| --------- | ----------------------------- |
| Lunes     | 12:00 – 24:00                 |
| Martes    | Cerrado                       |
| Miércoles | Cerrado                       |
| Jueves    | 12:00 – 4:00                  |
| Viernes   | 12:00 – 16:30 · 20:00 – 24:00 |
| Sábado    | 12:00 – 16:30 · 20:00 – 0:30  |
| Domingo   | 12:00 – 16:00 · 20:00 – 24:00 |

Detalles que se trasladan tal cual a la web:

- **El lunes abre jornada continua**, de 12:00 a 24:00.
- **El jueves no cierra hasta las 4:00** de la madrugada y **el sábado hasta las 0:30**; son las horas que publica la ficha y así se reproducen.
- **Martes y miércoles cerrado.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 8 especificaciones en total (el martes y el miércoles no generan ninguna).

### Accesibilidad

La ficha publica **dos entradas**: los asientos adaptados para sillas de ruedas figuran como disponibles y el aparcamiento adaptado como no disponible. No publica acceso ni aseo adaptados, así que no se añaden. La web enseña ambas etiquetas (la segunda marcada como no disponible) y las repite en `amenityFeature`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Hay dos de 5 y una de 4 sobre 5:

1. «Muy rico el pulpo, las croquetas y el solomillo en su salsa.» (5/5)
2. «Camareros majos y croquetas muy ricas.» (4/5)
3. «Muy bien, excelente trato del camarero y comida casera y muy rica.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-tal-cual   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas, cuatro verticales y una vista. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la vertical 01 como pieza principal y las apaisadas 02 y 03 en la columna derecha; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 02 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-tal-cual
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-tal-cual.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
