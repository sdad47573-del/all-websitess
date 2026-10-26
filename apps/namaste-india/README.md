# Namaste Índia — cocina india junto a Belém (Lisboa)

Web estática en Astro para **Namaste Índia**, en la R. da Junqueira, 266A, 1300-598 Lisboa, en el tramo que baja hacia Belém. En plataformas de reparto aparece como **Namaste India A**. Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Namaste Índia
- Dirección: R. da Junqueira, 266A · 1300-598 Lisboa
- Categoría: restaurante indio
- Teléfono: 21 014 0685 (+351)
- Valoración: 4,2/5 con 488 reseñas
- Horario: todos los días, 11:00–23:00
- Accesibilidad: acceso para sillas de ruedas

La ficha **no publica carta con precios ni web propia**: solo el teléfono. El restaurante sí está en las plataformas de reparto de Lisboa, con una nota de 4,4.

## La carta

Sin carta publicada con precios en Google. Los apartados salen de la carta de reparto del restaurante y de las fotos del perfil: samosa, pakora y papadum; tandoori y chicken tikka con garlic naan; curris (tikka masala, korma, massaman, curri de verduras en cuenco de latón); biryani en cuenco de barro con almendra y pasas; y pizza de la parte italiana que anuncia el propio local.

## Fotos

Diez fotografías del perfil público en Google Maps: la mesa de terraza con naan, biryani y curri, la calle desde la terraza, el comedor amarillo con la barra, dos vistas del biryani, el tikka masala, un curri rojo de cerca, la nevera del comedor, el rincón con azulejo y el curri de patata y guisantes que abre la portada.

## Pendiente antes de publicar

- NIPC/NIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://namaste-india.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local la carta con precios y si sigue habiendo cocina italiana (pizza) y cuáles son los canales de reparto.
- Aclarar si el nombre comercial correcto es «Namaste Índia» o «Namaste India A» para el título y el schema.

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
