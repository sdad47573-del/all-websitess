# Restaurant la Bufalina · web (Astro)

Web de una sola página para **Restaurant la Bufalina**, pizzería italiana en Passeig de Vara de Rey,
13, en el centro de Eivissa.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «pizzería Ibiza centro», «pizza Vara de Rey», «pizza a
domicilio Eivissa» o «La Bufalina», y galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurant-la-bufalina dev      # http://localhost:4321
bun run --filter restaurant-la-bufalina typecheck
bun run --filter restaurant-la-bufalina build
bun run --filter restaurant-la-bufalina preview
```

El dominio provisional del `site` es `https://restaurant-la-bufalina.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la pizza con
  burrata y prosciutto.

## Datos de partida

Ficha de Google Maps: `Restaurant la Bufalina`, 38.908794,1.433187, feature
`0x129946ba64c8f403:0x6e9f3748f8a91da7`. De ahí salen la dirección, el teléfono (971 30 28 94), la
nota (4,5 con 2.905 reseñas), las categorías (restaurante, italiano, pizzería, mediterráneo, comida a
domicilio y para llevar), el horario (todos los días de 11:00 a 01:00), las reseñas, la
accesibilidad y la descripción del propio negocio.

Esa descripción es la fuente del premio: «la mejor pizzería de Ibiza, ganadora del premio Eccellenze
Italiane 2021-2022», abierta desde hace 10 años.

**La ficha no publica precios**: la sección «La carta» recoge solo lo que se ve en las fotos del
perfil (margherita, pizzas con burrata y prosciutto, pizza de jamón, champiñones y alcachofas,
piadina de fiambre y ensalada), lo que anuncia la carta de la puerta (Maxi Ensaladas y Maxi Bowls) y
lo que cita la reseña destacada (pizza de setas y bacon). Los precios se remiten a la carta física y
a la ficha de Google.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurant-la-bufalina   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
