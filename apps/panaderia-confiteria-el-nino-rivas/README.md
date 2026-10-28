# Panadería Confitería El Niño Rivas — Carretera de Cádiz, Málaga

Web estática en Astro para **Panadería Confitería El Niño Rivas**, en la avenida de Molière, 27 (Carretera de Cádiz, 29004 Málaga). Los textos están en español.

## Contenido

- Portada: hero con el rótulo azul, toldo a rayas y foto de la fachada, franja de datos, «La casa» con dos fotos del interior, «El mostrador», galería con 6 fotos de Google Maps, reseñas, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las 9 fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panaderia Confiteria El Niño Rivas (en la web, con tildes: Panadería Confitería El Niño Rivas)
- Dirección: Av. de Molière, 27 · Carretera de Cádiz · 29004 Málaga
- Categoría: panadería
- Valoración: 4,7/5 con 51 reseñas
- Teléfono: 692 34 53 96 (+34 692 34 53 96)
- Horario: lunes a viernes 7:00–20:00; sábado y domingo 7:00–16:00
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd72f9c4e3f2a793:0x9fd64902162332d2`
- Place ID: `ChIJk6fy48T5cg0R0jIjFgJJ1p8`

La ficha **no publica web propia, descripción, carta, precios ni reparto**. Los productos que cita la web son los que aparecen en las fotografías del perfil (pan en las estanterías, bollería en la vitrina, roscón de Reyes y el cartel de rosco de vino de la marca P.PAKY) y los que mencionan las reseñas. No se muestran importes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-confiteria-el-nino-rivas
```

Google devuelve nueve imágenes para esta ficha (más una de Street View que el script descarta) y viven en `src/assets/fotos/`. El `og.jpg` se genera recortando la fachada a 1200×630.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con la panadería horario, productos y disponibilidad de roscones antes de divulgar la web.
- Dominio definitivo: ahora `https://panaderia-confiteria-el-nino-rivas.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
