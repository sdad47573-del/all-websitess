# Restaurante Vista Al Puerto · web (Astro)

Web de una sola página para **Restaurante Vista Al Puerto**, restaurante de cocina española en
Carrer des Caló, 66, en Sant Agustí des Vedrà (Sant Josep de sa Talaia, Ibiza).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Sant Agustí», «paella Ibiza», «restaurante con
terraza Sant Josep de sa Talaia» o «Vista Al Puerto», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-vista-al-puerto dev      # http://localhost:4321
bun run --filter restaurante-vista-al-puerto typecheck
bun run --filter restaurante-vista-al-puerto build
bun run --filter restaurante-vista-al-puerto preview
```

El dominio provisional del `site` es `https://restaurante-vista-al-puerto.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la terraza.

## Datos de partida

Ficha de Google Maps: `Restaurante Vista Al Puerto`, 38.970702,1.2856146, feature
`0x12994b996c50ed3f:0x7b05b674f2baf9b7`. De ahí salen la dirección, el teléfono (871 11 02 79), la
nota (4,5 con 373 reseñas), la categoría (restaurante de cocina española), el horario (todos los
días de 12:00 a 23:30; martes cerrado), las reseñas y la accesibilidad.

La ficha **no tiene descripción del negocio ni publica carta ni precios**: la sección «La carta»
recoge solo lo que se ve en las fotos del perfil (paella de marisco, pescado entero a la plancha,
entrecot, parrillada de carne, espaguetis con marisco, mejillones, gambas al ajillo y ensalada César)
y lo que citan las reseñas (paella, mejillones y kebab con salsa de yogur especiada).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-vista-al-puerto   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se descargan las diez fotos del perfil; la galería usa
nueve porque dos de ellas son la misma imagen del entrecot.
