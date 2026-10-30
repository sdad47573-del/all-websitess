# GOAT MÁLAGA

Web informativa de la hamburguesería de Carretera de Cádiz (Málaga), construida
con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** GOAT MÁLAGA
- **Dirección:** C. Héroe de Sostoa, 142 · Carretera de Cádiz · 29003 Málaga
- **Teléfono:** no publicado en la ficha
- **Horario:** 13:00–15:45 y 20:00–23:45 (lunes y jueves a domingo) · martes y miércoles cerrado
- **Google:** 4,3/5 con 528 reseñas · [ficha](https://www.google.com/maps/place/GOAT+M%C3%81LAGA/@36.7042465,-4.4405426,17z)

## Fotos

La galería de la ficha tiene **10 fotos**, descargadas con
`node scripts/fetch-maps-photos.mjs goat-malaga`. En la web se usan seis:

| Uso | Archivo | Qué se ve |
| --- | --- | --- |
| Portada | `goat-malaga-vertical-06.jpg` | Bolsa de GOAT, hamburguesa y patatas para llevar |
| Galería | `goat-malaga-apaisada-01.jpg` | Entrada con rótulo sobre azulejo negro |
| Galería | `goat-malaga-apaisada-03.jpg` | Burger promocional con el lema *Greatest of all time* |
| Galería | `goat-malaga-apaisada-04.jpg` | Cuatro burgers en cajas sobre la mesa |
| Galería | `goat-malaga-vertical-07.jpg` | Burger con queso en bandeja metálica |
| Galería | `goat-malaga-vertical-09.jpg` | La pizarra de la carta |

Quedan fuera cuatro: `apaisada-05` y `vertical-10` (personal o clientes
identificables), `vertical-02` (marca de agua de una cuenta de terceros) y
`vertical-08` (fachada con el número 13, que no coincide con la dirección
publicada, Héroe de Sostoa 142).

## Carta

`MENU` en `src/data/site.ts` transcribe la pizarra de la foto: burgers de vacuno,
pollo frito, opciones veganas y sides. **No se copian precios** (cambian y no están
publicados en la ficha); sí los suplementos que anuncia la propia pizarra: menú con
patatas y bebida +3 €, salsas/queso/bacon +1 € y carne extra +3 €.

## Datos y criterio

De la ficha pública (consulta de octubre de 2026): nombre, cuatro categorías
(hamburguesería, restaurante americano, pollo frito para llevar, comida a
domicilio), dirección, horario, valoración, reseñas y accesibilidad (acceso y aseo
adaptados; sin aparcamiento adaptado, sin asientos para sillas de ruedas y sin
bucle magnético). La ficha **no publica teléfono, descripción, web propia ni
precios**.

- El horario se reproduce con sus dos turnos y los dos días de cierre.
- La nota aparece con su media real (4,3) y su recuento (528 reseñas), sin
  seleccionar ni reproducir textos de opiniones.
- Al no haber teléfono no hay botón de llamada ni `tel:` en el HTML.
- El JSON-LD declara `HamburgerRestaurant` y `FastFoodRestaurant`, con horario por
  turnos y `aggregateRating`.

## Estructura

```
src/
  assets/fotos/       10 fotos de la ficha + .maps-manifest.json
  data/site.ts        ficha, carta, horario, puntos que constan y FAQ
  pages/index.astro   portada + sección de carta + galería + JSON-LD
  pages/aviso-legal.astro
  styles/global.css   negro, hueso, lima y rojo (Anton + Inter)
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
- Pedir al negocio teléfono, precios actualizados y fotos propias.
- Confirmar la dirección exacta: una de las fotos de la ficha enseña otra fachada
  con el número 13.
- El dominio previsto es `https://goat-malaga.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
