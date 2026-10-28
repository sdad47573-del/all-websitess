# Panadería Polvillo

Web informativa de una panadería-pastelería de barrio en Málaga, construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería Polvillo
- **Dirección:** C. del Ciprés · Bailén-Miraflores · 29010 Málaga
- **Teléfono:** 610 00 85 61
- **Google:** 4,4/5 con 24 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Polvillo/@36.7247446,-4.4481657,17z)

## Datos y criterio

Todo lo que aparece en la web sale de la ficha pública de Google Maps (consulta
de octubre de 2026): dirección, categoría, teléfono, valoración, reseñas, horario,
accesibilidad y fotos.

La ficha **no publica carta, precios ni métodos de pago**, así que la web no los
inventa. El mostrador recoge solo lo que dice la descripción del negocio
(«hacemos tartas, palmeras gigantes»), lo que citan las reseñas y lo que se ve en
las fotos del perfil.

Solo se reproducen las dos reseñas destacadas de la ficha, literales y de cinco
estrellas; no se atribuye al local ninguna reseña de más.

## Fotos

Las 10 imágenes de la ficha se descargaron con `scripts/fetch-maps-photos.mjs`
desde la raíz del monorepo:

```bash
node scripts/fetch-maps-photos.mjs panaderia-polvillo
```

La vitrina del mostrador es la portada (también `public/og.jpg`); las otras nueve
forman la galería, con sus pies de foto.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta y tipografías propias
  assets/fotos/       fotos de Google (AVIF en build)
public/               favicon, robots.txt y og.jpg
```

## Comandos

```bash
bun run dev
bun run build
bun run preview
bun run typecheck
```

## Pendiente antes de publicar

- Completar en `/aviso-legal` el NIF/CIF, la razón social y el correo del titular.
- Confirmar con el establecimiento horario, surtido, encargos de tartas y
  accesibilidad antes de difundir.
- El dominio previsto es `https://panaderia-polvillo.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
