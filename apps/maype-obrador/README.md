# MayPe · Obrador panadería y confitería Martos y Pérez

Web informativa del obrador de panadería y confitería MayPe, en la Carretera de
Cádiz, construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Obrador panadería y confitería Martos y Pérez (MayPe)
- **Dirección:** Cam. San Rafael, 7 · Carretera de Cádiz · 29006 Málaga
- **Teléfono:** 951 69 47 03
- **Google:** 4,7/5 con 64 reseñas · [ficha](https://www.google.com/maps/place/Obrador+panader%C3%ADa+y+confiter%C3%ADa+Martos+y+P%C3%A9rez+(MayPe)/@36.7111759,-4.4420733,17z)
- **Instagram:** [@panaderia_myp](https://www.instagram.com/panaderia_myp/)

## Datos y criterio

La ficha pública de Google Maps (consulta de octubre de 2026) aporta la
dirección, el teléfono, la valoración, las reseñas, el horario, la accesibilidad,
la descripción del negocio («pan 100% artesanal y hecho a diario. Dulces
artesanales») y las fotografías. El perfil de Instagram del obrador, que el
negocio mantiene activo, aporta el horario de domingo y el anuncio de tartas
«con y sin encargo».

La ficha **no publica carta, precios, web propia, correo ni métodos de pago**, así
que la web no incluye importes ni afirmaciones sobre pagos o servicio de
cafetería. El mostrador recoge solo lo que dice la descripción y lo que se ve en
las fotos (barras, hogazas, panes con semillas, napolitanas, cañas, xuxos,
torrijas, pasteles de nata, tartaletas de crema y tartas de queso).

Las tartas de las fotos llevan dedicatorias de clientes («Felicidades Isa»,
«Felicidades Ariadna Cristina») y se presentan como ejemplo del trabajo de
encargo, no como productos con nombre propio.

## Fotos

Las 10 imágenes se descargaron de la galería del perfil:

```bash
node scripts/fetch-maps-photos.mjs maype-obrador
```

La foto `apaisada-01` venía girada 90 grados en origen y se corrigió la
orientación antes de usarla. La cesta de pan es la portada y el `og.jpg`. La
galería usa las otras nueve: vitrina, mostrador, bandejas de bollería, pasteles de
chocolate, tres tartas de encargo, los bollos de calabaza y la vitrina de tartas.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   crema, cacao, frambuesa y caramelo
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
- Confirmar con el establecimiento el horario del sábado (Google marca 7:30–20:30
  y el perfil de Instagram 7:00–21:00), la disponibilidad de tartas y el surtido.
- El dominio previsto es `https://maype-obrador.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
