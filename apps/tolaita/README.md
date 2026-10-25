# Tolaita — Elizalde

Web estática en Astro para **Tolaita**, bar restaurante (Bar-Jatetxe) en Rafael Pikabea Hiribidea, 11 (20180 Elizalde, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», carta basada en reseñas, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Tolaita
- Descripción del local: Bar-Jatetxe
- Dirección: Rafael Pikabea Hiribidea, 11 · 20180 Elizalde (Gipuzkoa)
- Categorías: Bar restaurante y Bar
- Valoración: 4,6/5 con 221 reseñas
- Teléfono: 943 01 47 02
- Horario: lunes y domingo 9:00–21:00; miércoles y jueves 9:00–22:00; viernes y sábado 9:00–23:30; **martes cerrado**
- Accesibilidad: acceso para sillas de ruedas, aseo adaptado y asientos adaptados
- Reseñas citadas: platos combinados, risotto «buenísimo» y servicio «magnífico», «súper agradable y rápido»

La ficha **no publica carta, precios, correo ni web propia**. La carta recoge solo lo que citan las reseñas y la descripción del local; el teléfono y la ficha de Google son los canales publicados.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://tolaita.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
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
