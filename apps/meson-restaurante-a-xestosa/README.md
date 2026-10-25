# Mesón Restaurante A Xestosa · web (Astro)

Web de una sola página para **Mesón Restaurante A Xestosa**, restaurante gallego familiar de Lugar
Cende, 17 (36873 Covelo, Pontevedra), en el valle de Tielas.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «comer en Covelo», «mesón Covelo», «carnes a la brasa
Pontevedra», «santuario da Virxe da Xestosa» o «A Xestosa», y galería con las fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter meson-restaurante-a-xestosa dev      # http://localhost:4321
bun run --filter meson-restaurante-a-xestosa typecheck
bun run --filter meson-restaurante-a-xestosa build
bun run --filter meson-restaurante-a-xestosa preview
```

El dominio provisional del `site` es `https://meson-restaurante-a-xestosa.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
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

Ficha de Google Maps: `Mesón Restaurante A Xestosa`, 42.2923767,-8.3050019, feature
`0xd2f888119e8445d:0x53b7c87bb378cacd`. De ahí salen la dirección, el teléfono (659 51 64 96), la
nota (4,6 con 292 reseñas), la categoría (restaurante gallego), el horario (todos los días de 9:30 a
24:00; miércoles cerrado), las reseñas, la accesibilidad y la descripción del propio negocio.

Esa descripción es la fuente del entorno: el valle de Tielas, el santuario de la Virgen de la
Xestosa, el río con merendero y pozas naturales, las rutas de senderismo por la ruta de las estrellas
y el punto más alto de la provincia de Pontevedra.

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que citan las reseñas
(queso frito, chuletón de vaca, encargos de cochinillo, cabrito y arroces) y lo que cuenta la
descripción del negocio (comida casera, carnes frescas a la brasa, quesos y embutido). Las fotos del
perfil muestran los dos comedores, los chuletones, el cochinillo, el queso frito, la poza natural y
las vistas del valle.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs meson-restaurante-a-xestosa   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
