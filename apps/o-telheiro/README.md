# O Telheiro — parrilla y snack-bar en Arruda dos Vinhos

Web estática en Astro para **Restaurante O Telheiro**, restaurante y snack-bar en la Estrada da Quinta de Matos 9 (2630-260 Arruda dos Vinhos). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, cocina, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante O Telheiro
- Dirección: Estrada da Quinta de Matos 9 · 2630-260 Arruda dos Vinhos
- Categoría: restaurante
- Teléfono: +351 918 870 783
- Valoración: 4,2/5 con 219 reseñas
- Horario: lunes a sábado 8:30–19:00; domingo cerrado
- Accesibilidad: entrada, asientos, aseo y aparcamiento adaptados para sillas de ruedas
- Descripción del propio local: la ficha no publica ninguna
- Web propia: **no publicada**

La ficha tampoco publica carta ni precios, así que el menú de la web sale de las fotos del perfil: sardinas asadas, pulpo con patata al horno, costillas con alubias, platos del día, ensalada, mousse de frutos rojos y vino de la casa. La fachada confirma el cartel «Restaurante • Snack-Bar O Telheiro» y el comedor preparado para banquetes.

## Pendiente antes de publicar

- NIF/NIPC, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://o-telheiro.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Confirmar con el local horario, platos y precios antes de divulgar la web.

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
