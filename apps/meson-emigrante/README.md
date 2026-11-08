# Mesón Emigrante · Zarza de Granadilla · Astro

Sitio en español para **Mesón Emigrante**, mesón de cocina casera en la calle Pedro Ávila, 45
(10710 Zarza de Granadilla, Cáceres), en el Valle del Ambroz y cerca de Granadilla y del yacimiento
de Cáparra.

## Desarrollo

```bash
bun run --filter meson-emigrante dev
bun run --filter meson-emigrante typecheck
bun run --filter meson-emigrante build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://meson-emigrante.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical, Open
Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                                       | Fuente                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Nombre        | Mesón Emigrante                                                                                             | ficha de Google Maps                    |
| Dirección     | C. Pedro Ávila, 45, 10710 Zarza de Granadilla (Cáceres)                                                     | ficha de Google Maps                    |
| Teléfono      | 697 20 14 46                                                                                                | ficha de Google Maps                    |
| Facebook      | [Restaurants Emigrante](https://www.facebook.com/p/Restaurants-Emigrante-100070685650293/)                  | página del restaurante                  |
| Coordenadas   | 40.236896, -6.047368                                                                                        | enlace de Google Maps                   |
| Place ID      | `ChIJtYRPWx9CPg0Rd3-3J2IYSkc`                                                                               | ficha de Google Maps                    |
| Plus Code     | 6XP3+Q3                                                                                                     | ficha de Google Maps                    |
| Valoración    | 4,6 con 770 reseñas                                                                                         | ficha de Google Maps                    |
| Horario       | Viernes a domingo 13:00–23:30; lunes a jueves cerrado                                                      | ficha de Google Maps (octubre de 2026)  |
| Accesibilidad | Acceso y asientos adaptados                                                                                 | ficha de Google Maps                    |
| Carácter      | Cocina mediterránea y española, menús diarios y raciones; mesón familiar y rústico                          | descripción del titular y reseñas       |
| Platos        | Menú del día, patatas revolconas con pulpo, ensalada de burra, arroz caldoso, albóndigas, solomillo y entrecôte, tarta de queso casera | reseñas de Google y TripAdvisor        |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. El horario de Google difiere del que publican otros directorios (que listan un horario
de bar más amplio), así que conviene confirmarlo por teléfono antes de publicar o de ir entre
semana.

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de la ficha de Google
Maps del restaurante con `scripts/fetch-maps-photos.mjs`. `astro:assets` las sirve en WebP y en
varios tamaños, así que la web no publica los JPEG originales. El manifiesto
`src/assets/fotos/.maps-manifest.json` evita volver a descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar los textos `alt` y
confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Dos páginas en español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD
  `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario, accesibilidad, menú
  infantil, valoración agregada y zona de servicio (Zarza de Granadilla y Valle del Ambroz).
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. La razón social, el NIF/CIF y el correo
del titular están marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenarlos
antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
