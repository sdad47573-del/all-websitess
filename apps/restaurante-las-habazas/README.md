# Restaurante Las Habazas · Astro

Sitio en español para **Restaurante Las Habazas**, restaurante de cocina extremeña y carnes a la
brasa en la EX-208, Km 8,5 (10680 Malpartida de Plasencia, Cáceres), a las puertas del Parque
Nacional de Monfragüe.

## Desarrollo

```bash
bun run --filter restaurante-las-habazas dev
bun run --filter restaurante-las-habazas check
bun run --filter restaurante-las-habazas typecheck
bun run --filter restaurante-las-habazas build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://restaurante-las-habazas.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical,
Open Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato          | Valor                                                                                                                                                  | Fuente                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Nombre        | Restaurante Las Habazas                                                                                                                                | ficha de Google Maps                                  |
| Dirección     | EX-208, Km 8,5, 10680 Malpartida de Plasencia (Cáceres)                                                                                                | ficha de Google Maps                                  |
| Teléfono      | 666 42 24 53                                                                                                                                           | ficha de Google Maps                                  |
| Coordenadas   | 39.9461861, -6.0863758                                                                                                                                 | enlace de Google Maps                                 |
| Place ID      | `ChIJq6dOS2AYPg0RdIVoZdtpBR4`                                                                                                                          | ficha de Google Maps                                  |
| Plus Code     | WWW7+FC                                                                                                                                                | ficha de Google Maps                                  |
| Valoración    | 4,5 con 761 reseñas                                                                                                                                    | ficha de Google Maps                                  |
| Horario       | Miércoles a domingo, comidas de 10:30 a 16:00 (jueves hasta 16:30, sábado hasta 18:00); lunes y martes cerrado                                         | ficha de Google Maps (octubre de 2026)                |
| Accesibilidad | Acceso y aparcamiento adaptados                                                                                                                        | ficha de Google Maps                                  |
| Platos        | Pluma ibérica, secreto, costilla de vaca, entrecot, alcachofas en tempura, huevos rotos con papada, migas, arroz meloso con chipirones, tarta de queso | reseñas destacadas y cartas publicadas en directorios |
| Redes         | Instagram y Facebook `@habazas`                                                                                                                        | perfiles públicos del restaurante                     |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. El menú del día y el de fin de semana se consultan al reservar.

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de la ficha de Google
Maps del restaurante con `scripts/fetch-maps-photos.mjs`. `astro:assets` las sirve en AVIF y en
varios tamaños, así que la web no publica los JPEG originales. El manifiesto
`src/assets/fotos/.maps-manifest.json` evita volver a descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar los textos `alt` y
confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Una sola página en español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD
  `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario, accesibilidad,
  valoración agregada, redes sociales y zona de servicio (Malpartida de Plasencia, Plasencia y
  Monfragüe).
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. Los datos del titular están marcados
como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenar razón social, NIF/CIF y
correo antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
