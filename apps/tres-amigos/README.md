# Tres Amigos — mexicanos y cócteles en Costa da Caparica (Almada)

Web estática en Astro para **Tres Amigos Mexican Restaurant & Cocktailbar**, en la Av. Gen. Humberto Delgado, 13A, 2825-286 Costa de Caparica (Almada). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad, cookies y aviso sobre alcohol.

## Datos de la ficha de Google Maps

- Nombre: Tres Amigos Mexican Restaurant & Cocktailbar
- Dirección: Av. Gen. Humberto Delgado, 13A · 2825-286 Costa de Caparica (Almada)
- Categoría: restaurante mexicano
- Teléfono: 21 395 2171 (+351)
- Valoración: 4,5/5 con 387 reseñas
- Horario: lunes y domingo cerrado; martes a jueves 14:00–23:30; viernes 14:00–24:00; sábado 13:00–24:00
- Accesibilidad: entrada, aparcamiento y asientos adaptados
- Descripción del propio local: «After running successfully in Lisbon, now we are open at Costa da Caparica with fresh and delicious Mexican cuisine and exotic cocktails»

La ficha **no publica carta con precios ni web propia**: solo el teléfono.

## Ojo: hay dos Tres Amigos

La marca tiene además un restaurante en Lisboa (R. da Rosa, Chiado). Esta web es **solo** la de la ficha de Costa da Caparica: la dirección, el teléfono y el horario son los de aquí, y la web lo aclara en la sección de la casa y en una pregunta frecuente.

## La carta

Sin carta publicada. Los apartados salen de las reseñas públicas y de la carta de reparto: nachos, guacamole, quesadillas, tacos, burritos (el de pollo es el más citado), fajitas, enchiladas, chili; y de la barra, margaritas, caipirinhas, cócteles de la casa, cerveza y refrescos.

## Fotos

Diez fotografías del perfil público en Google Maps: la terraza con fajitas y tortillas (portada), las margaritas al atardecer, el burrito gratinado, la mesa con fajitas y quesadillas, el mural azteca, la barra de botellas, la enchilada con frijoles, el detalle de las margaritas, el postre frito y la entrada abierta a la terraza.

## Pendiente antes de publicar

- NIPC/NIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://tres-amigos.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local la carta y los precios, y si el horario de verano es distinto.
- Confirmar la relación exacta con el Tres Amigos de Lisboa (misma empresa o franquicia) antes de enlazar las dos webs.

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
