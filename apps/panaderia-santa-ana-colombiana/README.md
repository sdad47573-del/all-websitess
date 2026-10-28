# Panadería Santa Ana Colombiana — Bailén-Miraflores, Málaga

Web estática en Astro para la **Panadería Santa Ana Colombiana**, en la calle Ibrahin, 1 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, franja de datos, «La casa», «El mostrador», galería con las 10 fotos de Google Maps, horario con mapa, encargos, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Santa Ana Colombiana
- Dirección: C. Ibrahin, 1 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Valoración: 4,5/5 con 27 reseñas
- Teléfonos: 952 39 24 93 (ficha) y 665 72 07 62 (encargos, según el cartel del obrador)
- Horario: L cerrado · M–S 8:00–22:00 · D 8:00–3:00
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd72f708e9ad79b9:0x5f3d1cb01a017d53`
- Place ID: `ChIJuXmt6Qj3cg0RU30BGrAcPV8`

La ficha **no publica carta, precios ni web propia**. La sección «El mostrador» reúne solo lo que aparece en las fotos del perfil y en el cartel del obrador: hogazas de pan, empanadas, tartas de chocolate y fruta, tartas de cumpleaños, pasabocas para eventos y helados de fruta La Quindianita. No se muestran importes.

El cartel visible en una de las fotos se presenta como «Panificadora Santa Ana · Phanor Herrera · Panadería y Repostería Gourmet» y anuncia tortas y pasabocas para eventos especiales. La web cita esa información y el teléfono de encargos que aparece en el propio cartel.

## Fotos

Las 10 fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-santa-ana-colombiana
```

y viven en `src/assets/fotos/`. El `og.jpg` es un recorte 1200×630 de la foto de las hogazas de pan.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, teléfonos y encargos con el establecimiento antes de divulgar la web.
- Dominio definitivo: ahora `https://panaderia-santa-ana-colombiana.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
