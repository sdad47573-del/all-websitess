# Panadería Roldán García

Web informativa de **Panadería Roldán García**, panadería en la avenida del Gran Capitán, 17
(Centro, 14008 Córdoba).

- Ficha de Google Maps: [Panadería Roldán García](https://www.google.com/maps/place/Panader%C3%ADa+Rold%C3%A1n+Garc%C3%ADa/@37.8895144,-4.7830596,17z)
- Coordenadas: 37.8895144, -4.7830596 · Place ID `ChIJpf_GQmTfbA0RSgdeSypv3jA`
- Plus Code: `8C9QV6Q8+RQ`

## Qué publica la ficha

Datos consultados en octubre de 2026:

- **Nombre**: Panadería Roldán García.
- **Dirección**: Av. del Gran Capitán, 17, Centro, 14008 Córdoba.
- **Teléfono**: 957 49 01 76.
- **Categoría**: Panadería.
- **Valoración**: 4 sobre 5 con 70 reseñas.
- **Horario**: L–V 9:00–14:30; sábado y domingo cerrado. Aviso de horario especial el Día de
  Todos los Santos.
- **Accesibilidad**: acceso para sillas de ruedas; sin aparcamiento adaptado.
- **Galería**: fotos del perfil de Google Maps.

No publica **descripción del negocio, web, redes, carta, precios, métodos de pago ni
reparto**. La web no inventa esos datos.

## Imágenes

Las fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`; el manifiesto queda en `.maps-manifest.json`. La web usa 9 de
las 10 descargadas (se descartó una captura de TikTok con marca de agua).
`public/og.jpg` (1200×630) es una composición con una foto de la vitrina de dulces.

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
