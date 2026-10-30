# Panadería y Confitería Loli

Web informativa de **Panadería y Confitería Loli**, panadería y confitería en la carretera de
Madrid, 28 (14610 Córdoba).

- Ficha de Google Maps: [Panaderia Y Confiteria Loli](https://www.google.com/maps/place/Panaderia+Y+Confiteria+Loli/@37.9312086,-4.6755917,17z)
- Coordenadas: 37.9312086, -4.6755917 · Place ID `ChIJCxgHhAjhbA0ROit_KKX-ENk`
- Plus Code: `8C9QW8JF+FQ`

## Qué publica la ficha

Datos consultados en octubre de 2026:

- **Nombre**: Panadería y Confitería Loli (la ficha lo escribe sin tildes).
- **Dirección**: Ctra. de Madrid, 28, 14610 Córdoba.
- **Teléfono**: 625 41 07 43.
- **Categoría**: Panadería; el nombre añade confitería.
- **Valoración**: 4,5 sobre 5 con 80 reseñas.
- **Horario**: L–V 6:00–14:30; sábado 7:00–14:30; domingo 9:00–14:30. Aviso de horario
  especial el Día de Todos los Santos.
- **Galería**: fotos del perfil de Google Maps.

No publica **descripción del negocio, web, redes, carta, precios, métodos de pago,
reparto ni datos de accesibilidad**. La web no inventa esos datos.

## Imágenes

Las fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`; el manifiesto queda en `.maps-manifest.json`.
`public/og.jpg` (1200×630) es una composición con la foto de la fachada.

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
