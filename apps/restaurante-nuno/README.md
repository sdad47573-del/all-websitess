# Restaurante Nuño

Web informativa del **Restaurante Nuño**, restaurante en el puerto de la Ragua, s/n, 04479 Bayárcal (Almería), en plena Sierra Nevada.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Alegreya** (títulos) e **Alegreya Sans** (texto), no usadas todavía en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante Nuño |
| Dirección | Puerto de la Ragua, s/n · 04479 Bayárcal (Almería) |
| Teléfono | +34 699 23 10 81 |
| Categoría de Google | Restaurante |
| Valoración | 4,1 sobre 5 con 257 reseñas |
| Horario | Lunes a sábado 9:00 – 16:00 · domingo 9:00 – 18:00 · sin día de cierre |
| Coordenadas | 37.0254001, -2.9943662 |
| Identificador del lugar | `ChIJG-K-ycgwcA0Rzvw9n_4uOFw` |

El número de reseñas se escribe **«257 reseñas»** (sin separador de millar, como el resto del repositorio) y la valoración con coma decimal («4,1»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Sin `servesCuisine`.** La única categoría que publica Google es «Restaurante», que no declara ningún tipo de cocina concreto. Es la primera web de esta serie que **omite el campo** en el dato estructurado: se prefiere no publicarlo a inventar una cocina que la ficha no declara. Tampoco se añade `description` al `Restaurant`, porque la ficha no publica ninguna.

Las reseñas que aparecen en la portada son extractos **literales** de las que Google destaca. La ficha trae **dos**: una favorable —«Trato amable, tostada más que generosa, lugar limpio, fresco y cuidado.»— y **una queja** («Pensando que no podría ser peor, nos traen el primer plato frío (era sopa).»). Siguiendo el mismo criterio que en Club de Mar y en La Marmita de Ahlam, **la queja no se publica**, así que la portada muestra solo la favorable, citada tal cual. La ficha **no publica carta, precios, web propia ni perfiles de redes sociales**: no se enlaza ni se afirma nada de eso.

### La dirección y el municipio

Google escribe la dirección como «**Puerto de la Ragua, s/n**, 04479, **Almería**», sin número de portal y **sin municipio**: se publica tal cual, respetando la abreviatura «s/n». Para completar el municipio se usa el propio **plus code** que Google calcula para estas coordenadas (`22G4+57 Bayárcal`) y el reparto administrativo de la estación recreativa del puerto de la Ragua, que se divide entre Ferreira y Nevada (Granada) y **Bayárcal** (Almería). Como la ficha da la provincia de Almería y el código postal 04479 —el de Bayárcal—, el municipio se publica como **Bayárcal**.

> **Incertidumbre documentada:** en una consulta anterior del repositorio el código postal 04479 apareció asociado también a Benecid, pedanía de Fondón. Es un CP compartido por varios núcleos de la Alpujarra almeriense, así que el municipio se publica a partir del plus code y de la parte almeriense del puerto, no del código postal. Conviene confirmarlo con el establecimiento.

### Horario: abierto todos los días, sin día de cierre

Abre con un **turno continuo de 9:00 a 16:00 de lunes a sábado** y hasta las **18:00 el domingo**. Es la primera ficha del repositorio **sin ningún día de cierre**. El lunes de la semana de la consulta era el festivo del 12 de octubre (Fiesta Nacional de España): la ficha lo marcaba **abierto con su horario habitual** y solo añadía el aviso de que podía ser diferente, así que se publica abierto con la advertencia debajo de la tabla.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-nuno   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-nuno
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotos** y **ninguna es un fotograma de vídeo**: es la primera ficha de esta serie en la que toda la galería son fotografías, así que **se publican las diez**. Tres van en el collage de la portada y las diez en el mosaico de «Las fotos».
- **Ninguna lleva pie ni descripción** (`cap=""` en todas, sin autor): no hay nada que citar, así que no se inventa un contenido que no consta. Todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- Comparadas entre sí con una huella gris de 16×16, **no hay dos iguales** (0 parejas sospechosas).
- `public/og.jpg` (1200×630, 112 KB) es un recorte de una de las apaisadas publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-nuno
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt`: ninguna trae pie de Google.
3. Confirmar con el establecimiento el municipio (Bayárcal según el plus code), el número del local y el horario de los festivos, incluido el lunes 12 de octubre.
4. Confirmar el estado de la carretera en invierno: el puerto cierra por nieve con frecuencia y el restaurante está en la cima.
5. Si el dominio final no es `restaurante-nuno.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
