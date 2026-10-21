# Asador Grimaldo · Astro

Sitio en español para **Asador Grimaldo**, restaurante familiar de carnes a la brasa en la
carretera N-630, km 502 (10829 Grimaldo, Cañaveral, Cáceres), a pie de la Vía de la Plata.

## Desarrollo

```bash
bun run --filter asador-grimaldo dev
bun run --filter asador-grimaldo check
bun run --filter asador-grimaldo typecheck
bun run --filter asador-grimaldo build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://asador-grimaldo.vercel.app`: cámbialo aquí, en `public/robots.txt`, en canonical, Open
Graph y en `src/data/site.ts` cuando haya dominio definitivo.

## Datos del negocio

| Dato           | Valor                                                                                               | Fuente                          |
| -------------- | --------------------------------------------------------------------------------------------------- | ------------------------------- |
| Nombre         | Asador Grimaldo                                                                                     | ficha de Google Maps            |
| Dirección      | Ctra. N-630, km 502, 10829 Grimaldo (Cañaveral, Cáceres)                                            | ficha de Google Maps            |
| Teléfono       | 699 70 43 84                                                                                        | ficha de Google Maps y blog     |
| Correo         | AsadorGrimaldo@gmail.com                                                                            | directorio público TuCofre      |
| Coordenadas    | 39.8393993, -6.3496651                                                                              | enlace de Google Maps           |
| Place ID       | `ChIJaQWwb6MBPg0RQ9g96O50xAo`                                                                       | ficha de Google Maps            |
| Plus Code      | RMQ2+Q4                                                                                             | ficha de Google Maps            |
| Valoración     | 4,5 con 991 reseñas                                                                                 | ficha de Google Maps            |
| Horario        | Lunes cerrado; comidas martes a domingo 13:00–18:00; cenas viernes 20:30–22:30 y sábado 20:30–23:00 | ficha de Google Maps (oct-2026) |
| Accesibilidad  | Acceso, aparcamiento, aseo y asientos adaptados                                                     | ficha de Google Maps            |
| Historia       | Restaurante familiar creado en 2007; nexo entre Casas de Millán y Grimaldo                          | blog del restaurante            |
| Especialidades | Buey a la brasa, cochinillo y cabrito al horno, bacalao de la casa, ensalada Grimaldo               | blog del restaurante            |
| Distinción     | 1 Flor de Jara de la Guía Gourmet Vivir Extremadura                                                 | blog del restaurante            |
| Brasa          | Carbón de encina                                                                                    | ficha de EuroVelo 1             |

No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los ha
confirmado. Los platos citados proceden del blog del restaurante y de las reseñas de Google.

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
- El schema `Restaurant` declara dirección, coordenadas, teléfono, correo, horario (dos turnos los
  viernes y sábados), accesibilidad, valoración agregada, Instagram, blog y zona de servicio.
- El horario del JSON-LD se genera desde `BUSINESS.openingHours`, así que al corregir un tramo en
  `src/data/site.ts` se actualizan a la vez la ficha visible y los datos estructurados.

## Páginas legales

`/aviso-legal/` incluye aviso legal y política de privacidad. La razón social y el NIF están
marcados como `[pendiente de completar]` en `src/data/site.ts`; hay que rellenarlos antes de
publicar. El correo es el que el restaurante publica en directorios de empresas.

## Crédito

El pie incluye «Creado por Sur Digital · sur-digital.vercel.app», enlazado a
<https://sur-digital.vercel.app/>.
