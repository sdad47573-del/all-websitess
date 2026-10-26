# Flor do Mundo · web (Astro)

Web de una sola página para **Flor do Mundo**, pastelería y restaurante en R. da Misericórdia, 87
(1200-284 Lisboa), en el Chiado. Cocina portuguesa, vitrina de pasteles y café de 7:00 a 24:00, de
lunes a sábado.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `CafeOrCoffeeShop` + `FAQPage`,
contenido en español orientado a búsquedas del tipo «restaurante Chiado», «comer en Chiado»,
«pastelería Chiado», «brunch Lisboa», «bacalhau à lagareiro Lisboa», «R. da Misericórdia 87» o
«Flor do Mundo», y galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter flor-do-mundo dev      # http://localhost:4321
bun run --filter flor-do-mundo typecheck
bun run --filter flor-do-mundo build
bun run --filter flor-do-mundo preview
```

El dominio provisional del `site` es `https://flor-do-mundo.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`
  (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
  `LocalVisit`, `LocalFaq` y `LocalFooter`), la galería con sus textos alternativos y los esquemas
  JSON-LD.
- `src/assets/fotos/`: las 10 fotos de la ficha de Google Maps, con su `.maps-manifest.json` para no
  volver a descargarlas.
- `public/og.jpg`: imagen para Open Graph (1200×630), recortada de la foto de la fachada.

El crédito «Creado por Sur Digital» del pie lo pinta el componente compartido `LocalFooter`, que
enlaza a <https://sur-digital.vercel.app/>.

## De dónde sale cada dato

- **Nombre, dirección, teléfono, horario, nota, reseñas, categorías y accesibilidad**: ficha de Google
  Maps (<https://www.google.com/maps/place/Flor+do+Mundo/@38.7120727,-9.1430905,17z>).
- **Platos**: los que se ven en las fotos del perfil (frango piri-piri, peixe grelhado, bacalhau à
  lagareiro, polvo, arroz de marisco, salada de polvo, vitrina de pastéis de nata y bollería) y los
  carteles de la fachada (café Delta, Ginja Serra da Estrela). Sin carta publicada en Google.
- **Precio**: una reseña deja la referencia «fomos em 5 pessoas e a conta deu 56 €, com comida, bebida
  e uma sobremesa».
- **Horario**: de lunes a sábado de 7:00 a 24:00; domingo cerrado. El toldo de la fachada concreta
  «cozinha aberta 10.00H / 00.00H».

Ese horario está en `HOURS` (`src/data/site.ts`) y en el JSON-LD de `src/pages/index.astro`: si
cambia, hay que tocar los dos sitios.

Para refrescar las fotos de Google: `node scripts/fetch-maps-photos.mjs flor-do-mundo`.

De las 10 fotos descargadas se muestran 9 (ocho en la galería y la de la ventana además como
portada); queda fuera un primer plano de la salada de pulpo. Antes de publicar hay que completar en
`src/pages/aviso-legal.astro` el NIPC, la razón social y el correo de contacto del titular.
