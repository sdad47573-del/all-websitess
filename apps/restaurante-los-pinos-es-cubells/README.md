# Restaurante Los Pinos (Es Cubells) · web (Astro)

Web de una sola página para **Restaurante Los Pinos**, restaurante de cocina española en Carre des
LLombi, 31 (07839 Es Cubells, Sant Josep de sa Talaia, Ibiza).

No confundir con `apps/restaurante-los-pinos`, que es el Los Pinos de Zahora (Barbate). Son dos
negocios distintos con el mismo nombre.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Es Cubells», «restaurante Sant Josep Ibiza»,
«Los Pinos Ibiza» o «terraza Es Cubells», y galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-los-pinos-es-cubells dev      # http://localhost:4321
bun run --filter restaurante-los-pinos-es-cubells typecheck
bun run --filter restaurante-los-pinos-es-cubells build
bun run --filter restaurante-los-pinos-es-cubells preview
```

El dominio provisional del `site` es `https://restaurante-los-pinos-es-cubells.vercel.app`:
**cámbialo aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el
`canonical` de `src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida, aviso de cierre y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de la
  terraza.

## Datos de partida

Ficha de Google Maps: `Restaurante Los Pinos`, 38.880097,1.27617, feature
`0x12994c16e980c875:0x8016ff99013fceea`. De ahí salen la dirección, el teléfono (971 80 21 86), la
nota (4,7 con 295 reseñas), las categorías (restaurante y restaurante de cocina española), el
horario (comidas de 13:00 a 15:30, martes hasta las 15:00; cenas de 19:00 a 23:00; miércoles
cerrado y jueves solo por la noche), las reseñas y los datos de accesibilidad.

**Aviso importante**: la descripción de la ficha de Google dice literalmente «cerrado temporalmente».
La web lo refleja en el hero, en «La casa», en el horario y en las preguntas frecuentes, y remite al
teléfono antes de la visita. Si el titular confirma que vuelve a estar abierto, hay que quitar ese
aviso de `src/data/site.ts` (`AVISO`), de `src/pages/index.astro` (hero, «La casa» y «Visítanos») y de
las preguntas frecuentes.

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que citan las reseñas
(carpaccio de aguacate, ensalada de queso de cabra y paella) y lo que aparece en las fotos del perfil
(gambas al ajillo, calamares a la plancha, pescado con verduras, chuletillas de cordero, crema
catalana y helado).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-los-pinos-es-cubells   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
