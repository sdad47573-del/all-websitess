# Pan Rabaneda — Cruz de Humilladero, Málaga

Web estática en Astro para **Pan Rabaneda**, panadería artesanal en la calle Almogía, 12 (Cruz de Humilladero, 29007 Málaga). Los textos están en español.

## Contenido

- Portada: hero nocturno con la fachada, franja de datos, «La casa» con la descripción del titular, «El mostrador», galería con 8 fotos de Google Maps, reseñas, horario con mapa, teléfono, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Pan Rabaneda
- Dirección: C. Almogía, 12 · Cruz de Humilladero · 29007 Málaga
- Categoría: panadería
- Valoración: 4,0/5 con 83 reseñas
- Teléfono: 665 51 15 10 (+34 665 51 15 10)
- Horario: lunes a jueves 7:00–15:00 y 17:00–20:30; viernes 7:00–20:30; sábado y domingo 7:30–15:00 y 17:00–20:30
- Accesibilidad: acceso para sillas de ruedas (sin datos de aparcamiento adaptado)
- Feature id: `0xd72f76b86445b93:0x9b9a20b80bb8389`
- Place ID: `ChIJk1tEhmv3cg0RiYO7gAuiuQk`

La ficha **no publica carta, precios, web propia ni reparto**. La descripción del titular sí detalla el obrador (pan artesanal, pasteles, tartas, desayunos, productos salados y encargos personalizados) y las reseñas citan el pan, los dulces y las palmeras de Nutella. No se muestran importes.

## Fotos

Las 10 fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs pan-rabeneda
```

y viven en `src/assets/fotos/`. El `og.jpg` se genera recortando el rótulo de la foto de la fachada a 1200×630.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con la panadería horario, productos y encargos antes de divulgar la web.
- Dominio definitivo: ahora `https://pan-rabeneda.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
