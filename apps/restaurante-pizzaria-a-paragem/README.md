# Restaurante Pizzaria A Paragem

Web informativa de **Restaurante Pizzaria A Paragem** (sobrenombre de la ficha: **A Paragem**),
restaurante y pizzería en **7750-312 Mértola (Portugal)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Restaurante Pizzaria A Paragem (sobrenombre: A Paragem) |
| Dirección               | Portugal, 7750-312 Mértola, Portugal (**sin calle ni número**) |
| Categorías de Google    | Restaurante, Pizzería                                |
| Valoración              | 4,7 sobre 5 con 1987 reseñas                         |
| Teléfono                | +351 286 616 140 (fijo)                              |
| Horario                 | Publicado, con lunes cerrado (ver abajo)             |
| Plus code               | `8C9JMC32+JX` (`MC32+JX Mértola, Portugal` en corto) |
| Coordenadas             | 37.6540633, -7.5975743                               |
| Identificador del lugar | `ChIJKw0nf1ljEA0R06iMpcH0V3s`                        |
| Identificador de canal  | `/g/11b7y9kvkl`                                      |
| Feature id              | `0xd1063597f270d2b:0x7b57f4c1a58ca8d3`               |
| Zona horaria            | Europe/Lisbon                                        |

El número de reseñas se escribe **«1987 reseñas»**: sale de `toLocaleString('es-ES')` en el código, sin escribirlo a mano.

**Sin calle.** Los componentes de dirección de la ficha son el nombre, «Portugal», «7750-312 Mértola» y «Portugal»: no hay calle ni número. Por eso `src/data/site.ts` **no tiene `streetAddress`** y la web ubica el local con el código postal, la localidad, las coordenadas y el plus code (`8C9JMC32+JX`), sin inventar ninguna calle. La dirección visible es **«7750-312 Mértola (Portugal)»** y el JSON-LD declara la dirección sin calle. Es la primera web del repositorio de un negocio fuera de España.

**Teléfono.** La ficha publica un solo número, **+351 286 616 140**, y por su prefijo es un **fijo** portugués (zona de Beja): el enlace de llamada es `tel:+351286616140`.

**Sin descripción del titular.** La ficha no publica descripción (Google devuelve el campo vacío), así que `src/data/site.ts` no tiene `descripcionLocal`, la portada no muestra el bloque de descripción y el JSON-LD usa una descripción propia de una línea, como en el resto de webs.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías**, en este orden: «Restaurante» y «Pizzería». Por eso `category` recoge la primera y `categories` las dos, y el JSON-LD declara `servesCuisine: ['Restaurante', 'Pizzas']`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local **cierra los lunes** y abre el resto de la semana:

| Día       | Horario publicado por la ficha      |
| --------- | ----------------------------------- |
| Lunes     | Cerrado                             |
| Martes    | 12:00 – 14:30 · 19:00 – 21:30      |
| Miércoles | 12:00 – 14:30 · 19:00 – 21:30      |
| Jueves    | 12:00 – 14:30 · 19:00 – 21:30      |
| Viernes   | 12:00 – 14:30 · 19:00 – 21:30      |
| Sábado    | 12:00 – 14:30 · 19:00 – 21:30      |
| Domingo   | 12:00 – 15:00                       |

Detalles que se trasladan tal cual a la web:

- El lunes lleva `shifts: []`, sin especificación de apertura en el JSON-LD; los días abiertos generan una entrada por turno (**11 especificaciones** en total).
- En el momento de la consulta la ficha mostraba «Abierto · Cierre: 15:00» (domingo 11 de octubre).

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aparcamiento** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La respuesta de la ficha **no destaca ninguna reseña con texto** (la publicación de reseñas figura como desactivada), así que esta web **no cita ninguna**: bajo la puntuación (4,7 / 5 con 1987 reseñas) hay una nota que lo explica y enlaza al listado completo en Google Maps.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-pizzaria-a-paragem   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** (las únicas que devuelve la portada de la ficha): tres apaisadas (01, 03, 05) y siete verticales (02, 04, 06–10).
- **Ninguna lleva pie con nombre de persona**: las tres apaisadas las firma el propio local («Restaurante Pizzaria A Paragem») y el resto no trae autor atribuido.
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-pizzaria-a-paragem
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa. Ojo: es un negocio portugués, así que el aviso legal menciona la legislación portuguesa y la CNPD (www.cnpd.pt) en vez de la LSSI-CE y la AEPD; conviene que lo revise alguien que conozca la normativa aplicable.
2. **Confirmar con el titular el horario** (la ficha da lunes cerrado, martes a sábado en dos turnos y domingo de 12:00 a 15:00) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-pizzaria-a-paragem.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
