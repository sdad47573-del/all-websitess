# Venta Isabel · Navaconcejo · Astro

Sitio en español para **Venta Isabel**, bar restaurante familiar de carnes en la avenida José María
Pizarro, 28 (10613 Navaconcejo, Cáceres), a la entrada del Valle del Jerte y junto al río Jerte.

## Desarrollo

```bash
bun run --filter venta-isabel dev
bun run --filter venta-isabel typecheck
bun run --filter venta-isabel build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://venta-isabel.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical, Open Graph y
en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                                            | Fuente                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Nombre        | Venta Isabel                                                                                                     | ficha de Google Maps                          |
| Dirección     | Av. José María Pizarro, 28, 10613 Navaconcejo (Cáceres)                                                          | ficha de Google Maps                          |
| Teléfono      | 643 33 50 63                                                                                                     | ficha de Google Maps                          |
| Instagram     | [@bar_venta_isabel](https://www.instagram.com/bar_venta_isabel/)                                                 | perfil del restaurante                        |
| Coordenadas   | 40.1741168, -5.8396069                                                                                           | enlace de Google Maps                         |
| Place ID      | `ChIJL4sVcsNJPg0RSlGEdw4zcBY`                                                                                    | ficha de Google Maps                          |
| Plus Code     | 55F6+J5                                                                                                          | ficha de Google Maps                          |
| Valoración    | 4,7 con 1.904 reseñas                                                                                            | ficha de Google Maps                          |
| Horario       | Jueves a martes 13:00–16:00 y 20:00–22:30; miércoles cerrado                                                     | ficha de Google Maps (octubre de 2026)        |
| Accesibilidad | Acceso, aparcamiento, aseo y asientos adaptados                                                                  | ficha de Google Maps                          |
| Carácter      | Bar restaurante familiar, especialistas en ternera y cerdo ibérico, hamburguesas artesanales y comida para llevar | bio de Instagram y web propia                 |
| Platos        | Alcachofas con foie, revuelto de salmón y nueces, chuletón, solomillo y pluma ibérica, hamburguesas, tarta de queso con cerezas, perrunillas con chocolate | reseñas y cartas de TripAdvisor, Gastroranking y Toppings & Salads |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. La terraza admite perros y hay una pequeña tienda de productos extremeños.

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
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario, accesibilidad, terraza,
  admisión de perros, valoración agregada y zona de servicio (Navaconcejo y Valle del Jerte).
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. La razón social, el NIF/CIF y el correo
del titular están marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenarlos
antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
