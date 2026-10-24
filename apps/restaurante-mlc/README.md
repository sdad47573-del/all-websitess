# Restaurante MLC · web (Astro)

Web de una sola página para **Restaurante MLC**, el restaurante del Hotel MLC en la carretera de
Ergoyen, 18D (20130 Urnieta, Gipuzkoa).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Urnieta», «brunch Urnieta», «desayuno buffet
Urnieta», «hamburguesas Urnieta» o «restaurante Hotel MLC», y galería con las fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-mlc dev      # http://localhost:4321
bun run --filter restaurante-mlc typecheck
bun run --filter restaurante-mlc build
bun run --filter restaurante-mlc preview
```

El dominio provisional del `site` es `https://restaurante-mlc.vercel.app`: **cámbialo aquí, en
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
  fachada del hotel.

## Datos de partida

Ficha de Google Maps: `Restaurante MLC`, 43.2363963,-1.9978974, feature
`0xd51b1003d8a6e25:0xcea92d923416e196`. De ahí salen la dirección, el teléfono (694 90 63 82), la
nota (4,5 con 72 reseñas), las categorías (restaurante vasco, bar, restaurante de brunch y
cafetería), el horario, las reseñas, la accesibilidad y los atributos del local (perros admitidos,
amigable con la comunidad LGBTQ+, se identifica como de propietarias mujeres).

La carta sale de la descripción del comerciante y de las publicaciones del propio restaurante en su
ficha de Google (hamburguesas artesanales de txuleta madurada, tostas gourmet, pintxos, patatas
caseras y desayuno buffet) y de los platos que aparecen en las fotos del perfil. **La ficha no
publica precios**, por lo que la web no muestra ninguno.

El horario estructurado de Google marca el lunes como cerrado (`7:00–22:00` de martes a jueves,
hasta las `23:00` viernes y sábado, y hasta las `17:00` el domingo), mientras que una publicación
del local anuncia «abierto todos los días desde las 7:30». La web muestra las horas de la ficha y
avisa de la discrepancia.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-mlc   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. De las diez fotos del perfil se muestran nueve: una es un
plato ya terminado y no se usa.
