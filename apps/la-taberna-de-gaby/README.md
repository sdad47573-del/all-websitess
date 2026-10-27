# La Taberna de Gaby

Landing estática en Astro para La Taberna de Gaby, en la plaça la Concordia 11 de la Vall d'Alba (Castellón).

## Desarrollo

```bash
bun install
bun run dev
bun run check
bun run typecheck
bun run build
```

## Contenido y datos

- Dirección, coordenadas, categoría, teléfono, horario, nota y reseñas: ficha pública de Google Maps
  (`40.1759031,-0.0353307`, feature `0xd5ff768ebadc90b:0x8ddc4fb6b3575331`). Están en `src/data/site.ts`.
- Fotografías: descargadas del perfil del establecimiento en Google Maps con
  `node scripts/fetch-maps-photos.mjs la-taberna-de-gaby` y reducidas con
  `node scripts/optimize-source-images.mjs la-taberna-de-gaby`. Viven en `src/assets/fotos/`.
- La ficha **no** publica carta, precios ni web propia (muestra la opción de añadir un sitio web). Los
  platos que aparecen en la sección «La mesa» son los que mencionan las reseñas destacadas, no una carta
  oficial.

## Antes de publicar

1. Sustituir `https://la-taberna-de-gaby.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   `public/robots.txt` (el canonical y el Open Graph se generan desde `BUSINESS.siteUrl`).
2. Completar los datos legales pendientes (NIF/CIF, razón social y correo de contacto) en
   `src/pages/aviso-legal.astro` y quitar el aviso de la parte superior.
3. Confirmar con el establecimiento la dirección, el teléfono, el horario y la oferta antes de publicar.
