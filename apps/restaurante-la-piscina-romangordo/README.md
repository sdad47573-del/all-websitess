# Restaurante La Piscina · Romangordo · Astro

Sitio en español para **Restaurante La Piscina**, restaurante de cocina extremeña en las
dependencias de la piscina municipal de Romangordo (10359, Cáceres), dentro de la reserva de la
biosfera de Monfragüe.

## Desarrollo

```bash
bun run --filter restaurante-la-piscina-romangordo dev
bun run --filter restaurante-la-piscina-romangordo typecheck
bun run --filter restaurante-la-piscina-romangordo build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://restaurante-la-piscina-romangordo.vercel.app`: cámbialo aquí, en `public/robots.txt`, en
canonical, Open Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato        | Valor                                                                                                                 | Fuente                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Nombre      | Restaurante La Piscina                                                                                                | ficha de Google Maps                         |
| Dirección   | C. Carretera, s/n, 10359 Romangordo (Cáceres)                                                                         | ficha de Google Maps                         |
| Teléfono    | 626 72 92 74                                                                                                          | ficha de Google Maps                         |
| Correo      | restauranteromangordo@gmail.com                                                                                        | web de turismo de Romangordo                 |
| Coordenadas | 39.7418517, -5.6962766                                                                                                | enlace de Google Maps                        |
| Place ID    | `ChIJUTOR8Zh5FQ0RlrIArWcQFTs`                                                                                         | ficha de Google Maps                         |
| Plus Code   | P8R3+PF                                                                                                               | ficha de Google Maps                         |
| Valoración  | 4,8 con 25 reseñas                                                                                                    | ficha de Google Maps                         |
| Horario     | Lunes, martes y jueves 12:00–20:00; viernes a domingo 12:00–23:00; miércoles cerrado                                   | ficha de Google Maps (octubre de 2026)       |
| Carácter    | Cocina extremeña, producto local, recetas de siempre con un toque contemporáneo, terraza cubierta                     | descripción del titular en Google            |
| Platos      | Nachos y entrantes, cachopo, callos y guisos, carnes, arroces y paellas por encargo, menú del día                     | reseñas de Google recogidas en fichas públicas |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. Los arroces y paellas se encargan con antelación.

## Fotografías

Las nueve imágenes de `src/assets/fotos/` se descargaron de la galería pública de la ficha de Google
Maps del restaurante con `scripts/fetch-maps-photos.mjs`. `astro:assets` las sirve en WebP y en
varios tamaños, así que la web no publica los JPEG originales. El manifiesto
`src/assets/fotos/.maps-manifest.json` evita volver a descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar los textos `alt` y
confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Una sola página en español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD
  `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, correo, horario, terraza,
  valoración agregada y zona de servicio (Romangordo y Monfragüe).
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. El NIF/CIF del titular está marcado
como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenarlo antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
