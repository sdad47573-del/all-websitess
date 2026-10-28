# Panadería Martínez Colombiana — Bailén-Miraflores, Málaga

Web estática en Astro para la **Panadería Martínez Colombiana**, en la calle Martínez de la Rosa, 116 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, cinta de especialidades, «La casa», «Tres cosas que se ven», «El mostrador», galería con las 10 fotos de Google Maps, tres reseñas (incluida la de una estrella), horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Martínez Colombiana
- Dirección: C. Martínez de la Rosa, 116 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Teléfono: 658 27 16 05
- Valoración: 3,9/5 con 18 reseñas
- Horario: L 8:00–21:00 · M 8:00–17:00 · X–S 8:00–21:00 · D 8:00–19:00
- Feature id: `0xd72f7000964cd93:0x30a5b63813ed7751`
- Place ID: `ChIJk81kCQD3cg0RUXftEzi2pTA`

**La ficha no publica descripción del negocio, carta, precios, métodos de pago ni información de accesibilidad.** Por eso la web no incluye ninguno de esos datos: el mostrador recoge solo lo que aparece en las fotos del perfil (pan de queso, hogazas con queso, empanadas, roscas, bollos, berlinas, tartas, productos colombianos envasados y bebidas) y las reseñas citadas (pan de queso y bocadillos). No se muestran importes.

Las tres reseñas citadas son las destacadas de la ficha: dos de cinco estrellas y una de una estrella sobre los bocadillos. Se incluye la negativa para no ofrecer una selección sesgada.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría ser diferente; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las 10 fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-martinez-colombiana
```

y viven en `src/assets/fotos/`. La ficha no tiene foto de fachada: la portada es la única toma amplia del interior. El `og.jpg` es un recorte 1200×630 de esa misma foto.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, métodos de pago y accesibilidad con el establecimiento.
- Dominio definitivo: ahora `https://panaderia-martinez-colombiana.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
