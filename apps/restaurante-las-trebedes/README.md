# Restaurante las Trebedes · web (Astro)

Web de una sola página para **Restaurante las Trebedes**, restaurante, cafetería y taberna en la
calle Pósito, 10 (10813 Pozuelo de Zarzón, Cáceres), con desayunos desde las 7:30 y cocina casera de
lunes a viernes.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Pozuelo de Zarzón», «comer Pozuelo de Zarzón»,
«Las Trebedes», «taberna Valle del Alagón» o «C. Pósito Pozuelo de Zarzón», y galería con las
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-las-trebedes dev      # http://localhost:4321
bun run --filter restaurante-las-trebedes typecheck
bun run --filter restaurante-las-trebedes build
bun run --filter restaurante-las-trebedes preview
```

El dominio provisional del `site` es `https://restaurante-las-trebedes.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta transcrita de las fotos de la carta y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la fachada.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categorías y accesibilidad**: ficha de
  Google Maps
  (<https://www.google.com/maps/place/Restaurante+las+Trebedes/@40.1487568,-6.4149769,17z>).
- **Carta**: transcrita de las dos fotografías de la carta que el propio restaurante tiene en su
  ficha de Google —raciones y bocadillos con precios, y el menú de fin de semana, festivos o
  especiales a 18 €— más lo que se ve en las fotos de los platos.
- **Horario**: lunes de 7:30 a 17:00, de martes a viernes de 7:30 a 17:45, sábados y domingos
  cerrado.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs restaurante-las-trebedes`.

De las 10 fotos descargadas se muestran 8 en la galería (la del comedor se usa además como portada);
quedan fuera las dos fotografías de la carta. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto del titular.
