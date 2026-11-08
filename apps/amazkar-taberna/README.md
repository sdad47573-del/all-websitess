# Amazkar Taberna · web (Astro)

Web de una sola página para **Amazkar Taberna**, taberna de cocina tradicional en
Kontzejuerreka Kalea, 2, barrio de Elizalde (20180 Oiartzun, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «taberna Oiartzun», «comer en Oiartzun», «raciones
Elizalde», «platos combinados Oiartzun» o «Amazkar Taberna», y galería con las diez fotografías de
la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter amazkar-taberna dev      # http://localhost:4321
bun run --filter amazkar-taberna typecheck
bun run --filter amazkar-taberna build
bun run --filter amazkar-taberna preview
```

El dominio provisional del `site` es `https://amazkar-taberna.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/styles/global.css`: hoja de estilos propia (papel, vino y oliva).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de la
  tortilla.

## Datos de partida

Ficha de Google Maps: `Amazkar Taberna`, 43.2991021,-1.860758, feature
`0xd51a8689c118057:0x761f7cb600e2ff7d`. De ahí salen la dirección, el teléfono (612 55 88 53), la
nota (4,5 con 243 reseñas), el horario —miércoles a domingo, cerrado lunes y martes—, la categoría
(taberna), las reseñas, los servicios (se admiten perros, acceso para sillas de ruedas y asientos
adaptados, sin aparcamiento adaptado) y la descripción del local: «Sukaldaritza tradizionala».

La ficha **no publica carta ni precios** y el local no tiene web propia, así que la carta resume
solo lo que citan sus reseñas y esa descripción. No hay importes en ningún sitio.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs amazkar-taberna   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto.
