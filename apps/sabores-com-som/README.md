# Sabores com Som · web (Astro)

Web de una sola página para **Sabores com Som**, restaurante de cocina portuguesa y churrasco en
R. Cel. Guilherme Portugal, 19 (2910-422 Setúbal, Portugal), con espectáculos ao vivo los fines de
semana.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Setúbal», «comer en Setúbal», «cocina portuguesa
Setúbal», «churrasco Setúbal», «música ao vivo Setúbal» o «Sabores com Som», y galería con las
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter sabores-com-som dev      # http://localhost:4321
bun run --filter sabores-com-som typecheck
bun run --filter sabores-com-som build
bun run --filter sabores-com-som preview
```

El dominio provisional del `site` es `https://sabores-com-som.vercel.app`: **cámbialo aquí, en
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
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto del fado ao vivo.

El crédito «Creado por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categoría, descripción del local y
  accesibilidad**: ficha de Google Maps
  (<https://www.google.com/maps/place/Sabores+com+Som/@38.5220716,-8.8806005,17z>).
- **Platos**: la pizarra del «menú completo» que aparece en la foto de la fachada (sardinhas,
  carapaus, dourada, robalo, peixe espada preto, grelhada mista, febras, entrecosto, entremeadas,
  picanha, bacalhau à casa) y lo que se ve en el resto de fotos del perfil (polvo, salada de alface
  com laranja, pão e azeitonas, fruta da estação). Sin carta publicada en Google.
- **Horario**: de martes a sábado de 12:00 a 15:00 y cenas hasta las 22:30 (martes desde las 18:30,
  resto desde las 18:00); domingo de 12:00 a 19:00; lunes cerrado.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs sabores-com-som`.

De las 10 fotos descargadas se muestran 9 (ocho en la galería y la del fado además como portada);
queda fuera la otra grabación del mismo espectáculo. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIPC, la razón social y el correo de contacto del titular.
