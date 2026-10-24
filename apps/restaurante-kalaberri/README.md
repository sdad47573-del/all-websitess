# Restaurante Kalaberri · web (Astro)

Web de una sola página para **Restaurante Kalaberri**, restaurante vasco en Matia Kalea, 50
(20008 Donostia / San Sebastián, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante vasco Donostia», «pintxos Donostia», «comer en
San Sebastián», «Matia Kalea 50» o «Kalaberri», y galería con las diez fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-kalaberri dev      # http://localhost:4321
bun run --filter restaurante-kalaberri typecheck
bun run --filter restaurante-kalaberri build
bun run --filter restaurante-kalaberri preview
```

El dominio provisional del `site` es `https://restaurante-kalaberri.vercel.app`: **cámbialo aquí,
en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de
  la fachada.

## Datos de partida

Ficha de Google Maps: `Restaurante Kalaberri / Restaurante en Donostia`, 43.3128118,-2.0041333,
feature `0xd51baa096292cb9:0x5f15eadd62c37975`. De ahí salen la dirección, el teléfono
(943 12 62 18), la nota (4,7 con 361 reseñas), el horario —todos los días desde las 11:00—, la
categoría (restaurante vasco), la descripción del local, las reseñas y los datos de accesibilidad.

La ficha no publica carta ni precios: la carta resume lo que anuncia su descripción («pintxos,
raciones, bocadillos y buena música»), lo que citan las reseñas (pescado, pulpo, cordero, carrilleras,
entrecot, revueltos, burrata) y lo que aparece en las fotos del perfil.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-kalaberri   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto.
