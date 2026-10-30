# Panadería cafetería Suarez

Web informativa del local de la plaza de la Trinidad (Córdoba), construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería cafetería Suarez
- **Dirección:** Pl. de la Trinidad · Centro · 14003 Córdoba
- **Horario:** no publicado en la ficha
- **Teléfono:** no publicado en la ficha
- **Google:** sin reseñas publicadas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+cafeter%C3%ADa+Suarez/@37.882498,-4.7832049,17z)

## La ficha más vacía de la serie

De esta ficha no se puede sacar casi nada, y la web lo refleja en vez de taparlo:

- **Sin fotos.** Se lanzó `scripts/fetch-maps-photos.mjs` y se revisó la respuesta
  del endpoint de detalle: cero imágenes de usuario, solo una referencia de Street
  View de la plaza. La web va sin galería y la portada es un cartel tipográfico con
  una ficha de datos.
- **Sin horario.** El bloque de horarios llega vacío; la tabla tiene una única fila
  «No publicado en Google».
- **Sin teléfono.** No hay número en la ficha, así que no hay botón de llamada ni
  `tel:` en el HTML.
- **Sin reseñas.** La ficha no tiene ninguna opinión publicada, así que no hay banda
  de nota ni `aggregateRating` en el JSON-LD.
- Tampoco publica descripción, carta, precios ni web propia, ni número de portal.

## Datos que sí constan

Nombre, categoría («Cafetería»), dirección (plaza de la Trinidad, Centro, 14003) y
accesibilidad (hay acceso para sillas de ruedas). Nada más.

## Criterio

La web no inventa horario, teléfono, precios ni valoración, y no copia los de otros
locales de la plaza. El JSON-LD se limita a nombre, dirección, geo, `hasMap` e
identificadores: sin `telephone`, sin `openingHoursSpecification` y sin
`aggregateRating`, porque no hay datos que declarar.

## Estructura

```
src/
  data/site.ts        ficha, horario (vacío), puntos que constan y FAQ
  pages/index.astro   portada tipográfica + JSON-LD (CafeOrCoffeeShop/Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   crema, azul cobalto y azafrán
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
- Conseguir del negocio horario, teléfono y fotos propias: es lo que más falta.
- El dominio previsto es `https://panaderia-suarez.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
