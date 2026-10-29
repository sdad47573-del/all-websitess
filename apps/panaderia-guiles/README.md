# Panadería Guiles

Web informativa de **Panadería Guiles**, panadería y confitería en la calle Virgen de la
Fuensanta, 26 — Cruz de Humilladero (29007 Málaga).

- Ficha de Google Maps: [Panadería Guiles](https://www.google.com/maps/place/Panader%C3%ADa+Guiles/@36.7144126,-4.4453283,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f771699667af:0x9c049d63eec873fd!8m2!3d36.7144126!4d-4.4453283!16s%2Fg%2F11g8kt0tjy?hl=es)
- Coordenadas: 36.7144126, -4.4453283 · Place ID `ChIJr2eWaXH3cg0R_XPI7mOdBJw`
- Teléfono: 609 23 96 52 · Plus Code `8C8QPH73+QV`

## Qué hay en la ficha

La ficha pública de Google (consultada en octubre de 2026) publica:

- **Nombre**: Panadería Guiles · **Categoría**: Panadería. El rótulo de la fachada añade
  confitería.
- **Dirección**: C. Virgen de la Fuensanta, 26, Cruz de Humilladero, 29007 Málaga.
- **Teléfono**: 609 23 96 52.
- **Valoración**: 4,6 sobre 5 con 15 reseñas.
- **Horario**: lunes 8:00–20:30; de martes a sábado 8:00–14:00 y 17:00–20:30; domingo
  8:00–14:00. Aviso de horario especial el Día de Todos los Santos.
- **Accesibilidad**: acceso para sillas de ruedas.
- **Galería**: cuatro fotos (dos vitrinas, la fachada y una persona en la acera).

No publica **web, redes sociales, descripción del negocio, carta ni precios**. La web no
inventa esos datos.

## Reseñas

Google destaca dos reseñas: una de cinco estrellas sobre las empanadas y los dulces, y otra de
una estrella que cuenta una visita en falso por el horario. La web resume ambas con palabras
propias, sin ocultar la negativa, y enlaza a la ficha para leerlas completas.

## Imágenes

Las cuatro fotos se descargaron con `scripts/fetch-maps-photos.mjs`. La web usa tres: las dos
vitrinas y la fachada. **La cuarta se descarta** porque muestra a una persona identificable en
primer plano; no se publica la imagen de nadie sin su permiso. Las fuentes se recomprimen antes
de compilar. `public/og.jpg` (1200×630) es una composición tipográfica con los datos.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
  data/site.ts        ficha, horario, reseñas resumidas y FAQ
  pages/index.astro   portada
  pages/aviso-legal.astro
  styles/global.css   azul marino, mantequilla y hueso
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
- Confirmar horario y teléfono con el establecimiento.
- Si el local quiere publicar carta o precios, añadirlos entonces.

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
