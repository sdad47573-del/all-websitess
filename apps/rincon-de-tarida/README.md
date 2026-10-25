# Bar-Restaurante Rincón de Tarida · web (Astro)

Web de una sola página para **Bar-Restaurante Rincón de Tarida**, bar restaurante de cocina
mediterránea en Plaza del Mar, 1 (Edif. Montercarlos), Cala Tarida — Sant Josep de sa Talaia, Ibiza.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Cala Tarida», «bar restaurante Cala Tarida»,
«paella Cala Tarida» o «Rincón de Tarida Ibiza», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter rincon-de-tarida dev      # http://localhost:4321
bun run --filter rincon-de-tarida typecheck
bun run --filter rincon-de-tarida build
bun run --filter rincon-de-tarida preview
```

El dominio provisional del `site` es `https://rincon-de-tarida.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps, carta
  resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la fachada.

## Datos de partida

Ficha de Google Maps: `Bar-Restaurante RINCÓN DE TARIDA`, 38.9423248,1.2364636, feature
`0x12994ae3d6b086a1:0x5a159d770c5377e2`. De ahí salen la dirección (Plaza del Mar 1, Edif.
Montercarlos, 07829 Cala Tarida), el teléfono (971 80 64 45), la nota (4,1 con 683 reseñas), las
categorías (bar restaurante, restaurante mediterráneo y restaurante), el horario (todos los días de
8:00 a 23:00), las reseñas y la accesibilidad (asientos adaptados).

La ficha sí tiene descripción del propio negocio: «Restaurante familiar y acogedor». El resto del
texto se apoya en lo visible en las fotos del perfil: la fachada blanca de dos plantas con arcos y el
rótulo «RESTAURANTE Rincón de Tarida», el porche con mesas, la plaza y la cercanía de la playa.

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que aparece en las fotos
(paella de pescado y marisco, arroz negro con calamares, calamar a la plancha y con queso gratinado,
pescado al horno con verduras, ensalada de queso de cabra, carne con patatas y sangría) y lo que citan
las reseñas (croquetas de pollo, café y tostadas, cervezas).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs rincon-de-tarida   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar las
fotos que ya están en el manifiesto. De las diez fotos del perfil se usan nueve: se descarta una vista
general de la cala en la que el edificio protagonista es otro establecimiento.
