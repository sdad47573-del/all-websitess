# Antic - Restaurante · Astro

Sitio en español para **Antic - Restaurante**, restaurante, cafetería y pizzería en
el Carrer d'Herrero, 64D, 12005 Castelló de la Plana. Desayunos desde las 7:30,
menú del día, bocadillos, pizzas, hamburguesas, paellas y terraza en pleno centro.

## Desarrollo

```bash
bun run --filter restaurante-antic dev
bun run --filter restaurante-antic typecheck
bun run --filter restaurante-antic build
node scripts/check-site-content.mjs restaurante-antic
```

`astro check` no funciona en este monorepo porque la versión de TypeScript del
repositorio (7.x) todavía no está soportada por la herramienta; para validar los
tipos se usa `tsc -p tsconfig.json --noEmit`.

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade
el sitemap y el plugin de Tailwind para Vite. El dominio provisional del `site`
es `https://restaurante-antic.vercel.app`: cámbialo aquí, en
`public/robots.txt` y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato        | Valor                                                            |
| ----------- | ---------------------------------------------------------------- |
| Nombre      | Antic - Restaurante                                              |
| Dirección   | Carrer d'Herrero, 64D · 12005 Castelló de la Plana               |
| Teléfono    | 691 78 62 50                                                     |
| Coordenadas | 39.9783855, -0.0418767                                           |
| Place ID    | `ChIJSeiGfYEAYA0Rlxv8x0vKUqk`                                     |
| Plus Code   | 8CFXXXH5+96                                                      |
| Valoración  | 4,2 con 693 reseñas                                              |
| Horario     | Lun–Vie 7:30–23:00 · Sáb 9:00–24:00 · Dom 9:00–16:00             |
| Acceso      | Acceso, aseo, asientos y aparcamiento adaptados para sillas de ruedas |
| Terraza     | Sí                                                               |

Fuentes: ficha pública de Google Maps (octubre de 2026), incluida la descripción
del propietario, y reseñas públicas de Google.

No se publican precios ni una carta cerrada: cambian y el titular no los ha
confirmado. Se describen las familias de la carta que constan en la ficha
(restaurante, bar, cafetería, hamburguesería, pizzería y bocatería), en las fotos
(café, carajillo, bocadillo de calamares, hamburguesa, calamar, ensalada) y en
las reseñas (paellas, bocadillos de calamares y sepia).

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de
la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`. La web usa las diez:
la terraza en la portada, la fachada y un carajillo en «La casa», y ocho en la
galería. `astro:assets` las sirve en WebP y en varios tamaños, así que no publica
los JPEG originales. El manifiesto `src/assets/fotos/.maps-manifest.json` evita
volver a descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar
los textos `alt` y confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Home con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD
  `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario,
  terraza, accesibilidad y valoración agregada.
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al
  corregir un tramo en `src/data/site.ts` se actualizan a la vez la ficha visible
  y los datos estructurados. El cierre del sábado se declara a las 23:59 porque
  schema.org no admite las 24:00.

## Mapa y cookies

El mapa de Google no se carga al abrir la página. La sección «Visítanos» muestra
una fachada dibujada con un botón «Cargar mapa»; al pulsarlo se inserta el iframe.
Sin ese gesto no se contacta con Google, así que no se instalan cookies de
terceros. El aviso legal explica este funcionamiento.

## Páginas legales

`/aviso-legal/` incluye aviso legal, privacidad y cookies. Los datos del titular
están marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que
rellenar razón social, NIF/CIF y correo antes de publicar. El aviso lo indica
también de forma visible en la propia página.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
