# El Rincón de Joaquín

Landing estática en Astro para El Rincón de Joaquín, en Teatinos (Málaga).

## Desarrollo

```bash
bun install
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos de búsqueda local, Open Graph/Twitter, canonical provisional, sitemap y `robots.txt`.
- Datos estructurados JSON-LD `Restaurant` con la dirección, teléfono y coordenadas del local.
- Dirección y teléfono contrastados entre Google Maps y directorios públicos. Las menciones a categorías/platos se limitan a lo observado en reseñas y prensa; no se publica una carta ni precios inventados.
- Google Maps redirige al consentimiento en el entorno de desarrollo y no permitió recuperar las fotos. La web enlaza a la ficha para ver las imágenes originales. La ilustración de cabecera y la galería CSS están etiquetadas como decorativas, no como fotos reales.

## Antes de publicar

1. Reemplazar `https://el-rincon-de-joaquin.vercel.app` por el dominio definitivo en `astro.config.mjs`, canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar directamente con el local horario, carta, precios y platos disponibles.
3. Si se pueden exportar las fotos de Google Maps, añadirlas como medios locales optimizados, con autorización y textos `alt` precisos, y sustituir las ilustraciones.
