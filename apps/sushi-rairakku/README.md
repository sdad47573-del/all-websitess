# Sushi Rairakku — rodízio de sushi en Algueirão-Mem Martins (Sintra)

Web estática en Astro para **Restaurante Sushi Rairakku**, en la Praceta Serra de Baixo, 1 R/C, 2725-144 Algueirão-Mem Martins (Sintra). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante Sushi Rairakku
- Dirección: Praceta Serra de Baixo, 1 R/C · 2725-144 Algueirão-Mem Martins (Sintra)
- Categorías: restaurante japonés y restaurante chino
- Teléfono: 21 155 4222 (+351)
- Valoración: 4,4/5 con 1.427 reseñas
- Horario: todos los días, 12:00–15:00 y 19:00–23:00
- Accesibilidad: entrada, aparcamiento, aseo y asientos adaptados (completa)
- Descripción del propio local: «All YOU CAN EAT À LA CARTE»

La ficha **no publica carta con precios ni web propia**: solo el teléfono. El local anuncia novedades en Facebook e Instagram.

## La carta y el precio

Sin carta publicada. Los apartados salen de la descripción del local, de sus redes (más de cien variedades entre sushi, sashimi y tempura) y de las fotos del perfil: sashimi, nigiri, uramaki, hot rolls, tempura, gambas a la chapa, platos chinos, sopa miso, gyozas, wakame y postres.

En sus redes se ha anunciado el rodízio en torno a 13 € al mediodía y 16 € por la noche entre semana, con tarifa mayor los fines de semana. Son tarifas orientativas: la web pide confirmarlas por teléfono.

## Fotos

Nueve fotografías del perfil público en Google Maps: la bandeja grande de sushi (portada), la tabla redonda con temaki, la fachada con farolillos, la pizarra del local, la mesa con el salteado chino, el soporte de temaki con gambas y tempura, el comedor de día y de noche, y las gambas a la plancha. Google devolvía la bandeja duplicada: se descartó la copia y se quitó su entrada del manifiesto.

## Pendiente antes de publicar

- NIPC/NIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://sushi-rairakku.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local el precio del rodízio (mediodía, noche y fin de semana) y la carta completa.
- Confirmar si hay servicio de take away o reparto, que la ficha no menciona.

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
