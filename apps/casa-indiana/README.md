# Casa Indiana — restaurante indio en Lisboa

Web estática en Astro para **Casa Indiana**, restaurante indio en la Av. Rovisco Pais 2, Loja A (1000-268 Lisboa). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, cocina, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Casa Indiana
- Dirección: Av. Rovisco Pais 2, Loja A · 1000-268 Lisboa
- Categoría: restaurante indio
- Teléfono: +351 21 840 1195
- Valoración: 4,6/5 con 806 reseñas
- Horario: lunes, martes y de jueves a sábado 11:30–23:00; miércoles y domingo cerrado
- Accesibilidad: entrada, asientos, aseo y aparcamiento adaptados, y bucle magnético
- Descripción del propio local: cocina con opciones vegetarianas, veganas, de cordero y de pollo, y carne halal

La ficha **no publica sitio web propio ni carta con precios**. El menú de la web se apoya en esa descripción y en las fotos del perfil (curries de cordero, pollo y gambas, tandoori, biryani, samosas y kebab), sin inventar platos ni precios.

## Pendiente antes de publicar

- NIF/NIPC, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://casa-indiana.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
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
