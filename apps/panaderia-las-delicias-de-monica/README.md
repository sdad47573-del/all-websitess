# Panadería Las Delicias de Mónica

Web informativa de un puesto de panadería y pastelería dentro del Mercado de
Huelin, construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería Las Delicias de Mónica
- **Dirección:** Mercado de Huelin, C. la Hoz · Carretera de Cádiz · 29002 Málaga
- **Teléfono:** 600 25 89 07
- **Google:** 5/5 con 7 reseñas · [ficha](https://www.google.com/maps/place/Panaderia+las+delicias+de+M%C3%B3nica/@36.702994,-4.4381767,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
dirección, categoría, teléfono, valoración, reseñas, horario, accesibilidad,
descripción del negocio y fotografías.

La descripción del negocio sitúa el puesto dentro del Mercado de Huelin, habla de
«sabores tradicionales con un toque de innovación» y anuncia encargos de
panadería, pastelería y bollería. Las fotos sostienen el resto: hogazas y barras,
pan envasado, croissants rellenos, éclairs de chocolate, pasteles glaseados,
tartas de fruta, tartas de cumpleaños, troncos de chocolate, cuadrados de
chocolate y triángulos de almendra.

La ficha **no publica carta, precios, web propia, correo ni redes sociales**, así
que la web no da importes ni promete pedidos online. Las tartas y los troncos de
las fotos se presentan como ejemplo del trabajo de encargo.

## Fotos

Las 10 imágenes se descargaron de la galería del perfil:

```bash
node scripts/fetch-maps-photos.mjs panaderia-las-delicias-de-monica
```

La fachada del puesto es la portada y el `og.jpg`. La galería usa las otras nueve:
éclairs y croissants, pasteles rosas, la tarta «Feliz Cumple Rafa», los troncos,
los croissants con caramelos, las tartaletas de fruta, las tartas rectangulares de
fruta, los cuadrados de chocolate y los triángulos de almendra.

Dos fotos traían la marca de agua «Galaxy S24 Ultra» en la esquina inferior
izquierda; se recortó la franja inferior antes de usarlas y se actualizaron las
dimensiones en `.maps-manifest.json`.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   crema, verde de mercado, tomate y mantequilla
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
- Confirmar el horario festivo y la disponibilidad de encargos y troncos.
- El dominio previsto es `https://panaderia-las-delicias-de-monica.vercel.app`
  (está en `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
