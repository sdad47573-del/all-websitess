# Asador Villa de Cañaveral · web (Astro)

Web de una sola página para **Restaurante Asador Villa de Cañaveral**, asador de cocina casera en la
Avenida Dr. Boticario (10820 Cañaveral, Cáceres), en la comarca de Monfragüe.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Cañaveral», «asador Cañaveral», «chuletillas de
cordero Cáceres», «restaurante Monfragüe», «Asador Villa de Cañaveral» o «Avenida Dr. Boticario», y
galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-asador-villa-de-canaveral dev      # http://localhost:4321
bun run --filter restaurante-asador-villa-de-canaveral typecheck
bun run --filter restaurante-asador-villa-de-canaveral build
bun run --filter restaurante-asador-villa-de-canaveral preview
```

El dominio provisional del `site` es `https://restaurante-asador-villa-de-canaveral.vercel.app`:
**cámbialo aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el
`canonical` de `src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario, nota), enlaces de Google
  Maps, carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de las chuletillas.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas y accesibilidad**: ficha de Google Maps.
- **Carta**: resumen de los platos que aparecen en las fotos de la ficha y en las reseñas. No hay
  precios porque el restaurante no los publica.
- **Horario**: de lunes a sábado 12:30–15:30 y 20:00–21:30; domingo solo 12:30–15:30; miércoles
  cerrado.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Se usan 9 de las 10 fotos descargadas: dos del comedor y siete platos. La foto restante es un detalle
de aceiteras y vino que no aporta. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto del titular.
