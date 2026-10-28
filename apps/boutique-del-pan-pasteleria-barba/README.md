# Boutique Del Pan Pastelería Barba — Bailén-Miraflores, Málaga

Web estática en Astro para la **Boutique Del Pan Pastelería Barba**, en la Av. Miraflores de los Ángeles, 9 (Bailén-Miraflores, 29011 Málaga). Los textos están en español.

## Contenido

- Portada: portada con vista de la fachada, chips, «La casa», «Tres detalles», dos reseñas de Google, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la imagen de la fachada (vista de Google Street View).
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Boutique Del Pan Pasteleria Barba
- Dirección: Av. Miraflores de los Ángeles, 9 · Bailén-Miraflores · 29011 Málaga
- Categoría: panadería
- Valoración: 4,3/5 con 12 reseñas
- Horario: todos los días, 8:00–14:30 (sin día de cierre ni tramo de tarde publicados)
- Accesibilidad: acceso para sillas de ruedas; sin información sobre aparcamiento adaptado
- Feature id: `0xd72f708eb708edf:0x1d59adf886114813`
- Place ID: `ChIJ345w6wj3cg0RE0gRhvitWR0`

La ficha **no publica teléfono, web, carta, precios ni fotos del perfil**. Por eso la web no incluye teléfono, menú ni importes: solo dirección, horario, accesibilidad, valoración y las reseñas citadas textualmente. El rótulo del local («Boutique del Pan · Pastelería Barba») es lo que sostiene la referencia a pan y pastelería.

## Imagen

La ficha no tiene fotos del perfil, así que la portada usa una captura de Google Street View de la esquina, tomada en julio de 2026:

```sh
# panoid de la vista utilizada
jK1k5V0o7LUurqaC6qkI6g
```

El archivo vive en `src/assets/fotos/boutique-del-pan-pasteleria-barba-apaisada-01.jpg` y el `og.jpg` es un recorte 1200×630 del mismo encuadre. El pie de foto de la portada lo indica y enlaza a Street View.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario y accesibilidad con el establecimiento antes de divulgar la web.
- Dominio definitivo: ahora `https://boutique-del-pan-pasteleria-barba.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
