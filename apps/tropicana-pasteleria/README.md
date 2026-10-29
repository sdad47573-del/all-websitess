# Tropicana Pastelería

Web informativa de **Tropicana Pastelería**, pastelería y panadería en la calle Nuzas, 22
— Teatinos-Universidad (29010 Málaga).

- Ficha de Google Maps: [Tropicana Pastelería](https://www.google.com/maps/place/Tropicana+Pasteler%C3%ADa/@36.7309051,-4.469115,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73aade77037:0xdedd9b98fad3b8c0!8m2!3d36.7309051!4d-4.469115!16s%2Fg%2F1ttpcnf_?hl=es)
- Coordenadas: 36.7309051, -4.469115 · Place ID `ChIJN3DnrTr3cg0RwLjT-pib3d4`
- Plus Code: `8C8QPGJJ+99`

## Qué hay en la ficha

La ficha pública de Google (consultada en octubre de 2026) publica:

- **Nombre**: Tropicana Pastelería.
- **Dirección**: C. Nuzas, 22, Teatinos-Universidad, 29010 Málaga.
- **Teléfono**: 697 56 30 66.
- **Categorías**: Panadería y pastelería. La descripción del negocio dice «Boutique de la
  Panadería».
- **Valoración**: 4,4 sobre 5 con 52 reseñas.
- **Horario**: lunes a viernes 8:00–20:00; sábado y domingo 8:00–19:00.
  Aviso de horario especial el Día de Todos los Santos.
- **Accesibilidad**: acceso para sillas de ruedas; sin aparcamiento adaptado.
- **Galería**: ocho fotos (fachada, esquina, galletas decoradas y dulces). En la web se usan
  siete; la restante es un escaparate ajeno al negocio.

No publica **página web, redes sociales, carta ni precios**. La web no inventa esos datos.

## Imágenes

Las ocho fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`. El manifiesto de descarga queda en `.maps-manifest.json`.
`public/og.jpg` (1200×630) es una composición con la foto de la fachada.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
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
