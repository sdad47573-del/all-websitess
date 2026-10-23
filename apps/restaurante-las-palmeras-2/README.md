# Restaurante las Palmeras 2 · web (Astro)

Web de una sola página para **Restaurante las Palmeras 2**, bar-restaurante de cocina casera en la
Ciudad del Transporte (30500 Murcia).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «desayunos Murcia», «menú del día Murcia», «comer barato
Ciudad del Transporte», «bar de tapas Murcia» o «Restaurante las Palmeras 2», y galería con las
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-las-palmeras-2 dev      # http://localhost:4321
bun run --filter restaurante-las-palmeras-2 typecheck
bun run --filter restaurante-las-palmeras-2 build
bun run --filter restaurante-las-palmeras-2 preview
```

El dominio provisional del `site` es `https://restaurante-las-palmeras-2.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el canonical de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario, nota), enlaces de Google
  Maps, carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, descargadas con
  `node scripts/fetch-maps-photos.mjs restaurante-las-palmeras-2`.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la terraza.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## Datos que no se publican

La ficha de Google no publica carta ni precios, así que la web no inventa importes: la carta resume
los platos que aparecen en las fotos de la ficha y remite al local para precios y disponibilidad.
Tampoco publica número de calle: por eso el mapa y «Cómo llegar» son los enlaces principales.

Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF, la razón social y el
correo de contacto del titular.
