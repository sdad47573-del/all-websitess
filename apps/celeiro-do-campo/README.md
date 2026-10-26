# Celeiro do Campo — buffet de mediodía en Setúbal

Web estática en Astro para **Restaurante Celeiro Do Campo**, buffet de mediodía en la Av. Luísa Todi 121 (2900-324 Setúbal). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, buffet, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante Celeiro Do Campo
- Dirección: Av. Luísa Todi 121 · 2900-324 Setúbal
- Categoría: restaurante
- Valoración: 4,7/5 con 146 reseñas
- Horario: lunes a viernes 12:00–15:00; sábado y domingo cerrado
- Accesibilidad: entrada y asientos adaptados para sillas de ruedas
- Descripción del propio local: la ficha no publica ninguna
- Teléfono y web: **no publicados**. Google muestra «Añadir teléfono» y «Añadir sitio web»

La ficha tampoco publica carta ni precios, así que el buffet descrito en la web (sopa, barra de saladas, platos calientes, fruta y postre) sale de las fotos del perfil, sin inventar platos ni precios.

Se descartó una de las 10 fotos descargadas: la panorámica es una foto de la calle tomada desde dentro de un coche y no aporta nada a la ficha. La web publica 9.

## Pendiente antes de publicar

- NIF/NIPC, razón social, correo y teléfono del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://celeiro-do-campo.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Confirmar con el local horario, funcionamiento del buffet y precios antes de divulgar la web.

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
