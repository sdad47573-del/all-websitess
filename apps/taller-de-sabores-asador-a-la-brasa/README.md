# Taller de Sabores Asador a la Brasa

Web informativa de **Taller de Sabores Asador a la Brasa**, asador a la brasa y restaurante argentino en el paraje de la Cepa, 79, N-340a, 85, 04230 Huércal de Almería (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Alfa Slab One** (títulos) y **Barlow** (texto), no usadas todavía en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Taller de Sabores Asador a la Brasa |
| Dirección | Paraje de la Cepa, 79, N-340a, 85 · 04230 Huércal de Almería · Almería |
| Teléfono | +34 633 58 67 62 (móvil) |
| Categorías de Google | Restaurante argentino |
| Valoración | 4,3 sobre 5 con 422 reseñas |
| Horario | Lunes a viernes 8:00 – 18:00 · sábado 12:00 – 18:00 · brasa de noche 19:30 – 23:30 (lunes hasta las 24:00) · miércoles sin cena · domingo cerrado |
| Coordenadas | 36.8712839, -2.4445065 |
| Identificador del lugar | `ChIJqYfXse2feg0RU6YzMoFC7Ag` |

El número de reseñas se escribe **«422 reseñas»** y la valoración con coma decimal («4,3»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. El `servesCuisine` del dato estructurado traduce la única categoría que publica Google («Cocina argentina»), sin añadir ninguna más.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca, sin retocar nada: «Lo recomiendo, cerveza 🍺 a elegir tiene muchas variedades de grifo.» (con el emoticono que trae la ficha), «Magnifica terraza para disfrutar de una buena cerveza con carne a la brasa!!» (con la falta de tilde y las dos exclamaciones) y «Mi primera vez y no será la última precio calidad de 10 buena gente buen trato» (sin puntuación entre las frases). **Ninguna de las tres es una queja**, así que se publican las tres, como en la web de La Masía. La terraza, la cerveza de grifo y la carne a la brasa se mencionan atribuidas a esas reseñas: la ficha **no publica carta, precios, web propia ni perfiles de redes sociales**.

### La dirección: paraje, número y carretera

Google publica «**paraje de la cepa 79, N-340a, 85**» y así lo recoge también su dirección estructurada. En la web se desarrolla la minúscula a **«Paraje de la Cepa»**, como se desarrollan las abreviaturas en el resto del repositorio, y se conserva detrás el punto de la carretera (N-340a, 85) tal cual lo publica la ficha: no se interpreta si ese 85 es el kilómetro o el número de la vía, porque Google no lo distingue. El municipio (Huércal de Almería) y el código postal (04230) son los que publica la propia ficha.

### Horario: partido, con cena de brasa y un miércoles sin noche

Es la ficha del repositorio con **un horario de mañana largo (desde las 8:00) y un turno de noche solo cuatro días**. Martes, jueves y viernes repiten «8:00 – 18:00 y 19:30 – 23:30»; el lunes alarga la noche hasta las 24:00; el miércoles solo abre de día (8:00 – 18:00); el sábado abre a las 12:00; y el domingo cierra. El lunes 12 de octubre de 2026, Fiesta Nacional de España, la ficha lo marcaba **abierto con su horario habitual** y solo añadía el aviso de que podía ser diferente, así que se publica abierto con la advertencia debajo de la tabla (mismo caso que La Marmita de Ahlam y Braseria El Río).

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs taller-de-sabores-asador-a-la-brasa   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 taller-de-sabores-asador-a-la-brasa
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos son fotogramas de vídeo** (`…-cuadrada-02.jpg`, 1:1, y `…-vertical-08.jpg`, 9:16) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código. Es la primera ficha del repositorio con un fotograma cuadrado.
- **Se publican las ocho restantes**: tres en el collage de la portada (la apaisada 16:9 y dos verticales) y las ocho en el mosaico de «Las fotos».
- **Ninguna lleva pie ni descripción** (`cap=null` en las diez): el único dato de autor que trae Google repite el nombre del negocio, así que no sirve como descripción. Todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- Comparadas entre sí con una huella gris de 16×16, **no hay dos iguales**.
- `public/og.jpg` (1200×630) es un recorte de la apaisada 16:9 publicada.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs taller-de-sabores-asador-a-la-brasa
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y, si procede, un pie real: Google no describe ninguna.
3. Confirmar con el establecimiento si el corte de la N-340a que publica Google es el kilómetro o el número de la vía, y corregirlo en `streetAddress` si procede.
4. Confirmar el horario de los festivos, incluido el lunes 12 de octubre, y el cierre de cena de los miércoles.
5. Si el dominio final no es `taller-de-sabores.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
