# Restaurante Parasoles · web (Astro)

Web de una sola página para **Restaurante Parasoles**, restaurante mediterráneo y marisquería en
primera línea de Platja d'en Bossa (Ses Begonies, 1-2 · Sant Josep de sa Talaia, Ibiza).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Playa d'en Bossa», «restaurante primera línea de
playa Ibiza», «arroces Playa d'en Bossa» o «mariscada Ibiza», y galería con las fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-parasoles dev      # http://localhost:4321
bun run --filter restaurante-parasoles typecheck
bun run --filter restaurante-parasoles build
bun run --filter restaurante-parasoles preview
```

El dominio provisional del `site` es `https://restaurante-parasoles.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps, carta
  resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la mesa con la
  paella y la mariscada.

## Datos de partida

Ficha de Google Maps: `Restaurante Parasoles`, 38.8892902,1.4087799, feature
`0x1299442c15d1ae2f:0x2256de3461efce57`. De ahí salen la dirección (Ses Begonies 1-2, 07817 Playa
d'en Bossa), el teléfono (971 30 52 31), la nota (4,4 con 1155 reseñas), las categorías (restaurante
mediterráneo, restaurante y marisquería), el horario (todos los días de 11:30 a 18:00), las reseñas y
la accesibilidad (acceso, aseo y asientos adaptados).

La ficha sí tiene descripción del propio negocio: «Restaurante familiar con buena comida y buen
ambiente. Ideal para comidas familiares y bonitas vistas al mar». Es la base de la propuesta, junto a
la ubicación en primera línea de playa y a lo que se ve en las fotos del perfil.

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que aparece en las fotos
(paella de marisco, arroz negro, fideuá, mariscada, pescado a la plancha, fritura, gambas al ajillo,
nachos, patatas bravas, tarta de zanahoria y sangría) y lo que citan las reseñas (gazpacho, mejillones
a la marinera, surtido de tartas y ensaladas). El horario de cocina puede variar según temporada:
conviene confirmarlo por teléfono.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-parasoles   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar las
fotos que ya están en el manifiesto. De las diez fotos del perfil se usan ocho: se descartan la de una
clienta con un cóctel y la de una fritura que lleva la marca de agua de una cuenta de TikTok.
