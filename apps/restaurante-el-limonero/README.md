# Restaurante El Limonero · web (Astro)

Web de una sola página para **Restaurante El Limonero**, café-bar y restaurante de cocina
mediterránea en Carrer les Argelagues, 15, en Sant Josep de sa Talaia (Ibiza), dentro de un complejo
con piscina.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer junto a la piscina Ibiza», «El Limonero Ibiza»,
«paella Sant Josep de sa Talaia» o «desayunos Ibiza», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-el-limonero dev      # http://localhost:4321
bun run --filter restaurante-el-limonero typecheck
bun run --filter restaurante-el-limonero build
bun run --filter restaurante-el-limonero preview
```

El dominio provisional del `site` es `https://restaurante-el-limonero.vercel.app`: **cámbialo aquí,
en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio, enlaces de Google Maps, horario (sin publicar), carta
  resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la terraza de
  la piscina.

## Datos de partida y límites

Ficha de Google Maps: `Restaurante El Limonero`, 38.892673,1.4063963, feature
`0x1299442b102c7ed1:0x5243f6247bc1b729`. De ahí salen la dirección, el teléfono (971 30 04 66), la
nota (4,4 con 351 reseñas), las categorías (restaurante, mediterráneo, cocina española, hotel, pista
de tenis) y la accesibilidad.

**La ficha no publica horario ni descripción del negocio, ni carta ni precios.** La web no los
inventa:

- El horario aparece como «Consultar en Google Maps» en todos los días y el JSON-LD no declara
  `openingHoursSpecification`.
- «La carta» se limita a lo que se ve en las fotos del perfil (desayuno completo, tortitas, bagel,
  crepes, huevos con salmón, paellas y arroces de marisco, fideuá, bogavante, tarta de queso,
  sangría y café) y a lo que citan las reseñas.

Si el titular facilita horario y carta, se añaden en `src/data/site.ts` (y el horario también en
`openingHoursSpecification` de `src/pages/index.astro`).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-limonero   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
