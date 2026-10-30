# Panadería La Miguita

Web informativa del puesto de panadería del Mercado del Marrubial (Córdoba),
construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería La Miguita
- **Dirección:** Mercado del Marrubial, puesto nº 17 · Av. de Jesús Rescatado, 1 · 14010 Córdoba
- **Teléfono:** 658 39 48 31 (publicado en la ficha de Google)
- **Google:** 5,0/5 con 3 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+La+Miguita/@37.891186,-4.763633,17z)
- **Horario publicado:** lunes a sábado 8:30–14:00 · domingo cerrado

## Datos y criterio

Todo lo que aparece en la web sale de la ficha pública de Google Maps (consulta
de octubre de 2026): nombre, categoría, dirección, teléfono, valoración, reseñas,
horario y fotos.

La ficha **no publica web propia, carta, precios ni datos de accesibilidad**, así
que la web no los afirma. Los textos sobre productos se apoyan en lo que muestran
las fotos de la propia galería (barras y teleras, pan y bollería envasados, cajas
de dulces, huevos, conservas, un roscón de Reyes y el cartel de Bizum). Los precios
se mencionan sin cifras porque los carteles fotografiados están caducados.

No se citan reseñas de texto porque la ficha solo expone el recuento. La nota
aparece con su número real de reseñas (tres) y un enlace para leerlas en Google.

## Fotos

Las 10 imágenes de la galería se descargaron con `scripts/fetch-maps-photos.mjs`
desde la raíz del monorepo:

```bash
node scripts/fetch-maps-photos.mjs panaderia-la-miguita
```

La portada de la ficha es el mostrador (`apaisada-01`). La galería usa seis fotos:
la fachada del puesto, el rótulo, la bollería envasada, el roscón, las estanterías
y el pasillo junto al mostrador. Las dos fotos de grupo con personas y la imagen
antigua con marca de agua `with.friend` no se usan.

## Estructura

```
src/
  data/site.ts        ficha, horario y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta de mercado: papel, verde, trigo y ladrillo
  assets/fotos/        fotos de Google (AVIF en build)
public/               favicon, robots.txt y og.png
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
- Confirmar con el puesto horario, productos y si sigue aceptando Bizum.
- El dominio previsto es `https://panaderia-la-miguita.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
