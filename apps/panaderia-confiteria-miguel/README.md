# Panadería Confitería Miguel

Web informativa de la panadería-confitería de la calle Libertador Simón Bolívar
(Córdoba), construida con Astro sobre los componentes locales de
`@astro-components`.

- **Establecimiento:** Panadería Confitería Miguel
- **Dirección:** C. Libertador Simón Bolívar, 12 · barrio del Sur · 14013 Córdoba
- **Teléfono:** 957 42 11 23 (publicado en la ficha de Google)
- **Google:** 4,0/5 con 8 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Confiter%C3%ADa+Miguel/@37.8591815,-4.7825141,17z)
- **Horario publicado:** todos los días, 8:00–15:00

## Fotos: la ficha no tiene ninguna

Es el dato que condiciona esta web. Se intentó descargar la galería con
`scripts/fetch-maps-photos.mjs` y se repitió la consulta al endpoint de detalle de
Google Maps tres veces, además del buscador de Maps: el bloque de fotos llega
**vacío**. La ficha pública no publica ninguna imagen del negocio.

Por eso la portada usa un **cartel tipográfico propio** (monograma, nombre,
horario, dirección, teléfono y nota) en lugar de una foto, y la web **no tiene
galería**. No se han usado imágenes de otros establecimientos ni bancos de
imágenes: serían fotos falsas de este negocio.

Si el local facilita fotos propias, se pueden añadir a `src/assets/fotos/` y
montar la galería con `LocalGallery`, como en el resto de webs del monorepo.

## Datos y criterio

Todo lo que aparece sale de la ficha pública de Google Maps (consulta de octubre
de 2026): nombre, categoría («Panadería»), dirección, teléfono, valoración,
reseñas, horario y accesibilidad (solo indica que no hay aparcamiento adaptado).

La ficha **no publica descripción, carta, precios, web propia ni fotos**, así que
la web no afirma qué productos hay ni cuánto cuestan: lo remite al teléfono y al
mostrador. No se citan reseñas de texto porque la ficha solo expone el recuento;
la nota aparece con su media real (4,0) y su número de reseñas (8).

## Estructura

```
src/
  data/site.ts        ficha, horario, puntos que constan y FAQ
  pages/index.astro   portada con cartel tipográfico + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta de confitería: pergamino, vino, rosa y salvia
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
- Confirmar horario, catálogo y si hacen encargos: son los datos que la ficha no
  publica.
- El dominio previsto es `https://panaderia-confiteria-miguel.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
