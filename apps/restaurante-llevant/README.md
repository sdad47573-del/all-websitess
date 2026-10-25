# Restaurante Llevant · web (Astro)

Web de una sola página para **Restaurante Llevant**, restaurante de cocina catalana con terraza
sobre el mar en C. de Carles Roman Ferrer, 5, en Figueretes (Eivissa, Ibiza).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «terraza Figueretes», «tomar algo frente al mar Ibiza»,
«puesta de sol Ibiza» o «Llevant Ibiza», y galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-llevant dev      # http://localhost:4321
bun run --filter restaurante-llevant typecheck
bun run --filter restaurante-llevant build
bun run --filter restaurante-llevant preview
```

El dominio provisional del `site` es `https://restaurante-llevant.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio, enlaces de Google Maps, horario (sin publicar), carta
  resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la terraza.

## Datos de partida y límites

Ficha de Google Maps: `Restaurante Llevant`, 38.9015728,1.4199175, feature
`0x129947977fd061b5:0x97c1c1a44001f79c`. De ahí salen la dirección, la categoría (restaurante de
cocina catalana), la nota (4,5 con 121 reseñas), las reseñas y la accesibilidad.

**La ficha no publica teléfono ni horario, ni descripción ni carta.** La web no los inventa:

- El horario aparece como «Consultar en Google Maps» en todos los días y el JSON-LD no declara
  `openingHoursSpecification`.
- No hay teléfono: los enlaces de contacto llevan a la ficha de Google, y el aviso legal deja
  pendiente el correo del titular.
- «La carta» se limita a lo que se ve en las fotos del perfil (nachos con guacamole, calamares a la
  romana, croquetas, ensaladilla, cerveza de barril y vino blanco) y a lo que citan las reseñas
  (gin tonic y picar viendo la puesta de sol).

Si el titular facilita horario, teléfono y carta, se añaden en `src/data/site.ts` (y el horario
también en `openingHoursSpecification` de `src/pages/index.astro`).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-llevant   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
