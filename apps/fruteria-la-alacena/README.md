# Frutería La Alacena de Alhaurín

Web Astro de la frutería de **Calle Hermes, 2, Teatinos, Málaga**.

- Astro 5 + Tailwind CSS 4 + daisyUI con configuración compartida del monorepo.
- SEO local: canonical, Open Graph, geotags, sitemap, `GroceryStore`, `ContactPage`, `BreadcrumbList` y FAQPage.
- Las ilustraciones propias del sitio son recursos gráficos y no pretenden ser fotos del local.

## Páginas

- `/`: presentación, productos, posts oficiales embebidos, contacto y FAQ.
- `/contacto`: NAP, horario orientativo y mapa.
- `/aviso-legal`: aviso legal y privacidad con campos pendientes del titular.

## Fuentes y antes de publicar

- Dirección `Calle Hermes, 2`, teléfono `696 73 73 53`, horario e información de categoría: ficha Cylex y Páginas Amarillas.
- Instagram oficial `@fruteria.alacena`: confirma dirección, teléfono/WhatsApp, pedidos en tienda y a domicilio y declara horario lunes-sábado 09:00–14:30, lunes-jueves 17:00–20:30.
- Horarios discrepantes: Cylex/Páginas Amarillas dicen L–J 09:00–14:30 y 17:00–20:30; viernes 09:00–14:30; sábado 09:00–14:30; domingo cerrado. Instagram indica tardes L–J, pero no explicita cierre de viernes/domingo. El sitio presenta horario de Instagram y lo identifica como orientativo; confirmar con el negocio antes de publicarlo.
- La ficha Google Maps no expuso una imagen descargable. Se embeberán un reel de Instagram del perfil oficial y un vídeo de presentación del Centro Asesor Ambiental de Málaga; el visitante puede abrirlos en sus plataformas, donde se sirven las imágenes y queda su atribución. Si el embed de Instagram no carga, el enlace directo sigue disponible.
- El vídeo del Centro Asesor Ambiental describe venta a granel y una iniciativa de productos locales/ecológicos. Otros directorios mencionan frutos secos, huevos, bebidas y ultramarinos; confirmar disponibilidad con la tienda.
- No se usa rating/aggregateRating aunque directorios replican puntuaciones de Google; no es contenido recibido directamente de la ficha.
- Antes de publicar: confirmar el dominio `https://fruteria-la-alacena-alhaurin.vercel.app` y completar razón social, NIF/CIF y email en `LEGAL` dentro de `src/data/site.ts`.

## Scripts

```bash
bun run check
bun run typecheck
bun run build
```
