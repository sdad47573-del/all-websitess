# La Divina Providencia — Bailén-Miraflores, Málaga

Web estática en Astro para **La Divina Providencia**, en la calle del Barón, 12 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, cinta de la cocina, «La casa», «Tres cosas de la casa», «El mostrador», galería, tres reseñas, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la foto de dulces (portada, recortada 4:3), la foto del pan y dos vistas de Google Street View.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: La Divina Providencia
- Dirección: Calle del Barón, 12 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Teléfono: 952 61 37 96
- Valoración: 4,5/5 con 31 reseñas
- Horario: L–V 7:15–14:30 y 17:00–21:00 · S 8:00–14:30 y 17:00–21:00 · D cerrado
- Accesibilidad: acceso y aparcamiento adaptados para sillas de ruedas
- Feature id: `0xd72f7099d1b34b5:0xdb29e1f04dea6d23`
- Place ID: `ChIJtTQbnQn3cg0RI23qTfDhKds`

**La ficha no publica descripción del negocio, carta, precios ni página web.** El mostrador recoge solo lo que citan las reseñas (pimientos asados, lasañas, tortillas de patatas y carne de membrillo artesanal) y lo que muestran las dos fotos del perfil. No se inventan productos ni importes. Las reseñas citadas son las tres destacadas de la ficha: dos de cinco estrellas y una de cuatro.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

La ficha tiene solo dos fotos, descargadas con:

```sh
node scripts/fetch-maps-photos.mjs la-divina-providencia
```

Se usan ambas: la bandeja de dulces (recortada a 4:3 para la portada y el `og.jpg`) y el pan envuelto en papel (galería). Como la ficha no tiene fachada, la galería se completa con dos vistas de Google Street View de la calle del Barón (panoid `8zk4TrF0YJvdr9XQmQiFtQ`). En la vista de la esquina el local aparece con la persiana bajada y se advierte en el pie.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, encargos y accesibilidad con el establecimiento.
- Dominio definitivo: ahora `https://la-divina-providencia.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
