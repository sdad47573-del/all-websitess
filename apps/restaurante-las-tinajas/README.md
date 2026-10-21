# Restaurante Las Tinajas · Astro

Sitio en español para **Restaurante Las Tinajas**, bar, cafetería y restaurante de cocina casera
en la carretera de Ciudad Rodrigo, 17 (10830 Torrejoncillo, Cáceres), en el Valle del Alagón.

## Desarrollo

```bash
bun run --filter restaurante-las-tinajas dev
bun run --filter restaurante-las-tinajas check
bun run --filter restaurante-las-tinajas typecheck
bun run --filter restaurante-las-tinajas build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://restaurante-las-tinajas.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical,
Open Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                                                                                                      | Fuente                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Nombre        | Restaurante Las Tinajas                                                                                                                                                    | ficha de Google Maps                                       |
| Dirección     | Ctra. Ciudad Rodrigo, 17, 10830 Torrejoncillo (Cáceres)                                                                                                                    | ficha de Google Maps                                       |
| Teléfono      | 638 35 24 85                                                                                                                                                               | ficha de Google Maps                                       |
| Coordenadas   | 39.8998865, -6.4702321                                                                                                                                                     | enlace de Google Maps                                      |
| Place ID      | `ChIJf6eQQD78PQ0RHTPCoPmgr_A`                                                                                                                                              | ficha de Google Maps                                       |
| Plus Code     | VGXH+XW                                                                                                                                                                    | ficha de Google Maps                                       |
| Valoración    | 4,6 con 193 reseñas                                                                                                                                                        | ficha de Google Maps                                       |
| Horario       | Lunes a domingo 7:00–17:00; martes cerrado                                                                                                                                 | ficha de Google Maps (octubre de 2026)                     |
| Accesibilidad | Acceso y aparcamiento adaptados                                                                                                                                            | ficha de Google Maps                                       |
| Carácter      | Bar, cafetería y restaurante; menú diario L-V, fines de semana a la carta, desayunos y raciones                                                                            | descripción del titular en Google y guía Toppings & Salads |
| Platos        | Churros y tostadas, croquetas, patatas alioli, huevos rotos con solomillo, pluma ibérica, bacalao gratinado, pollo Kentucky con miel y mostaza, tarta de queso y serradura | reseñas de Google y guía Toppings & Salads                 |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. El menú diario se sirve de lunes a viernes.

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de la ficha de Google
Maps del restaurante con `scripts/fetch-maps-photos.mjs`. `astro:assets` las sirve en WebP y en
varios tamaños, así que la web no publica los JPEG originales. El manifiesto
`src/assets/fotos/.maps-manifest.json` evita volver a descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar los textos `alt` y
confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Una sola página en español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD
  `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario, accesibilidad,
  valoración agregada, redes sociales y zona de servicio (Torrejoncillo y Valle del Alagón).
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. Los datos del titular están marcados
como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenar razón social, NIF/CIF y
correo antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
