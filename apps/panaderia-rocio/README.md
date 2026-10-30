# Panadería Rocío

Web informativa de **Panadería Rocío**, panadería y tienda de barrio en la avenida de Carlos III,
28 (Levante, 14014 Córdoba).

- Ficha de Google Maps: [Panadería Rocío](https://www.google.com/maps/place/Panaderia+Roc%C3%ADo/@37.8963752,-4.7590902,17z)
- Coordenadas: 37.8963752, -4.7590902 · Place ID `ChIJMZJUd5rfbA0RNBAXlwWOSxg`
- Plus Code: `8C9QV6WR+H9`

## Qué publica la ficha

Datos consultados en octubre de 2026:

- **Nombre**: Panadería Rocío.
- **Dirección**: Av. de Carlos III, 28, Levante, 14014 Córdoba.
- **Categoría**: Panadería.
- **Valoración**: 5 sobre 5 con 5 reseñas.
- **Accesibilidad**: acceso para sillas de ruedas; sin aparcamiento adaptado.
- **Galería**: 9 fotos descargadas del perfil de Google Maps.
- **Horario, teléfono, web, correo y redes**: **no constan**. El perfil tampoco aparece reclamado
  por el negocio.

La ficha no devuelve el texto de las reseñas, solo la media y el número de opiniones, así que la
web no reproduce ninguna. Tampoco publica descripción, carta ni métodos de pago.

## Precios

La portada incluye los precios legibles en los rótulos del escaparate de las fotos de la galería
(barra 0,85 €, barra viena 0,70 €, telera 1,40 €, pan de medio kilo 1,60 €, empanadas 1,80 €,
tortas 1,60 €, entre otros). Se presentan como lo que son —rótulos fotografiados, no carta
oficial— y con el aviso de que pueden cambiar.

## Imágenes

Las fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`; el manifiesto queda en `.maps-manifest.json`.
`public/og.jpg` (1200×630) es una composición con la foto del escaparate.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
  data/site.ts        datos de la ficha, ficha publicada/sin publicar, precios y FAQ
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
- Confirmar horario, precios y surtido con el negocio o en el local.
- Cuando el negocio reclame la ficha y publique horario o teléfono, actualizar `site.ts`, la
  portada, el JSON-LD y las FAQ.
