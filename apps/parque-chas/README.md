# Parque Chas Restaurante

Landing page estática en Astro para Parque Chas Restaurante, restaurante argentino de cocina casera
en la avenida Arias de Velasco, 43, barrio de Miraflores, Marbella (29601).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/parque-chas
bun run dev
bun run check
bun run typecheck
bun run build
```

## Datos y SEO

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios partidos, servicios,
  `petsAllowed`, `aggregateRating`) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del restaurante, su Instagram (@parquechasmarbella)
  y agregadores públicos: Av. Arias de Velasco, 43 (29601 Marbella), teléfono 633 02 44 18, abierto
  de miércoles a domingo de 12:00 a 16:00 y de 20:00 a 24:00, cerrado lunes y martes.
- Valoración 5,0 con 62 votos en la ficha de Google Maps (local de reciente apertura). El
  `aggregateRating` del JSON-LD publica esa cifra; conviene revisarla cuando la ficha acumule más
  reseñas, porque con pocos votos el redondeo a 5,0 puede moverse rápido.
- La carta no publica precios: se listan los platos confirmados en reseñas y agregadores (tira de
  asado, pasta casera, pizza de masa madre, empanadas criollas, provoleta, milanesas, ñoquis del 29)
  sin precio, con rango de precios nivel 2 (€€) en los metadatos.
- Discrepancia menor de dirección: el Instagram cita el número 41 y Google Maps/Restaurant Guru el
  43. La web publica el 43; actualizar si el titular confirma otro número.
- Sin Place ID público localizable aún (ficha nueva): el enlace de reseñas apunta a la ficha de
  Google Maps. Cuando se conozca el Place ID, añadir el enlace `search.google.com/local/reviews`.

## Imágenes

- `src/assets/fotos/parque-chas-marbella.jpg`: foto de la ficha de Google Maps (1200×800).
- `src/assets/fotos/carne-parrilla-parque-chas.jpg` y `src/assets/fotos/plato-parque-chas-marbella.jpg`:
  fotografías del restaurante y sus platos publicadas en la ficha de Google Maps, descargadas a
  través del agregador Restaurant Guru.

Las fotos viven en `src/assets/fotos/` y se sirven con `astro:assets`, que genera AVIF en varios
tamaños. No se copian a `public/`: allí no pasarían por el optimizador y se duplicarían.

La ficha es nueva y de momento solo tiene tres fotos propias. Cuando la ficha acumule más imágenes,
ampliar la galería siguiendo el patrón de otras webs del monorepo. Antes de publicar conviene
revisar los textos `alt` y confirmar que el titular autoriza el uso de las imágenes.

## Antes de publicar

1. Cambiar `https://parque-chas.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar horario, teléfono, número de portal (41 o 43) y carta vigentes con el establecimiento.
3. Completar NIF/CIF, razón social y correo electrónico del titular en el aviso legal.
