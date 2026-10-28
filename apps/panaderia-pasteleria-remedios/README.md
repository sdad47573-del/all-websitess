# Panadería - Pastelería Ntra. Señora de los Remedios — Bailén-Miraflores, Málaga

Web estática en Astro para la **Panadería - Pastelería Ntra. Señora de los Remedios**, en la calle Magistrado Salvador Barbera, 11 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las 10 fotos de Google Maps, tres reseñas, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería - Pastelería Ntra. Señora de los Remedios
- Dirección: C. Magistrado Salvador Barbera, 11 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Teléfono: 675 16 75 66
- Valoración: 4,6/5 con 11 reseñas
- Horario: L–V 7:00–15:00 · S 7:30–15:00 · D cerrado
- Feature id: `0xd72f70c7671e08b:0x979ff2a531605dd6`
- Place ID: `ChIJi-Bxdgz3cg0R1l1gMaXyn5c`

La ficha **no publica carta, precios, web ni información de accesibilidad**. El mostrador recoge solo lo que anuncia el cartel de la fachada (pan recién hecho, dulces artesanos, bocadillos recién preparados) y lo que muestran las fotos del perfil: magdalenas, perrunas, bizcochos, tortas de aceite envasadas, chorizo, morcilla de Ronda, salchichón, galletas, arroz, conservas y anchoas. No se muestran importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las 10 fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-pasteleria-remedios
```

y viven en `src/assets/fotos/`. La foto de la fachada se recortó a 4:3 para la portada y el `og.jpg`; las otras nueve forman la galería. La imagen de la fachada conserva el cartel de la calle y el rótulo de madera con la Virgen.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, encargos y accesibilidad con el establecimiento.
- Dominio definitivo: ahora `https://panaderia-pasteleria-remedios.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
