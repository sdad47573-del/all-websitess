# La Cuisinette Café Crepería · web (Astro)

Web de una sola página para **La Cuisinette Café Crepería**, café y crepería en la avenida de la
Constitución, 24 (10400 Jaraíz de la Vera, Cáceres), en plena comarca de La Vera.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «crepería Jaraíz de la Vera», «crepes Jaraíz de la Vera»,
«cenar en Jaraíz de la Vera» o «crepes cerca de Cuacos de Yuste», y galería con las diez
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter la-cuisinette dev      # http://localhost:4321
bun run --filter la-cuisinette typecheck
bun run --filter la-cuisinette build
bun run --filter la-cuisinette preview
```

El dominio provisional del `site` es `https://la-cuisinette.vercel.app`: **cámbialo aquí, en
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
  interior.

## Datos de partida

Ficha de Google Maps: `La Cuisinette Café Creperia`, 40.0615139,-5.7518186, feature
`0xd3e334264ffffff:0x2c655e3a7284f758`. De ahí salen la dirección, el teléfono (600 07 30 98), la
nota (4,8 con 166 reseñas), el horario de cenas —martes y miércoles cerrados— y las reseñas citadas.

La ficha no publica carta ni precios: los platos que se nombran en la web son los que aparecen en
las fotos del perfil y los que citan sus reseñas. No se ha inventado ninguno.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs la-cuisinette   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto.
