# Restaurante Batán en Casas del Monte · Astro

Sitio en español para **Restaurante Batán en Casas del Monte**, restaurante y bar-cafetería de
cocina casera en la Avenida Ambroz, 10 (10730 Casas del Monte, Cáceres), junto a la garganta y la
piscina natural, en el Valle del Ambroz.

## Desarrollo

```bash
bun run --filter restaurante-batan-casas-del-monte dev
bun run --filter restaurante-batan-casas-del-monte check
bun run --filter restaurante-batan-casas-del-monte typecheck
bun run --filter restaurante-batan-casas-del-monte build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://restaurante-batan-casas-del-monte.vercel.app`: cámbialo aquí, en `public/robots.txt`, en
canonical, Open Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                                                                      | Fuente                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Nombre        | Restaurante Batán en Casas del Monte                                                                                                       | ficha de Google Maps                             |
| Dirección     | Av. Ambroz, 10, 10730 Casas del Monte (Cáceres)                                                                                            | ficha de Google Maps                             |
| Teléfono      | 722 76 15 80                                                                                                                               | ficha de Google Maps                             |
| Coordenadas   | 40.2030471, -5.9610776                                                                                                                     | enlace de Google Maps                            |
| Place ID      | `ChIJk_a8audGPg0RKvpfw7eBlO0`                                                                                                              | ficha de Google Maps                             |
| Plus Code     | 623Q+6H                                                                                                                                    | ficha de Google Maps                             |
| Valoración    | 4,7 con 287 reseñas                                                                                                                        | ficha de Google Maps                             |
| Horario       | Viernes, sábado y domingo, 12:00–24:00; de lunes a jueves cerrado                                                                          | ficha de Google Maps (octubre de 2026)           |
| Accesibilidad | Acceso, aseo y asientos adaptados                                                                                                          | ficha de Google Maps                             |
| Carácter      | Restaurante y bar-cafetería; comedor y bar de invierno, terraza con chill-out en verano                                                    | ficha de Google y guía del Valle del Ambroz      |
| Platos        | Migas, paella y arroces, secreto, pluma y abanico ibérico, cachopo, costillas a la barbacoa, hamburguesa, Torta del Casar, volcán de queso | reseñas de Google y DondeComí, cartas publicadas |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. La garganta y la piscina natural son espacios públicos del municipio, no instalaciones
privadas del restaurante.

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
  valoración agregada y zona de servicio (Casas del Monte y Valle del Ambroz).
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. Los datos del titular están marcados
como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenar razón social, NIF/CIF y
correo antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
