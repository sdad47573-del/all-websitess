# Panadería Carmelitas

Web informativa de la panadería de la calle Torremolinos (Córdoba), construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería Carmelitas
- **Dirección:** C. Torremolinos, 27 · Distrito Sur · 14013 Córdoba
- **Teléfono:** 957 46 22 90 (publicado en la ficha de Google)
- **Horario publicado:** todos los días, 8:00–21:00
- **Google:** 3,5/5 con 4 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Carmelitas/@37.8640164,-4.7740626,17z)

## Fotos: la ficha no tiene ninguna

Es el dato que condiciona esta web. Se lanzó `scripts/fetch-maps-photos.mjs` y se
revisó a mano la respuesta del endpoint de detalle de Google Maps: el bloque de
imágenes no contiene ninguna foto de usuario, solo una referencia de Street View
de la calle. También se probó la ficha y el buscador de Maps en HTML y no hay
ninguna URL de la CDN de fotos.

Por eso la portada usa un **cartel tipográfico** (monograma, nombre, horario,
dirección, teléfono y nota) en lugar de una foto, y la web **no tiene galería**.
No se han usado imágenes de otros establecimientos ni bancos de imágenes: serían
fotos falsas de este negocio.

Si el local facilita fotos propias, se añaden a `src/assets/fotos/` y se monta la
galería con `LocalGallery`, como en el resto de webs del monorepo.

## Datos y criterio

Todo lo que aparece sale de la ficha pública de Google Maps (consulta de octubre
de 2026): nombre, categoría («Panadería»), dirección, teléfono, horario,
valoración y número de reseñas.

La ficha **no publica descripción, carta, precios, web propia, accesibilidad ni
fotos**, así que la web no afirma qué productos hay ni cuánto cuestan: lo remite
al teléfono y al mostrador. La nota aparece con su media real (3,5) y su recuento
(4 reseñas), advirtiendo de que es una muestra muy pequeña; no se reproducen
textos de reseñas.

El aviso de Google para el 1 de noviembre (Día de Todos los Santos, «el horario
podría ser diferente») se recoge en el horario y en las preguntas frecuentes.

## Estructura

```
src/
  data/site.ts        ficha, horario, puntos que constan y FAQ
  pages/index.astro   portada con cartel tipográfico + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta de panadería de barrio: papel, terracota y oliva
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
- Pedir al establecimiento 3-4 fotos propias (fachada, mostrador y productos) para
  sustituir el cartel de portada y añadir galería.
- Confirmar catálogo, precios y si hacen encargos: son los datos que la ficha no
  publica.
- El dominio previsto es `https://panaderia-carmelitas.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
