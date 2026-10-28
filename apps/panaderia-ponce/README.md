# Panadería Ponce

Web informativa de la panadería de la calle Lepanto, en Carretera de Cádiz,
construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería Ponce (Boutique del Pan · Confitería Ponce)
- **Dirección:** C. Lepanto, 2 · Carretera de Cádiz · 29003 Málaga
- **Teléfono:** 951 24 32 68
- **Google:** 4,6/5 con 53 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Ponce/@36.6978632,-4.4439349,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
dirección, categoría, teléfono, valoración, reseñas, horario, accesibilidad, la
descripción del establecimiento y sus fotografías.

La ficha **no tiene web propia, ni carta, ni precios**, así que la página no
publica importes. El mostrador recoge solo lo que citan la descripción («pan
artesanal elaborado por nosotros con más de 20 años al servicio del
consumidor»), las reseñas (variedad de panes y dulces, el mollete integral) y la
fotografía de las tartas.

De accesibilidad, la ficha solo indica que no hay aparcamiento adaptado, así que
la web no afirma nada sobre la entrada del local.

El horario del domingo aparece con el aviso de Google para el 1 de noviembre
(«Día de Todos los Santos: el horario podría ser diferente»); la web lo recoge
como lo publica la ficha.

## Fotos

El perfil solo tiene dos fotografías, descargadas con:

```bash
node scripts/fetch-maps-photos.mjs panaderia-ponce
```

- `panaderia-ponce-apaisada-01.jpg` (3840×2160): dos tartas de encargo de
  Superpapá. Es la portada y el `og.jpg`.
- `panaderia-ponce-vertical-02.jpg` (3024×4032): la calle Lepanto un día de
  procesión, con los rótulos de «Panadería Ponce» y «Boutique del Pan ·
  Confitería Ponce» sobre la persiana. Es la sección «La fachada».

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   papel kraft, verde de rótulo y slab serif
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
- Confirmar con el establecimiento horario y surtido, y si quiere publicar carta.
- El dominio previsto es `https://panaderia-ponce.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
