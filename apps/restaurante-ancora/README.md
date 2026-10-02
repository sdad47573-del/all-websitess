# Restaurante Áncora

Landing page estática en Astro para el Restaurante Áncora, restaurante mediterráneo de la calle
El Fuerte, 8-11, frente al Hotel El Fuerte y a un paso del paseo marítimo de Marbella (29602).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-ancora
bun run dev
bun run check
bun run typecheck
bun run build
```

## Datos y SEO

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios, `petsAllowed`,
  `aggregateRating`) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del restaurante y agregadores públicos: calle
  El Fuerte, local 8-11 (29602 Marbella), teléfono 666 18 78 55, abierto de 13:00 a 23:00 y cerrado
  martes y miércoles, valoración media 4,7 sobre 5 con más de 800 reseñas.
- Los precios de la carta salen de la carta pública del restaurante (octubre de 2026) y se marcan
  como orientativos. El menú del día no tiene precio oficial publicado: se indica un rango histórico
  de 11 a 18 euros.
- El `aggregateRating` del JSON-LD (4,7 con 837 votos) corresponde a la suma de valoraciones
  públicas agregadas (Google 619, Tripadvisor 165 y Facebook 43 en Restaurant Guru). La ficha de
  Google Maps a día de hoy muestra una puntuación ligeramente distinta; si se quiere publicar solo
  la de Google, hay que ajustar `ratingCount` y `ratingValue` en `src/pages/index.astro`.
- Place ID de Google: `ChIJl2I_R_gncw0RsDswSE2DWlw` (usado para el enlace de reseñas).

## Imágenes

- `public/fotos/restaurante-ancora-marbella.jpg`: foto principal de la ficha de Google Maps (1200×1600).
- El resto de imágenes de `public/fotos/` son fotografías del restaurante y de sus platos publicadas
  en la ficha de Google Maps, descargadas a través del agregador Restaurant Guru.

Antes de publicar conviene revisar los textos `alt` y confirmar que el titular autoriza el uso de
las imágenes.

## Antes de publicar

1. Cambiar `https://restaurante-ancora.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar horario, teléfono y carta vigentes con el establecimiento.
3. Completar NIF/CIF, razón social y correo electrónico del titular en el aviso legal.
