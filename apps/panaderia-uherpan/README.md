# Panadería UHERPAN S.C.A.

Web informativa del obrador de pan del Polígono Las Quemadas (Córdoba),
construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería UHERPAN S.C.A.
- **Dirección:** C. Simón Carpintero, parcela 13, nave 10 · Polígono Industrial Las Quemadas · 14014 Córdoba
- **Teléfono:** 648 12 70 20 (publicado en la ficha de Google)
- **Google:** 4,5/5 con 8 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+UHERPAN+S.C.A./@37.9046672,-4.724677,17z)
- **Horario publicado:** turno de 22:30 a 14:00 (sábado hasta 13:30) · domingo cerrado

## Datos y criterio

Todo lo que aparece en la web sale de la ficha pública de Google Maps (consulta
de octubre de 2026): nombre, categoría, dirección, teléfono, valoración, reseñas,
horario y fotos.

La ficha **no publica carta, precios, web propia ni datos de accesibilidad**, y
**no indica si la nave atiende al público**. La web no afirma ninguna de esas
cosas: la sección de visita y las preguntas frecuentes remiten a llamar antes.

Los textos sobre producto se apoyan únicamente en las fotos de la galería
(baguettes, hogazas, panecillos, magdalenas, carros de masa y la furgoneta
rotulada con el logo, «Pan Artesano Caseras» y «Unión Hermanos Panaderos») y en
la categoría declarada, «Panadería».

El horario se muestra como turno continuo porque Google lo parte a medianoche
(`0:00–14:00` y `22:30–24:00`); la nota de horario lo explica.

No se citan reseñas de texto porque la ficha solo expone el recuento. La nota
aparece con su número real de reseñas (8) y un enlace para leerlas en Google.

## Fotos

Las 6 imágenes de la galería se descargaron con `scripts/fetch-maps-photos.mjs`
desde la raíz del monorepo:

```bash
node scripts/fetch-maps-photos.mjs panaderia-uherpan
```

La portada es la bandeja de hogazas (`apaisada-03`). La galería usa las seis
fotos que publica la ficha: hogazas, baguettes, dos carros de bandejas, las
magdalenas y la furgoneta.

## Estructura

```
src/
  data/site.ts        ficha, horario, puntos del obrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta de obrador: papel, carbón, cobre y trigo
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

- Completar en `/aviso-legal` el CIF de la cooperativa, la razón social y el
  correo del titular.
- Confirmar con el establecimiento si la nave vende al público, el reparto y los
  días de cierre por festivo (Google avisa del 1 de noviembre).
- El dominio previsto es `https://panaderia-uherpan.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
