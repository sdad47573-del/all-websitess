# La Fonda · Astro

Sitio en español para **La Fonda**, bar y restaurante en la calle Guadalquivir, 18
(10690 Alagón del Río, Cáceres), en el Valle del Alagón.

## Desarrollo

```bash
bun run --filter la-fonda-alagon dev
bun run --filter la-fonda-alagon check
bun run --filter la-fonda-alagon typecheck
bun run --filter la-fonda-alagon build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://la-fonda-alagon.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical, Open
Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                             | Fuente                          |
| ------------- | ----------------------------------------------------------------- | ------------------------------- |
| Nombre        | La Fonda                                                          | ficha de Google Maps            |
| Dirección     | C. Guadalquivir, 18, 10690 Alagón del Río (Cáceres)               | ficha de Google Maps            |
| Teléfono      | 637 85 92 23                                                      | listado turístico de ADESVAL    |
| Coordenadas   | 39.9737726, -6.3148098                                            | enlace de Google Maps           |
| Place ID      | `ChIJSyycK1YPPg0RRZyQRUg-bj4`                                     | ficha de Google Maps            |
| Plus Code     | XMFP+G3                                                           | ficha de Google Maps            |
| Valoración    | 4,5 con 94 reseñas                                                | ficha de Google Maps            |
| Horario       | Martes a domingo 12:00–24:00; lunes cerrado                       | ficha de Google Maps (oct-2026) |
| Accesibilidad | Acceso, aseo y asientos adaptados                                 | ficha de Google Maps            |
| Fiestas       | Fiestas del Cristo desde el 12 de septiembre y Martes de Carnaval | ficha municipal en ADESVAL      |

Google **no publica teléfono** para esta ficha. El 637 85 92 23 aparece en el directorio de
servicios turísticos de ADESVAL; antes de publicar hay que confirmar que sigue activo.

La cocina no abre igual todas las jornadas: las reseñas recientes son contradictorias sobre el
servicio de comidas. La web lo dice de forma explícita («llama antes si vienes a comer») y no
publica una carta cerrada ni precios. Conviene confirmar con el titular qué servicio ofrece hoy y
ajustar los textos de `CARTA` y `FAQ` en `src/data/site.ts`.

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de la ficha de Google
Maps con `scripts/fetch-maps-photos.mjs`. `astro:assets` las sirve en WebP y en varios tamaños, así
que la web no publica los JPEG originales. El manifiesto
`src/assets/fotos/.maps-manifest.json` evita volver a descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar los textos `alt` y
confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Una sola página en español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD
  `BarOrPub` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `BarOrPub` declara dirección, coordenadas, teléfono, horario, accesibilidad, valoración
  agregada y zona de servicio (Alagón del Río y Valle del Alagón).
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. La razón social, el NIF y el correo
están marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenarlos antes de
publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
