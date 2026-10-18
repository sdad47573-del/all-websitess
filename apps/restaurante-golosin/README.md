# Restaurante Golosin

Web informativa de **Restaurante Golosin**, restaurante en la **Av. Pierre de Coubertin, 28, bajo · 10005 Sur (Cáceres)**, con teléfono 927 23 61 62.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Restaurante Golosin                                                |
| Dirección               | Av. Pierre de Coubertin, 28, bajo · Sur · 10005 Cáceres            |
| Teléfono                | +34 927 23 61 62                                                   |
| Categoría de Google     | Restaurante                                                        |
| Valoración              | 4,7 sobre 5 con 425 reseñas                                        |
| Horario                 | L 18:00–24:00; M cerrado; X–D 11:00–24:00                          |
| Coordenadas             | 39.4572285, -6.378807                                              |
| Plus code               | FJ4C+VF Cáceres                                                    |
| Identificador del lugar | `ChIJt2XNcMffFQ0RrxGAiCLE8os`                                      |
| Identificador de canal  | `/g/11cmfxf9y6`                                                    |

El número de reseñas se escribe **«425 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Localidad y provincia.** La ficha publica «Sur» como localidad y «Cáceres» como provincia (10005 Cáceres); `city` es Sur y `province` es Cáceres, tal cual.

**Sin descripción del titular.** La ficha no publica descripción, así que la web no reproduce ninguna y no atribuye al local frases que no haya escrito. Tampoco publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha:

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | 18:00 – 24:00 |
| Martes    | Cerrado       |
| Miércoles | 11:00 – 24:00 |
| Jueves    | 11:00 – 24:00 |
| Viernes   | 11:00 – 24:00 |
| Sábado    | 11:00 – 24:00 |
| Domingo   | 11:00 – 24:00 |

Detalles que se trasladan tal cual a la web:

- **Jornada continua de miércoles a domingo**, de 11:00 a 24:00.
- **El lunes abre solo por la tarde**, de 18:00 a 24:00, y **el martes está cerrado**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 6 especificaciones en total (el martes no genera ninguna).

### Accesibilidad

La ficha publica **tres entradas** y las tres figuran como disponibles: acceso, aseo adaptado y asientos adaptados para sillas de ruedas. No publica aparcamiento adaptado, así que no se añade. La web enseña las tres etiquetas y las repite en `amenityFeature`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Hay una de 4, una de 3 y una de 5 sobre 5:

1. «Raciones, bocatas y hamburguesas generosos y ricos.» (4/5)
2. «Esperaba una carta más extensa, los camareros super serviciales y amables.» (3/5)
3. «Trato amable, los bocadillos y las hamburguesas estupendos.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-golosin   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis apaisadas, tres verticales y una vista. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la vertical 02 como pieza principal y las apaisadas 01 y 03 en la columna derecha; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-golosin
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-golosin.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
