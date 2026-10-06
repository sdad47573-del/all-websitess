# Restaurante Braseria El Río

Web informativa de **Restaurante Braseria El Río**, bar restaurante de brasa en Rágol, 04440 (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante Braseria El Río |
| Dirección | 04440 Rágol · Almería |
| Teléfono | +34 691 01 00 78 (móvil, no fijo) |
| Categorías de Google | Bar restaurante |
| Valoración | 4,4 sobre 5 con 134 reseñas |
| Horario | Lunes a jueves 6:30 – 17:00 · viernes a domingo 7:00 – 24:00 |
| Coordenadas | 36.995902, -2.6817866 |
| Identificador del lugar | `ChIJ677b8CYTcA0RuEmKoSth9jU` |

### Sin dirección postal

Es la única ficha del repositorio que **no publica calle**: Google da la dirección completa como «04440 Rágol, Almería», solo código postal y municipio. La web no inventa calle ni número en ningún sitio:

- En pantalla la dirección es «04440 Rágol · Almería» y el aviso de que la ficha no publica calle aparece en la sección de ubicación y en las preguntas frecuentes.
- El dato estructurado (`restaurantSchema`) se emite **sin `streetAddress`**, en vez de rellenarlo con una cadena vacía o con el municipio haciendo pasar por calle lo que no lo es; el `og:street-address` tampoco se publica.

El número de reseñas se escribe **«134 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca en la ficha («Comida contundente y de calidad, precios muy muy asequibles y raciones generosas», «Sin duda, volveremos a repetir si pasamos por la zona.» y «Llegamos dos personas a almorzar y pedimos menú.»). No hay ninguna escrita ni retocada, y **ninguna de las tres es una queja**, así que se publican las tres.

El restaurante **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes. El menú del día y el plato de bacalao aparecen en sus propias preguntas y pies de foto, atribuidos a la reseña y a la foto de la ficha, no a una carta que no existe.

El `servesCuisine` del dato estructurado («Cocina a la brasa») se toma del **nombre** del establecimiento, porque la ficha solo publica la categoría genérica «Bar restaurante»; está anotado en el comentario de `site.ts`.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente. Se publica la advertencia: ese lunes la ficha lo da abierto con el horario habitual, pero no se da por seguro.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-braseria-el-rio   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-braseria-el-rio
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos de ellas son fotogramas de vídeo** (`…-apaisada-02.jpg` y `…-apaisada-08.jpg`, ambas de 1920×1080) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las ocho restantes**: tres en el collage de la portada y las ocho en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales.
- **Una de esas ocho sí viene con pie de foto en la ficha** (`…-vertical-07.jpg`, «Bacalao frito patatas caseras»): ese pie es su `alt` real y además se muestra como `<figcaption>` bajo la foto. Es la única web del repositorio que publica un pie de foto visible. Las otras siete no vienen tituladas, así que su `alt` es solo el aviso genérico de dónde salen.
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-braseria-el-rio
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Conseguir la **dirección postal completa** (calle y número) del establecimiento, que la ficha de Google no publica. Cuando se tenga, añadirla en `business.streetAddress`, en el bloque de dirección de la portada, en `og:street-address` y en el aviso legal, y quitar las notas que explican que falta.
3. Revisar las siete fotos sin pie (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`.
4. Confirmar horario y festivos por teléfono con el establecimiento.
5. Si el dominio final no es `braseria-el-rio-ragol.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
