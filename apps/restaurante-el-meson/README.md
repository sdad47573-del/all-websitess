# Restaurante El Mesón · web (Astro)

Web de una sola página para **Restaurante El Mesón**, parrilla y bar en la calle Camelias, 1 (10840
Moraleja, Cáceres), en el noroeste de la provincia, comarca de Sierra de Gata.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Moraleja», «comer en Moraleja», «parrilla
Moraleja», «El Mesón Moraleja» o «restaurante Sierra de Gata», y galería con las fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-el-meson dev      # http://localhost:4321
bun run --filter restaurante-el-meson typecheck
bun run --filter restaurante-el-meson build
bun run --filter restaurante-el-meson preview
```

El dominio provisional del `site` es `https://restaurante-el-meson.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, nota), enlaces de Google Maps, cocina
  resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto del entrecot.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, nota, reseñas, categorías y accesibilidad**: ficha de Google Maps
  (<https://www.google.com/maps/place/Restaurante+El+Mes%C3%B3n/@40.0666851,-6.6584064,17z>).
- **Platos**: los que nombra una reseña (ensalada de rulo, croquetas, pulpo, calamares y lagarto) y
  los que se ven en las fotos del perfil (entrecot con patatas panaderas, lagarto a la brasa con
  salsa, patatas con queso y bacon y postres). Sin precios: la ficha no publica ninguno.
- **Horario**: la ficha de Google no lo tiene publicado («Añadir horario»), así que la web remite al
  teléfono 927 56 34 74 en lugar de inventar horas.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs restaurante-el-meson`.

De las 10 fotos descargadas se muestran 8 (la de las patatas con queso se usa además como portada);
quedan fuera una foto de comedor y un primer plano de carne muy parecidos a otros. Antes de publicar
hay que completar en `src/pages/aviso-legal.astro` el NIF, la razón social y el correo de contacto
del titular.
