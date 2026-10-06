# La Cabaña (Roquetas de Mar)

Web informativa de **La Cabaña**, bar de tapas en la calle Américo Vespucio, 29, 04740 Roquetas de Mar (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

> **Esta carpeta no es `restaurante-la-cabana`.** Esa otra app es de *Restaurante la Cabaña* de Marbella (Av. General López Domínguez, 5, La Campana), un negocio distinto. Aquí el identificador de lugar es `ChIJccxPPbJ6cA0Ry4pjptZ21Ng`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del bar, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | «La Cabaña Bar o la cabana o restaurante la cabaña» |
| Dirección | C. Américo Vespucio, 29 · 04740 Roquetas de Mar · Almería |
| Teléfono | +34 649 66 75 58 |
| Categoría de Google | Bar de tapas |
| Valoración | 4,6 sobre 5 con 525 reseñas |
| Horario | Lunes a miércoles y viernes a domingo 11:00 – 19:00 · jueves cerrado |
| Coordenadas | 36.7412529, -2.6146505 |
| Identificador del lugar | `ChIJccxPPbJ6cA0Ry4pjptZ21Ng` |

Google publica la ficha con el nombre repetitivo «La Cabaña Bar o la cabana o restaurante la cabaña», que encadena palabras clave y alterna la grafía con y sin tilde. En la web se usa solo **«La Cabaña»**, el nombre del local; el nombre tal cual lo publica Google queda anotado en `src/data/site.ts`.

Google escribe la dirección como «C. Américo Vespucio, 29»: en la web se desarrolla la abreviatura a **«Calle»**, como en el resto de webs del repositorio.

Las reseñas que aparecen en la portada son extractos **literales** de las que Google destaca en la ficha («Un tapeo buenísimo, también raciones…y la atención de la dueña, espectacular👌» y «Las tapas para repetir y la fritura de pescado exquisita.»). La tercera que destaca Google es una respuesta del establecimiento a un comentario, así que se deja fuera para no atribuirla a la clientela. No hay ninguna reseña escrita ni retocada.

El bar **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente. Se publica la advertencia en lugar de dar ese día por seguro.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-cabana-roquetas   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-la-cabana-roquetas
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **tres de ellas son fotogramas de vídeo** (`…-vertical-02.jpg`, `…-vertical-06.jpg` y `…-vertical-08.jpg`, miniaturas de vídeos de la ficha, no fotografías) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las siete restantes**: tres en el collage del hero y las siete en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales.
- **Ninguna de esas siete viene titulada en la ficha**, así que el `alt` de todas es un texto genérico que dice de dónde salen. La galería completa de Google sí tiene muchas más fotos, varias con pie de foto (platos: calamares, croquetas, zarzuela, cazón en adobo, postres…): quedan pendientes de revisión humana para ampliar la web con su descripción real.
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-cabana-roquetas
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las siete fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`. Valorar añadir las fotos con pie de foto de la galería completa.
3. Confirmar horario y festivos por teléfono con el establecimiento.
4. Si el dominio final no es `la-cabana-roquetas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
