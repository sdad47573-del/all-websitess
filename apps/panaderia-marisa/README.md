# Panadería Marisa

Web informativa de **Panadería Marisa**, panadería y charcutería en la calle Frigiliana, 10
— Carretera de Cádiz (29004 Málaga).

- Ficha de Google Maps: [Panadería Marisa](https://www.google.com/maps/place/Panader%C3%ADa+Marisa/@36.6972301,-4.4471959,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9cfca13712b:0xce67dfb5d11125d0!8m2!3d36.6972301!4d-4.4471959!16s%2Fg%2F11y_99ty5x?hl=es)
- Coordenadas: 36.6972301, -4.4471959 · Place ID `ChIJK3ETys_5cg0R0CUR0bXfZ84`
- Plus Code: `8C8QMHW3+V4`

## Qué hay en la ficha

La ficha pública de Google (consultada en octubre de 2026) publica:

- **Nombre**: Panadería Marisa.
- **Dirección**: C. Frigiliana, 10, Carretera de Cádiz, 29004 Málaga.
- **Teléfono**: 624 39 15 11.
- **Categoría**: Panadería. La fachada añade charcutería y la galería muestra una tienda de
  alimentación.
- **Valoración**: 5,0 sobre 5 con 13 reseñas.
- **Horario**: lunes a jueves 7:30–15:00 y 17:00–21:00; viernes 7:30–15:00;
  sábado 8:30–14:30; domingo 8:30–15:00. Aviso de horario especial el Día de Todos los Santos.
- **Accesibilidad**: acceso para sillas de ruedas.
- **Descripción del propio negocio**: panes de masa madre y ecológicos, galletas de espelta
  sarraceno, charcutería de pueblo y quesos.
- **Galería**: diez fotos (rótulo, interior, bollería, quesos y charcutería, galletas, miel,
  aceite, salsas, bebidas).

No publica **página web, redes sociales, carta ni precios**. La web no inventa esos datos.

## Imágenes

Las diez fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`. El manifiesto de descarga queda en `.maps-manifest.json`.
`public/og.jpg` (1200×630) es una composición con la foto de la fachada y los datos de la ficha.

## Estructura

```
src/
  assets/fotos/       diez fotos de la galería de Google
  data/site.ts        datos de la ficha, horario, reseñas, textos y FAQ
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
