# Restaurante Landetxe Jatetxea — Elizalde, Oiartzun

Web estática en Astro para **Restaurante Landetxe Jatetxea**, restaurante, bar y taberna en Mendiburu Kalea (20180 Elizalde, Oiartzun, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», carta basada en reseñas, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante Landetxe Jatetxea
- Dirección: Mendiburu Kalea · 20180 Elizalde, Oiartzun (Gipuzkoa)
- Categorías: restaurante, bar, cafetería, bar de tapas, bar deportivo y bar con música en directo
- Valoración: 4,5/5 con 244 reseñas
- Teléfono: 666 69 34 66
- Horario: lunes a jueves 9:00–22:00; viernes y sábado 9:00–23:30; domingo 9:30–22:00
- Accesibilidad: acceso para sillas de ruedas, asientos, aseo y aparcamiento adaptados
- Descripción del local: «Landetxeko taberna»
- Reseñas citadas: pollo en salsa de cerveza, servicio «atento y rápido», calidad de producto y raciones generosas

La ficha **no publica carta, precios, correo ni web propia**. La carta recoge solo lo que citan las reseñas y la descripción del local; el teléfono y la ficha de Google son los canales publicados.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://restaurante-landetxe.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
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
