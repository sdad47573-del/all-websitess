# BORDATXO · web (Astro)

Web de una sola página para **BORDATXO** (Bordatxo taberna), bar de tapas en Zubiaurrenea Kalea, 5
(20170 Usurbil, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «pintxos Usurbil», «bar de tapas Usurbil», «desayunar en
Usurbil», «Bordatxo taberna» o «terraza Usurbil», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter bordatxo dev      # http://localhost:4321
bun run --filter bordatxo typecheck
bun run --filter bordatxo build
bun run --filter bordatxo preview
```

El dominio provisional del `site` es `https://bordatxo.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps, lo
  que ofrece la barra y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de la
  barra.

## Datos de partida

Ficha de Google Maps: `BORDATXO`, 43.2712369,-2.0498038, feature
`0xd51b120f3804865:0x1fd16958ee470b44`. De ahí salen la dirección, el teléfono (943 37 10 42), la
nota (4,4 con 523 reseñas), el horario —de lunes a viernes de 7:00 a 1:00 y los fines de semana de
8:00 a 1:00—, la categoría (bar de tapas), las reseñas, los datos de accesibilidad y que se admiten
perros.

La ficha no publica carta ni precios: la sección «La barra» resume lo que citan las reseñas y lo que
se ve en las fotos del perfil (pintxos de jamón y chorizo, bocadillos y pintxos de tortilla,
croquetas, panceta con patatas y huevos, café con leche y desayunos).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs bordatxo   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Las diez fotos del perfil se usan en la galería.
