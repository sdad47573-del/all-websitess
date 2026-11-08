# Bar Lasarte — Parte Vieja, Donostia

Web estática en Astro para **Bar Lasarte**, restaurante y bar en Arrandegi Kalea, 8 (20003 Donostia / San Sebastián, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», carta basada en reseñas, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Bar Lasarte
- Dirección: Arrandegi Kalea, 8 · 20003 Donostia / San Sebastián (Gipuzkoa), Parte Vieja
- Categorías: Restaurante y Bar
- Valoración: 4,4/5 con 1.090 reseñas
- Teléfono: 943 58 50 96
- Horario: domingo a miércoles 10:00–24:00; viernes y sábado 10:00–1:00; **jueves cerrado**
- Accesibilidad: acceso para sillas de ruedas y asientos adaptados
- Descripción del local: nació en Lasarte, pasó por Riberas de Loiola y ahora está en la Parte Vieja
- Carta descrita por el local: raciones, ensaladas, platos combinados, bocadillos, hamburguesas, sándwiches, carnes, pescados, menús del día y menús de fin de semana
- Reseñas citadas: pintxos variados, menú del día casero, servicio atento y buen ambiente con música

La ficha **no publica carta, precios, correo ni web propia**. La carta recoge solo lo que citan las reseñas y la descripción del bar; el teléfono y la ficha de Google son los canales publicados.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://bar-lasarte.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
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
