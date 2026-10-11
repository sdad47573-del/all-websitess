# MiXTO Restaurante - Cafetería

Web informativa de **MiXTO Restaurante - Cafetería**, restaurante en la **Calle Raimundo Lulio, 15 · 02005 Albacete**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas destacadas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | MiXTO Restaurante - Cafetería                        |
| Dirección               | C. Raimundo Lulio, 15 · 02005 Albacete               |
| Categoría de Google     | Restaurante (una sola)                               |
| Valoración              | 4,6 sobre 5 con 435 reseñas                          |
| Teléfono                | +34 967 01 52 93 (fijo)                              |
| Horario                 | Publicado, con lunes y martes cerrados (ver abajo)   |
| Coordenadas             | 38.9976232, -1.8621114                               |
| Identificador del lugar | `ChIJFTWwa8RfZg0Rrrg7MuwCP5I`                        |
| Identificador de canal  | `/g/11kd3_ds1x`                                      |
| Feature id              | `0xd665fc46bb03515:0x923f02ec323bb8ae`               |
| Zona horaria            | Europe/Madrid                                        |

**Dirección normalizada.** Google publica «C. Raimundo Lulio, 15». En la web se escribe **Calle Raimundo Lulio, 15**, como el resto de normalizaciones del repositorio; el código postal 02005 y el municipio (Albacete) se publican tal cual.

**Teléfono.** La ficha publica un solo número, **967 01 52 93**, y por su prefijo es un **fijo** de Albacete: se publica como **+34 967 01 52 93** y el enlace de llamada es `tel:+34967015293`.

**Sin plus code.** La respuesta de la ficha no publica ningún plus code, así que `src/data/site.ts` no tiene ese campo y la web ubica el local con la dirección y las coordenadas.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, el genérico «Restaurante». Las cocinas del JSON-LD (`Pizzas`, `Peruana`, `Arroces`, `Tapas`, `Pastas`) salen de la **descripción del propio titular** («Especialistas en pizzas y gastronomía peruana. También tenemos arroces, tapas y una selección de pastas»), no de la categoría. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### La descripción del titular

La ficha **sí publica descripción del titular** y se reproduce **tal cual** en la sección «La casa», como cita con su atribución: es la voz del local, no de esta web.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días. El local **cierra los lunes y los martes** y abre de miércoles a domingo **en dos turnos**:

| Día       | Horario publicado por la ficha      |
| --------- | ----------------------------------- |
| Lunes     | Cerrado                             |
| Martes    | Cerrado                             |
| Miércoles | 13:00 – 16:00 · 20:00 – 23:00      |
| Jueves    | 13:00 – 16:00 · 20:00 – 23:00      |
| Viernes   | 13:00 – 16:30 · 20:00 – 23:30      |
| Sábado    | 13:00 – 16:30 · 20:00 – 23:30      |
| Domingo   | 13:00 – 16:30 · 20:00 – 23:30      |

Detalles que se trasladan tal cual a la web:

- Los días cerrados llevan `shifts: []`, sin especificación de apertura en el JSON-LD; los días abiertos generan una entrada por turno (**10 especificaciones** en total).
- En el momento de la consulta la ficha mostraba «Abierto · Cierre: 16:30 · Próxima apertura: 20:00» (domingo 11 de octubre).
- El lunes lleva el aviso de que, al ser **Fiesta Nacional de España** (12 de octubre), el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y las tres figuran como disponibles: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La respuesta de la ficha **destaca tres reseñas con texto** y las tres se citan en la sección «La casa»:

1. «Servicio rapido, las pizzas llegaron enseguida y estaban buenísima, genial!!» (5/5)
2. «Buena comida peruana la atención cálida y cordial, los precios accesibles.» (4/5)
3. «Cebiche, pollo asado, arroces,… Sabores distintos pero muy bueno.» (5/5)

La respuesta no trae los nombres de quienes las firman (solo sus avatares), así que se citan **sin autor**, con su puntuación y el enlace al listado completo. Se reproducen tal cual, sin corregir su ortografía.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs mixto-restaurante-cafeteria   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** (las únicas que devuelve la portada de la ficha): siete verticales (01–04, 07, 08, 10) y tres apaisadas (05, 06, 09).
- El manifiesto de la descarga **no atribuye autor** a ninguna, así que **ninguna foto lleva pie**.
- El collage de portada usa la apaisada **05** arriba y las verticales **01** y **02** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **05** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs mixto-restaurante-cafeteria
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da lunes y martes cerrados, miércoles a domingo en dos turnos) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `mixto-restaurante-cafeteria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
