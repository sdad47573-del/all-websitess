# Taberna Portu — cocina portuguesa y española en Málaga

Web estática en Astro para **Taberna Portu**, taberna de cocina portuguesa y española en la calle Maestro Pablo Luna 4 (Local 10), 29010 Málaga (Bailén-Miraflores). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Taberna Portu
- Dirección: C. Maestro Pablo Luna, 4 (Local 10) · 29010 Málaga (Bailén-Miraflores)
- Categoría: restaurante
- Teléfono: 641 38 77 12
- Valoración: 5,0/5 con 209 reseñas
- Horario: de lunes a jueves 19:00–23:00; viernes y sábado 13:00–24:00; domingo 13:00–23:00
- Accesibilidad: entrada y asientos adaptados para sillas de ruedas (la ficha no confirma aseo adaptado)
- Descripción del propio local: «Cocina portuguesa y española en Málaga, con platos caseros y tapas exquisitas. Ambiente acogedor, producto fresco y sabor auténtico.»

La ficha **no publica carta completa ni precios**, y tampoco web propia (solo el teléfono). El menú de la web se apoya en esa descripción, en la pizarra de la puerta y en las fotos del perfil (bacalhau à Brás, bacalhau com natas, pica-pau, pastéis de bacalhau, croquetas, montaditos, tortillas al momento y el postre de la casa), sin inventar platos ni precios.

## Fotos

Diez fotografías del perfil del establecimiento en Google Maps, todas con su alt descriptivo en la galería: bacalhau à Brás, croquetas con canónigos, carne con azeitonas, tres platos de barro, salmorejo, carne a la plancha, postre de la casa en tarro, la barra de azulejo y la fachada (de día y de noche).

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://taberna-portu.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local carta, precios y si la pizarra cambia según el día.

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
