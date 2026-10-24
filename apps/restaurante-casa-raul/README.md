# Restaurante Casa Raúl · web (Astro)

Web de una sola página para **Restaurante Casa Raúl**, restaurante, parrilla y bar en la avenida
Martín Palomino, 88 (10600 Plasencia, Cáceres), con terraza de verano e invierno y comedor
climatizado.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` (con su `Menu` y `FAQPage`),
contenido en español orientado a búsquedas del tipo «restaurante Plasencia», «menú del día
Plasencia», «menú especial Plasencia», «parrilla Plasencia», «cochinillo Plasencia» o «Casa Raúl»,
y galería con las diez fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-casa-raul dev      # http://localhost:4321
bun run --filter restaurante-casa-raul typecheck
bun run --filter restaurante-casa-raul build
bun run --filter restaurante-casa-raul preview
```

El dominio provisional del `site` es `https://restaurante-casa-raul.vercel.app`: **cámbialo aquí,
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

Ficha de Google Maps: `Restaurante Casa Raúl`, 40.0091006,-6.1109882, feature
`0xd3e170a72a7dd0f:0xc17eed8be710f866`. De ahí salen la dirección, el teléfono (927 42 29 55), la
nota (4,2 con 2.174 reseñas), el horario —domingo cerrado—, las categorías, la descripción del
local y las reseñas citadas.

La ficha no publica la carta completa. El **menú especial** sí está publicado, en una de las fotos
de su galería: se transcribe tal cual, con su precio de 30,00 €. El resto de la carta resume lo que
citan las reseñas (menú diario, raciones, bocadillos, hamburguesas, cochinillo, ensalada Casa Raúl).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-casa-raul   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto.
