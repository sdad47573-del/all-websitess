# Panadería Santa Isabel — Puerto de la Torre, Málaga

Web estática en Astro para la **Panadería Santa Isabel**, en el Camino Soliva del Cañaveral, 21 (Puerto de la Torre, 29190 Málaga). Los textos están en español.

## Contenido

- Portada con la fachada, placa de «Panadería · Confitería · Mini servicio», datos de la ficha, tres claves, mostrador sin precios, galería de cuatro fotos del perfil, reseñas, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las cinco fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.
- `public/og.jpg`: tarjeta Open Graph 1200×630 con la fachada.

## Datos de la ficha de Google Maps

- Nombre: Panadería Santa Isabel
- Dirección: Cam. Soliva del Cañaveral, 21 · Puerto de la Torre · 29190 Málaga
- Categoría: supermercado (el rótulo añade panadería, confitería y mini servicio)
- Valoración: 4,7/5 con 20 reseñas
- Teléfono: 952 10 70 86 (+34 952 10 70 86)
- Horario: lunes a viernes, 9:00–15:00 y 17:30–21:00; sábado y domingo, 9:30–15:00
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd72f1a3f232cb81:0x188d1b824b3befea`
- Place ID: `ChIJgcsy8qPxcg0R6u87S4IbjRg`

**La ficha no tiene un bloque de horario estructurado.** El horario se reproduce del texto que el titular escribe en la descripción de Google, y así se advierte en la web. Tampoco publica web propia, carta, precios, reparto ni fecha de fundación.

## Fotos

Las cinco fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-santa-isabel
```

Se usan las cinco: la fachada principal (portada), la fachada con el toldo, la entrada desde la calle, el rótulo azul y el mostrador de fruta junto al horno. El `og.jpg` es un recorte 1200×630 de la foto de la fachada con una capa de texto.

## Criterio de contenido

El rótulo y las fotos sostienen la panadería, la confitería y el mini servicio. Las reseñas citan los bocadillos, el trato y los precios del pequeño supermercado. No se inventan productos, precios ni una historia del negocio: la ficha no publica ni carta ni fecha de fundación.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con el establecimiento el horario, la accesibilidad y si mantiene el mini servicio antes de divulgar la web.
- Dominio definitivo: ahora `https://panaderia-santa-isabel.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
