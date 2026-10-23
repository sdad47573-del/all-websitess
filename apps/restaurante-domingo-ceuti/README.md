# Restaurante Domingo Ceutí · web (Astro)

Web de una sola página para **Restaurante Domingo Ceutí**, bar restaurante y arrocería en la
calle Isaac Peral, 2 (30563 Ceutí, Murcia).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Ceutí», «comer en Ceutí», «arrocería Ceutí»,
«paella Ceutí», «carne a la brasa Ceutí Murcia» o «restaurante con parque infantil Murcia», y
galería con las fotografías de la ficha de Google Maps del restaurante.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-domingo-ceuti dev      # http://localhost:4321
bun run --filter restaurante-domingo-ceuti check    # astro check
bun run --filter restaurante-domingo-ceuti typecheck
bun run --filter restaurante-domingo-ceuti build
bun run --filter restaurante-domingo-ceuti preview
```

El dominio provisional del `site` es `https://restaurante-domingo-ceuti.vercel.app`: **cámbialo aquí,
en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el canonical de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario, nota, accesibilidad), enlaces
  de Google Maps, carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición de la página con los componentes compartidos de
  `@astro-components` (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos
  alternativos y los esquemas JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, descargadas con
  `node scripts/fetch-maps-photos.mjs restaurante-domingo-ceuti`. El manifiesto `.maps-manifest.json`
  evita volver a bajarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto del comedor.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## Datos que no se publican

La ficha de Google no publica carta completa ni precios, así que la web no inventa importes: la
carta es un resumen de los platos que aparecen en las fotos de la ficha y en sus reseñas, y remite al
local para precios y disponibilidad. Se habla con el restaurante por teléfono (968 69 12 38).

Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF, la razón social y el
correo de contacto del titular.
