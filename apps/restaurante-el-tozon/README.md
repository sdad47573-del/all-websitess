# Restaurante El Tozón · web (Astro)

Web de una sola página para **Restaurante El Tozón**, bar restaurante con terraza en la Avenida
Constitución, 22B (10410 Arroyomolinos de la Vera, Cáceres), en La Vera.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Arroyomolinos de la Vera», «restaurante La Vera»,
«terraza La Vera», «El Tozón», «ensalada de naranja y jamón» o «Avenida Constitución», y galería con
las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-el-tozon dev      # http://localhost:4321
bun run --filter restaurante-el-tozon typecheck
bun run --filter restaurante-el-tozon build
bun run --filter restaurante-el-tozon preview
```

El dominio provisional del `site` es `https://restaurante-el-tozon.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
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
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la paella.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas y accesibilidad**: ficha de Google Maps.
- **Carta**: resumen de los platos que aparecen en las fotos de la ficha y en las reseñas. No hay
  precios porque el restaurante no los publica.
- **Horario**: viernes 10:00–17:00 y 18:00–23:00; sábado 10:00–23:30; domingo 10:00–21:00; lunes
  10:00–15:00 y 18:00–21:00; martes, miércoles y jueves cerrado.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Se usan 8 de las 10 fotos descargadas: la terraza y siete platos. Se descartan una imagen negra y un
postre sin identificar. Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF,
la razón social y el correo de contacto del titular.
