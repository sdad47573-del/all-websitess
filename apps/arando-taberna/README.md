# Arando Taberna · web (Astro)

Web de una sola página para **Arando Taberna**, restaurante de barrio en Euskadi Etorbidea, 53,
Trintxerpe (20110 Pasaia, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «menú del día Pasaia», «comer en Trintxerpe», «risottos
Pasaia», «zamburiñas Trintxerpe» o «Arando Taberna», y galería con las diez fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter arando-taberna dev      # http://localhost:4321
bun run --filter arando-taberna typecheck
bun run --filter arando-taberna build
bun run --filter arando-taberna preview
```

El dominio provisional del `site` es `https://arando-taberna.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/styles/global.css`: hoja de estilos propia (arena, verde puerto y ocre).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de
  las zamburiñas.

## Datos de partida

Ficha de Google Maps: `Arando Taberna`, 43.3232417,-1.9308833, feature
`0xd51a58e31041093:0x2ce6e779e01cc1c5`. De ahí salen la dirección, el teléfono (943 40 10 34), la
nota (4,5 con 229 reseñas), el horario —todos los días, con viernes y sábado más largos—, la
categoría (restaurante), las reseñas, la accesibilidad (acceso y asientos adaptados) y la
descripción del local, que anuncia menú del día de martes a domingo, risottos de hongos y txipis,
calamares, zamburiñas y servicio para llevar, además del brunch que marca Google.

La ficha **no publica precios ni una carta completa** y el local no tiene web propia, así que la
carta recoge solo lo que anuncia la casa en esa descripción y lo que citan sus reseñas. No hay
importes en ningún sitio.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs arando-taberna   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto.
