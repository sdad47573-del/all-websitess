# D'PIN Parrilla, Pizzas y Raciones · web (Astro)

Web de una sola página para **D'PIN Parrilla, Pizzas y Raciones**, parrilla, cafetería y bar de tapas
en la calle Pedro Ávila, 49 (10710 Zarza de Granadilla, Cáceres), en el norte de la provincia.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Zarza de Granadilla», «comer en Zarza de
Granadilla», «pizzas Zarza de Granadilla», «D'PIN» o «parrilla Valle del Ambroz», y galería con las
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter dpin-parrilla dev      # http://localhost:4321
bun run --filter dpin-parrilla typecheck
bun run --filter dpin-parrilla build
bun run --filter dpin-parrilla preview
```

El dominio provisional del `site` es `https://dpin-parrilla.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario, aviso de vacaciones), enlaces
  de Google Maps, carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la pizza.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categorías y aviso de vacaciones**: ficha de
  Google Maps
  (<https://www.google.com/maps/place/D'PIN+PARRILLA,+PIZZAS+Y+RACIONES/@40.236821,-6.047444,17z>).
- **Platos**: los que nombran las reseñas (croquetas de jamón, calamares, entrecot, churrasco, crema
  de calabaza, pizzas caseras y flan de café) y los que se ven en las fotos del perfil (tiras de
  pollo, patatas paja, hamburguesa y postre de chocolate). Sin precios: la ficha no publica ninguno.
- **Horario**: copiado tal cual de la ficha, incluidas las franjas poco habituales del viernes
  (23:30–24:00) y del sábado (desde las 0:00). La página avisa de que conviene confirmarlas por
  teléfono.
- **Cierre por vacaciones**: «cerrado por descanso la primera quincena de septiembre», texto que el
  propio local publica en su descripción de Google.

Ese horario está en `HOURS` y `AVISO` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`:
si cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs dpin-parrilla`.

De las 10 fotos descargadas se muestran 8 (la de las croquetas se usa además como portada); quedan
fuera una foto de dos cafés y una hamburguesa de estudio. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto del titular.
