# Panadería Manuela Martín Vargas

Web informativa de la panadería de la plaza de Vista Alegre (Córdoba), construida
con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería Manuela Martín Vargas
- **Dirección:** Pl. de Vista Alegre, 1 · Poniente Sur · 14004 Córdoba
- **Teléfono:** 957 27 38 03 (publicado en la ficha de Google)
- **Horario:** no publicado en la ficha
- **Google:** 3,0/5 con 1 reseña · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Manuela+Mart%C3%ADn+Vargas/@37.8772419,-4.7910638,17z)

## Dos huecos que condicionan la web

1. **No hay fotos.** Se lanzó `scripts/fetch-maps-photos.mjs` y se revisó la
   respuesta del endpoint de detalle de Maps: cero imágenes de usuario, solo una
   referencia de Street View de la plaza. La web va **sin galería** y la portada es
   un cartel tipográfico propio. No se usan fotos de otras panaderías.
2. **No hay horario.** El bloque de horarios de la ficha llega vacío y no aparece
   ningún día en la respuesta. La tabla de la web tiene una sola fila que dice
   «No publicado en Google» y la nota remite al teléfono. No se inventan horas ni se
   copian de comercios vecinos.

Tampoco publica la ficha descripción, carta, precios ni web propia.

## Datos y criterio

De la ficha pública (consulta de octubre de 2026) salen: nombre, categoría
(«Panadería»), dirección, teléfono, valoración y reseñas, y el único dato de
accesibilidad (no hay aparcamiento adaptado).

- La nota aparece con su media real (3,0) y su recuento (**1 reseña**), advirtiendo
  de que una sola opinión no describe el negocio. No se reproduce su texto.
- No se afirma qué productos hay ni cuánto cuestan.
- El JSON-LD no incluye `openingHoursSpecification` porque no hay horario que
  declarar; sí incluye `aggregateRating` y el teléfono.

## Estructura

```
src/
  data/site.ts        ficha, horario (vacío), puntos que constan y FAQ
  pages/index.astro   portada tipográfica + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   crema, verde bosque, trigo y barro
public/               favicon, robots.txt, og.svg y og.png
```

No hay carpeta `src/assets/` porque no hay fotos que optimizar.

## Comandos

```bash
bun run dev
bun run build
bun run preview
bun run typecheck
```

## Pendiente antes de publicar

- Completar en `/aviso-legal` el NIF/CIF, la razón social y el correo del titular.
- Conseguir del negocio el **horario real** y 3-4 fotos propias: son los dos datos
  que la ficha no publica y que más se echan en falta.
- El dominio previsto es `https://panaderia-manuela.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
