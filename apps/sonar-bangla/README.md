# Sonar Bangla — cocina de Bangladesh y de la India en Lisboa

Web estática en Astro para **Sonar Bangla**, restaurante indio y bangladesí en la R. do Benformoso 262, 1100-084 Lisboa (Mouraria). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Sonar Bangla
- Dirección: R. do Benformoso, 262 · 1100-084 Lisboa
- Categorías: restaurante indio y restaurante bangladesí
- Teléfono: 920 374 334 (+351)
- Valoración: 4,4/5 con 758 reseñas
- Horario: todos los días de 9:00 a 23:30
- Accesibilidad: acceso para sillas de ruedas (la ficha no confirma aseo ni asientos adaptados)
- Nota del propio local en la ficha: «RESTAURANT TRANSFER ON ANOTHER PLACE»

La ficha **no publica web propia** (solo el teléfono). La nota del propio local avisa de un traslado a otro local, así que la web recoge esa advertencia en el apartado «La casa» y en las preguntas frecuentes, y mantiene la dirección y el teléfono que publica Google.

## La carta y sus precios

Los tres bloques con precio —biryani, arroces y pescado con arroz— salen de **la tarjeta de la casa que aparece fotografiada en la galería de la ficha** (`sonar-bangla-vertical-04.jpg`): biryani de pollo 7,95 €, ternera 8,50 €, cordero 8,95 €, mixto 12,95 €, verduras 7,50 €, gambas 9,95 €; arroces de 2,00 € a 4,50 €; dorada 12,50 €, salmón 12,95 €, gambas 8,95 €, ruhi 7,95 € y rupchada 11,95 €.

El cuarto bloque recoge los platos que citan las reseñas de la ficha (samosas de carne, aloo shingara, fiyaji, khala channa, sheikh kabab, bhuna beef, haleem con paratha, naan y chá desi) y **no lleva precio** porque no está publicado.

## Fotos

Diez fotografías del perfil del establecimiento en Google Maps: el curri en karahi con naan, el pollo tikka masala con chana masala, los papadums con tres chutneys, la samosa, el haleem con paratha, la tarjeta de la carta, las dos salas del comedor, la terraza de noche y la fachada.

Ojo con la fachada: en la foto se lee el cartel verde de **Ghoroa Restaurante Indiano**, que es el nombre que aparece en esas imágenes del perfil (Google mantiene la misma ficha). El alt de la galería lo dice tal cual para no atribuir ese cartel a Sonar Bangla.

## Pendiente antes de publicar

- NIPC/NIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://sonar-bangla.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local la dirección actual (por la nota de traslado), los precios de la tarjeta y si el reparto a domicilio está disponible.

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
