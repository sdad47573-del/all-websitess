# Izadi Taberna · web (Astro)

Web de una sola página para **Izadi Taberna**, taberna y cafetería en Hamarretxeta Kalea, 20,
Pasai Antxo (20110 Pasaia, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «pinchos Pasai Antxo», «croquetas Pasaia», «taberna Pasai
Antxo», «cafetería Pasaia» o «Izadi Taberna», y galería con las cuatro fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter izadi-taberna dev      # http://localhost:4321
bun run --filter izadi-taberna typecheck
bun run --filter izadi-taberna build
bun run --filter izadi-taberna preview
```

El dominio provisional del `site` es `https://izadi-taberna.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/styles/global.css`: hoja de estilos propia (crema, tinta y rojo de taberna).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de
  la barra.

## Datos de partida

Ficha de Google Maps: `Izadi Taberna`, 43.3163917,-1.9180646, feature
`0xd51a5f9b0ed4b49:0x620b72e260a63a47`. De ahí salen la dirección, el teléfono (943 51 07 50), la
nota (4,7 con 84 reseñas), el horario —todos los días, con el fin de semana una hora más tarde—,
las categorías (restaurante y cafetería) y las reseñas.

La ficha **no tiene descripción del local ni carta ni precios**, no publica servicios ni datos de
accesibilidad, y el local no tiene web propia. La carta recoge solo lo que citan sus reseñas
—pinchos y croquetas— y lo que se deduce de las categorías de Google. No hay importes en ningún
sitio.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs izadi-taberna   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Esta ficha solo tiene cuatro fotos públicas.
