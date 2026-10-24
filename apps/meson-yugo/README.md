# Mesón Yugo · web (Astro)

Web de una sola página para **Mesón Yugo**, restaurante de cocina casera en la calle Santa María,
13 (10600 Plasencia, Cáceres).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Plasencia», «menú del día Plasencia», «cocina
casera Plasencia», «restaurante calle Santa María» o «Mesón Yugo», y galería con las diez
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter meson-yugo dev      # http://localhost:4321
bun run --filter meson-yugo typecheck
bun run --filter meson-yugo build
bun run --filter meson-yugo preview
```

El dominio provisional del `site` es `https://meson-yugo.vercel.app`: **cámbialo aquí, en
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
  arroz en cazuela.

## Datos de partida

Ficha de Google Maps: `Mesón Yugo`, 40.0290349,-6.0899192, feature
`0xd3e164a61e2b381:0x7c15fdbb52edb460`. De ahí salen la dirección, el teléfono (927 41 95 04), la
nota (4,3 con 236 reseñas), el horario —comidas todos los días, cenas de jueves a domingo—, las
categorías y las reseñas citadas.

La ficha **no publica descripción, carta, precios ni servicios de accesibilidad**, así que la web no
los afirma: la carta resume lo que citan las reseñas (menú del día, ensaladilla rusa, paella,
judías) y lo que aparece en las fotos del perfil.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs meson-yugo   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto.
