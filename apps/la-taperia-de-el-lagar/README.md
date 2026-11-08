# Restaurante La Taperia de El Lagar · web (Astro)

Web de una sola página para **Restaurante La Taperia de El Lagar**, tapería en la Calle del
Humilladero, 30 (10860 Gata, Cáceres), abierta desde las 8:00 con postres caseros.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «tapería Gata», «restaurante Gata Cáceres», «El Lagar Gata»,
«tapas Gata» o «Calle del Humilladero», y galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter la-taperia-de-el-lagar dev      # http://localhost:4321
bun run --filter la-taperia-de-el-lagar typecheck
bun run --filter la-taperia-de-el-lagar build
bun run --filter la-taperia-de-el-lagar preview
```

El dominio provisional del `site` es `https://la-taperia-de-el-lagar.vercel.app`: **cámbialo aquí,
en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
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
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la carne a la plancha.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categoría y accesibilidad**: ficha de
  Google Maps
  (<https://www.google.com/maps/place/Restaurante+La+Taperia+de+El+Lagar/@40.237265,-6.5949934,17z>).
  El nombre se escribe como en la ficha («La Taperia», sin tilde).
- **Platos**: los que nombran las reseñas (tarta de galleta y postres caseros, hamburguesas y
  bocadillos) y los que se ven en las fotos del perfil (carne a la plancha, ensalada, atún,
  arroces y postres). Sin precios: la ficha no publica ninguno.
- **Horario**: lunes, viernes, sábado y domingo de 8:00 a 24:00; martes, miércoles y jueves de
  8:00 a 17:00.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs la-taperia-de-el-lagar`.

De las 10 fotos descargadas se muestran 8 (se dejan fuera una casi idéntica a la ensalada y una con
marca de fecha y botella en primer plano). Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto del titular.
