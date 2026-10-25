# Chamonix Restaurante · web (Astro)

Web de una sola página para **Chamonix Restaurante**, restaurante de cocina española y
mediterránea con parrilla en Avinguda d'Isidor Macabich, 15 (Sant Antoni de Portmany, Ibiza).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Sant Antoni de Portmany», «carnes a la brasa
Ibiza», «parrilla Sant Antoni» o «desayunos Ibiza», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter chamonix-restaurante dev      # http://localhost:4321
bun run --filter chamonix-restaurante typecheck
bun run --filter chamonix-restaurante build
bun run --filter chamonix-restaurante preview
```

El dominio provisional del `site` es `https://chamonix-restaurante.vercel.app`: **cámbialo aquí, en
`public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps, carta
  con precios y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada de la terraza.

## Datos de partida

Ficha de Google Maps: `Chamonix Restaurante`, 38.9852517,1.2986321, feature
`0x129936035310f9d3:0x694d36fa09dce93f`. De ahí salen la dirección, el teléfono (971 34 07 17), la
nota (4,2 con 586 reseñas), las categorías (restaurante de cocina española y restaurante
mediterráneo), el horario (todos los días de 8:00 a 24:00), las reseñas y la accesibilidad (asientos
adaptados para sillas de ruedas).

La ficha no tiene descripción del negocio. El texto se apoya en lo visible en las fotos del perfil:
la pared de piedra, los ventanales de madera, la terraza con toldos blancos, el rótulo vertical
«CHAMONIX», el cartel «Restaurante · carnes a la brasa» y «Chamonix Grill», la pizarra del menú del
día y la carta impresa.

**La carta sale de la fotografía de la carta impresa** que hay en la galería del perfil
(`chamonix-restaurante-apaisada-10.jpg`): entrantes, ensaladas y platos principales con sus precios.
Los dos platos con el precio corregido a mano en la foto (gambas a la plancha y entraña de Angus)
figuran como «precio a consultar» en lugar de inventar la corrección. El menú del día cambia cada
jornada y no se publica: la web solo indica que está en la pizarra de la fachada.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs chamonix-restaurante   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar las
fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
