# El Chef a Casa El Punto · Astro

Sitio informativo para el restaurante de cocina española de la calle Tajo 2, 41500 Sevilla.

## Desarrollo

```bash
bun run --filter el-chef-a-casa-el-punto dev
bun run --filter el-chef-a-casa-el-punto typecheck
bun run --filter el-chef-a-casa-el-punto build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Tajo, 2, 41500 Sevilla. Coordenadas y ficha proceden del Google Maps proporcionado.
- Horario publicado: martes a jueves de 12:00 a 23:30, viernes hasta las 24:00, sábado hasta las 0:30 y domingo de 12:00 a 16:00. Lunes cerrado.
- Categorías de la ficha: restaurante de cocina española, comida a domicilio y restaurante de comida para llevar. Marca acceso para sillas de ruedas.
- La ficha no publica teléfono, correo, web propia, carta ni precios, así que la web no los inventa: la sección de servicios y las preguntas frecuentes se limitan a lo que declara Google.
- Nota de Google: 3 sobre 5 con 2 reseñas. Se cita en las preguntas frecuentes y no se usa como reclamo.
- Dominio provisional: `https://el-chef-a-casa-el-punto.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

La ficha de Google Maps de este local **no tiene fotos**: el endpoint de fotos devuelve la ficha sin galería y el único material gráfico que sirve Google para estas coordenadas es su mapa estático. Por eso la web no incluye galería ni imágenes de otros locales en su lugar; el peso visual lo lleva la tipografía, la paleta y el cartel de `public/og.svg`.

Si el titular facilita fotos propias, el sitio está preparado para recibirlas: basta con añadirlas a `src/assets/fotos/` y montar `LocalGallery` (o `LocalHero` en la cabecera) como en el resto de webs del monorepo.

El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
