# Restaurante La Pérgola

Web informativa de **Restaurante La Pérgola**, restaurante de cocina española, parrilla y tapas en la avenida del Mediterráneo, 71, 04007 Almería.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre de la ficha | Restaurante La Pérgola \| Almería |
| Nombre que usa la web | Restaurante La Pérgola |
| Dirección | Avenida del Mediterráneo, 71 · 04007 Almería · Almería |
| Teléfono | +34 950 16 61 21 |
| Categorías de Google | Restaurante de cocina española · Parrilla · Bar · Restaurante · Restaurante especializado en tapas |
| Valoración | 4,1 sobre 5 con 1617 reseñas |
| Horario | Todos los días 7:30 – 24:00 |
| Coordenadas | 36.8315307, -2.4457515 |
| Identificador del lugar | `ChIJH5etukadeg0R1IqqNTQpgAY` |

Google titula la ficha con la ciudad detrás de una barra («Restaurante La Pérgola | Almería»): la web usa **Restaurante La Pérgola**, sin esa coletilla, porque la ciudad ya está en la dirección.

Google escribe la dirección como «parque de las familias, Av. del Mediterráneo, 71 Esquina, 04007 Almería»: se publica la avenida con su número —con la abreviatura «Av.» desarrollada a **«Avenida»**, como en el resto de webs del repositorio— y el punto de referencia y la esquina se cuentan en el texto de la portada.

El número de reseñas se escribe **«1617 reseñas»**, sin separador de millar, igual que la valoración con coma decimal («4,1»). Google muestra «1.617» con punto de millar, pero la RAE recomienda no separar las cifras de cuatro dígitos y `toLocaleString('es-ES')` tampoco lo hace, así que el número sale del código y no se escribe a mano en ninguna parte.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca en la ficha («Sus raciones de churros que están muy buenos son abundantes.», «Se tapea de maravilla muy. buena calidad y las camareras y camareros muy amables» y «Pedimos costillas, hamburguesa Angus y rabioli de boletus.»). No hay ninguna escrita ni retocada: la segunda lleva un punto de más en «muy. buena» y la tercera solo cuenta lo que pidió el cliente. Google destaca tres reseñas y **ninguna es una queja**, así que se publican las tres.

El restaurante **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes. Los churros de una de las reseñas tienen su propia pregunta, donde se atribuyen a la reseña y no a una carta que la ficha no publica.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente. Se publica la advertencia: ese lunes la ficha lo da abierto con el horario habitual, pero no se da por seguro.

Ningún día de la ficha aparece como cerrado, así que la tabla de horario no tiene ninguna fila marcada con `is-closed`: es la única web del repositorio en esa situación.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-pergola   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-la-pergola
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos de ellas son fotogramas de vídeo** (`…-vertical-02.jpg` y `…-vertical-08.jpg`, miniaturas de vídeos de la ficha de 1080×1920, no fotografías) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las ocho restantes**: tres en el collage de la portada y las ocho en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales. Es la ficha con más fotos verticales del repositorio: cinco de las ocho.
- **Ninguna de las ocho viene con pie de foto** en la ficha, así que su `alt` es solo el aviso genérico de que la foto sale de la ficha de Google Maps: están por revisar y describir.
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-pergola
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`: ninguna trae pie de foto de Google.
3. Confirmar horario y festivos por teléfono con el establecimiento. Es un horario de 7:30 a 24:00 los siete días, así que conviene comprobar que no hay ningún día de cierre que la ficha no recoja.
4. Si el dominio final no es `la-pergola-almeria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
