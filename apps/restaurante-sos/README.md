# Restaurante SOS · web (Astro)

Web de una sola página para **Restaurante SOS**, restaurante mediterráneo en primera línea de playa
de Cala Llonga (Santa Eulària des Riu, Ibiza).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Cala Llonga», «restaurante con vistas al mar
Ibiza», «arroces Cala Llonga» o «SOS Ibiza», y galería con las fotografías de la ficha de Google
Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-sos dev      # http://localhost:4321
bun run --filter restaurante-sos typecheck
bun run --filter restaurante-sos build
bun run --filter restaurante-sos preview
```

El dominio provisional del `site` es `https://restaurante-sos.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la foto de la
  fachada.

## Datos de partida

Ficha de Google Maps: `Restaurante SOS`, 38.9520456,1.5188087, feature
`0x12994020d3fbdfc7:0x3b2492b3ca6346a8`. De ahí salen la dirección, el teléfono (971 19 64 60), la
nota (4,7 con 900 reseñas), las categorías (restaurante y restaurante mediterráneo), el horario
(todos los días de 12:30 a 23:00; martes cerrado), las reseñas, la accesibilidad y la descripción del
propio negocio.

Esa descripción es la fuente de la propuesta: primera línea de playa de Cala Llonga, cocina
mediterránea saludable con productos locales, pescado fresco del día, arroces y opciones healthy,
terraza con vistas y servicio de desayunos, comidas y cenas.

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que citan las reseñas
(arroz de marisco, almejas, sangría de cava y raciones contundentes), lo que cuenta la descripción y
lo que aparece en las fotos del perfil (paella, bogavante con espaguetis, bogavante guisado,
mariscada, pescado a la sal y entrecot).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-sos   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
