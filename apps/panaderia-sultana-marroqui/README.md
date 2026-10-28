# Panadería Sultana Marroquí

Web informativa de una panadería marroquí en Carretera de Cádiz, construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería Sultana Marroquí
- **Dirección:** C. Bocanegra, 2, local A2 · Carretera de Cádiz · 29003 Málaga
- **Teléfono:** 633 52 21 03
- **Google:** 4,5/5 con 53 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Sultana+Marroqu%C3%AD/@36.7021825,-4.4458344,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
dirección, categoría, teléfono, valoración, reseñas, horario, accesibilidad, la
descripción del titular y las diez fotografías del perfil.

La ficha **no publica carta ni precios**, así que la web no incluye importes. El
mostrador recoge lo que anuncia el propio establecimiento en su ficha (pan árabe
recién hecho, pastelas tradicionales, cuscús marroquí y dulces artesanales) y lo
que añaden las reseñas (milhojas, otros dulces) y las fotos (bandejas de dulces
de almendra y sésamo, tartas del escaparate, galletas).

La ficha incluye una web del establecimiento en `webnode.es`; no se enlaza
porque esta página la sustituye y no se ha comprobado que siga al día. Los
teléfonos que aparecen en el rótulo de la foto no se publican: la web usa
siempre el de la ficha de Google.

## Fotos

Las diez se descargaron de la galería del perfil:

```bash
node scripts/fetch-maps-photos.mjs panaderia-sultana-marroqui
```

La fachada con el toldo de rayas es la portada y el `og.jpg` (recorte 1200×630
de la parte alta, donde está el rótulo). La galería usa las otras nueve, en
tres columnas de azulejos cuadrados: dulces de sésamo, pasteles de almendra,
tartas, tartaletas, galletas y el interior de la tienda.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   verde zellige, azafrán y granate
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
- Confirmar con el establecimiento horario, surtido, precios y si hacen encargos.
- Decidir si se mantiene la web de `webnode.es` o esta la sustituye, y unificar
  el teléfono de contacto.
- El dominio previsto es `https://panaderia-sultana-marroqui.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
