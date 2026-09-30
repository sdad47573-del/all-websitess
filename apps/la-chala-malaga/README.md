# La Chalá Málaga

Landing page estática en Astro para La Chalá Málaga, bar restaurante de la calle Edom, 4
(Cruz de Humilladero, 29006 Málaga).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/la-chala-malaga
bun run dev
bun run check
bun run typecheck
bun run build
```

## Datos y SEO

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios, `petsAllowed`) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del local, la web del propio negocio (Google My
  Business) y agregadores públicos: C/ Edom, 4 (Cruz de Humilladero, 29006 Málaga), teléfono
  614 94 16 84, abierto de martes a domingo.
- No se publica `aggregateRating`: las fuentes consultadas dan cifras distintas (4,4 con 208 reseñas
  y 4,5 con 268). Si se confirma la valoración oficial se puede añadir al JSON-LD.
- Tampoco se publican precios: la carta cambia y no hay carta oficial enlazada.

### Teléfono

La ficha de Google Maps y el agregador de reservas dan **614 94 16 84**, que es el publicado en la
web. Otras guías muestran 641 13 33 48; si el titular confirma que es el actual, hay que actualizar
`business.phone`, `phoneHref` y los datos estructurados en `src/pages/index.astro`.

## Imágenes

- `public/fotos/la-chala-malaga.jpg`: foto de la ficha de Google Maps del local (1200×1600).
- `public/fotos/calle-edom-4-malaga-street-view.jpg`: vista de calle de Google Street View (1024×682).

La galería de la ficha de Google Maps del establecimiento tiene una única foto propia, así que la web
usa esa imagen, una vista de calle y enlaces a la ficha y al Instagram del local. Antes de publicar
conviene revisar los textos `alt` y confirmar que el titular autoriza el uso de las imágenes.

## Antes de publicar

1. Cambiar `https://la-chala-malaga.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar horario, teléfono y carta vigentes con el establecimiento.
