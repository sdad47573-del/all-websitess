# El Gallu

Landing local para El Gallu, restaurante de cocina asturiana y sidrería en Calle Jaén, 11, Rincón de la Victoria (Málaga).

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run check` — validación Astro.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

## Datos públicos usados

- Nombre: El Gallu (cocina asturiana y del norte).
- Dirección: Calle Jaén, 11, 29730 Rincón de la Victoria, Málaga. Algunas fuentes lo sitúan en la esquina con Calle Frigiliana.
- Teléfono: +34 618 79 29 62.
- Cocina: asturiana, con cachopo, gildas, croquetas, quesos y embutidos del norte, y sidra natural.

Los platos listados como "lo más pedido" son los que más se repiten en reseñas públicas de la ficha. No se incluyen horarios, precios ni valoraciones.

Ojo: existe otra "Sidrería El Gallu" en Valladolid (Paseo de Zorrilla) y su Instagram no corresponde a este local, por eso no se enlazan perfiles sociales.

## Sobre las fotos

La URL de Google Maps facilitada es **solo la ficha del lugar**, sin foto en la propia URL
(le falta el segmento `!6shttps://lh3.googleusercontent.com/...`). Las imágenes sí se han
descargado de la **galería de esa ficha** (la que abre el botón «Ver fotos»).

- **10 fotos** en `src/assets/fotos/`, todas recomprimidas a un máximo de 1400 px y ~80 de
  calidad: un cachopo empanado, un cachopo al Cabrales, un cachopo con queso, croquetas
  caseras con huevo y jamón, croquetas gratinadas en cazuela, carpaccio de vacuno, pinchos
  con encurtidos, pincho de queso de cabra, arroz con leche y flan casero.
- El hero usa `dishPhoto` (el cachopo empanado) y el resto va en `gallery`, en `src/lib/business.ts`,
  donde cada entrada lleva su `alt` y su pie de foto.
- Todas se sirven con `<Image>` de `astro:assets`: hero con `loading="eager"` +
  `fetchpriority="high"` y `widths=[420, 700, 1000]`; galería con `loading="lazy"` y
  `widths=[360, 620, 900]`. Todas en `format="webp"`. Nada de hotlinkear
  `lh3.googleusercontent.com`.
- Requiere `sharp` en `dependencies` (ya instalado).
- `og:image` sigue apuntando a `/og.png`; si algún día quieres usar una foto real como
  vista previa, cambia también esa etiqueta.

Si consigues más fotos, déjalas en `src/assets/fotos` y añade una entrada más en `gallery`.
Con la galería montada, el hero `dishPhoto` no debería repetir una foto ya listada.

La URL canónica (`https://el-gallu-malaga.vercel.app`) es provisional: cámbiala si el sitio se
despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.

<!-- prueba del Ignored Build Step -->
