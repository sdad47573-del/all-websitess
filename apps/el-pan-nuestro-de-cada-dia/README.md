# El Pan Nuestro De Cada Día

Web informativa de **El Pan Nuestro De Cada Día**, panadería con salón en la calle Abén Mazarra,
37 (Nte. Sierra, 14006 Córdoba).

- Ficha de Google Maps: [El Pan Nuestro De Cada Día](https://www.google.com/maps/place/El+Pan+Nuestro+De+Cada+D%C3%ADa/@37.8985662,-4.77426,17z)
- Coordenadas: 37.8985662, -4.77426 · Place ID `ChIJ_-w3CHTfbA0Rg2VkHfPBD0o`
- Plus Code: `8C9QV6XG+C7`

## Qué publica la ficha

Datos consultados en octubre de 2026:

- **Nombre**: El Pan Nuestro De Cada Día.
- **Dirección**: C. Abén Mazarra, 37, Nte. Sierra, 14006 Córdoba.
- **Categoría**: Panadería.
- **Valoración**: 4,6 sobre 5 con 12 reseñas.
- **Horario**: todos los días, de 8:30 a 14:00. Aviso de horario especial el Día de Todos los
  Santos (1 de noviembre).
- **Accesibilidad**: acceso para sillas de ruedas; no indica aparcamiento adaptado.
- **Galería**: 4 fotos descargadas del perfil de Google Maps.

La ficha no publica **teléfono, descripción, web, correo, redes, carta, precios, métodos de pago
ni reparto**, y no aparece reclamada por el negocio. Google devuelve el texto de tres de las doce
reseñas, que se reproducen tal cual.

## Imágenes

Las fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`; el manifiesto queda en `.maps-manifest.json`. Son cuatro fotos
apaisadas: el interior con el mostrador, la vitrina con tortas, el salón con mesas y el mostrador
de pan. `public/og.jpg` (1200×630) es una composición con la foto de las tortas.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
  data/site.ts        datos de la ficha, horario, desayunos, reseñas y FAQ
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

- Completar **razón social, NIF/CIF y un medio de contacto** en `src/pages/aviso-legal.astro`
  (la ficha no publica teléfono, así que el aviso legal no puede ofrecerlo).
- Confirmar horario y festivos (el aviso de Todos los Santos aparece en la ficha).
- Si el negocio reclama la ficha y publica teléfono, carta o precios, actualizar `site.ts`, la
  portada, el JSON-LD y las FAQ.
