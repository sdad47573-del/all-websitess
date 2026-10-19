# Restaurante La Despensa

Landing page estática en Astro para Restaurante La Despensa,
cocina española casera en Calle Escritor Ramón Solís, 9 · 11008 Cádiz.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-la-despensa
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, carta) y `FAQPage`.
- Datos contrastados con la web oficial (restauranteladespensa.es), su Instagram y
  Turismo del Ayuntamiento de Cádiz: Calle Escritor Ramón Solís 9, 11008 Cádiz,
  teléfono 956 46 60 44. Platos citados de su carta de invierno publicada por el local
  (croquetas de gambas al ajillo, buñuelitos de patata, albóndigas de la abuela,
  merluza en salsa de azafrán, solomillitos ibéricos en salsa de foie, rabo cordobés).
  Precios no publicados: solo rango orientativo 20–30 €/persona.

## Fotografías

No se han descargado ni publicado fotos de Google Maps por derechos de autor.
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.

Antes de publicar:

1. Sustituye los SVG de `public/fotos/` por fotos propias del local (sala, platos, terraza).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
