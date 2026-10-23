# La Cabaña del Jerte · web (Astro)

Web de una sola página para **Restaurante valle del jerte La Cabaña del Jerte**, cocina extremeña en
la Avenida Ramón y Cajal, 17 (10612 Jerte, Cáceres), en el Valle del Jerte.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Jerte», «restaurante Valle del Jerte», «migas
Jerte», «torta del Casar Jerte», «La Cabaña del Jerte» o «Avenida Ramón y Cajal», y galería con las
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-la-cabana-del-jerte dev      # http://localhost:4321
bun run --filter restaurante-la-cabana-del-jerte typecheck
bun run --filter restaurante-la-cabana-del-jerte build
bun run --filter restaurante-la-cabana-del-jerte preview
```

El dominio provisional del `site` es `https://restaurante-la-cabana-del-jerte.vercel.app`: **cámbialo
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
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la terraza.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas y accesibilidad**: ficha de Google Maps.
- **Carta**: resumen de los platos que aparecen en las fotos de la ficha y en las reseñas. No hay
  precios porque el restaurante no los publica.
- **Horario**: dos servicios de jueves a martes, comidas 13:30–15:30 y cenas 20:00–22:00; miércoles
  cerrado.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Se usan 8 de las 10 fotos descargadas: la terraza, seis platos y una vista de la plaza de Jerte. Se descarta la
foto de la torta con rótulo de TikTok incrustado. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto del titular.
