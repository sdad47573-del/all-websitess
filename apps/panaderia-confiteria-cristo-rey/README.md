# Panadería Confitería Cristo Rey — Bailén-Miraflores, Málaga

Web estática en Astro para la **Panadería Confitería Cristo Rey**, en la Rotonda de Suárez, 1 (Bailén-Miraflores, 29011 Málaga). Los textos están en español.

## Contenido

- Portada: hero, «La casa», «El mostrador», galería con las 10 fotos de Google Maps, horario con mapa, teléfono, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Confitería Cristo Rey
- Dirección: Rotonda de Suárez, 1 · Bailén-Miraflores · 29011 Málaga
- Categorías: panadería y cafetería
- Valoración: 4,3/5 con 75 reseñas
- Teléfono: 635 38 40 85 (+34 635 38 40 85)
- Horario: todos los días 8:00–22:00, sin día de cierre
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd72f708d821c20b:0x9ccadfd41d160f76`
- Place ID: `ChIJC8Ih2Aj3cg0Rdg8WHdTfypw`

La ficha **no publica carta, precios ni web propia**. La sección «El mostrador» reúne solo los productos que aparecen en las reseñas de la ficha (pan artesano, dulces, pasteles y empanadas de atún, pollo y cebolla) y en las fotografías del perfil. No se muestran importes.

## Fotos

Las 10 fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-confiteria-cristo-rey
```

y viven en `src/assets/fotos/`. El `og.jpg` se genera recortando la foto de la fachada a 1200×630.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con la panadería horario y productos antes de divulgar la web.
- Dominio definitivo: ahora `https://panaderia-confiteria-cristo-rey.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
