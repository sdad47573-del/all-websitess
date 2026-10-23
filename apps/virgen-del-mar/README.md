# Virgen del Mar · web (Astro)

Web de una sola página para **Virgen del Mar**, restaurante de marisco y pescado en la Plaza de San
Nicolás, 3, bajo (30005 Murcia), en pleno centro histórico.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante marisco Murcia», «gamba roja Murcia», «comer en
el centro de Murcia», «Virgen del Mar Murcia» o «Plaza de San Nicolás restaurante», y galería con
las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter virgen-del-mar dev      # http://localhost:4321
bun run --filter virgen-del-mar typecheck
bun run --filter virgen-del-mar build
bun run --filter virgen-del-mar preview
```

El dominio provisional del `site` es `https://virgen-del-mar.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el canonical de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario, nota), enlaces de Google
  Maps, carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, descargadas con
  `node scripts/fetch-maps-photos.mjs virgen-del-mar`.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la paella.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nota, reseñas, teléfono y dirección**: ficha de Google Maps.
- **Horario**: la ficha pública de Google no lo devuelve, así que se toma el que publica el propio
  restaurante en <https://restaurantevirgendelmar.com/> (comidas y cenas de martes a sábado,
  domingos a mediodía, lunes cerrado).
- **Carta**: resumen de los platos que aparecen en las fotos de la ficha y en las reseñas. No hay
  precios porque el restaurante no los publica.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF, la razón social y el
correo de contacto del titular.
