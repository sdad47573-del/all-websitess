# Restaurante Isla Cristina · Web Astro

Landing informativa para Restaurante Isla Cristina en Gran Vía de la Manga, 1, La Manga, Murcia. La página prioriza la fachada real, fotos de arroces y platos compartidos, ubicación y contacto.

## Desarrollo

```sh
bun run --filter restaurante-isla-cristina dev
bun run --filter restaurante-isla-cristina build
bun run --filter restaurante-isla-cristina typecheck
```

## Fotografías

Las imágenes de `src/assets/fotos` se descargaron de la galería pública de Google Maps con `scripts/fetch-maps-photos.mjs`. Se muestran con `astro:assets` en formatos y tamaños optimizados. Las fotografías siguen perteneciendo a sus respectivos autores; confirmar permisos de publicación con el restaurante antes de publicar.

## Datos

Dirección, coordenadas y feature ID proceden del enlace de Google Maps aportado. El teléfono y la dirección están publicados en directorios locales; horarios, precios y carta pueden cambiar, por eso la web invita a confirmarlos directamente. Dominio provisional definido en `astro.config.mjs`.
