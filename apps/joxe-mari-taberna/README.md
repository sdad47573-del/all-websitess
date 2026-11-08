# Joxe Mari Taberna — Donostia / San Sebastián

Web estática en Astro para **Joxe Mari Taberna**, restaurante vasco en Erregezaintza Kalea, 49 (20008 Donostia / San Sebastián, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», lo que dicen las reseñas, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Joxe Mari Taberna
- Dirección: Erregezaintza Kalea, 49 · 20008 Donostia / San Sebastián (Gipuzkoa)
- Categoría: Restaurante vasco
- Valoración: 4,3/5 con 307 reseñas
- Teléfono: 943 90 51 24
- Horario: martes a viernes 8:00–24:00; sábado y domingo 10:00–24:00; **lunes cerrado**
- Descripción del local: especialista en pintxos de alta elaboración
- Accesibilidad: acceso para sillas de ruedas y asientos adaptados
- Reseñas citadas: buena cocina, pintxos y menú del día asequible; local limpio y camarero profesional; también una crítica por nachos insulsos, calamares salados y raciones escasas

La ficha **no publica carta completa, precios, correo ni web propia**. La web recoge la descripción del local y lo que citan las reseñas, incluidas las críticas.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://joxe-mari-taberna.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
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
