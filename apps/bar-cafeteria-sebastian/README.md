# Bar Cafeteria Sebastian

Web informativa de **Bar Cafeteria Sebastian**, bar cafetería en la **Calle Mesones, 2 · 21540 Villanueva de los Castillejos (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                          |
| ----------------------- | -------------------------------------------------------- |
| Nombre                  | Bar Cafeteria Sebastian (sin tilde en la ficha)          |
| Dirección               | C. Mesones, 2 · 21540 Villanueva de los Castillejos, Huelva |
| Categoría de Google     | Restaurante                                              |
| Valoración              | 4,6 sobre 5 con 121 reseñas                              |
| Teléfono                | No publica ninguno («Añadir teléfono»)                   |
| Horario                 | Publicado (ver abajo)                                    |
| Coordenadas             | 37.50067, -7.27228                                       |
| Identificador del lugar | `ChIJzXkkYztFEA0RRzhcqxeGvJM`                            |
| Identificador de canal  | `/g/11fkt7061l`                                          |
| Feature id              | `0xd10453b632479cd:0x93bc8617ab5c3847`                   |

El número de reseñas se escribe **«121 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Nombre tal cual.** La ficha escribe «Bar Cafeteria Sebastian», sin tilde. En la web se reproduce así; el acortado de cabecera y mapa es «Sebastián».

**Dirección desarrollada.** Google publica la dirección abreviada («C. Mesones, 2»). En la web se desarrolla a **Calle Mesones, 2**, como el resto de direcciones del repositorio (donde «C.» pasa a «Calle»); el código postal 21540 y el municipio (Villanueva de los Castillejos) se publican tal cual.

**Sin teléfono.** La ficha no publica ningún número (muestra «Añadir teléfono»), así que `src/data/site.ts` no tiene `phone` ni `phoneHref`, el JSON-LD no declara `telephone`, el Open Graph no lleva `og:phone_number` y **la web no tiene ningún botón de llamada**: la llamada a la acción es «Cómo llegar» (indicaciones) y «Ver la ficha en Maps». La barra fija de móvil abre las indicaciones en vez de llamar.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante», que no nombra ningún tipo de cocina concreto. Por eso `category` y `categories` la recogen, pero **no hay `servesCuisine`**. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local abre **de miércoles a domingo de 6:00 a 2:00**, el **lunes de 6:00 a 15:00** y **cierra los martes**:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 6:00 – 15:00                   |
| Martes    | Cerrado                        |
| Miércoles | 6:00 – 2:00                    |
| Jueves    | 6:00 – 2:00                    |
| Viernes   | 6:00 – 2:00                    |
| Sábado    | 6:00 – 2:00                    |
| Domingo   | 6:00 – 2:00                    |

Detalles que se trasladan tal cual a la web:

- **Martes cerrado** (`shifts: []`, sin especificación de apertura en el JSON-LD); el resto de días generan su propia entrada (**6 especificaciones** en total).
- La ficha no aclara si las 2:00 son de la madrugada siguiente, así que la web lo reproduce sin interpretarlo: en los datos estructurados el cierre se declara como `02:00`, como lo lee Google en el resto de fichas del repositorio.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra (tampoco aparcamiento adaptado).

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto**, así que esta web **no cita ninguna**: bajo la puntuación (4,6 / 5 con 121 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps, como en las webs `restaurante-alentejo` y `restaurante-el-portichuelo`.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-cafeteria-sebastian   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro verticales (01, 03, 06 y 08), cinco apaisadas (02, 04, 07, 09 y 10) y una cuadrada (05).
- El manifiesto de la descarga **atribuye las diez al propio local** (`author`: «Bar Cafeteria Sebastian»), así que **cada foto lleva su pie**, `Foto de Bar Cafeteria Sebastian`, con el estilo `.cocina-item figcaption` heredado de la plantilla.
- El collage de portada usa la apaisada **02** (4000 × 3000) arriba y las verticales **01** y **06** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-cafeteria-sebastian
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de miércoles a domingo de 6:00 a 2:00, lunes de 6:00 a 15:00 y martes cerrado) y ajustar `hours` si procede. Aclarar también si las 2:00 son de la madrugada siguiente.
3. Pedir al titular un **teléfono de contacto** para la ficha y la web: ahora mismo no hay ningún botón de llamada porque la ficha no publica número.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
6. Si el dominio final no es `bar-cafeteria-sebastian.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
