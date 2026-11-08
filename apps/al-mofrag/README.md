# «Al Mofrag» Terraza & Restaurante · web (Astro)

Web de una sola página para **«Al Mofrag» Terraza & Restaurante**, bar restaurante y chiringuito al
aire libre en Villarreal de San Carlos, 40, B (10695 Villarreal de San Carlos, Serradilla, Cáceres),
el pueblo del Parque Nacional de Monfragüe.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Villarreal de San Carlos», «comer en Monfragüe»,
«terraza Monfragüe», «Al Mofrag» o «bar Parque Nacional de Monfragüe», y galería con las fotografías
de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter al-mofrag dev      # http://localhost:4321
bun run --filter al-mofrag typecheck
bun run --filter al-mofrag build
bun run --filter al-mofrag preview
```

El dominio provisional del `site` es `https://al-mofrag.vercel.app`: **cámbialo aquí, en
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
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la hamburguesa.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categoría, descripción del local y
  accesibilidad**: ficha de Google Maps
  (<https://www.google.com/maps/place/%22Al+Mofrag%22+Terraza+%26+Restaurante/@39.8474539,-6.0306765,17z>).
- **Platos**: los que nombran las reseñas (hamburguesa, patatas, ensalada, raciones, cervezas) y los
  que se ven en las fotos del perfil (calamar a la plancha, escalopines empanados, entrecot a la
  brasa con setas, carne con verduras asadas y postres). Sin precios: la ficha no publica ninguno.
- **Horario**: de 9:30 a 16:30 de miércoles a lunes, domingo hasta las 18:00, cenas de 20:00 a 23:00
  los viernes y sábados, y martes cerrado.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs al-mofrag`.

De las 10 fotos descargadas se muestran 8 (la de la hamburguesa se usa además como portada); quedan
fuera dos fotos de escalopines casi idénticas entre sí. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto del titular.
