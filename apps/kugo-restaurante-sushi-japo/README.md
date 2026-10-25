# KUGO Restaurante Sushi & Japo · web (Astro)

Web de una sola página para **KUGO Restaurante Sushi & Japo**, restaurante de sushi y cocina
japonesa en Es Caló, en la bahía de Sant Antoni (Sant Josep de sa Talaia, Ibiza).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «sushi Sant Antoni», «KUGO Ibiza», «sushi a domicilio
Ibiza», «rolls de autor Ibiza» o «comer japonés en Ibiza», y galería con las fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter kugo-restaurante-sushi-japo dev      # http://localhost:4321
bun run --filter kugo-restaurante-sushi-japo typecheck
bun run --filter kugo-restaurante-sushi-japo build
bun run --filter kugo-restaurante-sushi-japo preview
```

El dominio provisional del `site` es `https://kugo-restaurante-sushi-japo.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la bandeja de
  rolls.

## Datos de partida

Ficha de Google Maps: `KUGO RESTAURANTE SUSHI & JAPO`, 38.9674759,1.2945592, feature
`0x129949379228e067:0xb380005d9b36969f`. De ahí salen la dirección, el teléfono (696 56 68 49), la
nota (4,9 con 1.642 reseñas), la categoría (restaurante de sushi), el horario (todos los días de
18:00 a 23:30; martes cerrado), las reseñas, la accesibilidad y la descripción del propio negocio.

Esa descripción es la fuente de la propuesta: sushi en la bahía de Sant Antoni, pedidos para recoger
y entrega a domicilio, catering y «productos frescos y locales».

**La ficha no publica carta ni precios**: la sección «La carta» recoge solo lo que se ve en las fotos
del perfil (rolls flameados, uramaki de salmón, rolls de langostino en tempura, rolls de mango y de
anguila, nigiri, bandejas, cajas para llevar y gyozas) y lo que citan las reseñas (soft crab roll con
atún, uramaki de salmón picante y de langostino en tempura).

## Fotos

```bash
node scripts/fetch-maps-photos.mjs kugo-restaurante-sushi-japo   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
