# Panadería-Confitería La Palmera

Web informativa de la panadería-confitería del Centro de Córdoba, construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería-Confitería La Palmera
- **Dirección:** C. Alfonso XIII · Centro · 14001 Córdoba (la ficha no publica portal)
- **Teléfono:** 676 98 62 47
- **Horario publicado:** L–V 9:15–15:00 y 18:00–21:00 · Sábado 10:00–15:00 · Domingo cerrado
- **Google:** 3,7/5 con 12 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa-Confiter%C3%ADa+La+Palmera/@37.88536,-4.7764405,17z)

## Fotos

La galería de la ficha tiene **10 fotos**, descargadas con
`node scripts/fetch-maps-photos.mjs panaderia-la-palmera`. En la web se usan siete:

| Uso | Archivo | Qué se ve |
| --- | --- | --- |
| Portada | `panaderia-la-palmera-vertical-01.jpg` | Fachada amarilla con rótulo, toldo y escaparate |
| Galería | `panaderia-la-palmera-vertical-03.jpg` | Empanadillas de York y queso y de atún y tomate |
| Galería | `panaderia-la-palmera-apaisada-04.jpg` | Bollería bañada en chocolate |
| Galería | `panaderia-la-palmera-apaisada-05.jpg` | Donuts, napolitanas y dulces de chocolate |
| Galería | `panaderia-la-palmera-vertical-08.jpg` | Tarta de crema con sésamo |
| Galería | `panaderia-la-palmera-apaisada-10.jpg` | Galletas de chocolate con nueces |
| Galería | `panaderia-la-palmera-vista-2-02.jpg` | Torta plana en porciones ante las golosinas |

Quedan fuera tres por privacidad: `vertical-07` (persona tras el mostrador),
`apaisada-09` (persona sosteniendo una torta) y `apaisada-06` (pies de clientes
en el encuadre).

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
nombre, categorías (tienda de alimentación, panadería y pastelería), dirección,
teléfono, horario, valoración, reseñas y accesibilidad (acceso para sillas de
ruedas, sin aparcamiento adaptado). La ficha **no publica descripción, carta,
precios ni web propia, ni número de portal**.

- El horario se reproduce con su corte de mediodía y el cierre dominical.
- La web describe lo que anuncia el rótulo (pan, frutos secos, golosinas) y lo
  que se ve en las fotos, sin inventar catálogo ni precios.
- La nota aparece con su media real (3,7) y su recuento (12 reseñas), sin
  seleccionar ni reproducir textos de opiniones.
- El JSON-LD declara `Bakery` y `GroceryStore`, con horario por tramos y sin
  lunes en la lista de cierres (Google solo publica el domingo cerrado).

## Estructura

```
src/
  assets/fotos/       10 fotos de la ficha + .maps-manifest.json
  data/site.ts        ficha, horario, puntos que constan y FAQ
  pages/index.astro   portada + JSON-LD + galería
  pages/aviso-legal.astro
  styles/global.css   crema, ciruela, albaricoque y salvia
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
- Confirmar el número de portal y una ficha de horario definitiva (la ficha no
  publica el número).
- Pedir al negocio fotos propias y, si quiere, carta con precios.
- El dominio previsto es `https://panaderia-la-palmera.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
