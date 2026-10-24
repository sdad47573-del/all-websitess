# Restaurante Camping Jaizkibel · web (Astro)

Web de una sola página para **Restaurante Camping Jaizkibel**, restaurante y bar en el km 22 de la
carretera de Guadalupe, dentro del Camping Jaizkibel (20280 Hondarribia, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Hondarribia», «menú del día Hondarribia»,
«restaurante Camping Jaizkibel» o «bar carretera de Guadalupe», y galería con las fotografías de la
ficha de Google Maps, entre ellas la carta impresa del menú del día.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-camping-jaizkibel dev      # http://localhost:4321
bun run --filter restaurante-camping-jaizkibel typecheck
bun run --filter restaurante-camping-jaizkibel build
bun run --filter restaurante-camping-jaizkibel preview
```

El dominio provisional del `site` es `https://restaurante-camping-jaizkibel.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  menú del día y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de la
  alubia pinta.

## Datos de partida

Ficha de Google Maps: `Restaurante Camping Jaizkibel`, 43.3663455,-1.8045277, feature
`0xd51099645af7e9d:0x5d473df018820db6`. De ahí salen la dirección, el teléfono (943 58 23 63), la
nota (4,5 con 176 reseñas), el horario —todos los días de 9:00 a 23:00—, las categorías
(restaurante y bar), las reseñas y los datos de accesibilidad.

La carta del menú del día no está publicada como texto: es la foto de la carta impresa del perfil
de Google, de donde salen el precio (12,00 €, IVA incluido, sin bebida ni café) y los suplementos.
La dirección aparece truncada en Google («Ctra Guadalupe km22 (En el camping jaizkibel»), por eso la
web escribe «Ctra. de Guadalupe, km 22» y añade «Camping Jaizkibel» como línea aparte.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-camping-jaizkibel   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Dos de las diez fotos del perfil llevan marca de agua de
TikTok, así que no se muestran en la galería.
