# Panadería y Confitería La Esquinita

Web informativa de una panadería y confitería de Bailén-Miraflores, construida
con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería y Confitería La Esquinita
- **Dirección:** C. Eugenio Gross, 11 · Bailén-Miraflores · 29010 Málaga
- **Teléfono:** 951 99 37 81
- **Google:** 4,6/5 con 37 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+y+Confiter%C3%ADa+La+Esquinita/@36.7236365,-4.4360159,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
dirección, teléfono, valoración, reseñas, horario, accesibilidad, descripción del
negocio y fotografías.

La descripción del negocio es inusualmente detallada y sostiene casi todo el
contenido: productos caseros, tartas personalizadas, cookies, galletitas,
saladitos, dulces, bebidas y panes, además de opciones sin gluten, sin azúcar y
sin lactosa. También enumera los panes especiales: centeno, soja, espelta, 100%
integral, de semillas y de molde, blanco o integral.

La ficha **no publica una carta con precios, web propia, correo, redes sociales
ni métodos de pago**. La web no da importes: en la vitrina cada pieza lleva su
etiqueta, como se ve en una de las fotos. Sobre las opciones sin gluten se avisa
de que la ficha no detalla el protocolo de alérgenos.

Las tres reseñas citadas son las destacadas de Google y las tres son de cinco
estrellas.

## Fotos

Las 10 imágenes se descargaron de la galería del perfil:

```bash
node scripts/fetch-maps-photos.mjs panaderia-la-esquinita
```

La fachada de esquina es la portada y el `og.jpg`. La galería usa las otras
nueve: corazones glaseados, tarta con temática de gimnasio, tarta azul con
detalles dorados, vitrina, tarta de Oreo sobre la báscula, pasteles individuales
con etiqueta, tarta con dedicatoria, tarta de Oreo en vitrina y tarta de Oreo
sobre la mesa.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   crema, azul de rótulo y mantequilla
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
- Confirmar horario festivo, disponibilidad de panes y el protocolo de alérgenos
  de los productos sin gluten, sin azúcar y sin lactosa.
- El dominio previsto es `https://panaderia-la-esquinita.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
