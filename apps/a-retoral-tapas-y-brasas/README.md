# A Retoral · web (Astro)

Web de una sola página para **Restaurante A Retoral Tapas y Brasas**, restaurante gallego y brasería
de Lugar O Cruceiro, 64 (36954 Moaña, Pontevedra), en la comarca de O Morrazo.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «tapas en Moaña», «restaurante O Morrazo», «carne a la brasa
Moaña» o «A Retoral», y galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter a-retoral-tapas-y-brasas dev      # http://localhost:4321
bun run --filter a-retoral-tapas-y-brasas typecheck
bun run --filter a-retoral-tapas-y-brasas build
bun run --filter a-retoral-tapas-y-brasas preview
```

El dominio provisional del `site` es `https://a-retoral-tapas-y-brasas.vercel.app`: **cámbialo aquí,
en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
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

Ficha de Google Maps: `Restaurante A Retoral Tapas y Brasas`, 42.2859158,-8.7497052, feature
`0xd2f61578bf2fae1:0xb2da95bc89d61033`. De ahí salen la dirección, el teléfono (986 31 56 23), la
nota (4,6 con 1.220 reseñas), las categorías (restaurante gallego y brasería), el horario (de martes
a domingo de 12:00 a 16:00, y viernes y sábados también de 20:00 a 24:00; lunes cerrado), las
reseñas y los datos de accesibilidad.

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que citan las reseñas
(zamburiñas, pulpo, calamares, pimientos de padrón, ensalada de marisco y croquetas) y los platos que
aparecen en las fotos del perfil (pulpo á feira, chopitos, arroz con carabineros y almejas, rodaballo
a la brasa y varias carnes con patatas).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs a-retoral-tapas-y-brasas   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
