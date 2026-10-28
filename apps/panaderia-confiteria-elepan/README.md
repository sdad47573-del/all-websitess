# Panadería confitería Elepan — Palma-Palmilla, Málaga

Web estática en Astro para **Panadería - confitería Elepan**, en la calle la Defensa, 4 (Palma-Palmilla, 29011 Málaga). Los textos están en español.

## Contenido

- Portada: hero con el rótulo y un collage de la vitrina y un tronco de Navidad con etiquetas giradas, franja de datos, «La casa» con la foto del escaparate, «El mostrador», galería con 7 fotos de Google Maps, reseñas, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las 10 fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería - confitería Elepan
- Dirección: C. la Defensa, 4 · Palma-Palmilla · 29011 Málaga
- Categoría: panadería
- Valoración: 4,2/5 con 65 reseñas
- Teléfono: 627 84 42 51 (+34 627 84 42 51)
- Horario: lunes a jueves 8:00–15:00 y 17:00–20:30; viernes, sábado y domingo 8:00–15:00
- Accesibilidad: la ficha solo indica que **no** hay aparcamiento adaptado; no dice nada de la entrada
- Feature id: `0xd72f7a8f18282ad:0xf91e36da507b8e20`
- Place ID: `ChIJrYKC8aj3cg0RII57UNo2Hvk`

La ficha **no publica web propia, descripción, carta, precios ni reparto**. Los productos que cita la web son los que aparecen en las fotografías del perfil (pan y ofertas del escaparate, vitrina de confitería, roscos, troncos de Navidad, tartas de encargo y estanterías de turrones y despensa) y los que mencionan las reseñas. El cartel «Se hacen tartas por encargo» está en una foto del escaparate. No se muestran importes aunque algunas fotos lleven etiquetas de precio.

## Fotos

Las 10 fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-confiteria-elepan
```

y viven en `src/assets/fotos/`. El `og.jpg` se genera recortando la fachada a 1200×630.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con la panadería horario, tartas por encargo y accesibilidad de la entrada antes de divulgar la web.
- Dominio definitivo: ahora `https://panaderia-confiteria-elepan.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
