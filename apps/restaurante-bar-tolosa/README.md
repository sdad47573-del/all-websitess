# Restaurante Bar Tolosa — Donostia

Web estática en Astro para **Restaurante Bar Tolosa**, restaurante y bar en Paseo Doctor José Begiristain, 90 (20014 Donostia / San Sebastián, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», carta basada en reseñas, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante Bar Tolosa
- Dirección: Paseo Doctor José Begiristain, 90 · 20014 Donostia / San Sebastián (Gipuzkoa)
- Categoría: Restaurante
- Valoración: 4,3/5 con 1.029 reseñas
- Teléfono: 943 45 93 97
- Horario: lunes a viernes de 9:00 a 18:30; sábado de 10:00 a 18:30; **domingo cerrado**
- Accesibilidad: acceso, asientos, aseo y aparcamiento adaptados
- Reseñas citadas: comida casera, camareras atentas, pintxos, bocadillos, raciones, ensaladas, platos combinados y postres

La ficha **no publica carta, precios, correo ni web propia**. La carta recoge solo lo que citan las reseñas; el teléfono y la ficha de Google son los canales publicados.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://restaurante-bar-tolosa.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
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
