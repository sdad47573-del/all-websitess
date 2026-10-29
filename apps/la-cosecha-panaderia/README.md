# La Cosecha · Panadería

Web informativa de **La Cosecha - Panadería**, panadería en la avenida de los Almogávares, 42
(Nte. Sierra, 14006 Córdoba).

- Ficha de Google Maps: [La Cosecha - Panadería](https://www.google.com/maps/place/La+Cosecha+-+Panader%C3%ADa/@37.8971392,-4.7769757,17z)
- Coordenadas: 37.8971392, -4.7769757 · Place ID `ChIJ1Yc3OVffbA0RNV8Ot48_9lc`
- Plus Code: `8C9QV6WF+V6`

## Qué publica la ficha

Datos consultados en octubre de 2026:

- **Nombre**: La Cosecha - Panadería.
- **Dirección**: Av. de los Almogávares, 42, Nte. Sierra, 14006 Córdoba.
- **Teléfono**: 857 87 03 72.
- **Categoría**: Panadería.
- **Valoración**: 3,8 sobre 5 con 16 reseñas.
- **Horario**: todos los días de 8:00 a 21:00. Aviso de horario especial el Día de Todos los
  Santos.
- **Accesibilidad**: acceso para sillas de ruedas; sin aparcamiento adaptado.

No publica **descripción del negocio, web, redes, carta, precios, métodos de pago,
reparto ni fotografías del local**. La web no inventa esos datos.

## Imágenes

La ficha pública de Google **no incluye ninguna foto del establecimiento**. Se reintentó la
descarga con `scripts/fetch-maps-photos.mjs` y el endpoint no devolvió ninguna imagen, así que
la web usa ilustraciones SVG propias en `public/fotos/` (`trigo.svg`, `hogazas.svg`,
`vitrina.svg`, `dulces.svg`) como marcadores provisionales. `public/og.jpg` (1200×630) es una
composición con la ilustración del trigo.

Antes de publicar, sustituir las ilustraciones por fotografías propias del obrador y del
mostrador, y actualizar los textos alternativos. Si el titular autoriza las fotos de su ficha
de Google, pueden descargarse con el script del monorepo.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
  data/site.ts        datos de la ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada
  pages/aviso-legal.astro
  styles/global.css
public/               favicon.svg, robots.txt, og.jpg
```

Sigue el patrón del monorepo: config compartida `@astro-config` (con sitemap), `LocalSeo` de
`@astro-components`, `vercel.json` con el `ignoreCommand` común y datos en `src/data/site.ts`.

## Desarrollo

```bash
bun install
bun run dev
bun run build
bun run typecheck
```

## Antes de publicar

- Completar **razón social y NIF/CIF** en `src/pages/aviso-legal.astro`.
- Confirmar horario y festivos antes de difundir.
- Si el establecimiento publica carta, web o redes sociales en Google, añadirlos.

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
