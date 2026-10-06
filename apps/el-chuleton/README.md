# El Chuletón

Web informativa de **El Chuletón**, parrilla con desayunos y comidas en la calle Ejido, 24, 04430 Instinción (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Bevan** (títulos) y **Cabin** (texto), no usadas todavía en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | El Chuletón (la ficha lo escribe «El chuletón») |
| Dirección | Calle Ejido, 24 · 04430 Instinción · Almería |
| Teléfono | +34 647 05 47 48 (móvil) |
| Categorías de Google | Parrilla |
| Valoración | 4,5 sobre 5 con 97 reseñas |
| Horario | Lunes, miércoles y jueves 7:00 – 16:30 · viernes y sábado 12:30 – 16:30 y 20:00 – 23:30 · domingo 12:30 – 16:30 · martes cerrado |
| Coordenadas | 36.9917456, -2.6562153 |
| Identificador del lugar | `ChIJLVLNSm8TcA0RSAGq6OjiCyo` |

El número de reseñas se escribe **«97 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. La única categoría que publica Google es «Parrilla» y se publica **tal cual** en el `servesCuisine`, porque ya está en español: no hay nada que traducir, ni se añade ninguna categoría más.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca, sin retocar ni la puntuación: «Fuimos a desayunar y las tostadas y el café estaban deliciosos.», «Buen sitio para comer, tranquilo , buena comida y buen servicio.» (con el espacio antes de la coma, tal cual) y «He probado Ensaladilla Rusa,Pollo al ajillo y Croquetas.» (sin espacio detrás de la coma, también tal cual). **Ninguna es una queja**, así que se publican las tres. Los platos que nombran aparecen atribuidos a las reseñas: la ficha **no publica carta, precios, web propia ni perfiles de redes sociales**.

### El nombre: minúscula de Google, mayúscula en la web

La ficha se llama literalmente «El **c**huletón», con minúscula inicial. En la web se escribe **«El Chuletón»**, con mayúscula, por ser un nombre propio en titulares, encabezados y datos estructurados. Es una decisión de presentación, no un cambio de nombre, y queda anotada también en `site.ts`.

### Instinción es municipio propio

Google publica «C. Ejido, 24, 04430 **Instinción**, Almería» y sus datos estructurados dan Instinción como municipio. Se comprobó con fuentes externas (SIMA de la Junta de Andalucía, padrón municipal y el propio Ayuntamiento de Instinción): **Instinción es un municipio independiente** de la Alpujarra Almeriense, en el valle medio del Andarax, con código postal 04430. A diferencia de Benecid (pedanía de Fondón) o de Sierra Alhamilla (Pechina), aquí no hay nada que corregir en la dirección de la ficha.

### Horario: de desayuno unos días y de cena otros

Es la ficha del repositorio que **abre más temprano (7:00)** y la única con un horario tan desigual: lunes, miércoles y jueves un solo turno de 7:00 a 16:30 (desayuno y comida); viernes y sábado de 12:30 a 16:30 y cena de 20:00 a 23:30; domingo solo mediodía. Cierra los martes. El lunes 12 de octubre de 2026, Fiesta Nacional de España, la ficha lo marcaba **abierto con su horario habitual** y solo añadía el aviso de que podía ser diferente, así que se publica abierto con la advertencia debajo de la tabla.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs el-chuleton   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 el-chuleton
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **una es un fotograma de vídeo** (`…-vertical-02.jpg`, 9:16) y **no se publica**: se queda en disco y en el manifiesto, pero fuera del código.
- **Se publican las nueve restantes**: tres en el collage de la portada y las nueve en el mosaico de «Las fotos». Es la ficha con más fotos publicadas hasta ahora, y también la más vertical (siete de las nueve).
- **Ninguna lleva pie ni descripción** (`cap=null` en las diez), así que todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- Comparadas entre sí con una huella gris de 16×16, **no hay dos iguales**.
- `public/og.jpg` (1200×630) es un recorte de la apaisada 16:9 publicada.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs el-chuleton
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las nueve fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt`: ninguna trae pie de Google.
3. Confirmar con el establecimiento si el nombre se escribe con minúscula («El chuletón») o con mayúscula, y si quiere que se mantenga el ajuste actual.
4. Confirmar el horario de los festivos, incluido el lunes 12 de octubre, y el cierre de los martes.
5. Si el dominio final no es `el-chuleton.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
