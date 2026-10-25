# Itxaropena 1910 — Donostia / San Sebastián

Web estática en Astro para **Itxaropena 1910**, bar restaurante y vinoteca en Enbeltran Kalea, 16 (20003 Donostia / San Sebastián, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», lo que citan las reseñas, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Itxaropena 1910
- Dirección: Enbeltran Kalea, 16 · 20003 Donostia / San Sebastián (Gipuzkoa)
- Categorías: Bar restaurante y Restaurante
- Valoración: 4,3/5 con 1.588 reseñas
- Teléfono: 943 43 62 10
- Horario: jueves a martes 12:00–23:00; **miércoles cerrado**
- Descripción de Google: «Tapas en un restaurante con paredes de piedra»
- Accesibilidad: acceso para sillas de ruedas, aseo adaptado y asientos adaptados; **sin aparcamiento adaptado**
- Reseñas citadas: vinoteca con pinchos y raciones a precio razonable, ensalada de alcachofas, taco de chuleta, carrilleras y pintxo de zamburiñas

La ficha **no publica descripción del local, carta completa, precios, correo ni web propia**. La web recoge solo la frase de Google y lo que citan las reseñas.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://itxaropena-1910.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
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
