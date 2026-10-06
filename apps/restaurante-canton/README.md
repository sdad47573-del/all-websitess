# Restaurante Cantón

Web informativa de **Restaurante Cantón**, restaurante asiático y vietnamita en el edificio Bajamar, avenida Mediterráneo, 1E, 04740 Roquetas de Mar (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Gilda Display** (títulos) y **Nunito Sans** (texto), no usadas todavía en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, pies de foto, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante Cantón |
| Dirección | Edifício Bajamar, Avenida Mediterráneo, 1E · 04740 Roquetas de Mar · Almería |
| Teléfono | +34 950 33 34 19 |
| Categorías de Google | Restaurante asiático · Restaurante vietnamita |
| Valoración | 4,6 sobre 5 con 1266 reseñas |
| Horario | Miércoles a domingo 13:00 – 15:30 y 20:00 – 22:30 · lunes y martes cerrado |
| Coordenadas | 36.7347622, -2.6219347 |
| Identificador del lugar | `ChIJHa_vsUtlcA0R3y1oEecUFv4` |

El número de reseñas se escribe **«1266 reseñas»** (sin separador de millar, como el resto del repositorio) y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. El `servesCuisine` del dato estructurado traduce las dos categorías que publica Google («Cocina asiática», «Cocina vietnamita»), sin añadir ninguna más.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca, sin retocar nada (ni la errata «expectacular» ni la puntuación): «Excelente lugar el pato asado expectacular y la tarta de queso increíble.», «El phó y el wok de lomo de ternera con salsa de alubias estaba espectacular.» y «Todo muy rico, sobre todo los raviolis rellenos de solomillo y gambas». **Ninguna es una queja**, así que se publican las tres. Los platos que nombran aparecen atribuidos a las reseñas: la ficha **no publica carta, precios, web propia ni perfiles de redes sociales**.

### La dirección: el edificio y la abreviatura

Google publica «**Edifício Bajamar, Av. Mediterráneo, 1E**». En la web se desarrolla la abreviatura a **«Avenida»**, como en el resto del repositorio, y se respeta el nombre del edificio tal cual lo escribe Google, con su í (**«Edifício»**, no «Edificio»): es el nombre propio que publica la ficha y no se corrige. El número de portal («1E») también es el que da Google.

### Horario: dos turnos y el lunes festivo cerrado

Abre **de miércoles a domingo** con dos turnos (comida 13:00 – 15:30 y cena 20:00 – 22:30) y **cierra lunes y martes**. El lunes 12 de octubre de 2026, Fiesta Nacional de España, la ficha lo marcaba **cerrado con el aviso** de que el horario podía ser diferente; como Google no aclara si ese cierre es el habitual de los lunes o solo el del festivo, se publica cerrado con la advertencia debajo de la tabla (mismo caso que La Masía).

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-canton   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-canton
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos son fotogramas de vídeo** (`…-vertical-02.jpg` y `…-vertical-08.jpg`, los dos 9:16) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las ocho restantes**: tres en el collage de la portada y las ocho en el mosaico de «Las fotos».
- **Tres fotos traen un pie escrito por el propio restaurante y se reproducen**: «Dumplings with foie and goat cheese» (literal, tal cual lo publica Google, aunque esté en inglés), «NEM rollitos vietnamitas 5 piezas» y «Tallarines estilo cantonés». Esas tres usan su pie como `alt` real y lo muestran en un `<figcaption>` visible.
- **El pie de los rollitos Nem incluye además el precio del plato («10,00 €») y se omite**: como en el resto del repositorio, no se reproducen precios de una carta que la ficha no publica. La omisión se explica en la nota de «Las fotos» y en la pregunta frecuente sobre los precios.
- Las otras cinco fotos no traen pie útil (vacío, o el nombre del negocio), así que llevan un `alt` genérico que avisa solo de dónde salen.
- Comparadas entre sí con una huella gris de 16×16, **no hay dos iguales**.
- `public/og.jpg` (1200×630) es un recorte de la apaisada 16:9 publicada.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-canton
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y completar su `alt`: cinco no traen pie de Google.
3. Confirmar con el titular si el nombre del edificio se escribe «Edifício» o «Edificio»: la web respeta lo que publica Google (con í), pero conviene corregirlo en `site.ts` y en los textos si su nombre real no lleva tilde.
4. Confirmar con el establecimiento el cierre de lunes y martes y el horario de los festivos, incluido el lunes 12 de octubre.
5. Si el dominio final no es `restaurante-canton.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
