# Tania Panadería Pastelería — Bailén-Miraflores, Málaga

Web estática en Astro para **Tania Panadería Pastelería**, en la calle Poeta Ximénez Molina, 10 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, cinta de especialidades, «El obrador», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, tres reseñas, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Tania Panadería Pastelería
- Dirección: C. Poeta Ximénez Molina, 10 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Teléfono: 666 92 95 95
- Valoración: 4,6/5 con 75 reseñas
- Horario: L–V 7:15–14:45 y 17:30–21:30 · S 8:15–15:00 y 17:30–21:30 · D 8:15–15:00
- Accesibilidad: acceso para sillas de ruedas; sin información sobre aparcamiento adaptado
- Feature id: `0xd72f711f70fc53b:0xf0b886844e63fbf3`
- Place ID: `ChIJO8UP9xH3cg0R8_tjToSGuPA`

La ficha **no publica carta cerrada ni precios**. La sección «El mostrador» recoge solo lo que el propio negocio describe en Google (pan integral 100%, pan blanco y pan de soja los lunes y jueves, elaborados a diario a mano; dulces y tartas por encargo al gusto; alimentación, bebidas y charcutería al corte) y lo que destacan las reseñas citadas. No se muestran importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría ser diferente; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos se descargan con:

```sh
node scripts/fetch-maps-photos.mjs tania-panaderia-pasteleria
```

y viven en `src/assets/fotos/`. Se usan 9 de las 10 de la galería (se descartó una toma de la persiana cerrada): la portada es la fachada, y el `og.jpg` es un recorte 1200×630 de esa misma foto, alineado arriba para que no se corte el rótulo.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, encargos de tartas y métodos de pago con el establecimiento.
- Dominio definitivo: ahora `https://tania-panaderia-pasteleria.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
