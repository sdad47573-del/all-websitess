# Restaurant Cala d’Hort · web (Astro)

Web de una sola página para **Restaurant Cala d’Hort**, restaurante familiar de cocina mediterránea
e ibicenca en la playa de Cala d’Hort (Sant Josep de sa Talaia, Ibiza), frente a Es Vedrà.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Cala d’Hort», «restaurante Es Vedrà», «paella
Cala d’Hort», «restaurante playa Ibiza» o «Cala d’Hort restaurant», y galería con las fotografías de
la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurant-cala-dhort dev      # http://localhost:4321
bun run --filter restaurant-cala-dhort typecheck
bun run --filter restaurant-cala-dhort build
bun run --filter restaurant-cala-dhort preview
```

El dominio provisional del `site` es `https://restaurant-cala-dhort.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la puesta de
  sol sobre Es Vedrà.

## Datos de partida

Ficha de Google Maps: `Restaurant Cala d’Hort`, 38.8903996,1.2244467, feature
`0x12994ca4524fd36b:0x3c8a11d8e7665b14`. De ahí salen la dirección, el teléfono (971 93 50 36), la
nota (4,4 con 1.273 reseñas), las categorías (restaurante mediterráneo y restaurante familiar), el
horario (todos los días de 11:00 a 21:30; martes cerrado), las reseñas, la accesibilidad y la
descripción del propio negocio.

Esa descripción es la fuente de la propuesta: «restaurante familiar de cocina mediterránea e
ibicenca abierto en 1966. Paellas, pescado al horno, guisat de peix y una selección de platos de
carne y ensaladas».

**La ficha no publica carta ni precios**: la sección «La carta» recoge solo esa descripción, lo que se
ve en las fotos del perfil (paella de marisco, arroz con carabineros, gambas al ajillo, pollo asado,
ensalada mixta y ensalada de tomate) y lo que citan las reseñas (arroz marinera, moluscos al vapor,
mejillones a la marinera, boquerones y calamares).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurant-cala-dhort   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
