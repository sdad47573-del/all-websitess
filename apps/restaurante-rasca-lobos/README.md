# Restaurante Rasca Lobos · web (Astro)

Web de una sola página para **Restaurante Rasca Lobos**, mesón de cocina tradicional en Avinguda de
Vicent Serra, 25, en Sant Jordi de ses Salines (Ibiza).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Sant Jordi de ses Salines», «mesón Ibiza», «fabada
Ibiza», «restaurante con jardín Ibiza» o «Rasca Lobos», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-rasca-lobos dev      # http://localhost:4321
bun run --filter restaurante-rasca-lobos typecheck
bun run --filter restaurante-rasca-lobos build
bun run --filter restaurante-rasca-lobos preview
```

El dominio provisional del `site` es `https://restaurante-rasca-lobos.vercel.app`: **cámbialo aquí,
en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada del jardín.

## Datos de partida

Ficha de Google Maps: `Restaurante Rasca Lobos`, 38.8910102,1.3945414, feature
`0x129945d9fc493479:0x90b8250ddbef2522`. De ahí salen la dirección, el teléfono (971 39 58 60), la
nota (4,6 con 527 reseñas), la categoría (restaurante de cocina española), el horario (comidas
13:00–16:00 y cenas 20:00–23:00, de miércoles a domingo; lunes y martes cerrado), las reseñas, la
accesibilidad y la descripción del negocio (salón climatizado con aire acondicionado).

El rótulo de neón y el cartel de la entrada, visibles en las fotos del perfil, dicen «Mesón
Restaurante Rasca Lobos · Cocina Tradicional de Calidad».

**La ficha no publica carta ni precios**: la sección «La carta» recoge solo lo que se ve en las fotos
del perfil (patatas Oviedo, salteado de verduras con jamón, ensalada de langostinos, milanesa,
entrecot con pimientos de Padrón, tarta de queso y plátano frito) y lo que citan las reseñas
(champis, queso, fabada, arroz de matanza, pollo payés y milanesa).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-rasca-lobos   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
