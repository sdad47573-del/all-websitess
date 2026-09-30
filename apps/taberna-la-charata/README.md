# Taberna La Charata

Landing local para Taberna La Charata, taberna de cocina casera y tapas en Calle Córdoba, Local 2, Rincón de la Victoria (Málaga).

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run check` — validación Astro.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

## Datos públicos usados

- Nombre: Taberna La Charata.
- Dirección: Calle Córdoba, Local 2, 29730 Rincón de la Victoria, Málaga.
- Instagram: https://www.instagram.com/tabernalacharata_/
- Cocina: casera y de cuchara ("recetas de la abuela Josefina"), tapas y raciones. También para llevar.

Los platos listados son los que más se repiten en reseñas públicas (atún en manteca, pulpo a la charata, ensaladilla rusa, croquetas, callos y flores de alcachofa). No se incluyen horarios, precios ni valoraciones.

## Dos datos que NO se han incluido

1. **Foto de Google Maps**: la URL facilitada es solo la ficha del lugar y no contenía ninguna foto (le faltaba el segmento `!6shttps://lh3.googleusercontent.com/...`). El sitio no hotlinkea ninguna imagen y resuelve la portada con tipografía y un motivo de azulejo.
2. **Teléfono**: no hay un número público verificado. Los directorios (Cylex, Infobel) lo ocultan tras "mostrar teléfono" y no aparece en su Instagram. Por eso la página no muestra teléfono y la llamada a la acción principal es "Cómo llegar". Si consigues el número, añádelo a `src/lib/business.ts` (`phones`, `phoneHrefs`), al `telephone` del JSON-LD y a una CTA de llamada.

La URL canónica (`https://taberna-la-charata-malaga.vercel.app`) es provisional: cámbiala si el sitio se despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.
