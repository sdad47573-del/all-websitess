# Panadería La Paz · Horno de leña

Web informativa de **Panadería La Paz**, horno de leña en la carretera de Madrid, 36 (Alcolea,
14610 Córdoba).

- Ficha de Google Maps: [Panadería La Paz- Horno de leña](https://www.google.com/maps/place/Panader%C3%ADa+La+Paz-+Horno+de+le%C3%B1a/@37.9314156,-4.6752266,17z)
- Coordenadas: 37.9314156, -4.6752266 · Place ID `ChIJSavKjwjhbA0R6nvhvHvA_VE`
- Plus Code: `8C9QW8JF+HW`

## Qué publica la ficha

Datos consultados en octubre de 2026:

- **Nombre**: Panadería La Paz- Horno de leña.
- **Dirección**: Ctra. de Madrid, 36, Alcolea, 14610 Córdoba.
- **Teléfono**: 655 51 04 27 (móvil).
- **Categoría**: Panadería.
- **Valoración**: 5 sobre 5 con 4 reseñas.
- **Horario**: todos los días, de 10:15 a 14:30. Aviso de horario especial el Día de Todos los
  Santos (1 de noviembre).
- **Galería**: 4 fotos descargadas del perfil de Google Maps.
- **Accesibilidad**: sin datos; la ficha no publica atributos.

La ficha no publica descripción, web, correo, redes, carta, precios, métodos de pago ni reparto.
Google devuelve el texto de dos de las cuatro reseñas: «El mejor pan que e probado hace tiempo» y
«Productos de gran calidad», que se reproducen tal cual.

## Imágenes

Las fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`; el manifiesto queda en `.maps-manifest.json`. Son cuatro fotos de
móvil: el panadero con una pieza grande de pan, el mostrador, la fachada y el pan en el escaparate.
`public/og.jpg` (1200×630) es una composición con la foto del panadero.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
  data/site.ts        datos de la ficha, horario, pan, reseñas y FAQ
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
- Confirmar horario y festivos (el aviso de Todos los Santos aparece en la ficha).
- Si el negocio publica carta, precios o accesibilidad, actualizar `site.ts`, la portada, el
  JSON-LD y las FAQ.
