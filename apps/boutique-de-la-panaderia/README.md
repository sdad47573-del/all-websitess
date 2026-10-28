# Boutique De La Panaderia — Bailén-Miraflores, Málaga

Web estática en Astro para la **Boutique De La Panaderia**, en el Camino San Alberto, 19 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero tipográfico, «La casa», reseñas de Google, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `public/og.jpg`: tarjeta de marca 1200×630, generada con SVG.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Boutique De La Panaderia
- Dirección: Cam. San Alberto, 19 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Valoración: 3,9/5 con 15 reseñas
- Teléfono: la ficha no publica ninguno
- Horario: «Abierto 24 horas» todos los días, según Google
- Accesibilidad: la ficha solo indica que no hay aparcamiento adaptado
- Feature id: `0xd72f7100908cf9d:0xc324c8cb939dc497`
- Place ID: `ChIJnc8ICRD3cg0Rl8Sdk8vIJMM`

La ficha **no publica teléfono, web, carta, precios ni fotografías**. La página reproduce la dirección, el horario, la valoración y dos reseñas de cinco estrellas, y no cita más productos que el «pan rústica» mencionado en una de ellas.

## Fotos

Google no devuelve ninguna foto del perfil para esta ficha: `/maps/preview/place` responde sin bloque de fotos en 10 intentos, y la referencia de Street View asociada (`FcvhavK0JKirruEP8tvYkQE`) no ofrece miniatura. Para no usar imágenes de otro establecimiento, la web es tipográfica y no incluye fotografías; el mapa de «Visítanos» sí es de Google. El `og.jpg` es una tarjeta de marca, no una foto.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar el horario de 24 horas con el establecimiento antes de divulgarlo.
- Dominio definitivo: ahora `https://boutique-de-la-panaderia.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

## Comandos

```bash
bun install          # desde la raíz del monorepo
bunx astro dev       # desarrollo
bunx astro build     # genera dist/
bunx tsc -p tsconfig.json --noEmit
```

`astro check` no funciona en este repo porque usa TypeScript 7; se valida con `tsc`.

## Crédito

El pie de página enlaza a **Sur Digital** → https://sur-digital.vercel.app/
