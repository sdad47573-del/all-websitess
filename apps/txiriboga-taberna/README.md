# Txiriboga Taberna — Usurbil, Gipuzkoa

Web estática en Astro para **Txiriboga Taberna**, taberna y bar en Irazu Kalea, 6 (20170 Usurbil, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», lo que publica la taberna, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Txiriboga Taberna
- Dirección: Irazu Kalea, 6 · 20170 Usurbil (Gipuzkoa)
- Categorías: Taberna y bar
- Valoración: 4,5/5 con 108 reseñas
- Teléfono: 943 21 88 40
- Horario: miércoles a domingo 11:00–23:00; **lunes y martes cerrado**
- Accesibilidad: acceso para sillas de ruedas y asientos adaptados
- Descripción del propio local: comidas y cenas del viernes por la noche al domingo al mediodía; cocina de producto local; carta, platos combinados o raciones; pan hecho en casa
- Reseñas citadas: pintxos, trato cercano, torrija y mousse de chocolate

La ficha **no publica carta completa, precios, correo ni web propia**. La web recoge solo la descripción del local y lo que citan las reseñas.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://txiriboga-taberna.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Confirmar con el local el horario de cocina y la carta antes de difundir la web.

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
