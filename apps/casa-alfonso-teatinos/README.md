# Restaurante Casa Alfonso · Teatinos

Landing estática en Astro para el restaurante de Calle Sófocles, 8, Málaga.

## Desarrollo

```bash
bun install
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales en español, canonical provisional, Open Graph/Twitter Cards, `robots.txt` y sitemap Astro.
- Datos estructurados JSON-LD de tipo `Restaurant` con dirección y coordenadas del negocio.
- Contenido centrado en cocina casera y Teatinos. Las especialidades se describen como referencias mencionadas en reseñas, nunca como carta o disponibilidad confirmada.
- Teléfono y dirección corroborados en más de un directorio público y alineados con la ficha de Google Maps proporcionada.
- La galería de Google Maps está enlazada, pero no se pudieron extraer las fotos durante el desarrollo debido al bloqueo de consentimiento de Google. La portada y la tarjeta de fotos usan ilustraciones CSS claramente marcadas, no se presentan como fotos del local.
- Se evitó usar el perfil de Instagram llamado Restaurante Casa Alfonso porque sus publicaciones disponibles parecen pertenecer a otro establecimiento.

## Antes de publicar

1. Reemplazar `https://casa-alfonso-teatinos.vercel.app` en `astro.config.mjs`, canonical, Open Graph, JSON-LD y `public/robots.txt` por el dominio definitivo.
2. Confirmar horario, carta y fotos oficiales con el establecimiento.
3. Actualizar las ilustraciones por fotos autorizadas de Google Maps cuando se obtengan, optimizadas con alt descriptivo.
