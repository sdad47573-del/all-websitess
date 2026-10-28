# Panadería Mar Confitería — Bailén-Miraflores, Málaga

Web estática en Astro para la **Panadería Mar Confitería**, en la Rotonda de Suárez, 5 (Bailén-Miraflores, 29011 Málaga). Los textos están en español.

## Contenido

- Portada con hero tipográfico, «La casa», «El barrio», horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: vista de Google Street View de la Rotonda de Suárez.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Mar Confitería
- Dirección: Rotonda de Suárez, 5 · Bailén-Miraflores · 29011 Málaga
- Categoría: panadería (el nombre añade confitería)
- Valoración: 4,4/5 con 8 reseñas
- Teléfono: la ficha no publica ninguno
- Horario: L–V 8:00–15:00 y 17:00–20:30 · S 8:00–15:00 y 17:00–19:00 · D 8:00–15:00
- Feature id: `0xd72f708ded80b81:0xd2fd1baa049063cb`
- Place ID: `ChIJgQvY3gj3cg0Ry2OQBKob_dI`

La ficha **no publica teléfono, web, carta, precios ni fotografías del interior**, y no muestra reseñas con texto accesible. La página no inventa productos ni importes: se limita a la dirección, el horario, la categoría y la valoración.

## Fotos

Google no devuelve fotos del perfil para esta ficha (`/maps/preview/place` responde sin bloque de fotos en 15 intentos). La única imagen de Google asociada es la vista de Street View de la Rotonda de Suárez (panoid `uyWi3TUS5un_73RLBQbQgQ`), descargada a `src/assets/fotos/panaderia-mar-confiteria-apaisada-01.jpg`. La web la usa en «El barrio» con crédito y la advierte de que puede ser anterior al rótulo actual. El `og.jpg` es una tarjeta de marca 1200×630 con el nombre y la dirección, para no compartir en redes una imagen con el rótulo antiguo.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar el horario con el establecimiento antes de divulgar la web.
- Dominio definitivo: ahora `https://panaderia-mar-confiteria.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
