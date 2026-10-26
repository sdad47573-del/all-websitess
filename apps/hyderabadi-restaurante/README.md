# Hyderabadi Restaurante — cocina hyderabadí en Odivelas

Web estática en Astro para **Hyderabadi Restaurante**, restaurante de cocina hyderabadí en la R. Nampula 2 (2675-411 Odivelas, Lisboa). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, cocina, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Hyderabadi Restaurante
- Dirección: R. Nampula 2 · 2675-411 Odivelas (Lisboa)
- Categoría: restaurante hyderabadí
- Teléfono: +351 960 444 222
- Valoración: 4,6/5 con 226 reseñas
- Horario: domingo a jueves 11:00–23:00; viernes y sábado 11:00–24:00
- Accesibilidad: entrada y asientos accesibles para sillas de ruedas
- Descripción del propio local: dum biryani, kebab y pizza en un comedor íntimo; cocina especiada, opciones vegetarianas y no vegetarianas, y servicio de catering para fiestas

La ficha **no publica sitio web propio ni carta con precios**. La web recoge solo lo que está publicado: los platos que aparecen en el menú salen de la descripción del restaurante en Google y de las fotos de su perfil.

Las fotos descargadas son 10; se descartó una imagen de Adobe Stock con marca de agua que aparecía en la galería del perfil, así que la web publica 9.

## Pendiente antes de publicar

- NIF/NIPC, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://hyderabadi-restaurante.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
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
