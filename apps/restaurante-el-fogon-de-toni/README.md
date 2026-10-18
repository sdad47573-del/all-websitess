# Restaurante El Fogón de Toñi

Web informativa de **Restaurante El Fogón de Toñi**, restaurante de cocina española en la **calle Gómez Becerra, 17 · 10001 Cáceres**, con teléfono 609 02 18 49.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Restaurante El Fogón de Toñi                                       |
| Dirección               | Calle Gómez Becerra, 17 · 10001 Cáceres (Centro-Casco Antiguo)     |
| Teléfono                | +34 609 02 18 49                                                   |
| Categorías de Google    | Restaurante de cocina española · Lounge                            |
| Valoración              | 4,4 sobre 5 con 659 reseñas                                        |
| Horario                 | L–D 9:00–24:00                                                     |
| Coordenadas             | 39.4693266, -6.3802366                                             |
| Plus code               | FJ99+PW Cáceres                                                    |
| Identificador del lugar | `ChIJ81XOf9vfFQ0RvBRODNZiCmE`                                      |
| Identificador de canal  | `/g/1tgfxww7`                                                      |

El número de reseñas se escribe **«659 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección limpia.** La ficha publica la dirección con un «Calle de» residual delante («Calle de, Calle Gómez Becerra, 17»). En la web se reproduce la forma limpia, **Calle Gómez Becerra, 17**, con el código postal 10001 y la localidad (Cáceres) tal cual.

**Categorías y cocina.** La ficha publica dos categorías: «Restaurante de cocina española» (la principal) y «Lounge». `category` y `categories` las recogen tal cual, y `servesCuisine` traduce la que nombra una cocina: `['Española']`. No se añade ninguna otra.

**Sin descripción del titular.** La ficha no publica descripción, así que la web no reproduce ninguna y no atribuye al local frases que no haya escrito. Tampoco publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha: **todos los días de 9:00 a 24:00**, de lunes a domingo sin excepción.

| Día       | Horario       |
| --------- | ------------- |
| Lunes     | 9:00 – 24:00  |
| Martes    | 9:00 – 24:00  |
| Miércoles | 9:00 – 24:00  |
| Jueves    | 9:00 – 24:00  |
| Viernes   | 9:00 – 24:00  |
| Sábado    | 9:00 – 24:00  |
| Domingo   | 9:00 – 24:00  |

`openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 7 especificaciones en total.

### Accesibilidad

La ficha publica **una sola entrada**: el aparcamiento adaptado para sillas de ruedas figura como no disponible. No publica acceso, aseo ni asientos adaptados, así que no se añaden. La web enseña la etiqueta marcada como no disponible y la repite en `amenityFeature`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Hay dos de 4 y una de 3 sobre 5:

1. «Pedimos revuelto de la casa, solomillo encebollado y bacalao con crema y gambas.» (4/5)
2. «Buen trato de los camareros, buena situación y buenas raciones» (4/5)
3. «Me gusta su pescado rebozado para aperitivo y ración.» (3/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-fogon-de-toni   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas, cuatro verticales y una vista. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la vertical 02 como pieza principal y las apaisadas 01 y 03 en la columna derecha; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-fogon-de-toni
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-el-fogon-de-toni.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
