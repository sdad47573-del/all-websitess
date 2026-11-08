# PATRI Restaurante · web (Astro)

Web de una sola página para **PATRI Restaurante** (Bar Patri Jatetxea), restaurante de cocina casera
en Kale Nagusia Kalea, 14 (20170 Usurbil, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Usurbil», «menú del día Usurbil», «restaurante
Usurbil», «Bar Patri» o «Patri jatetxea», y galería con las diez fotografías de la ficha de Google
Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter patri-restaurante dev      # http://localhost:4321
bun run --filter patri-restaurante typecheck
bun run --filter patri-restaurante build
bun run --filter patri-restaurante preview
```

El dominio provisional del `site` es `https://patri-restaurante.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto del
  comedor.

## Datos de partida

Ficha de Google Maps: `PATRI Restaurante`, 43.27005,-2.0507052, feature
`0xd51b1ac2d73261f:0x88463a9d447c9443`. De ahí salen la dirección, el teléfono (943 36 27 25), la
nota (4,7 con 460 reseñas), el horario —comidas todos los días, cenas viernes y sábado—, las
categorías, las reseñas y los datos de accesibilidad.

La descripción de comerciante de la ficha llega corrupta («Kuala es la mejor cocina?..la limpia»),
así que **no se usa**. La ficha no publica carta ni precios: la carta resume lo que citan las
reseñas y lo que aparece en las fotos del perfil.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs patri-restaurante   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto.
