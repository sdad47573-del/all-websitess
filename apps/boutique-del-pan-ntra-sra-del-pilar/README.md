# Ntra. Sra. Del Pilar Pasteleria - Boutique Del Pan — Carretera de Cádiz, Málaga

Web estática en Astro para la **Ntra. Sra. Del Pilar Pasteleria - Boutique Del Pan**, en la Carretera de Cádiz, 29004 Málaga. Los textos están en español.

## Contenido

- Portada tipográfica con etiqueta de datos, «La casa», tres claves, «El local» con vistas de Google Street View, valoración, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: tres vistas de Google Street View de la esquina.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.
- `public/og.svg` (fuente) y `public/og.jpg` (tarjeta 1200×630).

## Datos de la ficha de Google Maps

- Nombre: Ntra. Sra. Del Pilar Pasteleria - Boutique Del Pan
- Dirección: Carretera de Cádiz · 29004 Málaga. **La ficha no publica número de portal.**
- Categoría: panadería
- Valoración: 5,0/5 con 2 reseñas
- Horario: lunes a viernes, 8:00–14:30 y 17:00–20:00; sábado, 8:00–14:30; domingo, 10:30–14:00
- Accesibilidad: acceso para sillas de ruedas; sin información sobre aparcamiento adaptado
- Feature id: `0xd72f9d93a1ffea3:0x4d6e9fbae5783d6d`
- Place ID: `ChIJo_4fOtn5cg0RbT145bqfbk0`

La ficha **no publica teléfono, web, descripción, carta, precios ni fotos del perfil**. Por eso la web no incluye teléfono, catálogo ni importes: solo dirección, horario, accesibilidad, valoración y las vistas de la calle. La valoración se reproduce sin citar textos de reseñas.

## Imágenes

Google no devuelve fotos del perfil para esta ficha. La única imagen pública asociada es el panorama de Google Street View `lYMaVc1PIUGL5eSTckXYOw`, capturado en **agosto de 2024**. Se descargaron tres vistas del mismo panorama (yaw 266,13 / 246,13 / 286,13):

```sh
# endpoint usado
https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=lYMaVc1PIUGL5eSTckXYOw&yaw=266.13&pitch=1.5&thumbfov=95&w=1600&h=1000
```

En las vistas, el rótulo de la esquina dice **«FUENTEMAR · Boutique del Pan»**, no el nombre actual de la ficha. Se muestran siempre identificadas como Google Street View, con la fecha, y se advierte de que el rótulo puede ser anterior al nombre de Google. No se usa ninguna imagen de otro perfil de Google: es el panorama que la ficha asocia a este negocio.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con el establecimiento la relación entre el nombre de la ficha y el rótulo «Fuentemar», el horario y la accesibilidad.
- Dominio definitivo: ahora `https://boutique-del-pan-ntra-sra-del-pilar.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
