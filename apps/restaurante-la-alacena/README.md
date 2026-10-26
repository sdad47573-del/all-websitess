# La Alacena · Astro

Sitio en español para **La Alacena**, bar restaurante en el Carrer Isidoro Peris,
18, 12200 Onda (Castellón). Desayunos y almuerzos desde las 8:00, bocadillos
montados en el mostrador, menú del día de lunes a viernes y carnes a la brasa.

## Desarrollo

```bash
bun run --filter restaurante-la-alacena dev
bun run --filter restaurante-la-alacena typecheck
bun run --filter restaurante-la-alacena build
node scripts/check-site-content.mjs restaurante-la-alacena
```

`astro check` no funciona en este monorepo porque la versión de TypeScript del
repositorio (7.x) todavía no está soportada por la herramienta; para validar los
tipos se usa `tsc -p tsconfig.json --noEmit`.

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade
el sitemap y el plugin de Tailwind para Vite. El dominio provisional del `site`
es `https://restaurante-la-alacena.vercel.app`: cámbialo aquí, en
`public/robots.txt` y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato        | Valor                                                     |
| ----------- | --------------------------------------------------------- |
| Nombre      | La Alacena                                                |
| Dirección   | Carrer Isidoro Peris, 18 · 12200 Onda (Castellón)          |
| Teléfono    | 964 84 69 49                                              |
| Coordenadas | 39.9670517, -0.2605443                                    |
| Place ID    | `ChIJw1o0QWIKYA0Rj2NtJ3WEyZM`                             |
| Plus Code   | XP8Q+RQ                                                   |
| Valoración  | 4,5 con 453 reseñas                                       |
| Horario     | Lunes a sábado 8:00–16:00 · Domingo cerrado               |
| Acceso      | Acceso, aseo y asientos adaptados para sillas de ruedas    |

Fuentes: ficha pública de Google Maps (octubre de 2026), reseñas públicas de
Google y TripAdvisor, GuiaOnda y publicaciones del propio local.

No se publican precios ni una carta cerrada: el menú cambia y el titular no los
ha confirmado. Se describen las familias de la carta (desayunos, bocadillos,
almuerzos, menú del día, carnes a la brasa, arroces, postres y barra), no platos
con importe.

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de
la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`. La web usa las diez;
`astro:assets` las sirve en WebP y en varios tamaños, así que no publica los JPEG
originales. El manifiesto `src/assets/fotos/.maps-manifest.json` evita volver a
descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar
los textos `alt` y confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Home con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD
  `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario,
  accesibilidad y valoración agregada.
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al
  corregir un tramo en `src/data/site.ts` se actualizan a la vez la ficha visible
  y los datos estructurados.
- El mapa de Google no se carga hasta que el usuario lo pide, para no instalar
  cookies de terceros sin consentimiento.

## Páginas legales

`/aviso-legal/` incluye aviso legal, privacidad y cookies. Los datos del titular
están marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que
rellenar razón social, NIF/CIF y correo antes de publicar. El aviso lo indica
también de forma visible en la propia página.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
