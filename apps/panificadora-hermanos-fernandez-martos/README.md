# Panificadora Hermanos Fernández Martos

Web informativa de una panadería con barra y terraza en Carretera de Cádiz,
construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panificadora Hermanos Fernández Martos S.C.
- **Dirección:** Pl. Moreno Villa, 5 · Carretera de Cádiz · 29002 Málaga
- **Teléfono:** 952 32 71 05
- **Google:** 4,6/5 con 109 reseñas · [ficha](https://www.google.com/maps/place/Panificadora+Hermanos+Fern%C3%A1ndez+Martos+S.C./@36.7064899,-4.4346517,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
dirección, categoría, teléfono, valoración, reseñas, horario, accesibilidad y
las diez fotografías del perfil. La ficha no publica descripción ni web propia.

La ficha **no publica carta ni precios**, así que la web no incluye importes. El
mostrador recoge lo que citan las reseñas (pan, dulces, pasteles, bocadillos y
café) y lo que se ve en las fotos (barras, hogazas con el cartel de «INEGRAL»,
bandeja de donuts, bollo de fruta confitada, terraza).

Dos matices que se respetan:

- **Accesibilidad:** la ficha solo indica que no hay aparcamiento adaptado; no
  dice nada de la entrada, y la web tampoco.
- **Churros:** el toldo de la terraza que aparece en una foto del perfil dice
  «CAFÉ-CHURROS». La web lo cita como lo que se ve en esa foto, sin ponerlo en
  la carta ni prometer horario de freiduría.

## Fotos

Las diez se descargaron de la galería del perfil:

```bash
node scripts/fetch-maps-photos.mjs panificadora-hermanos-fernandez-martos
```

La fachada con el rótulo de Hermanos Fernández Martos es la portada. El `og.jpg`
es un recorte de la terraza, con el toldo amarillo y las mesas. La galería usa
las otras nueve: terraza, barras, hogazas, desayuno, bollo de fruta confitada y
bollería.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   toldo amarillo, harina y corteza
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

- Completar en `/aviso-legal` la razón social, el NIF/CIF y el correo del titular.
- Confirmar con el establecimiento horario, carta, precios y si la terraza y los
  churros son suyos o del local de al lado.
- El dominio previsto es
  `https://panificadora-hermanos-fernandez-martos.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
