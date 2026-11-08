# Asador O Marco Da Legua · web (Astro)

Web de una sola página para **Asador O Marco Da Legua**, brasería y restaurante familiar de Aldea
Lagoas, 31 (32135 Piñor, Ourense).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «asador Piñor», «carnes a la brasa Ourense», «cabrito horno de
leña», «comida para llevar Ourense» o «O Marco Da Legua», y galería con las fotografías de la ficha
de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter asador-o-marco-da-legua dev      # http://localhost:4321
bun run --filter asador-o-marco-da-legua typecheck
bun run --filter asador-o-marco-da-legua build
bun run --filter asador-o-marco-da-legua preview
```

El dominio provisional del `site` es `https://asador-o-marco-da-legua.vercel.app`: **cámbialo aquí,
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
  mesa.

## Datos de partida

Ficha de Google Maps: `Asador O Marco Da Legua`, 42.4759445,-8.0087108, feature
`0xd2feefb59670def:0x711cd45fb042773c`. De ahí salen la dirección, el teléfono (673 65 64 13), la
nota (4,8 con 210 reseñas), las categorías (brasería, bar restaurante, restaurante familiar,
restaurante gallego, comida para llevar y bar de tapas), el horario (jueves y domingo de 10:30 a
24:00, viernes de 10:30 a 0:30 y sábado de 11:00 a 0:30; lunes a miércoles cerrado), las reseñas, la
accesibilidad y la descripción del negocio.

Esa descripción es la fuente de la carta: «carnes a la brasa, cabrito y cordero en horno tradicional
de leña».

**La ficha no publica precios**: la sección «La carta» resume lo que citan las reseñas (churrasco,
chipirones a la plancha, pizza y postres caseros), la descripción del negocio (cabrito, cordero y
carnes a la brasa) y lo que aparece en las fotos del perfil (zamburiñas, pulpo á feira, pimientos de
Padrón, tabla de embutido con patatas y postres de chocolate).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs asador-o-marco-da-legua   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
