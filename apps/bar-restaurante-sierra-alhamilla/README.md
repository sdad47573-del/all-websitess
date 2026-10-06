# Bar Restaurante Sierra Alhamilla

Web informativa de **Bar Restaurante Sierra Alhamilla**, bar restaurante de cocina andaluza y tapas en la plaza Doctor Campello, 2, 04259 Pechina (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Bar Restaurante Sierra Alhamilla |
| Dirección | Plaza Doctor Campello, 2 · 04259 Pechina · Almería |
| Teléfono | +34 950 16 02 75 |
| Categorías de Google | Restaurante andaluz · Bar |
| Valoración | 4,5 sobre 5 con 942 reseñas |
| Horario | Lunes y miércoles a domingo 8:30 – 18:00 · martes cerrado |
| Coordenadas | 36.9607614, -2.396331 |
| Identificador del lugar | `ChIJb8NMNJeheg0RQnJJtdin7Ek` |

El número de reseñas se escribe **«942 reseñas»**, sin separador de millar, y la valoración con coma decimal («4,5»): es lo que muestra Google en español y lo que produce `toLocaleString('es-ES')` en el código (así ninguno de los dos números se escribe a mano en ninguna parte).

### El municipio: Pechina, no Almería

Google escribe la dirección como **«Plaza Doctor Campello, 2, 04259 Almería»**, con el nombre de la provincia en el hueco donde suele ir el municipio. El código postal 04259 corresponde a **Pechina** (pedanía de Sierra Alhamilla), y así lo confirman el callejero de Correos, el catastro, el propio Ayuntamiento de Pechina y la prensa local. La web publica Pechina y la diferencia se explica en la portada y en las preguntas frecuentes, en lugar de repetir un dato que Google da a nivel de provincia.

Las dos reseñas que aparecen en la portada son extractos **literales** de las dos que Google destaca en la ficha («Tapa de huevo frito con pisto y patatas fritas buenísima,» y «Comida riquisima, cerveza sin gluten y tapas deliciosas»). No hay ninguna escrita ni retocada. La primera **acaba en coma en el original** y así se reproduce; es la única que Google destaca con signo distinto, y no hay ninguna crítica entre las reseñas destacadas.

El bar **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes. Una de las reseñas menciona la cerveza sin gluten y así se cuenta en su propia pregunta, sin presentarlo como una lista de alérgenos que la ficha no publica.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente. Se publica la advertencia: ese lunes la ficha lo da abierto con el horario habitual, pero no se da por seguro.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-restaurante-sierra-alhamilla   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 bar-restaurante-sierra-alhamilla
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos de ellas son fotogramas de vídeo** (`…-vertical-02.jpg` y `…-apaisada-08.jpg`, miniaturas de vídeos de la ficha de 1080×1920 y 1920×1080, no fotografías) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código. Es la única ficha del repositorio en la que el fotograma de vídeo apaisado recibe el descriptor `apaisada` y no `panoramica`, porque su proporción (1,78) no llega al umbral de 1,8.
- **Se publican las ocho restantes**: tres en el collage de la portada y las ocho en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales.
- **Ninguna de las ocho viene con pie de foto** en la ficha, así que su `alt` es solo el aviso genérico de que la foto sale de la ficha de Google Maps: están por revisar y describir.
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-restaurante-sierra-alhamilla
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`: ninguna trae pie de foto de Google.
3. Confirmar horario y festivos por teléfono con el establecimiento.
4. Si el dominio final no es `sierra-alhamilla-pechina.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
