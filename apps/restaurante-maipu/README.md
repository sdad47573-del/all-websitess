# Restaurante Maipu

Web informativa de **Restaurante Maipu**, restaurante vasco en **Pike Bidea, 8 · 48150 Sondika (Bizkaia)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas destacadas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Restaurante Maipu                                    |
| Dirección               | Pike Bidea, 8 · 48150 Poblado Julio Arteche, Biscay  |
| Categoría de Google     | Restaurante vasco (una sola)                         |
| Valoración              | 4,8 sobre 5 con 347 reseñas                          |
| Teléfono                | +34 944 71 17 63 (fijo)                              |
| Horario                 | Publicado, solo mediodías (ver abajo)                |
| Plus code               | `8CMV73QF+7W` (`73QF+7W Poblado Julio Arteche` en corto) |
| Coordenadas             | 43.2881899, -2.9252477                               |
| Identificador del lugar | `ChIJ______tPTg0R1BRie5O5Vh4`                        |
| Identificador de canal  | `/g/1hc1l2zb0`                                       |
| Feature id              | `0xd4e4ffbffffffff:0x1e56b9937b6214d4`               |
| Zona horaria            | Europe/Madrid                                        |

**Dirección con zona.** Google publica «Pike Bidea, 8, 48150 Poblado Julio Arteche»: Poblado Julio Arteche es la zona y el código postal 48150 corresponde a **Sondika**, así que la localidad es Sondika y `src/data/site.ts` guarda la zona en `neighborhood: 'Poblado Julio Arteche'`. La provincia se publica como «Biscay»/«Bizkaia»: aquí se escribe **Bizkaia**.

**Teléfono.** La ficha publica un solo número, **944 71 17 63**, y por su prefijo es un **fijo** de Bizkaia: se publica como **+34 944 71 17 63** y el enlace de llamada es `tel:+34944711763`.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante vasco»: por eso `category` la recoge y el JSON-LD declara `servesCuisine: ['Vasca']`, que sale de la categoría y no se inventa. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local **cierra los domingos y los lunes** y abre de martes a sábado **solo al mediodía**, de 14:00 a 15:30, sin turno de noche:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 14:00 – 15:30                  |
| Miércoles | 14:00 – 15:30                  |
| Jueves    | 14:00 – 15:30                  |
| Viernes   | 14:00 – 15:30                  |
| Sábado    | 14:00 – 15:30                  |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- Los días cerrados llevan `shifts: []`, sin especificación de apertura en el JSON-LD; los días abiertos generan una entrada por turno (**5 especificaciones** en total).
- En el momento de la consulta la ficha mostraba «Cerrado · Apertura: 14:00 (mar)» (domingo 11 de octubre).
- El lunes lleva el aviso de que, al ser **Fiesta Nacional de España** (12 de octubre), el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y las cuatro figuran como disponibles: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra. Es la ficha con más servicios de accesibilidad de las publicadas hasta ahora.

### Las reseñas

La respuesta de la ficha **destaca tres reseñas con texto**, las tres de 5 sobre 5, y las tres se citan en la sección «La casa»:

1. «Grandes arroces, menestra, cabrito, pescados al horno y postres caseros...» (5/5)
2. «Buena comida, buen trato buenos vinos....que más se puede pedir!!!» (5/5)
3. «La menestra de verduras está exquisita y el arroz con carne buenísimo.» (5/5)

La respuesta no trae los nombres de quienes las firman (solo sus avatares), así que se citan **sin autor**, con su puntuación y el enlace al listado completo.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-maipu   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** (las únicas que devuelve la portada de la ficha): siete verticales (01–04, 06, 08, 09) y tres apaisadas (05, 07, 10).
- **Ninguna lleva pie con nombre de persona**: las diez las firma el propio local («Restaurante Maipu»).
- El collage de portada usa la apaisada **05** arriba y las verticales **01** y **02** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **05** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-maipu
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da domingo y lunes cerrados, martes a sábado solo de 14:00 a 15:30) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-maipu.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
