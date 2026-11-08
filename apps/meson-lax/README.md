# Mesón Lax · web (Astro)

Web de una sola página para **Mesón Lax**, mesón de brasas y banquetes en el Carril Claras, 89
(30160 Monteagudo, Murcia), la pedanía del cerro del Cristo.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «mesón Monteagudo», «chuletón Murcia», «menú del día
Monteagudo», «banquetes Murcia», «Mesón Lax» o «Carril Claras», y galería con las fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter meson-lax dev      # http://localhost:4321
bun run --filter meson-lax typecheck
bun run --filter meson-lax build
bun run --filter meson-lax preview
```

El dominio provisional del `site` es `https://meson-lax.vercel.app`: **cámbialo aquí, en
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
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto del chuletón.

El crédito «Web creada por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas y accesibilidad**: ficha de Google Maps.
- **Carta**: resumen de los platos que aparecen en las fotos de la ficha y en las reseñas. No hay
  precios porque el mesón no los publica.
- **Horario**: de martes a viernes 9:00–24:00, sábado 9:00–4:00, domingo 9:00–2:30 y lunes cerrado;
  los cierres de sábado y domingo caen de madrugada, ya en el día siguiente.

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

De las 10 fotos descargadas se muestran 8 (se dejan fuera las dos en las que salen personas
identificables). Antes de publicar hay que completar en `src/pages/aviso-legal.astro` el NIF, la
razón social y el correo de contacto del titular.
