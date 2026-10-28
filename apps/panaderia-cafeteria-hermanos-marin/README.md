# Panadería Cafetería Hermanos Marín — Teatinos, Málaga

Web estática en Astro para la **Panadería Cafetería Hermanos Marín**, en la calle Robinson Crusoe, 13 (Teatinos-Universidad, 29006 Málaga). Los textos están en español.

## Contenido

- Portada con la fachada, sello «Desde 1967», datos de la ficha, historia de la casa, tres claves, mostrador sin precios, galería de siete fotos del perfil, reseñas, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las diez fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.
- `public/og.jpg`: tarjeta Open Graph 1200×630 con la fachada.

## Datos de la ficha de Google Maps

- Nombre: Panadería Cafetería Hermanos Marín
- Dirección: C. Robinson Crusoe, 13 · Teatinos-Universidad · 29006 Málaga
- Categoría: panadería (el nombre y el rótulo añaden pastelería y cafetería)
- Valoración: 4,4/5 con 31 reseñas
- Teléfono: 672 75 19 21 (+34 672 75 19 21)
- Horario: lunes a viernes, 7:00–22:00; sábado y domingo, 8:00–22:00
- Accesibilidad: acceso para sillas de ruedas; sin información sobre aparcamiento adaptado
- Feature id: `0xd72f712336bd211:0x8b5bb74fbe0956b8`
- Place ID: `ChIJEdJrMxL3cg0RuFYJvk-3W4s`

La ficha **no publica web propia, carta, precios ni reparto a domicilio**. La sección «El mostrador» reúne solo los productos que aparecen en las reseñas (pan artesano, bocadillos), en el rótulo (panadería y pastelería) y en las fotos del perfil. No se muestran importes.

La historia de la casa sale de la **descripción del titular en la ficha de Google**: José María Marín empezó a repartir pan con ocho años por los caminos de Comares en un burro, en 1967. La web lo parafrasea sin inventar fechas ni nombres.

## Fotos

Las diez fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-cafeteria-hermanos-marin
```

Se usan siete: la esquina de la fachada, el escaparate, el pasillo de mesas altas, el mostrador del pan, la sala, la vitrina de pastelería y el fondo del local. Se descartaron las que mostraban personas de forma identificable y una captura con marca de agua de TikTok. El `og.jpg` es un recorte 1200×630 de la foto de la fachada con una capa de texto.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con el establecimiento el horario, la historia familiar, el reparto y la accesibilidad antes de divulgar la web.
- Dominio definitivo: ahora `https://panaderia-cafeteria-hermanos-marin.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
