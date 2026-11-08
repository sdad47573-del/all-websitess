# Terraza Cafe Bar Restaurante Mor Blanc · web (Astro)

Web de una sola página para **Terraza Cafe Bar Restaurante Mor Blanc**, terraza, café, bar y
restaurante en la calle de la Paz, 19 (10672 Valdeobispo, Cáceres), a pocos kilómetros de Plasencia.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Valdeobispo», «comer en Valdeobispo», «terraza
Valdeobispo», «piscina Valdeobispo», «Mor Blanc» o «restaurante cerca de Plasencia», y galería con
las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter mor-blanc dev      # http://localhost:4321
bun run --filter mor-blanc typecheck
bun run --filter mor-blanc build
bun run --filter mor-blanc preview
```

El dominio provisional del `site` es `https://mor-blanc.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps, carta
  resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la paella.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categorías y accesibilidad**: ficha de
  Google Maps
  (<https://www.google.com/maps/place/Terraza+Cafe+Bar+Restaurante+Mor+Blanc/@40.0819152,-6.2493525,16.5z>).
- **Platos**: los que nombra una reseña (paella, sepia, pinchos y raciones) y los que se ven en las
  fotos del perfil (asado con patatas panaderas, entrecot, chuleta con pimientos y ensalada mixta).
  Sin precios: la ficha no publica ninguno.
- **Piscina y terraza**: la piscina aparece en una reseña y en las fotos del perfil; el jardín y la
  terraza, en las fotos.
- **Horario**: todos los días de 10:00 a 24:00.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs mor-blanc`.

De las 10 fotos descargadas se muestran 8 (la de la paella se usa además como portada); quedan fuera
una foto repetida del asado y un primer plano de ensalada. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto del titular.
