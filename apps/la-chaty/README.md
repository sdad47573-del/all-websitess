# La Chaty Panadería

Web informativa de la panadería del barrio de Levante (Córdoba), construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** La Chaty Panadería
- **Dirección:** C. Arcos de la Frontera, 10 · Levante · 14014 Córdoba
- **Horario publicado:** lunes a jueves 7:30–14:30 · viernes 7:30–14:03 · sábado y domingo 8:00–14:14
- **Teléfono:** no publicado en la ficha de Google
- **Google:** 4,0/5 con 9 reseñas · [ficha](https://www.google.com/maps/place/La+Chaty+Panader%C3%ADa/@37.8985867,-4.7567156,17z)

## Fotos

La galería de la ficha tiene **10 fotos**, descargadas con
`node scripts/fetch-maps-photos.mjs la-chaty`. En la web se usan siete:

| Uso | Archivo | Qué se ve |
| --- | --- | --- |
| Portada | `la-chaty-vertical-10.jpg` | Escaparate con el rótulo y la lista de panes |
| Galería | `la-chaty-vertical-09.jpg` | Bolsa naranja «Panadería La Chaty» |
| Galería | `la-chaty-vertical-06.jpg` | Vitrina con tartas y brazos de gitano |
| Galería | `la-chaty-panoramica-01.jpg` | Tarta de chocolate con profiteroles |
| Galería | `la-chaty-panoramica-07.jpg` | Tarta de frutos rojos sobre blonda |
| Galería | `la-chaty-panoramica-08.jpg` | Tres tartas alargadas en bandeja dorada |
| Galería | `la-chaty-vertical-02.jpg` | Bandeja de empanadillas |

Quedan fuera tres por privacidad o ruido: `panoramica-05` (con el brazo de una
persona en el encuadre), `apaisada-03` (un móvil y un café ajenos sobre la mesa)
y `vertical-04` (empanadillas con azúcar glas, redundante con `vertical-02`).

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
nombre, categoría («Panadería»), dirección, horario, valoración, reseñas y el
dato de accesibilidad (no hay aparcamiento adaptado). La ficha **no publica
teléfono, web propia, descripción ni carta**.

- El horario se copia con sus minutos exactos (14:03 el viernes, 14:14 el fin de
  semana) porque así lo anuncia Google; no se redondea.
- Los **precios** que aparecen en el escaparate de la foto no se reproducen: cambian
  y no están publicados en la ficha. Sí se nombran los tipos de pan que lista el
  cristal (barras, bollas, vienas, baguettes, chapatas…).
- La nota aparece con su media real (4,0) y su recuento (9 reseñas), sin
  seleccionar ni reproducir textos de opiniones.
- El aviso de Google para el 1 de noviembre («el horario podría ser diferente») se
  recoge en el horario y en las preguntas frecuentes.

## Estructura

```
src/
  assets/fotos/       10 fotos de la ficha + .maps-manifest.json
  data/site.ts        ficha, horario, puntos que constan y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   papel crema, azul noche, ámbar y ladrillo
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
- Confirmar con el negocio si quiere añadir teléfono y horario definitivo (los
  minutos de cierre de la ficha son raros: 14:03 y 14:14).
- Sustituir las fotos de Google por originales del local si las facilita.
- El dominio previsto es `https://la-chaty.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
