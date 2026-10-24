# Antxeta jatetxea · web (Astro)

Web de una sola página para **Antxeta jatetxea** (Antxeta Taberna), restaurante y bar de comida
casera en Zubiaurrenea Kalea, 6 (20170 Usurbil, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Usurbil», «menú del día Usurbil», «raciones
Usurbil», «Antxeta Taberna» o «bocatas Usurbil», y galería con las fotografías de la ficha de Google
Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter antxeta-jatetxea dev      # http://localhost:4321
bun run --filter antxeta-jatetxea typecheck
bun run --filter antxeta-jatetxea build
bun run --filter antxeta-jatetxea preview
```

El dominio provisional del `site` es `https://antxeta-jatetxea.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de la
  fachada.

## Datos de partida

Ficha de Google Maps: `Antxeta jatetxea | Recomendado`, 43.2709732,-2.0489051, feature
`0xd51b1209c093411:0x8407478c2bd8a536`. De ahí salen la dirección, el teléfono (943 54 43 12), la
nota (4,3 con 232 reseñas), las categorías (restaurante y bar), el horario, las reseñas y los datos
de accesibilidad.

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que citan las reseñas
(menú del día, raciones, bocatas y platos combinados) y los platos que aparecen en las fotos del
perfil (carne en salsa, calamares, piquillos rellenos, croquetas, tortilla, chuletón y tarta de
queso).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs antxeta-jatetxea   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería; tres de
ellas conservan la marca de agua de la cámara del móvil con la que se subieron.
