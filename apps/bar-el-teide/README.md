# Bar El Teide · Astro

Sitio en español para **Bar El Teide**, bar de tapas y cafetería en la calle Santiago, 26
(10666 Santibáñez el Bajo, Cáceres), en el Valle del Alagón. Desayunos, pinchos, raciones,
comidas por encargo, terraza y copas.

## Desarrollo

```bash
bun run --filter bar-el-teide dev
bun run --filter bar-el-teide check
bun run --filter bar-el-teide typecheck
bun run --filter bar-el-teide build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://bar-el-teide.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical, Open Graph
y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                 | Fuente                         |
| ------------- | ------------------------------------------------------------------------------------- | ------------------------------ |
| Nombre        | Bar El Teide                                                                          | ficha de Google Maps           |
| Dirección     | C. Santiago, 26, 10666 Santibáñez el Bajo (Cáceres)                                   | ficha de Google Maps           |
| Teléfono      | 643 72 38 15                                                                          | ficha de Google Maps           |
| Coordenadas   | 40.17614, -6.2217104                                                                  | enlace de Google Maps          |
| Place ID      | `ChIJVaHwY3FtPg0RFOyvew-QJWI`                                                         | ficha de Google Maps           |
| Plus Code     | 5QGH+F8                                                                               | ficha de Google Maps           |
| Valoración    | 4,7 con 197 reseñas                                                                   | ficha de Google Maps           |
| Horario       | Lunes cerrado; martes a viernes 8:00–24:00; sábados y domingos 8:00–3:00              | ficha de Google Maps (oct-2026) |
| Accesibilidad | Acceso, aseo y asientos adaptados                                                     | ficha de Google Maps           |
| Carácter      | Bar desde 1967; desayunos, tapeo de día, comidas por encargo y copas de noche         | Universo Viajero y Google      |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. Se describen las familias de la carta (desayunos, tapas, raciones, encargos, copas),
no platos concretos.

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
- El schema `BarOrPub` declara dirección, coordenadas, teléfono, horario, accesibilidad, terraza,
  valoración agregada, Facebook y zona de servicio (Santibáñez el Bajo y Valle del Alagón).
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. Los datos del titular están marcados
como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenar razón social, NIF/CIF y
correo antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
