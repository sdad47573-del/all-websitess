# Restaurante @ La Marmita de Ahlam

Web informativa de **Restaurante @ La Marmita de Ahlam**, restaurante mediterráneo en el paraje El Encinar, 04479 Benecid (Almería), pedanía de Fondón.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Marcellus** (títulos) y **Mulish** (texto), no usadas todavía en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante @ La Marmita de Ahlam |
| Dirección | Paraje El Encinar · 04479 Benecid · Almería |
| Teléfono | +34 643 04 51 25 (móvil) |
| Categorías de Google | Restaurante mediterráneo |
| Valoración | 4,4 sobre 5 con 116 reseñas |
| Horario | Jueves a lunes 13:00 – 23:00 (turno continuo) · martes y miércoles cerrado |
| Coordenadas | 36.9906678, -2.860187 |
| Identificador del lugar | `ChIJmxeoGUE5cA0Rgi8-4pFuT-c` |

El número de reseñas se escribe **«116 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. El `servesCuisine` del dato estructurado traduce la única categoría que publica Google («Cocina mediterránea»), sin añadir ninguna más.

Las reseñas que aparecen en la portada son extractos **literales** de las que Google destaca en la ficha: «Pizzas muy ricas,está vez han sido rapidos» (se cita tal cual, con sus erratas y su puntuación) y «Totalmente recomendable y para repetir.». La tercera destacada, «Que tristeza ver las mesas sin servir y los dueños comiendo tan tranquilos...», **es una queja y no se publica** (mismo criterio que la web de Club de Mar). Las pizzas se mencionan atribuidas a la reseña, no a una carta que no existe: la ficha **no publica carta, precios, web propia ni perfiles de redes sociales**.

### El nombre: qué se hace con la arroba

La ficha se llama literalmente «Restaurante **@** La Marmita de Ahlam», con arroba. El nombre completo se conserva en el dato estructurado (`business.name`, `og:site_name`, aviso legal y pie), mientras que en la interfaz (marca de la cabecera, `shortName`) se usa «La Marmita de Ahlam» sin la arroba, que en un logotipo se leería como una dirección de usuario. Es una decisión de presentación, no un cambio de nombre, y por eso queda anotada también en `site.ts`.

### Benecid: pedanía de Fondón

Google publica «Paraje El Encinar, 04479 Benecid, Almería» y sus datos estructurados dan **Benecid** como municipio. Benecid es en realidad una **pedanía del municipio de Fondón**, en la comarca de la Alpujarra Almeriense, con código postal propio (04479) y unos 65 habitantes según el padrón de la Junta de Andalucía (SIMA). Igual que con Sierra Alhamilla, cuyo municipio real era Pechina, se comprobó con fuentes externas y se documenta aquí; la web mantiene «Benecid» en la dirección porque es lo que publican la ficha y Correos para ese código postal, y lo explica en el texto, en la primera pregunta frecuente y en `site.ts`.

### Dirección sin número de portal

La ficha publica un paraje rural, sin calle ni número: «Paraje El Encinar». Se publica la vía sin número, con la misma disciplina que La Dorada («Paseo del Mar»): el dato estructurado mantiene `streetAddress` con lo que sí consta y no se inventa un número.

### Horario: turno continuo y el lunes festivo

Es la primera ficha del repositorio con **un único turno continuo de 13:00 a 23:00**, sin pausa entre comida y cena, y con **martes y miércoles cerrados**. El lunes 12 de octubre de 2026, Fiesta Nacional de España, la ficha lo marcaba **abierto con su horario habitual** y solo añadía el aviso de que podía ser diferente, así que se publica abierto con la advertencia debajo de la tabla (caso de Braseria El Río, frente al cierre que publicaba La Masía o al horario raro de Club de Mar).

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-marmita-de-ahlam   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-la-marmita-de-ahlam
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos son fotogramas de vídeo** (`…-vertical-02.jpg` y `…-vertical-08.jpg`) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las ocho restantes**: tres en el collage de la portada (la panorámica como 16/9 y dos verticales) y las ocho en el mosaico de «Las fotos».
- **Ninguna lleva pie ni descripción** (`cap=null` en las diez), así que todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`. Es distinto de Braseria El Río, La Pérgola o La Dorada, cuyos pies sí describían el plato.
- Comparadas entre sí con una huella gris de 16×16, **no hay dos iguales** (ninguna pareja supera r=0,9).
- `public/og.jpg` (1200×630) es un recorte de la panorámica publicada.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-marmita-de-ahlam
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y, si procede, un pie real: Google no describe ninguna.
3. Confirmar con el establecimiento el cierre de martes y miércoles y el horario de los festivos, incluido el lunes 12 de octubre.
4. Verificar si el número de portal del paraje El Encinar existe y añadirlo a `streetAddress` si lo facilita el titular: la ficha no lo publica.
5. Si el dominio final no es `la-marmita-ahlam.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
