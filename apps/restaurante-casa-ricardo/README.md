# Restaurante Casa Ricardo

Web informativa de **Restaurante Casa Ricardo**, en la calle Tiziano, 6, 04700 El Ejido (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del restaurante, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante Casa Ricardo |
| Dirección | C. Tiziano, 6 · 04700 El Ejido · Almería |
| Teléfono | +34 950 48 58 89 |
| Categoría de Google | Restaurante de cocina española |
| Valoración | 4,6 sobre 5 con 564 reseñas |
| Horario | 8:00 – 17:00, sábado cerrado |
| Coordenadas | 36.7674807, -2.8021447 |
| Identificador del lugar | `ChIJ_SeeccFCcA0RWE4OLe0brRE` |

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca en la ficha. No hay ninguna escrita ni retocada.

El restaurante **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «La cocina» y en las preguntas frecuentes.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como festivo nacional con el aviso de que el horario podía variar. Se publica la advertencia en lugar de dar ese día por seguro.

## Fotografías

Las diez fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-casa-ricardo   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-casa-ricardo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- **Se publican nueve** en la portada: tres en la tira del hero, dos en «La casa» y las nueve en el mosaico de «La cocina» (el hero y «La casa» reutilizan fotos del mosaico como avance).
- **Se descarta el fotograma del vídeo** (`…-vertical-02.jpg`), que Google entrega como miniatura de un vídeo de la ficha, no como fotografía.
- **El texto alternativo solo describe lo que consta**: las dos fotos que Google titula en la ficha llevan su leyenda («Paella mixta» y «Natilla de vainilla») y el resto un `alt` genérico que dice de dónde salen. Falta revisarlas una a una y dar a cada una su descripción real.
- `public/og.jpg` (1200×630) es un recorte de una de esas fotos.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-casa-ricardo
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las nueve fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`.
3. Confirmar horario y festivos por teléfono con el establecimiento.
4. Si el dominio final no es `casa-ricardo-ejido.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
