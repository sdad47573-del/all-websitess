# Los Puri 1978

Web informativa de **Los Puri 1978**, restaurante especializado en tapas en la **Plaza Mayor, 15 · 10910 Malpartida de Cáceres**, con teléfono 927 99 51 27.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Los Puri 1978                                                      |
| Dirección               | Pl. Mayor, 15 · 10910 Malpartida de Cáceres (Cáceres)              |
| Teléfono                | +34 927 99 51 27                                                   |
| Categorías de Google    | Restaurante · Restaurante especializado en tapas                   |
| Valoración              | 4,5 sobre 5 con 700 reseñas                                        |
| Horario                 | J y D 9:00–2:00; V–S 9:00–3:00; L 9:00–17:00; M–X cerrado          |
| Coordenadas             | 39.44565, -6.50805                                                 |
| Plus code               | CFWR+7Q Malpartida de Cáceres                                      |
| Identificador del lugar | `ChIJ84FyaWlzFg0Rp1mm9exgPu0`                                      |
| Identificador de canal  | `/g/11g8ygdx44`                                                    |

El número de reseñas se escribe **«700 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («Pl. Mayor, 15»). En la web se desarrolla a **Plaza Mayor, 15**, como en el resto del repositorio; el código postal 10910 y la localidad (Malpartida de Cáceres) se publican tal cual.

**Sin descripción del titular.** La ficha no publica descripción, así que la web no reproduce ninguna y no atribuye al local frases que no haya escrito. Tampoco publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha, tal cual, con sus noches largas:

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | 9:00 – 17:00  |
| Martes    | Cerrado       |
| Miércoles | Cerrado       |
| Jueves    | 9:00 – 2:00   |
| Viernes   | 9:00 – 3:00   |
| Sábado    | 9:00 – 3:00   |
| Domingo   | 9:00 – 2:00   |

Detalles que se trasladan tal cual a la web:

- **El jueves y el domingo no cierra hasta las 2:00** y **el viernes y el sábado hasta las 3:00**; son las horas que publica la ficha y así se reproducen.
- **El lunes abre solo de 9:00 a 17:00** y **el martes y el miércoles está cerrado**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 5 especificaciones en total (el martes y el miércoles no generan ninguna).

### Accesibilidad

La ficha publica **dos entradas** y las dos figuran como disponibles: aseo adaptado y asientos adaptados para sillas de ruedas. No publica acceso ni aparcamiento adaptados, así que no se añaden. La web enseña ambas etiquetas y las repite en `amenityFeature`.

### Las reseñas

La ficha solo destaca **dos reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Hay una de 4 y una de 5 sobre 5:

1. «Buena atención y las raciones muy ricas, he ido muchas veces y volveré» (4/5)
2. «Muy buenos pinchos, atención perfecta, torreznos buenisimos!!» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-los-puri-1978   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas y seis verticales. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la vertical 03 como pieza principal y las apaisadas 01 y 02 en la columna derecha; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-los-puri-1978
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-los-puri-1978.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
