# Mapa Verde — Gros, Donostia

Web estática en Astro para **Mapa Verde**, restaurante vegano en Trueba Kalea, 4 (20001 Donostia / San Sebastián, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», carta basada en reseñas, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Mapa Verde
- Dirección: Trueba Kalea, 4 · 20001 Donostia / San Sebastián (Gipuzkoa), barrio de Gros
- Categoría: Restaurante vegano
- Valoración: 4,7/5 con 893 reseñas
- Teléfono: 943 84 18 62
- Horario: lunes a sábado de 12:30 a 15:30; **domingo cerrado**
- Accesibilidad: aparcamiento adaptado para sillas de ruedas
- Descripción del local: «Pequeño restaurante vegano en el centro de Gros... Cocina consciente, comida real»
- Reseñas citadas: burrata, guacamole, patatas, sopa thai, tiramisú, tarta de queso vegana y raciones generosas

La ficha **no publica carta, precios, correo ni web propia**. La carta recoge solo lo que citan las reseñas y la descripción del restaurante; el teléfono y la ficha de Google son los canales publicados.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://mapa-verde.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Confirmar con el restaurante el horario y la carta antes de difundir la web.

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
