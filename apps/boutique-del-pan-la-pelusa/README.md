# Boutique del Pan la Pelusa C.B.

Web informativa de **Boutique del Pan la Pelusa C.B.**, panadería en la Plaza Basconia, 1
— Bailén-Miraflores (29010 Málaga).

- Ficha de Google Maps: [Boutique del Pan la Pelusa C.B.](https://www.google.com/maps/place/Boutique+del+Pan+la+Pelusa+C.B./@36.7227785,-4.4371933,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a0428e59a5:0x3b6e75d15f271808!8m2!3d36.7227785!4d-4.4371933!16s%2Fg%2F1tz77bb3?hl=es)
- Coordenadas: 36.7227785, -4.4371933 · Place ID `ChIJpVmOQqD3cg0RCBgnX9F1bjs`
- Plus Code: `8C8QPHF7+44`

## Qué hay en la ficha

La ficha pública de Google (consultada en octubre de 2026) publica:

- **Nombre**: Boutique del Pan la Pelusa C.B.
- **Dirección**: Plaza Basconia, 1, 1ºE, Bailén-Miraflores, 29010 Málaga.
- **Teléfono**: 952 61 45 99.
- **Categoría**: Panadería.
- **Valoración**: 4,3 sobre 5 con 20 reseñas.
- **Horario**: lunes a sábado 8:30–14:30; domingo 8:30–14:00.
  Aviso de horario especial el Día de Todos los Santos.
- **Accesibilidad**: acceso para sillas de ruedas; sin aparcamiento adaptado.
- **Galería**: siete fotos, la mayoría carteles de la puerta. La web usa cuatro: fachada,
  mostrador, un pan de cerca y un rosco de Reyes.

No publica **descripción del negocio, página web, redes sociales, carta ni precios**. La web no
inventa esos datos; solo cita el pan y las empanadas que mencionan las reseñas.

## Imágenes

Las siete fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
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
