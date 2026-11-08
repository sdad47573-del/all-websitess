# O Arco — cocina portuguesa de tasca en Alfama

Web estática en Astro para **O Arco**, restaurante portugués en la R. de São Pedro 30, 1100-543 Lisboa (Alfama). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: O Arco
- Dirección: R. de São Pedro, 30 · 1100-543 Lisboa (Alfama)
- Categorías: restaurante portugués y restaurante
- Teléfono: 21 886 3806 (+351)
- Valoración: 4,3/5 con 356 reseñas
- Horario: lunes a viernes 17:00–24:00; sábado 17:00–1:00; domingo cerrado
- Accesibilidad: asientos adaptados para sillas de ruedas (la ficha no confirma entrada ni aseo adaptados)

La ficha **no publica carta ni precios** y el restaurante **no tiene web propia**: solo el teléfono.

## El cartel de la fachada

En las fotos del perfil se lee el cartel de forja **«RESTAURANTE O TINO ARCO»** sobre la puerta, y la placa del número **30** en el dintel de piedra. Google lista el local como «O Arco». La web recoge los dos nombres (el `alternateName` del JSON-LD incluye «O Tino Arco») y lo explica en las preguntas frecuentes para que nadie crea que se ha equivocado de sitio.

## La carta

Sin precios ni carta publicada. Los nueve platos salen de las fotos del perfil: pão e azeitonas, gambas ao alho, salada da casa, sardinhas assadas con patata cocida, arroz de marisco en la olla, pescado y pulpo a la brasa, bife com ovo (bitoque), feijão com abóbora y frango grelhado.

## Fotos

Diez fotografías: pescado y pulpo a la brasa, arroz de marisco, sardinhas assadas, gambas ao alho, bitoque, guiso de alubias con calabaza, la entrada con el portal de piedra y las sillas rojas, y tres vistas de la Rua de São Pedro (de día y de noche, con la esplanada).

## Pendiente antes de publicar

- NIPC/NIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://o-arco.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local la carta, los precios y el horario de festivos.

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
