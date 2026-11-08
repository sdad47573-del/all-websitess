# Imágenes — Lorena Morán Estilista

## Por qué no se descargan las fotos de Google Maps

El enlace aportado es la ficha pública de Google Maps. Sus fotos tienen
derechos de autor (las subieron el negocio o clientes) y las Condiciones de
Google Maps prohíben descargarlas y reutilizarlas en otra web.

Por eso esta plantilla **no incluye scraping de Google** y trae 4 imágenes
propias de marcador en `src/assets/fotos/*.svg`:

- `lorena-moran-estilista-salon-teatinos-malaga.svg`
- `lorena-moran-balayage-babylights-malaga.svg`
- `lorena-moran-corte-peinado-malaga.svg`
- `lorena-moran-tratamiento-keratina-malaga.svg`
- `lorena-moran-estilista-logo.svg`

La web compila y se ve bien con ellas.

## Cómo poner tus fotos reales (2 minutos)

1. Pide al negocio sus fotos originales (móvil o cámara, formato JPG).
2. Guárdalas en `src/assets/fotos/` con estos nombres (sobrescribe los SVG
   cambiando la extensión en `src/data/site.ts` de `.svg` a `.jpg`):
   - `lorena-moran-estilista-salon-teatinos-malaga.jpg` (1200×900)
   - `lorena-moran-balayage-babylights-malaga.jpg` (900×1100)
   - `lorena-moran-corte-peinado-malaga.jpg` (900×1100)
   - `lorena-moran-tratamiento-keratina-malaga.jpg` (1200×900)
3. `bun run build` — Astro las optimiza (webp + srcset) solo.

## Alternativa legal si quieres las de la ficha

Descarga tus propias fotos desde tu cuenta de Google Business
(ficha > Fotos > la foto es tuya) o usa Google Takeout. No reutilices fotos
de clientes sin su permiso.
