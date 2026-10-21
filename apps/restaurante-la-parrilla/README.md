# Restaurante La Parrilla · Astro

Sitio en español para **Restaurante La Parrilla**, restaurante de brasa en la Avenida de Salamanca,
61 (10600 Plasencia, Cáceres), con terraza y desayunos.

## Desarrollo

```bash
bun run --filter restaurante-la-parrilla dev
bun run --filter restaurante-la-parrilla check
bun run --filter restaurante-la-parrilla typecheck
bun run --filter restaurante-la-parrilla build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://restaurante-la-parrilla.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical,
Open Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                                                                                                               | Fuente                          |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Nombre        | Restaurante La Parrilla                                                                                                                                                             | ficha de Google Maps            |
| Dirección     | Av. Salamanca, 61, 10600 Plasencia (Cáceres)                                                                                                                                        | ficha de Google Maps            |
| Teléfono      | 685 52 29 88                                                                                                                                                                        | ficha de Google Maps            |
| Coordenadas   | 40.0428352, -6.0924964                                                                                                                                                              | enlace de Google Maps           |
| Place ID      | `ChIJ0SLhbEEWPg0R1I0Lo7ozxgA`                                                                                                                                                       | ficha de Google Maps            |
| Plus Code     | 2WV5+42                                                                                                                                                                             | ficha de Google Maps            |
| Valoración    | 4,5 con 641 reseñas                                                                                                                                                                 | ficha de Google Maps            |
| Horario       | Lunes 13:00–17:00; martes cerrado; miércoles 9:00–17:00; jueves 13:30–16:30 y 20:30–23:30; viernes 13:00–16:30 y 20:30–23:30; sábado 13:30–16:30 y 20:30–23:30; domingo 13:00–17:00 | ficha de Google Maps (oct-2026) |
| Terraza       | Sí, una de las mejor valoradas de Plasencia                                                                                                                                         | GastroRanking y Turismo Cáceres |
| Accesibilidad | Aseo y asientos adaptados                                                                                                                                                           | ficha de Google Maps            |
| Carácter      | Parrilla de producto de mercado: carnes y pescados a la brasa, cochinillo y cordero                                                                                                 | descripción de Google y reseñas |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. Las especialidades citadas proceden del blog de la ficha, de reseñas de Google y de
TripAdvisor, y de la descripción de la casa («productos de calidad a la BRASA»).

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de la ficha de Google
Maps con `scripts/fetch-maps-photos.mjs`. `astro:assets` las sirve en WebP y en varios tamaños, así
que la web no publica los JPEG originales. El manifiesto
`src/assets/fotos/.maps-manifest.json` evita volver a descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar los textos `alt` y
confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Una sola página en español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD
  `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario (con los dos turnos de
  jueves a sábado), terraza, accesibilidad, valoración agregada, Facebook y zona de servicio.
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. La razón social, el NIF y el correo
están marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenarlos antes de
publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
