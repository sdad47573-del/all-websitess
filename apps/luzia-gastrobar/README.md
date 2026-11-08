# Luzia Gastrobar

Web informativa de **Luzia Gastrobar**, restaurante en el **Paseo la Cuba, 33 · 02005 Albacete**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas destacadas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Luzia Gastrobar                                      |
| Dirección               | P.º LA CUBA, 33 · 02005 Albacete                     |
| Categoría de Google     | Restaurante (una sola)                               |
| Valoración              | 4,8 sobre 5 con 157 reseñas                          |
| Teléfono                | +34 614 06 58 90 (móvil)                             |
| Horario                 | Publicado, con lunes cerrado (ver abajo)             |
| Plus code               | `8CFW243R+P8` (`243R+P8 Albacete` en corto)          |
| Coordenadas             | 39.0043558, -1.8591934                               |
| Identificador del lugar | `ChIJR0uF3f1fZg0R3ag0LfU2TaI`                        |
| Identificador de canal  | `/g/11ml44_nz6`                                      |
| Feature id              | `0xd665ffddd854b47:0xa24d36f52d34a8dd`               |
| Zona horaria            | Europe/Madrid                                        |

**Dirección normalizada.** Google publica «P.º LA CUBA, 33». En la web se escribe **Paseo la Cuba, 33**, como el resto de normalizaciones del repositorio (donde «C.» pasa a «Calle»); el código postal 02005 y el municipio (Albacete) se publican tal cual.

**Teléfono.** La ficha publica un solo número, **614 06 58 90**, y por su prefijo es un **móvil**: se publica como **+34 614 06 58 90** y el enlace de llamada es `tel:+34614065890`.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, el genérico «Restaurante», que no es una cocina: por eso el JSON-LD **no declara `servesCuisine`** (con un comentario que lo explica) en vez de inventar una. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### La descripción del titular

La ficha **sí publica descripción del titular** y se reproduce **tal cual** en la sección «La casa», como cita con su atribución, **sin corregir su errata** («modernidad qué abraza lo auténtico»): es la voz del local, no de esta web.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local **cierra los lunes** y abre el resto de la semana: de domingo a miércoles **solo al mediodía** y de jueves a sábado **en dos turnos**:

| Día       | Horario publicado por la ficha      |
| --------- | ----------------------------------- |
| Lunes     | Cerrado                             |
| Martes    | 13:00 – 17:00                       |
| Miércoles | 13:00 – 17:00                       |
| Jueves    | 13:00 – 17:00 · 20:00 – 23:00      |
| Viernes   | 13:00 – 17:00 · 20:00 – 24:00      |
| Sábado    | 13:00 – 17:00 · 20:00 – 24:00      |
| Domingo   | 13:00 – 17:00                       |

Detalles que se trasladan tal cual a la web:

- El lunes lleva `shifts: []`, sin especificación de apertura en el JSON-LD; los días abiertos generan una entrada por turno (**9 especificaciones** en total).
- La ficha publica el cierre del viernes y el sábado como las **24:00**, así que en los datos estructurados el cierre se declara como `24:00`, tal como lo publica Google.
- En el momento de la consulta la ficha mostraba «Abierto · Cierre: 17:00» (domingo 11 de octubre).
- El lunes lleva el aviso de que, al ser **Fiesta Nacional de España** (12 de octubre), el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y las dos figuran como disponibles: el **acceso** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La respuesta de la ficha **destaca tres reseñas con texto**, las tres de 5 sobre 5, y las tres se citan en la sección «La casa»:

1. «Muy contentos y la comida exquisita con raciones muy generosas.» (5/5)
2. «Arroces increíbles¡felicidades al chef!» (5/5)
3. «Arroz de codillo y alcachofas espectacular.» (5/5)

La respuesta no trae los nombres de quienes las firman (solo sus avatares), así que se citan **sin autor**, con su puntuación y el enlace al listado completo. Se reproducen tal cual, sin corregir su puntuación.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs luzia-gastrobar   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** (las únicas que devuelve la portada de la ficha): seis apaisadas (01, 02, 03, 06, 07, 09), tres verticales (04, 05, 10) y una casi cuadrada (`vista-8-08`).
- **Ninguna lleva pie con nombre de persona**: las diez las firma el propio local («Luzia Gastrobar»).
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs luzia-gastrobar
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da lunes cerrado, domingo a miércoles solo mediodía y jueves a sábado en dos turnos) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `luzia-gastrobar.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
