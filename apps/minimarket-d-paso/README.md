# Minimarket D´Paso málaga

Web informativa de **Minimarket D´Paso málaga**, tienda de alimentación en la **Calle Conejito de Málaga, 16 · 29004 Málaga** (barrio de Carretera de Cádiz), con teléfono 643 51 49 42.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Minimarket D´Paso málaga                   |
| Dirección               | C. Conejito de Málaga, 16 · 29004 Málaga   |
| Barrio                  | Carretera de Cádiz                         |
| Teléfono                | +34 643 51 49 42                           |
| Categorías de Google    | Tienda de alimentación                     |
| Valoración              | 5 sobre 5 con 1 reseña                     |
| Horario                 | Publicado (ver abajo)                      |
| Coordenadas             | 36.6984561, -4.4543047                     |
| Plus code               | MGXW+97 Málaga                             |
| Identificador del lugar | `ChIJV_EPfv_5cg0R3zbghiniLD0`              |
| Identificador de canal  | `/g/11t5xqthnn`                            |
| Feature id              | `0xd72f9ff7e0ff157:0x3d2ce22986e036df`     |

El número de reseñas se escribe **«1 reseña»** en singular (y «N reseñas» en plural) con un pequeño auxiliar en `index.astro`, y la valoración sale de `toLocaleString('es-ES')`: nada se escribe a mano.

**El nombre de la ficha.** Google lo publica como **«Minimarket D´Paso málaga»**, con «D´Paso» escrito con acento espaciado (´) en vez de apóstrofo y «málaga» en minúscula. Se reproduce tal cual en `business.name` (como en el resto de webs del repositorio) y `shortName` usa «Minimarket D´Paso» en la etiqueta del mapa y en la cabecera.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Conejito de Málaga, 16»). En la web se desarrolla a **Calle Conejito de Málaga, 16**, como en el resto del repositorio; el código postal 29004 y el municipio (Málaga) se publican tal cual, y «Carretera de Cádiz» se conserva como barrio.

**Categoría y `@type`.** La ficha publica **una única categoría**: «Tienda de alimentación». `category` y `categories` la recogen, y el `@type` de los datos estructurados es `ConvenienceStore` («minimarket» no existe en schema.org y este es el tipo que describe un bazar de alimentación de barrio). Sin `priceRange` (la ficha no publica precios), sin `sameAs` (sin web propia ni redes) y sin `acceptsReservations` (no es un restaurante).

**Sin descripción del titular.** La ficha **no publica descripción**, así que no hay `descripcionLocal` y la web no inventa ninguna: lo único que dice de la tienda son sus datos, su horario y su fotografía.

**Sin distintivo.** Google no muestra ninguna etiqueta junto al nombre en esta ficha, así que no hay `distintivo` ni una pregunta frecuente sobre él.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 10:00 – 22:30                  |
| Martes    | 10:00 – 22:30                  |
| Miércoles | 10:00 – 22:30                  |
| Jueves    | 10:00 – 22:30                  |
| Viernes   | 10:00 – 23:00                  |
| Sábado    | 10:00 – 23:00                  |
| Domingo   | 10:00 – 23:00                  |

Detalles que se trasladan tal cual a la web:

- **Abre todos los días a las 10:00**.
- **Cierra a las 22:30 de lunes a jueves** y **a las 23:00 de viernes a domingo**.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: los siete días tienen un turno, así que hay **7 especificaciones**.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una única entrada**, y figura como disponible: el **acceso para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (643 51 49 42), y así se publica: `phoneHref` usa `tel:+34643514942`.

### Las reseñas

La ficha tiene **una reseña** (5 sobre 5, que es también su valoración media), pero **Google no cita ningún extracto** en la portada de la ficha. Por eso `reviews` queda **vacío** y la web **no reproduce ningún texto de reseñas**: no hay nada que citar y no se inventa ninguno. La tarjeta de valoración enlaza al listado público de reseñas.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs minimarket-d-paso   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 minimarket-d-paso
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La ficha publica **una única fotografía**: `minimarket-d-paso-panoramica-01.jpg` (4608 × 2184, panorámica).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publica **sin pie y sin atribución**: no hay nada que citar.
- Esa foto es a la vez el hueco ancho del collage de portada (recorte 16/9, su proporción 2,1:1 le sienta bien) y la entrada de la galería.
- `public/og.jpg` (1200 × 630) es un recorte centrado de esa misma fotografía.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs minimarket-d-paso
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** y los datos de la ficha antes de publicar.
3. Revisar la foto publicada (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no la describe.
4. Si el dominio final no es `minimarket-d-paso.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
