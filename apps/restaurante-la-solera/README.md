# Restaurante La Solera · web (Astro)

Web de una sola página para **Restaurante La Solera**, marisquería de cocina mediterránea y española
en Plaça sa Tertúlia, 8, en el centro de Eivissa.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «marisquería Ibiza centro», «paella Ibiza puerto», «La
Solera Ibiza» o «pulpo a la gallega Eivissa», y galería con las fotografías de la ficha de Google
Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-la-solera dev      # http://localhost:4321
bun run --filter restaurante-la-solera typecheck
bun run --filter restaurante-la-solera build
bun run --filter restaurante-la-solera preview
```

El dominio provisional del `site` es `https://restaurante-la-solera.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la fachada con
  los toldos.

## Datos de partida

Ficha de Google Maps: `Restaurante La Solera`, 38.9099707,1.4369998, feature
`0x129946b1244d64c1:0x36afee87da27c259`. De ahí salen la dirección, el teléfono (971 31 62 50), la
nota (4,2 con 909 reseñas), las categorías (restaurante mediterráneo, marisquería y cocina
española), el horario (todos los días de 12:00 a 24:00), las reseñas y la accesibilidad.

La ficha **no tiene descripción del negocio ni publica carta ni precios**: la sección «La carta»
recoge solo lo que se ve en las fotos del perfil (paella de marisco y de langostinos, pulpo a la
gallega, sardinas a la plancha, calamares, fritura de pescado, tortilla y hamburguesa) y lo que
citan las reseñas (paella de bogavante y pimientos de Padrón).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-solera   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
