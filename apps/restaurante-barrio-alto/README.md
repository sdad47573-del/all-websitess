# Restaurante Barrio Alto

Web informativa de **Restaurante Barrio Alto**, marisquería en la calle Magallanes del Alquián, 56, 04130 El Alquián (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del restaurante, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante Barrio Alto |
| Dirección | C. Magallanes del Alquián, 56 · 04130 El Alquián · Almería |
| Teléfono | +34 950 29 76 07 |
| Categoría de Google | Marisquería |
| Valoración | 4,6 sobre 5 con 404 reseñas |
| Horario | Martes a domingo 13:30 – 17:00 · lunes cerrado |
| Coordenadas | 36.850742, -2.3549855 |
| Identificador del lugar | `ChIJ5bT6cGSZeg0RS0XeUCLlvPA` |

Google escribe la dirección como «C. Magallanes del Alquián, 56»: en la web se desarrolla la abreviatura a **«Calle»**, como en el resto de webs del repositorio. La localidad la publica como **«El Alquián»**, pedanía de Almería, y así se recoge en la web.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca en la ficha («Excelente trato Pescado y mariscos de la tierra, buena calidad y buen precio», «Pedimos ensalada pequeña, 1/2 ración pulpo y 4 gambas rojas.» y «La gamba roja es un espectáculo y el lenguado me encantó.»). No hay ninguna escrita ni retocada, ni siquiera su puntuación.

El restaurante **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente. Se publica la advertencia en lugar de dar ese día por seguro. Ese lunes aparece cerrado en el horario semanal, así que la advertencia es informativa.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-barrio-alto   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-barrio-alto
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **una de ellas es un fotograma de vídeo** (`…-vertical-02.jpg`, miniatura de un vídeo de la ficha, no una fotografía) y **no se publica**: se queda en disco y en el manifiesto, pero fuera del código.
- **Se publican las nueve restantes**: tres en el collage del hero y las nueve en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales.
- **Ninguna de esas nueve viene titulada en la ficha**, así que el `alt` de todas es un texto genérico que dice de dónde salen. Falta revisarlas una a una, descartar lo que no valga y dar a cada una su descripción real.
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-barrio-alto
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las nueve fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`.
3. Confirmar horario y festivos por teléfono con el establecimiento.
4. Si el dominio final no es `barrio-alto-alquian.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
