# Cooperativa Sierra de Espadán · Astro

Sitio en español para **Cooperativa Sierra de Espadán**, el bar restaurante de la
cooperativa agrícola en la plaza de la Fuente, 24 (12414 Algimia de Almonacid,
Castellón), en el Alto Palancia y a las puertas del parque natural de la Sierra
de Espadán. Cocina casera, menú del día, carnes a la brasa, tapas, bocadillos y
terraza.

## Desarrollo

```bash
bun run --filter cooperativa-sierra-de-espadan dev
bun run --filter cooperativa-sierra-de-espadan typecheck
bun run --filter cooperativa-sierra-de-espadan build
```

`astro check` no funciona en este monorepo porque la versión de TypeScript del
repositorio (7.x) todavía no está soportada por la herramienta; para validar los
tipos se usa `tsc -p tsconfig.json --noEmit`.

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade
el sitemap y el plugin de Tailwind para Vite. El dominio provisional del `site`
es `https://cooperativa-sierra-de-espadan.vercel.app`: cámbialo aquí, en
`public/robots.txt` y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato         | Valor                                                                 |
| ------------ | --------------------------------------------------------------------- |
| Nombre       | Cooperativa Sierra de Espadán                                          |
| Dirección    | Pl. de la Fuente, 24, 12414 Algimia de Almonacid (Castellón)           |
| Teléfono     | 617 02 59 14                                                          |
| Coordenadas  | 39.9135611, -0.4426775                                                |
| Place ID     | `ChIJges2Jyd3YA0RzoDzVRb7wec`                                          |
| Plus Code    | WH74+CW                                                               |
| Valoración   | 4,4 con 201 reseñas                                                   |
| Horario      | Lun/Mié/Jue/Dom 8:00–21:00 · Mar 8:00–13:00 · Vie/Sáb 8:00–24:00       |
| Acceso       | Acceso, aseo y asientos adaptados para sillas de ruedas                |
| Inauguración | Julio de 2018, tras las obras del bar restaurante de la cooperativa    |

Fuentes: ficha pública de Google Maps (octubre de 2026) y la noticia del
Ayuntamiento de Algimia de Almonacid «Inauguración del bar restaurante
Cooperativa» (19/07/2018).

No se publican precios ni una carta cerrada: el menú cambia a diario y el titular
no los ha confirmado. Se describen las familias de la carta (menú del día,
guisos, carnes a la brasa, tapas y bocadillos, dulces, bebidas), no platos con
precio.

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la galería pública de
la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`. `astro:assets` las
sirve en WebP y en varios tamaños, así que la web no publica los JPEG originales.
El manifiesto `src/assets/fotos/.maps-manifest.json` evita volver a descargarlas.

Antes de publicar conviene revisar que cada foto corresponde al local, ajustar
los textos `alt` y confirmar con el titular que autoriza su uso.

## SEO y datos estructurados

- Una sola página en español, con canonical, Open Graph, Twitter Cards, sitemap
  y JSON-LD `Restaurant` + `WebPage` + `FAQPage` + `BreadcrumbList`.
- El schema `Restaurant` declara dirección, coordenadas, teléfono, horario,
  accesibilidad, terraza, valoración agregada y zona de servicio.
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
