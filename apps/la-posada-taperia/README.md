# La Posada Tapería · web (Astro)

Web de una sola página para **La Posada Tapería**, tapería en la Plaza del Mentidero, 1
(10800 Coria, Cáceres), con mesas en la plaza y cocina de 12:00 a 2:00.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «tapería Coria», «tapas Plaza del Mentidero», «tapas
Coria centro», «La Posada Coria» o «restaurante Coria», y galería con las fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter la-posada-taperia dev      # http://localhost:4321
bun run --filter la-posada-taperia typecheck
bun run --filter la-posada-taperia build
bun run --filter la-posada-taperia preview
```

El dominio provisional del `site` es `https://la-posada-taperia.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta con precios y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto del solomillo con romesco.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categorías y accesibilidad**: ficha de
  Google Maps (<https://www.google.com/maps/place/La+Posada+Taper%C3%ADa/@39.9847827,-6.5366401,17z>).
- **Carta y precios**: de la carta fotografiada que cuelga de la propia ficha (tostas: Rociera 13 €,
  Extremeña 9 €, Griega 12 € y Mentidero 13 €; solomillo de toro 12 €/25 €; torrezno de Soria 13 €;
  ensaladilla de pulpo 9 €/16 €; cesto de pan 2 €).
- **Horario**: de martes a domingo de 12:00 a 2:00 y lunes cerrado; el cierre de las 2:00 es de
  madrugada, ya en el día siguiente.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs la-posada-taperia`.

De las 10 fotos descargadas se muestran 8 (se dejan fuera las dos en las que salen personas
identificables). Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF, la
razón social y el correo de contacto del titular.
