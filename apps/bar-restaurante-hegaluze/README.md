# Bar Restaurante Hegaluze — Pasai Donibane

Web estática en Astro para **Bar Restaurante Hegaluze**, bar restaurante en Donibane Kalea, 132 (20110 Pasai Donibane, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», carta basada en reseñas, galería con las 10 fotos de Google Maps, mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Bar Restaurante Hegaluze
- Dirección: Donibane Kalea, 132 · 20110 Pasai Donibane (Gipuzkoa)
- Categoría con la que Google lo clasifica: Bar restaurante
- Valoración: 4,7/5 con 46 reseñas
- Teléfono: 943 34 05 74
- Horario: **no publicado en la ficha de Google**
- Reseñas citadas: bocatas «muy buenos», trato familiar y servicio atento

La ficha **no publica horario, carta, precios, correo ni web propia**. La web no inventa nada de eso: el teléfono y la ficha de Google Maps son los canales publicados, y el horario se indica como no disponible.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://bar-restaurante-hegaluze.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Confirmar con el local el horario y la carta antes de difundir la web.

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
