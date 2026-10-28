# Delta Panadería

Web informativa de una panadería con obrador y despensa en Bailén-Miraflores,
construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Delta Panadería
- **Dirección:** C. Blas de Lezo, 3, Loc 1 · Bailén-Miraflores · 29011 Málaga
- **Teléfono:** 641 52 64 04
- **Google:** 4,9/5 con 42 reseñas · [ficha](https://www.google.com/maps/place/Delta+Panader%C3%ADa/@36.727455,-4.4350511,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
dirección, teléfono, valoración, reseñas, horario, accesibilidad, descripción del
negocio y fotografías.

La ficha **no publica carta ni precios**, así que la web no incluye importes. El
mostrador recoge solo lo que enumera la descripción (pan tradicional,
especialidades integrales, productos de temporada) y lo que se ve en las fotos
(quesadas y tartas de fruta en la vitrina, nevera de refrescos, estanterías de
despensa).

«La tarta de la madre de Cris» aparece en un cartel de la vitrina como producto
«de venta aquí»; la web lo presenta así, sin atribuir su elaboración a Delta.

## Fotos

Las 10 imágenes se descargaron de la galería del perfil:

```bash
node scripts/fetch-maps-photos.mjs delta-panaderia
```

La vitrina de tartas es la portada y el `og.jpg`. La galería usa nueve: fachada
de día y de noche, obrador con el horno Nerone, quesadas, nevera, despensa,
escaparate con el cartel, detalle del rótulo y la caja de La tarta.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   crema, carbón y amarillo de obrador
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
- Confirmar con el establecimiento horario, surtido y precios.
- El dominio previsto es `https://delta-panaderia.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
