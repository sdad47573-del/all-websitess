# Panadería Fripan

Web informativa de la panadería de la calle Ingeniero Ribera (Córdoba),
construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería Fripan
- **Dirección:** C. Ing. Ribera, 10 · 14013 Córdoba
- **Teléfono:** 957 42 17 13 (publicado en la ficha de Google)
- **Google:** 3,7/5 con 33 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Fripan/@37.8460464,-4.7989501,17z)
- **Horario:** **no publicado** en la ficha. La web lo dice y remite al teléfono.

## Datos y criterio

Todo lo que aparece en la web sale de la ficha pública de Google Maps (consulta
de octubre de 2026): nombre, categoría, dirección, teléfono, valoración, reseñas
y fotos. La ficha no incluye descripción del negocio.

La ficha **no publica horario, carta, precios, web propia ni datos de
accesibilidad**, y **no confirma si atiende al público**. La web no afirma nada
de eso: la tabla de horario muestra «No publicado en Google» y las preguntas
frecuentes explican cómo confirmarlo.

Los textos sobre producto se apoyan únicamente en las fotos de la galería
(muffins, croissants, donuts glaseados empaquetados, panecillos rosas y de
chocolate blanco, dulces de coco, rosquillas azucaradas, panecillos con semillas,
bolsas de pan envasado y la puerta de la nave con el cartel «Artesana del Horno»).

No se citan reseñas de texto porque la ficha solo expone el recuento. La nota
aparece con su media real (3,7) y su número de reseñas (33), sin seleccionar las
mejores.

## Fotos

Las 10 imágenes de la galería se descargaron con `scripts/fetch-maps-photos.mjs`
desde la raíz del monorepo:

```bash
node scripts/fetch-maps-photos.mjs panaderia-fripan
```

La portada es la mesa de bollería (`vertical-07`). La galería usa seis fotos: la
mesa con muffins y panecillos, los panecillos glaseados, los croissants, los
donuts empaquetados, la bolsa de rosquillas y la entrada de la nave. No se usan
`vertical-03`, `vertical-06` ni `vertical-08` por repetir encuadres de las
bandejas.

## Estructura

```
src/
  data/site.ts        ficha, horario (no publicado), puntos de la casa y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta de barrio: crema, ciruela, mantequilla y oliva
  assets/fotos/        fotos de Google (AVIF en build)
public/               favicon, robots.txt, og.svg y og.png
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
- Conseguir el horario real y si la nave vende al público: es el dato que más
  falta en la ficha y el que más consulta la gente.
- El dominio previsto es `https://panaderia-fripan.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
