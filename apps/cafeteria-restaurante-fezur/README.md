# Cafetería Restaurante Fezur · web (Astro)

Web de una sola página para **Cafetería Restaurante Fezur**, cafetería restaurante en la Avenida de
la Constitución, 12 (10400 Jaraíz de la Vera, Cáceres), con cocina casera de 10:00 a 18:00.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Jaraíz de la Vera», «comida Jaraíz», «Fezur»,
«Av. de la Constitución Jaraíz» o «La Vera Cáceres», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter cafeteria-restaurante-fezur dev      # http://localhost:4321
bun run --filter cafeteria-restaurante-fezur typecheck
bun run --filter cafeteria-restaurante-fezur build
bun run --filter cafeteria-restaurante-fezur preview
```

El dominio provisional del `site` es `https://cafeteria-restaurante-fezur.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
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
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la carne a la brasa.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categorías y accesibilidad**: ficha de
  Google Maps
  (<https://www.google.com/maps/place/Cafeter%C3%ADa+Restaurante+Fezur/@40.0620708,-5.7518574,17z>).
- **Platos**: los que nombran las reseñas (codillo asado, paella, berenjenas, tartaleta con huevo,
  verdura, morcilla y chorizo) y los que se ven en las fotos del perfil (migas con huevo, garbanzos
  con tabla de chacina, carnes a la brasa, guisos con patatas y postres en tarro). Sin precios: la
  ficha no publica ninguno.
- **Horario**: martes a domingo de 10:00 a 18:00 y lunes de 10:00 a 17:30.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs cafeteria-restaurante-fezur`.

De las 10 fotos descargadas se muestran 8 (se dejan fuera una casi idéntica a otra y una en la que
aparecen manos en primer plano). Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto del titular.
