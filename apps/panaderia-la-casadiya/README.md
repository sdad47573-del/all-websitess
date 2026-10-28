# Panadería La Casadiya

Web informativa de una panadería-pastelería artesanal de Málaga, construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería La Casadiya
- **Dirección:** Cam. de Suárez, 29 · Bailén-Miraflores · 29010 Málaga
- **Teléfono:** 851 841 842 (rotulado en la fachada y en las cartas)
- **Google:** 4,8/5 con 24 reseñas · [ficha](https://www.google.com/maps/place/Panaderia+La+CASADIYA+Malaga/@36.7271197,-4.436846,17z)

## Datos y criterio

Todo lo que aparece en la web sale de la ficha pública de Google Maps (consulta
de octubre de 2026): dirección, categoría, valoración, reseñas, horario,
descripción del negocio y fotos.

La ficha **no publica teléfono ni web**. El 851 841 842 es el número que el
propio local rotula en su fachada y en sus cartas, y la web lo indica así. La
ficha tampoco publica accesibilidad ni métodos de pago, y la web no los afirma.

La carta es una selección literal de las tres páginas de menú que el negocio
fotografió en su ficha (desayunos y bebidas, sabores marroquíes y salado, carta
completa). Los precios son los publicados, con nota de que pueden cambiar.

## Fotos

Las 9 imágenes de la ficha se descargaron con `scripts/fetch-maps-photos.mjs`
desde la raíz del monorepo:

```bash
node scripts/fetch-maps-photos.mjs panaderia-la-casadiya
```

La fachada es la portada (también `public/og.jpg`). La galería usa cinco fotos:
la portada de la carta, las páginas de desayunos y de sabores marroquíes, un
corazón de mousse y dos figuras de mazapán. Las fotos de platos en táper y la
página duplicada de la carta no se usan.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, carta con precios y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   paleta zellige, terracota y azafrán
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

- Completar en `/aviso-legal` el NIF/CIF, la razón social y el correo del titular.
- Confirmar con el establecimiento precios, horario y disponibilidad de la carta.
- El dominio previsto es `https://panaderia-la-casadiya.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
