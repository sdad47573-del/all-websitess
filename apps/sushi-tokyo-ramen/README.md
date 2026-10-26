# Sushi TOKYO Ramen — sushi y ramen en Lisboa

Web estática en Astro para **Sushi TOKYO Ramen Restaurant**, restaurante japonés en la Rua do Forno do Tijolo 36C D (1170-137 Lisboa). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- Botón flotante de WhatsApp, porque el restaurante atiende pedidos por ahí.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Sushi TOKYO Ramen Restaurant
- Dirección: Rua do Forno do Tijolo 36C D · 1170-137 Lisboa
- Categoría: restaurante japonés
- Teléfono: +351 920 163 272
- Valoración: 4,7/5 con 252 reseñas
- Horario: lunes a jueves 12:30–16:00 y 18:30–1:00; viernes 18:30–2:00; sábado 12:30–16:00 y 18:30–2:00; domingo 18:30–23:30
- Descripción del propio restaurante: cocina japonesa de fusión, sushi, platos japoneses, bebidas y servicio a domicilio
- Web publicada en Google: **wa.me/351920163272** (su WhatsApp, no hay web propia)

La ficha no publica carta con precios, así que el menú de la web sale de esa descripción y de las fotos del perfil (sushi, ramen, arroz frito, sopa de miso y ensalada de wakame).

Se descartó una de las 10 fotos descargadas: llevaba marca de agua de Dreamstime. La web publica 9.

## Pendiente antes de publicar

- NIF/NIPC, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://sushi-tokyo-ramen.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Confirmar con el local horario, carta y precios antes de divulgar la web.

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
