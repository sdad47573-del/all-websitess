# Asador Pineda

Web informativa de **Asador Pineda**, asador y restaurante de comida para llevar en la
calle Manrique, 19 — Distrito Centro (29013 Málaga).

- Ficha de Google Maps: [Asador Pineda](https://www.google.com/maps/place/Asador+Pineda/@36.7297689,-4.4155749,20z/data=!4m6!3m5!1s0xd72f7c6ffcada2b:0x3f1a7252ecd3331f!8m2!3d36.7297689!4d-4.4155749!16s%2Fg%2F11bycl34bg?hl=es)
- Coordenadas: 36.7297689, -4.4155749 · Place ID `ChIJK9rK_8b3cg0RHzPT7FJyGj8`
- Plus Code: `8C8QPHHM+WQ`

## Qué hay en la ficha

La ficha pública de Google (consultada en octubre de 2026) publica:

- **Nombre**: Asador Pineda.
- **Dirección**: C. Manrique, 19, Distrito Centro, 29013 Málaga.
- **Teléfono**: 952 65 40 16.
- **Categorías**: Restaurante y restaurante de comida para llevar.
- **Valoración**: 4,5 sobre 5 con 324 reseñas.
- **Horario**: todos los días, 10:00–16:00. Aviso de horario especial el Día de Todos los Santos.
- **Accesibilidad**: acceso para sillas de ruedas; sin aparcamiento ni asientos adaptados.
- **Descripción del propio negocio**: «Los mejores pollos asados de Málaga y comida casera».
- **Galería**: diez fotos (fachada, interior, mostrador, pollo asado, bandejas, aceitunas y vinos).

No publica **página web, redes sociales, carta ni precios**. La web no inventa esos datos.

## Imágenes

Las diez fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`. El manifiesto de descarga queda en `.maps-manifest.json`.
La web usa siete: fachada, interior, pollo, bandeja, trinchado, aceitunas y vinos.
`public/og.jpg` (1200×630) es una composición con la foto de la fachada.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
  data/site.ts        datos de la ficha, horario, reseñas, menú, textos y FAQ
  pages/index.astro   portada
  pages/aviso-legal.astro
  styles/global.css
public/               favicon.svg, robots.txt, og.jpg
```

Sigue el patrón del monorepo: config compartida `@astro-config` (con sitemap), `vercel.json` con
el `ignoreCommand` común, `netlify.toml` y datos en `src/data/site.ts`.

## Desarrollo

```bash
bun install
bun run dev
bun run build
bun run typecheck
```

## Antes de publicar

- Completar **NIF/CIF y razón social** en `src/pages/aviso-legal.astro`.
- Confirmar el horario vigente y los festivos, y actualizar `HORARIO` en `src/data/site.ts` si
  cambia.
- Si el establecimiento publica carta, precios o redes sociales en Google, añadirlos a la web.

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
