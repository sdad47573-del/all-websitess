# Restaurante Marcos Jatetxea · web (Astro)

Web de una sola página para **Restaurante Marcos Jatetxea**, restaurante de menú del día en el
barrio de Ugaldetxo (20180 Oiartzun, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Oiartzun», «menú del día Oiartzun», «restaurante
Ugaldetxo», «Marcos Jatetxea» o «pintxos Oiartzun», y galería con las fotografías de la ficha de
Google Maps, entre ellas la hoja del menú del día.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-marcos-jatetxea dev      # http://localhost:4321
bun run --filter restaurante-marcos-jatetxea typecheck
bun run --filter restaurante-marcos-jatetxea build
bun run --filter restaurante-marcos-jatetxea preview
```

El dominio provisional del `site` es `https://restaurante-marcos-jatetxea.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  menú del día y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de la
  ensalada.

## Datos de partida

Ficha de Google Maps: `Restaurante Marcos Jatetxea`, 43.2974287,-1.8815223, feature
`0xd51a893b6b74c8b:0x5e886c3b5dba5971`. De ahí salen el teléfono (943 49 43 90), la nota (4,4 con
87 reseñas), la categoría (restaurante), el horario —lunes a viernes de 7:30 a 21:00, sábado de
7:30 a 15:30 y domingo cerrado—, las reseñas y los datos de accesibilidad.

**La ficha no publica una dirección con calle**: da el código postal 20180 y el código plus
`74W9+X9 Ugaldetxo, Elizalde`, que sitúa el local en el barrio de Ugaldetxo, en Oiartzun. Por eso la
web escribe «Barrio de Ugaldetxo · 20180 Oiartzun» y remite al botón «Cómo llegar» para la
ubicación exacta.

El menú sale de la hoja impresa fotografiada en el perfil de Google: 12 euros con primero, segundo y
postre, con la lista de primeros y segundos que aparece en `src/data/site.ts`. La ficha no publica
el precio del resto de la carta (pintxos, raciones y bocadillos, que salen de las reseñas).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-marcos-jatetxea   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil.
