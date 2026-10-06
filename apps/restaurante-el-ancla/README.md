# Restaurante El Ancla

Web informativa de **Restaurante El Ancla**, cocina mediterránea y española en el Paseo Marítimo, 20, 04740 Roquetas de Mar (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del restaurante, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante El Ancla |
| Dirección | P.º Marítimo, 20 · 04740 Roquetas de Mar · Almería |
| Teléfono | +34 950 16 02 22 |
| Categorías de Google | Restaurante mediterráneo · Restaurante de cocina española |
| Valoración | 4,5 sobre 5 con 1506 reseñas |
| Horario | Lunes y miércoles a domingo 12:30 – 16:30 y 20:00 – 23:00 · martes cerrado |
| Coordenadas | 36.7210155, -2.6281502 |
| Identificador del lugar | `ChIJYUpn0RFxcA0RgNCDc1DsyPU` |

Google escribe la dirección como «P.º Marítimo, 20»: en la web se desarrolla la abreviatura a **«Paseo»**, como en el resto de webs del repositorio.

El número de reseñas se escribe **«1506 reseñas»**, sin separador de millar: es lo que recomienda la RAE para cuatro cifras, lo que muestra Google en español y lo que produce `toLocaleString('es-ES')` en el código (así el número no se escribe a mano en ninguna parte).

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca en la ficha («Cena para 2 en pareja, gamba roja, solomillo, pescado, pulpo y buen vino.», «Pedimos: sardinas boquerones al limón almejas y arroz meloso de pulpo» y «Buenas raciones cerveza fresquita j buena atención»). No hay ninguna escrita ni retocada, ni siquiera su puntuación.

El restaurante **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente. Se publica la advertencia en lugar de dar ese día por seguro; ese lunes la ficha lo da abierto con los dos turnos habituales.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-ancla   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-el-ancla
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos de ellas son fotogramas de vídeo** (`…-vertical-02.jpg` y `…-apaisada-08.jpg`, miniaturas de vídeos de la ficha, no fotografías) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las ocho restantes**: tres en el collage del hero y las ocho en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales.
- **Dos de esas ocho sí vienen con pie de foto en la ficha** («Gallineta» y «Fuente de mariscos variados») y ese pie es el `alt` que se usa, precediendo al aviso de que la foto sale de la ficha de Google Maps. Las otras seis no vienen tituladas, así que su `alt` es solo ese texto genérico: faltan por revisar y describir.
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-ancla
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`; las dos que ya llevan pie de foto lo tienen, las otras seis no.
3. Confirmar horario y festivos por teléfono con el establecimiento.
4. Si el dominio final no es `el-ancla-roquetas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
