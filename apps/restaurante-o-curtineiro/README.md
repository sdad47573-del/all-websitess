# Restaurante O Curtiñeiro · web (Astro)

Web de una sola página para **Restaurante O Curtiñeiro**, restaurante gallego de la Praza da Fonte, 6
(32740 Parada de Sil, Ourense), en plena Ribeira Sacra.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Parada de Sil», «restaurante Ribeira Sacra»,
«menú del día Parada de Sil» u «O Curtiñeiro», y galería con las fotografías de la ficha de Google
Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-o-curtineiro dev      # http://localhost:4321
bun run --filter restaurante-o-curtineiro typecheck
bun run --filter restaurante-o-curtineiro build
bun run --filter restaurante-o-curtineiro preview
```

El dominio provisional del `site` es `https://restaurante-o-curtineiro.vercel.app`: **cámbialo aquí,
en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
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

Ficha de Google Maps: `Restaurante O Curtiñeiro`, 42.3832702,-7.568213, feature
`0xd300f2a75aa8f17:0x1fe9c3d6eb12121c`. De ahí salen la dirección, el teléfono (619 02 07 01), la
nota (4,4 con 2.450 reseñas), la categoría (restaurante gallego), el horario (todos los días de 8:00
a 22:00), las reseñas y los datos de accesibilidad.

La ficha del restaurante también publica su forma de trabajar: «No trabajamos con reservas vamos por
orden de llegada».

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que citan las reseñas
(menú del día, raciones, caldo gallego, oreja, jarrete, jamón, merluza, empanada y patatas con pulpo)
y los platos que aparecen en las fotos del perfil (carnes guisadas y asadas con patatas y una bandeja
de postres caseros).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs restaurante-o-curtineiro   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan nueve de las diez fotos del perfil en la galería; la
décima es la máquina de snacks de la puerta y se ha dejado fuera.
