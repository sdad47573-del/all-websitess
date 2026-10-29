# Cafetería Panadería Margarita

Web informativa de **Cafetería Panadería Margarita**, panadería, pastelería y cafetería
en la calle Corregidor Francisco de Molina, 3 — Cruz de Humilladero (29006 Málaga).

- Ficha de Google Maps: [Cafeteria panaderia margarita](https://www.google.com/maps/place/Cafeteria+panaderia+margarita/@36.7137249,-4.4493173,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f765450e4747:0xe0cbea094c7eb54d!8m2!3d36.7137249!4d-4.4493173!16s%2Fg%2F11ywggpm_c?hl=es)
- Coordenadas: 36.7137249, -4.4493173 · Place ID `ChIJR0cORWX3cg0RTbV-TAnqy-A`
- Plus Code: `8C8QPH72+F7`

## Qué hay en la ficha

La ficha pública de Google (consultada en octubre de 2026) publica:

- **Nombre**: Cafeteria panaderia margarita.
- **Dirección**: C. Corregidor Francisco de Molina, 3, Cruz de Humilladero, 29006 Málaga.
- **Categoría**: Panadería. Los rótulos de la fachada añaden pastelería y cafetería.
- **Valoración**: 5,0 sobre 5 con 2 reseñas.
- **Horario**: lunes a jueves 9:00–17:30; viernes y sábado 9:00–14:30; domingo 9:00–17:30.
  Aviso de horario especial el Día de Todos los Santos.
- **Accesibilidad**: acceso para sillas de ruedas.
- **Descripción del propio negocio**: pan casero hecho todos los días, del día.
- **Galería**: cinco fotos (fachada esquinera, fachada frontal, dos vitrinas y un bocadillo
  con café en la terraza).

No publica **teléfono, web, redes sociales, carta ni precios**. La web no inventa esos datos.

## Imágenes

Las cinco fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`. El manifiesto de descarga queda en `.maps-manifest.json`.
`public/og.jpg` (1200×630) es una composición tipográfica con los datos de la ficha.

## Estructura

```
src/
  assets/fotos/       cinco fotos de la galería de Google
  data/site.ts        datos de la ficha, horario, textos y FAQ
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

- Completar **NIF/CIF, razón social y un canal de contacto** en `src/pages/aviso-legal.astro`.
- Confirmar el horario vigente y los festivos, y actualizar `HORARIO` en `src/data/site.ts` si
  cambia.
- Si el establecimiento publica teléfono o carta en Google, añadirlos a la web.

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
