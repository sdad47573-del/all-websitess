# Churrería-confitería-panadería Juan

Web informativa de la churrería del barrio Noroeste (Córdoba), construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Churrería-confitería-panadería Juan
- **Zona:** barrio Noroeste · 14011 Córdoba (la ficha **no publica calle**)
- **Teléfono:** **no publicado** en la ficha de Google
- **Google:** 3,9/5 con 39 reseñas · [ficha](https://www.google.com/maps/place/Churrer%C3%ADa-confiter%C3%ADa-panader%C3%ADa+Juan/@37.8917444,-4.7993319,17z)
- **Horario publicado:** todos los días, 6:00–20:00
- **Accesibilidad (según Google):** acceso para sillas de ruedas; sin aparcamiento adaptado

## Datos y criterio

Todo lo que aparece sale de la ficha pública de Google Maps (consulta de octubre
de 2026): nombre, categoría («Panadería»), zona, valoración, reseñas, horario,
accesibilidad y fotos.

Dos huecos que la ficha no rellena y que la web **tampoco inventa**:

- **No hay calle.** Google solo publica «Noroeste» y el código postal 14011. La
  dirección del sitio muestra esa zona y el mapa apunta a las coordenadas de la
  ficha; el aviso legal lo deja anotado como dato pendiente.
- **No hay teléfono.** La barra superior usa un botón de «Cómo llegar» en lugar
  del teléfono, y la sección de visita enlaza la ficha de Google como contacto.

Tampoco hay carta, precios ni web propia. Los textos de producto se apoyan en las
fotos (churros, porras y café con leche) y en el propio nombre del negocio.

No se citan reseñas de texto porque la ficha solo expone el recuento. La nota
aparece con su media real (3,9) y su número de reseñas (39).

## Fotos

Las 5 imágenes de la galería se descargaron con `scripts/fetch-maps-photos.mjs`:

```bash
node scripts/fetch-maps-photos.mjs churreria-juan
```

Se usan tres: los churros con el café (portada, `apaisada-02`), la ración de
porras (`vertical-01`) y el detalle de la miga (`vertical-05`). Las fotos
`vertical-03` (terraza con viandantes y vehículos) y `vertical-04` (mostrador con
una persona identificable) no se publican por privacidad.

## Estructura

```
src/
  data/site.ts        ficha, horario, puntos de la casa y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta de freiduría: crema, espresso, dorado y ladrillo
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

- Conseguir la **calle** y el **teléfono** del establecimiento (es lo que más
  falta) y actualizar `src/data/site.ts`; con teléfono, la barra y el botón
  móvil de llamada vuelven solos.
- Completar en `/aviso-legal` el NIF/CIF, la razón social, el domicilio y el
  correo del titular.
- El dominio previsto es `https://churreria-juan.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
