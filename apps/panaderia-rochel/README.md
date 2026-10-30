# Confitería Panadería Heladería Rochel

Web informativa de la confitería del Poniente Sur (Córdoba), construida con Astro
sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Confitería Panadería Heladería Rochel
- **Dirección:** C. Rafael Pérez de Guzmán, 1 · Poniente Sur · 14005 Córdoba
- **Teléfono:** 957 92 25 56
- **Horario publicado:** L–V 8:00–14:30 y 16:00–20:00 · Sábado 8:00–14:30 · Domingo 8:30–14:30
- **Google:** 4,0/5 con 41 reseñas · [ficha](https://www.google.com/maps/place/Confiter%C3%ADa+Panader%C3%ADa+Helader%C3%ADa+Rochel/@37.8811979,-4.7967506,17z)

## Fotos

La galería de la ficha tiene **10 fotos**, descargadas con
`node scripts/fetch-maps-photos.mjs panaderia-rochel`. En la web se usan cinco:

| Uso | Archivo | Qué se ve |
| --- | --- | --- |
| Portada | `panaderia-rochel-vertical-02.jpg` | Vitrina con empanadas, napolitanas y tartas |
| Galería | `panaderia-rochel-apaisada-07.jpg` | Rótulo de Rochel y escaparate |
| Galería | `panaderia-rochel-vertical-03.jpg` | Tostadas con jamón y tomate, pan con aceite, cafés |
| Galería | `panaderia-rochel-vertical-08.jpg` | Tostada con aceite, botella de AOVE y caja La Mezquita |
| Galería | `panaderia-rochel-vertical-09.jpg` | Tostada de tomate y café con leche |

Quedan fuera cinco: `vertical-01` y `vertical-05` (personas en el encuadre),
`vertical-06`, `panoramica-04` y `panoramica-10` (el local con la persiana bajada,
además de coches y viandantes en las dos panorámicas).

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
nombre, categoría («Pastelería»), dirección, teléfono, horario, valoración,
reseñas y accesibilidad (hay acceso para sillas de ruedas, no hay aparcamiento
adaptado). La ficha **no publica descripción, carta, precios ni web propia**.

- El horario se reproduce con su corte de mediodía de lunes a viernes y el
  arranque a las 8:30 del domingo, sin redondear.
- El nombre completo anuncia confitería, panadería y heladería; la web lo cuenta
  como rótulo, pero aclara que la categoría de Google es «Pastelería» y no
  promete catálogo ni precios.
- La nota aparece con su media real (4,0) y su recuento (41 reseñas), sin
  seleccionar ni reproducir textos de opiniones.
- El JSON-LD declara `Bakery` y `IceCreamShop`, con el horario por tramos.

## Estructura

```
src/
  assets/fotos/       10 fotos de la ficha + .maps-manifest.json
  data/site.ts        ficha, horario, puntos que constan y FAQ
  pages/index.astro   portada + JSON-LD + galería
  pages/aviso-legal.astro
  styles/global.css   crema, chocolate, pistacho y fresa
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
- Pedir al negocio carta y precios si quiere publicarlos: hoy la web no los tiene.
- Sustituir las fotos de Google por originales del local si las facilita.
- El dominio previsto es `https://panaderia-rochel.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
