# Restaurante "El Rocío" · web (Astro)

Web de una sola página para **Restaurante "El Rocío"**, restaurante de cocina española en la
Avenida Narciso Yepes, 22 (30620 Fortuna, Murcia).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Fortuna», «comer en Fortuna», «arroz con conejo
y caracoles Murcia», «menú del día Fortuna» o «restaurante Avenida Narciso Yepes», y galería con las
fotografías de la ficha de Google Maps del restaurante.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-el-rocio dev      # http://localhost:4321
bun run --filter restaurante-el-rocio check    # astro check
bun run --filter restaurante-el-rocio typecheck
bun run --filter restaurante-el-rocio build
bun run --filter restaurante-el-rocio preview
```

El dominio provisional del `site` es `https://restaurante-el-rocio.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el canonical de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario, nota), enlaces de Google
  Maps, carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición de la página con los componentes compartidos de
  `@astro-components` (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos
  alternativos y los esquemas JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, descargadas con
  `node scripts/fetch-maps-photos.mjs restaurante-el-rocio`. El manifiesto `.maps-manifest.json`
  evita volver a bajarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la mesa.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## Datos que no se publican

La ficha de Google no publica carta completa ni precios, así que la web no inventa importes: la
carta es un resumen de los platos que aparecen en las fotos de la ficha y remite al local para
precios y disponibilidad. La reserva se hace por teléfono (868 68 03 03).

Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF, la razón social y el
correo de contacto del titular.
