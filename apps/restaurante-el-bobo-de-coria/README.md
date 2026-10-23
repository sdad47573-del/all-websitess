# Restaurante El Bobo de Coria · web (Astro)

Web de una sola página para **Restaurante El Bobo de Coria**, mesón de cocina casera en la calle de
las Monjas, 6 (10800 Coria, Cáceres), en el casco histórico de la ciudad.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Coria», «restaurante Coria Cáceres», «setas Coria»,
«El Bobo de Coria», «mesón casco histórico Coria» o «calle de las Monjas», y galería con las
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-el-bobo-de-coria dev      # http://localhost:4321
bun run --filter restaurante-el-bobo-de-coria typecheck
bun run --filter restaurante-el-bobo-de-coria build
bun run --filter restaurante-el-bobo-de-coria preview
```

El dominio provisional del `site` es `https://restaurante-el-bobo-de-coria.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario, nota), enlaces de Google
  Maps, carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto del jardín.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas y accesibilidad**: ficha de Google Maps.
- **Carta**: resumen de los platos que aparecen en las fotos de la ficha y en las reseñas. No hay
  precios porque el restaurante no los publica.
- **Horario**: dos servicios de martes a domingo, comidas 13:30–16:00 y cenas 21:00–22:30; lunes
  cerrado.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Se usan 9 de las 10 fotos descargadas: el comedor, la fachada, el cartel, el jardín y cinco platos.
Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF, la razón social y el
correo de contacto del titular.
