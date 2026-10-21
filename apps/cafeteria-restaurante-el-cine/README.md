# Cafetería Restaurante El Cine · Astro

Sitio en español para **Cafetería Restaurante El Cine**, cafetería y restaurante de cocina casera
y parrilla de carbón de encina en la calle Santo Cristo, 34 (10666 Santibáñez el Bajo, Cáceres), en
el Valle del Alagón.

## Desarrollo

```bash
bun run --filter cafeteria-restaurante-el-cine dev
bun run --filter cafeteria-restaurante-el-cine check
bun run --filter cafeteria-restaurante-el-cine typecheck
bun run --filter cafeteria-restaurante-el-cine build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://cafeteria-restaurante-el-cine.vercel.app`: cámbialo aquí, en `public/robots.txt`, en
canonical, Open Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                                                                                                                                   | Fuente                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Nombre        | Cafetería Restaurante El Cine                                                                                                                                                                           | ficha de Google Maps                                    |
| Dirección     | C. Santo Cristo, 34, 10666 Santibáñez el Bajo (Cáceres)                                                                                                                                                 | ficha de Google Maps                                    |
| Teléfono      | 645 05 06 54                                                                                                                                                                                            | ficha de Google Maps                                    |
| Coordenadas   | 40.1768346, -6.2228969                                                                                                                                                                                  | enlace de Google Maps                                   |
| Place ID      | `ChIJjRKjR3FtPg0RWvdyvozGiO4`                                                                                                                                                                           | ficha de Google Maps                                    |
| Plus Code     | 5QGG+PR                                                                                                                                                                                                 | ficha de Google Maps                                    |
| Valoración    | 4,7 con 298 reseñas                                                                                                                                                                                     | ficha de Google Maps                                    |
| Horario       | Lunes, miércoles y jueves 8:00–17:30; viernes a domingo 8:00–24:00; martes cerrado                                                                                                                      | ficha de Google Maps (octubre de 2026)                  |
| Accesibilidad | Acceso, aseo y asientos adaptados                                                                                                                                                                       | ficha de Google Maps                                    |
| Carácter      | Cafetería y restaurante; parrilla de carbón de encina, menú del día, tapas y terraza                                                                                                                    | perfil público del restaurante y guía Toppings & Salads |
| Platos        | Berenjenas con miel, patatas con queso azul, pulpo a la brasa, secreto ibérico, pollo a la brasa, cachopo, garbanzos con setas, entrecot, abanico, hamburguesa de buey, torrija, flan, tarta de cerveza | reseñas de Google y cartas publicadas                   |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. El menú del día se consulta al reservar.

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
