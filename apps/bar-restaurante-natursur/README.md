# Bar restaurante Natursur

Web informativa de **Bar restaurante Natursur**, en el Paraje Pisaica de la Virgen, s/n, 04240 Viator (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del bar, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Bar restaurante Natursur |
| Dirección | Paraje Pisaica de la Virgen, s/n · 04240 Viator · Almería |
| Teléfono | +34 641 07 66 72 |
| Categorías de Google | Restaurante · Bar · Restaurante de cocina española |
| Valoración | 4,5 sobre 5 con 86 reseñas |
| Horario | Lunes a viernes 5:00 – 21:00 · sábado 6:00 – 12:00 · domingo cerrado |
| Coordenadas | 36.8762252, -2.4092015 |
| Identificador del lugar | `ChIJ3_ZOU5qfeg0RyP8lt-nmbd8` |

Google escribe la dirección como «Paraje Pisaica de la Virgen SN»: en la web se desarrolla la abreviatura a **«s/n»** (sin número), que es lo que significa.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca en la ficha («La comida buenísima y buen precio, buena atención y buen ambiente.», «Excelente atención y muy buena cocina», «Menú diario con servicio rápido»). No hay ninguna escrita ni retocada.

El bar **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «La cocina» y en las preguntas frecuentes.

> El lunes 12 de octubre de 2026 la ficha lo marcaba como festivo nacional con el aviso de que el horario podía variar. Se publica la advertencia en lugar de dar ese día por seguro.

## Fotografías

Las diez fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-restaurante-natursur   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 bar-restaurante-natursur
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- **Se publican las diez** en la portada: tres en el collage del hero y las diez en el mosaico de «La cocina» (el hero reutiliza fotos del mosaico como avance).
- **Ninguna viene titulada en la ficha**, así que el `alt` de todas es un texto genérico que dice de dónde salen. Falta revisarlas una a una, descartar lo que no valga y dar a cada una su descripción real.
- En esta ficha **no había fotogramas de vídeo** entre las diez: las diez se pudieron publicar.
- `public/og.jpg` (1200×630) es un recorte de una de esas fotos.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-restaurante-natursur
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`.
3. Confirmar horario y festivos por teléfono con el establecimiento.
4. Si el dominio final no es `natursur-viator.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
