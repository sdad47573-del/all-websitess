# Bar Restaurante Pasur · Astro

Sitio en español para **Bar Restaurante Pasur**, bar restaurante de polígono en la
calle Peri, 15 (nave 19), Polígono Industrial Autopista Sur, 12006 Castellón de
la Plana. Desayunos y almuerzos desde las 5:40, bocadillos, platos de vitrina y
menú del día de lunes a viernes.

## Desarrollo

```bash
bun run --filter bar-restaurante-pasur dev
bun run --filter bar-restaurante-pasur typecheck
bun run --filter bar-restaurante-pasur build
node scripts/check-site-content.mjs bar-restaurante-pasur
```

`astro check` no funciona en este monorepo porque la versión de TypeScript del
repositorio (7.x) todavía no está soportada por la herramienta; para validar los
tipos se usa `tsc -p tsconfig.json --noEmit`.

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade
el sitemap y el plugin de Tailwind para Vite. El dominio provisional del `site`
es `https://bar-restaurante-pasur.vercel.app`: cámbialo aquí, en
`public/robots.txt` y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato        | Valor                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Nombre      | Bar Restaurante Pasur                                                  |
| Dirección   | Calle Peri, 15 · Nave 19 · Pol. Ind. Autopista Sur, 12006 Castellón    |
| Teléfono    | 622 79 11 61                                                           |
| Coordenadas | 39.977112, -0.066699                                                   |
| Place ID    | `ChIJib5kHqYAYA0RsyvHJs9cjeU`                                          |
| Plus Code   | WHGM+R8                                                               |
| Valoración  | 4,4 con 671 reseñas                                                    |
| Horario     | Lun–jue 5:40–16:00 · Vie 5:30–16:00 · Sáb y dom cerrado                |
| Acceso      | Acceso, aseo y asientos adaptados para sillas de ruedas                |

Fuentes: ficha pública de Google Maps (octubre de 2026) y reseñas públicas de
Google y directorios de hostelería (menú diario, cocina casera, almuerzos de
polígono).

No se publican precios ni una carta cerrada: el menú cambia a diario y el titular
no los ha confirmado. Se describen las familias de la carta (desayunos,
bocadillos, menú del día, cocina casera, vitrina, postre y café), no platos con
importe.

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de
la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`. La web usa nueve;
`astro:assets` las sirve en WebP y en varios tamaños, así que no publica los JPEG
originales. El manifiesto `src/assets/fotos/.maps-manifest.json` evita volver a
descargarlas.

Se descartó la foto de la barra con clientes y personal identificables. Antes de
publicar conviene revisar que cada foto corresponde al local, ajustar los textos
`alt` y confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Una sola página en español, con canonical, Open Graph, Twitter Cards, sitemap
  y JSON-LD `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario,
  accesibilidad, valoración agregada y zona de servicio.
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al
  corregir un tramo en `src/data/site.ts` se actualizan a la vez la ficha visible
  y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal, privacidad y cookies. Los datos del titular
están marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que
rellenar razón social, NIF/CIF y correo antes de publicar.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
