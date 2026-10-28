# Panadería La Placita de Nieves y Cintia — Bailén-Miraflores, Málaga

Web estática en Astro para la **Panadería La Placita de Nieves y Cintia**, en la plaza Monseñor Bocanegra, 18 (Bailén-Miraflores, 29011 Málaga). Los textos están en español.

## Contenido

- Portada: hero, cenefa de azulejos, «La casa», «Dos cosas a la vez», galería de la plaza, tres reseñas, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: tres vistas de Google Street View de la plaza.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería La Placita de Nieves y Cintia
- Dirección: Pl. Monseñor Bocanegra, 18 · Bailén-Miraflores · 29011 Málaga
- Categorías: panadería y tienda de alimentación
- Teléfono: 952 28 98 89
- Valoración: 5/5 con 8 reseñas
- Horario: L–V 7:30–14:00 y 17:00–20:00 · S–D 8:00–14:00
- Accesibilidad: acceso para sillas de ruedas; sin información sobre aparcamiento adaptado
- Feature id: `0xd72f70073869b6b:0x50b6daef52ee3934`
- Place ID: `ChIJa5uGcwD3cg0RNDnuUu_atlA`

**La ficha no publica descripción del negocio, carta, precios, métodos de pago ni página web**, y tampoco tiene fotos del perfil. Por eso la web no incluye teléfono inventado, menú ni importes: se limita a las dos categorías de Google, a las tres reseñas destacadas y a los datos de contacto y horario. Las imágenes son vistas de Google Street View de la plaza.

El 1 de noviembre (Día de Todos los Santos) Google marca horario especial; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

La ficha no tiene galería propia (el endpoint de Google no devuelve ninguna foto), así que se usaron tres vistas de Google Street View de la plaza Monseñor Bocanegra:

```sh
# panoid utilizado y ángulos pedidos
C1fVte-kYfjXgVoZChMl_g  ·  yaw 150 / 198,15 / 240
```

Los archivos viven en `src/assets/fotos/` y el `og.jpg` es un recorte 1200×630 de la vista principal de la plaza. Las vistas se consultaron en octubre de 2026. En la vista de la esquina los locales aparecen con la persiana bajada; se advierte en el pie de la galería.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
- Dominio definitivo: ahora `https://panaderia-la-placita.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
