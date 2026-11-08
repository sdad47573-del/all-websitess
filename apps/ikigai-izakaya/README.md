# IKIGAI IZAKAYA

Landing page estática en Astro para IKIGAI IZAKAYA, izakaya japonés de robata y yakitori en la
travesía Carlos Mackintosh, 3, local 26, en el centro de Marbella (29602). El único japonés de la
ciudad sin sushi, según anuncia su propio cartel de entrada.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/ikigai-izakaya
bun run dev
bun run check
bun run typecheck
bun run build
```

## Datos y SEO

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, email, coordenadas, horarios, servicios,
  `aggregateRating`) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del restaurante, la crítica de Gastroactitud
  (José Carlos Capel, junio de 2024) y agregadores públicos: travesía Carlos Mackintosh, 3, local 26
  (29602 Marbella), teléfono 952 75 73 73, email ikigai.izakaya@gmail.com, cenas de 20:00 a 23:00 de
  lunes, jueves, viernes, sábado y domingo, cerrado martes y miércoles.
- Valoración media 4,8 sobre 5 (Google 4,9 con 448 reseñas; Tripadvisor 4,8 con 66; Facebook 5 con
  14). El `aggregateRating` del JSON-LD usa 4,8 con 528 votos, la suma de las tres fuentes.
- Precios verificados en la carta pública (bimi 7,50 €, yakitori de presa 12 €, wok de presa 17 €,
  mochi 4,20 €). El resto de platos se citan sin precio porque no está publicado; el rango por
  persona (30-50 €) viene de la ficha de Google y de las reseñas.
- Place ID de Google: `ChIJ0xExjWwncw0RsXnGYnIG9wU` (usado para el enlace de reseñas).
- La crítica de Gastroactitud da un precio medio algo menor (25-40 €). Se publica el rango de la
  ficha de Google por ser la fuente que ven los clientes; actualizar si el titular confirma otra cosa.

## Imágenes

- `public/fotos/ikigai-izakaya-marbella.jpg`: foto principal de la ficha de Google Maps (1200×1600).
- El resto de imágenes de `public/fotos/` son fotografías del restaurante y de sus platos publicadas
  en la ficha de Google Maps, descargadas a través del agregador Restaurant Guru.

Antes de publicar conviene revisar los textos `alt` y confirmar que el titular autoriza el uso de
las imágenes.

## Antes de publicar

1. Cambiar `https://ikigai-izakaya.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar horario, teléfono y carta vigentes con el establecimiento.
3. Completar NIF/CIF y razón social del titular en el aviso legal.
