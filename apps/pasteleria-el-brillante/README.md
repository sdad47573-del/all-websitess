# Pastelería El Brillante

Web informativa de la pastelería y panadería de la calle La Palmera (Córdoba),
construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Pastelería El Brillante
- **Dirección:** C. la Palmera, 17 · Norte Sierra · 14006 Córdoba
- **Teléfono:** 957 27 14 40 (publicado en la ficha de Google)
- **Google:** 4,5/5 con 42 reseñas · [ficha](https://www.google.com/maps/place/Pasteler%C3%ADa+El+Brillante/@37.8972607,-4.7821585,17z)
- **Horario publicado:** todos los días, 8:00–14:30

## Datos y criterio

Todo lo que aparece en la web sale de la ficha pública de Google Maps (consulta
de octubre de 2026): nombre, categorías, dirección, teléfono, valoración,
reseñas, horario y fotos.

La ficha **no publica web propia, carta, precios ni datos de accesibilidad** (solo
indica que no hay aparcamiento adaptado), así que la web no los afirma. Los
textos sobre productos se apoyan en lo que muestran las fotos de la propia
galería (napolitanas y barras de chocolate, bandejas de panecillos, migas con
chorizo y una tarta con merengue) y en las categorías declaradas por el negocio:
«Pastelería», «Panadería» y «Pastelería especializada en tartas nupciales».

No se citan reseñas de texto porque la ficha solo expone el recuento. La nota
aparece con su número real de reseñas (42) y un enlace para leerlas en Google.

## Fotos

Las 10 imágenes de la galería se descargaron con `scripts/fetch-maps-photos.mjs`
desde la raíz del monorepo:

```bash
node scripts/fetch-maps-photos.mjs pasteleria-el-brillante
```

La fachada es la portada (`panoramica-01`). La galería usa siete fotos: la
esquina de la tienda, las napolitanas, una napolitana en la mano delante del
rótulo, la tarta con merengue, el táper de migas, la sartén de migas y la bandeja
de panecillos. Las fotos `vertical-08` (repetida de la bandeja de chocolate) y
`vertical-10` no se usan.

## Estructura

```
src/
  data/site.ts        ficha, horario, puntos del obrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta de vitrina: marfil, azul del rótulo, oro y chocolate
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
- Confirmar con el establecimiento horario, encargos de tartas y días de cierre
  por festivo (Google avisa del 1 de noviembre).
- El dominio previsto es `https://pasteleria-el-brillante.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
