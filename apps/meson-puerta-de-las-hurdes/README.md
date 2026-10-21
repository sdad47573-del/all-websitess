# Mesón Puerta de las Hurdes · Pozuelo de Zarzón · Astro

Sitio en español para **Mesón Puerta de las Hurdes**, restaurante familiar y bar en la calle Pósito,
17 (10813 Pozuelo de Zarzón, Cáceres), en el Valle del Alagón y a la puerta de Las Hurdes y Sierra de
Gata.

## Desarrollo

```bash
bun run --filter meson-puerta-de-las-hurdes dev
bun run --filter meson-puerta-de-las-hurdes typecheck
bun run --filter meson-puerta-de-las-hurdes build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://meson-puerta-de-las-hurdes.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical,
Open Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                                          | Fuente                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Nombre        | Mesón Puerta de las Hurdes                                                                                     | ficha de Google Maps                   |
| Dirección     | C. Pósito, 17, 10813 Pozuelo de Zarzón (Cáceres)                                                               | ficha de Google Maps                   |
| Coordenadas   | 40.1488905, -6.41489                                                                                           | enlace de Google Maps                  |
| Place ID      | `ChIJKc_9ZNrfPQ0Rqi-BhlKHw-w`                                                                                  | ficha de Google Maps                   |
| Plus Code     | 4HXP+H2                                                                                                        | ficha de Google Maps                   |
| Valoración    | 4,5 con 77 reseñas                                                                                             | ficha de Google Maps                   |
| Horario       | No publicado en Google                                                                                         | ficha de Google Maps (octubre de 2026) |
| Teléfono      | No publicado en Google                                                                                         | ficha de Google Maps                   |
| Accesibilidad | Asientos adaptados                                                                                             | ficha de Google Maps                   |
| Carácter      | Restaurante familiar y bar; cocina casera, terraza, zona de juegos, karaoke y comida para llevar               | reseñas de Google recogidas en Toppings & Salads |
| Platos        | Cachopo, magro con verduras, orejas a la brasa, platos combinados, hamburguesas, bocadillos, tostas, pizzas, raciones y desayunos | reseñas públicas                       |

**La ficha de Google no publica teléfono ni horario.** La web no los inventa: los CTAs llevan a
Google Maps y la sección de contacto explica que hay que comprobar la ficha o acercarse al local.
Cuando el titular los facilite, conviene añadirlos a `src/data/site.ts`, a la sección de contacto y
al schema `Restaurant`.

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
- El schema `Restaurant` declara dirección, coordenadas, valoración agregada, accesibilidad, terraza,
  zona de juegos, karaoke, comida para llevar y zona de servicio (Pozuelo de Zarzón y Valle del
  Alagón). No declara teléfono ni horario porque no están publicados.
- La sección de opiniones resume lo que más valoran los clientes (trato, terraza, karaoke, parada de
  carretera) sin inventar citas textuales.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. La razón social, el NIF/CIF y el correo
del titular están marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenarlos
antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
