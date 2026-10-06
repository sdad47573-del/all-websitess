# Restaurante La Dorada

Web informativa de **Restaurante La Dorada**, marisquería y restaurante mediterráneo en el paseo del Mar, 04740 Roquetas de Mar (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante La Dorada |
| Dirección | Paseo del Mar · 04740 Roquetas de Mar · Almería |
| Teléfono | +34 950 33 45 90 |
| Categorías de Google | Marisquería · Restaurante mediterráneo · Pizzería |
| Valoración | 4,6 sobre 5 con 1081 reseñas |
| Horario | Lunes y miércoles a domingo 12:00 – 23:30 · martes cerrado |
| Coordenadas | 36.7221017, -2.6273633 |
| Identificador del lugar | `ChIJmS1SPzBlcA0R0Ezjw2g2IDE` |

Google escribe la dirección como «P.º del Mar, 04740 Roquetas de Mar, Almería»: en la web se desarrolla la abreviatura a **«Paseo»**, como en el resto del repositorio. La ficha **no publica número de portal**, así que no se reproduce ninguno y el aviso aparece en la sección de ubicación, en las preguntas frecuentes y en el aviso legal.

El número de reseñas se escribe **«1081 reseñas»**, sin separador de millar, y la valoración con coma decimal («4,6»). Google muestra «1.081» con punto de millar, pero la RAE no separa las cifras de cuatro dígitos y `toLocaleString('es-ES')` tampoco lo hace, así que el número sale del código y no se escribe a mano en ninguna parte.

El `servesCuisine` del dato estructurado traduce las tres categorías que publica Google («Marisco», «Cocina mediterránea», «Pizza»), sin añadir ninguna más.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca en la ficha («Recomendamos el arroz de marisco y el pescado frito.», «Pedimos los mejillones del chef, gambas al ajillo y pulpo zarandeado.» y «Las alcachofas con gambas y almejas de las más deliciosas que he probado.»). No hay ninguna escrita ni retocada y **ninguna de las tres es una queja**, así que se publican las tres.

El restaurante **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes. El arroz de marisco o la ensalada mixta aparecen atribuidos a la reseña y al pie de la foto de la ficha, nunca a una carta que no existe.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente. Se publica la advertencia: ese lunes la ficha lo da abierto con el horario habitual, pero no se da por seguro.

### Nota sobre el color

El dorado del logotipo, de las reglas y de los botones se usa **solo como color de fondo, filete o borde**, nunca como texto sobre el papel claro: en la portada los acentos de texto van en azul petróleo, que sí alcanza contraste suficiente sobre el fondo crema. Las reglas y puntos dorados son decorativos.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-dorada   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-la-dorada
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos de ellas son fotogramas de vídeo** (`…-vertical-02.jpg`, 592×1072, y `…-vertical-08.jpg`, 720×1280) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las ocho restantes**: tres en el collage de la portada y las ocho en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales.
- **Una de esas ocho sí viene con pie de foto en la ficha** (`…-apaisada-10.jpg`, «Ensalada mixta con atún»): ese pie es su `alt` real y además se muestra como `<figcaption>` bajo la foto. Las otras siete no vienen tituladas, así que su `alt` es solo el aviso genérico de dónde salen.
- Una de las fotos publicadas (`…-apaisada-04.jpg`) es pequeña de origen (960×540): se sirve sin ampliar, así que sus variantes se quedan por debajo de las de las demás.
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-dorada
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Conseguir el **número de portal** del paseo del Mar, que la ficha de Google no publica. Cuando se tenga, añadirlo en `business.streetAddress`, en el bloque de dirección de la portada, en `og:street-address` y en el aviso legal, y quitar las notas que explican que falta.
3. Revisar las siete fotos sin pie (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`.
4. Confirmar horario y festivos por teléfono con el establecimiento.
5. Si el dominio final no es `la-dorada-roquetas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
