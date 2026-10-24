# Sagarzulo Jatetxea · web (Astro)

Web de una sola página para **Sagarzulo Jatetxea**, parrilla y restaurante en Herriondo Bailara, 8
(Calle Valle), Lezo (Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «parrilla Lezo», «asador Lezo», «comer en Lezo», «Sagar Zulo
Erretegia» o «Sagarzulo Jatetxea», y galería con las diez fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter sagarzulo-jatetxea dev      # http://localhost:4321
bun run --filter sagarzulo-jatetxea typecheck
bun run --filter sagarzulo-jatetxea build
bun run --filter sagarzulo-jatetxea preview
```

El dominio provisional del `site` es `https://sagarzulo-jatetxea.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/styles/global.css`: hoja de estilos propia (carbón, hueso y brasa).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto del
  comedor.

## Datos de partida

Ficha de Google Maps: `Sagarzulo jatetxea`, 43.3168622,-1.8913513, feature
`0xd51ab95760a7daf:0xe907addd1a2925fd`. De ahí salen la dirección —Google la escribe como «Calle
Valle, Herriondo Bailara, 8»—, el teléfono (675 70 15 83), la nota (4,5 con 681 reseñas), el
horario (de 8:30 a 19:30, miércoles cerrado), las categorías (parrilla y restaurante), el brunch
que marca Google, las reseñas y la accesibilidad (acceso, aparcamiento, aseo y asientos adaptados).

La ficha **no tiene descripción del local ni carta ni precios** y el local no tiene web propia, así
que la carta recoge solo lo que citan sus reseñas. No hay importes en ningún sitio.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs sagarzulo-jatetxea   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto.
