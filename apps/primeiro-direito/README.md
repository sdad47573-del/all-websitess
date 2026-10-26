# 1.º Direito · web (Astro)

Web de una sola página para **1.º Direito**, restaurante de cocina tradicional portuguesa en el
Parque Florestal de Monsanto, junto al campo de rugby del Grupo Desportivo de Direito, Alto da Boa
Vista (1500 Lisboa). Solo comidas, de martes a domingo.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Monsanto», «comer en Monsanto», «restaurante
Parque Florestal de Monsanto», «cocina portuguesa Lisboa», «restaurante campo de rugby Direito» o
«1º Direito», y galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter primeiro-direito dev      # http://localhost:4321
bun run --filter primeiro-direito typecheck
bun run --filter primeiro-direito build
bun run --filter primeiro-direito preview
```

El dominio provisional del `site` es `https://primeiro-direito.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  cocina resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la terraza.

El crédito «Creado por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categoría y accesibilidad**: ficha de Google
  Maps (<https://www.google.com/maps/place/1.%C2%BA+Direito/@38.7298681,-9.2048323,17z>).
- **Platos**: los que se ven en las fotos del perfil (sopa verde de la casa, mesa de queijos e
  enchidos, buffet de doces con leite-creme, merengues, bolo de chocolate, tarta de frutos rojos y
  fruta). Sin carta publicada en Google.
- **Almuerzos de grupo**: una reseña describe «um almoço inserido num evento com 50 pessoas, servido
  em forma de buffet».
- **Horario**: de martes a domingo de 12:45 a 15:00; lunes cerrado y sin cenas. La ficha de Google
  ofrece «Reservar mesa».

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs primeiro-direito`.

De las 10 fotos descargadas se muestran 9 (ocho en la galería y la de la terraza además como
portada); queda fuera una segunda mesa larga del comedor. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIPC, la razón social y el correo de contacto del titular.
