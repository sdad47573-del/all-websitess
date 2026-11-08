# Benfis Restaurante · web (Astro)

Web de una sola página para **Benfis Restaurante**, bar restaurante de cocina casera en la calle
Nº 10, 3 (03316 Benferri, Alicante).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Benferri», «comer en Benferri», «bar restaurante
Vega Baja», «almorzar Benferri», «restaurante con terraza Alicante» o «cocina casera Benferri», y
galería con las fotografías de la ficha de Google Maps del restaurante.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter benfis-restaurante dev       # http://localhost:4321
bun run --filter benfis-restaurante typecheck
bun run --filter benfis-restaurante build
bun run --filter benfis-restaurante preview
```

El dominio provisional del `site` es `https://benfis-restaurante.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el canonical de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario, nota, accesibilidad), enlaces
  de Google Maps, carta y preguntas frecuentes.
- `src/pages/index.astro`: composición de la página con los componentes compartidos de
  `@astro-components` (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos
  alternativos y los esquemas JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, descargadas con
  `node scripts/fetch-maps-photos.mjs benfis-restaurante`. El manifiesto `.maps-manifest.json` evita
  volver a bajarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la terraza.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale la carta

La carta de esta web **no está inventada**: se ha transcrito de la fotografía de la carta impresa que
el propio restaurante tiene subida a su ficha de Google Maps
(`src/assets/fotos/benfis-restaurante-vertical-07.jpg`), con los nombres de los platos tal y como
están escritos allí: entrantes, carnes y pescados.

Esa carta no lleva precios impresos, así que la web no publica ningún importe. Las reseñas de Google
coinciden en que el precio es razonable. Para precios y disponibilidad, se habla con el restaurante
por teléfono (966 19 44 64).

Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF, la razón social y el
correo de contacto del titular.
